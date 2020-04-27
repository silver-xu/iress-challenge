# Iress Challenge [![Build Status](https://travis-ci.org/silver-xu/iress-challenge.svg?branch=master)](https://travis-ci.org/silver-xu/iress-challenge) [![codecov](https://codecov.io/gh/silver-xu/iress-challenge/branch/master/graph/badge.svg)](https://codecov.io/gh/silver-xu/iress-challenge) [![Known Vulnerabilities](https://snyk.io/test/github/silver-xu/iress-challenge/badge.svg?targetFile=package.json)](https://snyk.io/test/github/silver-xu/iress-challenge?targetFile=package.json)

# Iress Challenge

## Introduction

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are noother obstructions on the table surface. The robot is free to roam around the surface of the table, but must be preventedfrom falling to destruction. Any movement that would result in the robot falling from the table must be prevented,however further valid movement commands must still be allowed.

## Getting Started

This document will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What things you need to install the software and how to install them

```
nvm
yarn
```

## Setting up environments

```
nvm install v14.0.0
nvm use
```

## Installing modules

```
yarn install
```

## Running the JEST tests

```
yarn test
```

Above command also runs integration tests using JSON file under `./tests/integration.test.ts`. It simulates user inputs under CLI and asserts the expected value defined in the file.

## Linting and Formatting the code

The project uses ESLint and Prettier to keep coding style consistent. Run the following commands to lint and format code respectively

```
yarn lint
```

```
yarn format
```

## Husky Pre-commit hooks

The project integrates with Husky to lint before commit. Commit may fail because of the code not passing linting. If it complaints about linting please fix and re-commit.

## CI

The project integrates with Travis CI for CI builds to build and test

## Snyk.io

The project uses snyk.io to keep modules up to date.
