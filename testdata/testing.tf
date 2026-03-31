data "aws_iam_policy_document" "maint_policy" {
  statement {
    effect = "Allow"

    actions = [
        "s3:Get*",
    ]

    resources = [
        "arn:aws:s3:::*"
    ]
  }
}

resource "aws_iam_policy" "test_policy" {
  policy = data.aws_iam_policy_document.maint_policy.json
  name = "a name for it"
}

resource "something" "name_for_it" {
  count = var.enabled ? 1 : 0
  dynamic "statement" {
    for_each = length(var.enabled) > 0 ? [true] : []
    content {
      sid = "Bla${var.enabled}h"
    }
  }
}

variable "enabled" {
  type = bool
  default = false
}
