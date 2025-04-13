variable "region" {
  default = "us-east-2"
}

variable "bucket_name" {
  description = "Unique S3 bucket name"
  type        = string
}

variable "github_repo" {
  description = "GitHub repo in the format 'username/repo'"
  type        = string
}

variable "github_branch" {
  default = "main"
}

variable "github_token" {
  description = "GitHub personal access token"
  type        = string
  sensitive   = true
}

variable "codepipeline_role_arn" {}
