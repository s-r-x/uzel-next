dev:
	npm run dev
prod:
	npm start
fetch-schema:
	node ./internal/fetch-schema.js
gen-ts-types:
	cd internal && npx graphql-codegen --config ./wp-ts-codegen.yml
build:
	npm run build

