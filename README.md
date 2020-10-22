## Running the app

```bash

# init db first
yarn run db:create
yarn run typeorm:migration:run

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
