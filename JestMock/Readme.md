# Testing with Jest and Supertest

This repository is all about testing the API with Jest and Supertest.

Jest is a framework to run the test, meanwhile supertest, is a library to run the HTTP request to our API.

## Setup

As you can see there's a file called `.env.example`. That is an example file of the `.env` file.

So create `.env` file based on `.env.example`

Once you've done just run this following command: 

```bash
npm install # To install the dependencies
bash scripts/setup-dev.sh # To setup the development environment
bash scripts/setup-test.sh # To setup the test environment
```

Please check the `scripts/setup-dev.sh` and `scripts/setup-test.sh` file to see the detailed command.

## Run the test

To run the test, all you need to do is just run this command:

```bash
npm run test
```

## Ehem

Please look at the `__tests__` folder to figure out how does the test code work.

Look at the `jest.config.js`, it will tell you the Jest Config. 

Look at the `server.js`, your app will be exported instead of fired up on that file. And also, your app will be imported in the `bin/www`. This file is the place where your app will fired up. 

We don't need to fire up the server btw, to run the test.

When you run the `npm run test` Jest will only look forward the`__tests__` folder.

Look at the `config/database.js`, there's a special configuration for the test.

Look at the model `index.js`, to see the adjustment to read the `database.js` inside the config folder.
