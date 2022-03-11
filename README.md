## Coding Challenge
```
Your task is to create an application, that can be used to manage vouchers.

The app should be developed in typescript running in a docker container and should offer REST services for the functionality below. A mongodb or another document oriented database should be used as database running in another container. To keep things simple there is no need to have persistent storage, so it's ok if the data is gone after container shutdown.

It should be possible to create, list and update vouchers.
A voucher should consist of two attributes : code, value

creation:
in parameter number of vouchers to be generated, value
return list of generated codes and http 200 in case of success, otherwise http 500
The allowed voucher value should only be positive. The code should be randomly created at generation, consisting of 8 random digits
Example :  { "code" : "17262837", "value": 50 }

list:
in parameter -
return list of vouchers including code and value

update
in parameter code, value
return http 200 in case of success, otherwise http 500
should update the value of the code. The allowed voucher value should only be positive

The project should contain instructions on how to build and how to run.

A good way to share is a github project, other options are also possible.

If you have any questions feel free to ask.
```

## Why NestJs?

##############


## Description

Application to manage vouchers

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## How to use swagger

```bash
 #run the application with
$ npm run start
```

```bash
#call the url
 $  http://localhost:3000/api
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

 