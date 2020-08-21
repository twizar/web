CIRCLECI_CLI_IMAGE=circleci/circleci-cli:latest
NODEJS_IMAGE=node:14.5.0-alpine3.12

run:
	docker run --rm -v ${PWD}:/app -w /app -p ${PORT}:3000 --env PORT=3000 -it $(NODEJS_IMAGE) yarn start

lint:
	docker run --rm -v ${PWD}:/app -w /app $(NODEJS_IMAGE) yarn lint

ci-local:
	circleci local execute
