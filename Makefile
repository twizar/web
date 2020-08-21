run:
	docker-compose up -d && docker-compose exec node npm run start

lint:
	docker-compose exec node npm run lint