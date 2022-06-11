# todo-service
# Serverless Nodejs Rest API with TypeScript And DynamoDb

This is simple REST API example for AWS Lambda By Serverless framwork with TypeScript and DynamoDb.

## Use Cases

* Serverless Framework - Lamda

* CRUD

* Store data in `DynamoDB`

* CI/CD and support multi-stage deployments on `serverless ci/cd`

## Project structure

```
.
├── common                                  
│   └── response.ts                           #response skeleton
├── config.ts                                 
├── enum                                      #includes all const
│   ├── httpResponseCode.ts
│   └── priorityCode.ts
├── handlers.ts                               #handler request from client
├── repositories
│   └── todoListRepo.ts                       #interact with database
├── services
│   └── todoListService.ts                    #business logic
└── validator                                 #validator data
    └── todoListValidator.ts
```
## Deploy

* Run ```npm install``` to install all the necessary dependencies.
* Run ```npm run local``` use serverless offline for locally environment.
* Run ```npm run deploy``` Deploy on AWS.

## List enpoint

```
  POST - https://vd2yefv8mc.execute-api.ap-southeast-1.amazonaws.com/todo-list
  GET - https://vd2yefv8mc.execute-api.ap-southeast-1.amazonaws.com/todo-list
  GET - https://vd2yefv8mc.execute-api.ap-southeast-1.amazonaws.com/todo-list/{id}
  PUT - https://vd2yefv8mc.execute-api.ap-southeast-1.amazonaws.com/todo-list/{id}
  DELETE - https://vd2yefv8mc.execute-api.ap-southeast-1.amazonaws.com/todo-list/{id}
```

## CI/CD & multi-stage deployments

* Created 2 environments: `dev` and `prod`
  ![alt text](https://github.com/phuthuyxamPg/todo-list/blob/main/images/app-cicd.png?raw=true)

* Auto deploy When push to `dev` or `prod` branch:
  ![alt text](https://github.com/phuthuyxamPg/todo-list/blob/main/images/log-build.png?raw=true)

