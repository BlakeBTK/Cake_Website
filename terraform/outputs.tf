output "bucket_url" {
  value = aws_s3_bucket_website_configuration.react_site.website_endpoint
}

output "codepipeline_url" {
  value = "https://console.aws.amazon.com/codesuite/codepipeline/pipelines/${aws_codepipeline.react_pipeline.name}/view"
}
