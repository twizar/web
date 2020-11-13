variable "bucket_name" {
  type = string
  default = "twizar-web-bucket"
}

locals {
  s3_origin_id = "s3_origin"
}

resource "aws_s3_bucket" "twizar_bucket" {
  bucket = var.bucket_name
  acl = "private"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Id": "Policy1605184655864",
  "Statement": [
      {
          "Sid": "Stmt1605184652598",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:*",
          "Resource": "arn:aws:s3:::${var.bucket_name}/*"
      }
  ]
}
POLICY

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

