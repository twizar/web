variable "domain_name" {
  type = string
  default = "2ori.com"
}

data "aws_route53_zone" "twizar_zone" {
  name = var.domain_name
}

resource "aws_route53_record" "twizar_record" {
  zone_id = data.aws_route53_zone.twizar_zone.zone_id
  name = ""
  type = "A"
  alias {
    evaluate_target_health = false
    name = aws_cloudfront_distribution.cdn.domain_name
    zone_id = aws_cloudfront_distribution.cdn.hosted_zone_id
  }
}
