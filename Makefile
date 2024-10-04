prod:
	docker-compose -f docker-compose.yml build --pull \
	&& docker-compose -f docker-compose.yml down --remove-orphans \
	&& docker-compose -f docker-compose.yml up -d

install:
	docker-compose -f docker-compose.dev.yml run --rm frontend yarn install

add:
	docker-compose -f docker-compose.dev.yml run --rm frontend yarn add ${p}

rm:
	docker-compose -f docker-compose.dev.yml run --rm frontend yarn remove ${p}