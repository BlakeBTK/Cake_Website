# S3 bucket for static site
resource "aws_s3_bucket" "react_site" {
  bucket = var.bucket_name

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  force_destroy = true
}

resource "aws_s3_bucket_policy" "site_policy" {
  bucket = aws_s3_bucket.react_site.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = "*",
      Action    = "s3:GetObject",
      Resource  = "${aws_s3_bucket.react_site.arn}/*"
    }]
  })
}

# IAM Role for CodeBuild
resource "aws_iam_role" "codebuild_role" {
  name = "codebuild-react-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Service = "codebuild.amazonaws.com"
      },
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "codebuild_attach" {
  role       = aws_iam_role.codebuild_role.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess" # Adjust as needed
}

# CodeBuild Project
resource "aws_codebuild_project" "react_build" {
  name          = "ReactAppBuild"
  description   = "Build React App and deploy to S3"
  service_role  = aws_iam_role.codebuild_role.arn
  build_timeout = 10

  artifacts {
    type = "NO_ARTIFACTS"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/standard:6.0"
    type                        = "LINUX_CONTAINER"
    privileged_mode             = true
  }

  source {
    type      = "GITHUB"
    location  = "https://github.com/${var.github_repo}"
    buildspec = "buildspec.yml"
    git_clone_depth = 1
  }

  source_version = var.github_branch
}

# CodePipeline Role
resource "aws_iam_role" "codepipeline_role" {
  name = "codepipeline-react-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Service = "codepipeline.amazonaws.com"
      },
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "codepipeline_attach" {
  role       = aws_iam_role.codepipeline_role.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

# CodePipeline
resource "aws_codepipeline" "react_pipeline" {
  name     = "ReactAppPipeline"
  role_arn = aws_iam_role.codepipeline_role.arn

  artifact_store {
    location = aws_s3_bucket.react_site.bucket
    type     = "S3"
  }

  stage {
    name = "Source"

    action {
      name             = "SourceAction"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        Owner  = split("/", var.github_repo)[0]
        Repo   = split("/", var.github_repo)[1]
        Branch = var.github_branch
        OAuthToken = var.github_token
      }
    }
  }

  stage {
    name = "Build"

    action {
      name             = "BuildAction"
      category         = "Build"
      owner            = "AWS"
      provider         = "CodeBuild"
      input_artifacts  = ["source_output"]
      output_artifacts = ["build_output"]
      version          = "1"

      configuration = {
        ProjectName = aws_codebuild_project.react_build.name
      }
    }
  }
}
