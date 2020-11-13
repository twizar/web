CIRCLECI_CLI_IMAGE=circleci/circleci-cli:latest
NODEJS_IMAGE=node:14.5.0-alpine3.12
TERRAFORM_DOCKER_IMAGE=hashicorp/terraform:0.13.4
TERRAFORM_LINTER_IMAGE=wata727/tflint:0.20.3

run:
	docker run --rm -v ${PWD}:/app -w /app -p ${PORT}:3000 --env PORT=3000 -it $(NODEJS_IMAGE) yarn start

lint:
	docker run --rm -v ${PWD}:/app -w /app $(NODEJS_IMAGE) yarn lint

bld:
	docker run --rm -v ${PWD}:/app -w /app $(NODEJS_IMAGE) yarn build

test:
	docker run --rm -v ${PWD}:/app -w /app $(NODEJS_IMAGE) yarn test

ci-local:
	circleci local execute --job deploy

tf-init:
	docker run --rm -v ${PWD}/deployment/aws:/deployment -w /deployment $(TERRAFORM_DOCKER_IMAGE) init

tf-plan:
	docker run \
		--rm \
		-v ${PWD}/deployment/aws:/deployment \
		-w /deployment \
		$(TERRAFORM_DOCKER_IMAGE) plan \
			-var-file=terraform.tvars

tf-apply:
	docker run \
		--rm \
		-i \
		-v ${PWD}/deployment/aws:/deployment \
		-w /deployment \
		$(TERRAFORM_DOCKER_IMAGE) apply \
			-var-file=terraform.tvars

tf-destroy:
	docker run \
		--rm \
		-i \
		-v ${PWD}/deployment/aws:/deployment \
		-w /deployment \
		$(TERRAFORM_DOCKER_IMAGE) destroy \
			-var-file=terraform.tvars

tf-lint:
	docker run --rm -v ${PWD}/deployment/aws:/data $(TERRAFORM_LINTER_IMAGE)
