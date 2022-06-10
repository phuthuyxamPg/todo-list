import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {TodoListService} from "./services/todoListService"
import {TodoListValidator} from "./validator/todoListValidator"
import {HttpResponseCode} from "./enum/httpResponseCode"
import {BodyResponse, ResponseStruct} from "./common/response"

const todoListService = new TodoListService()
const headers = {
  "content-type": "application/json",
};


export const createTodoList = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const reqBody = JSON.parse(event.body as string);

    // validate
    const todoListValidator = new TodoListValidator(event.body)
    try {
        await todoListValidator.createValidate();
    } catch (err) {
        // @ts-ignore
        const errRes = new BodyResponse(HttpResponseCode.forbidden, HttpResponseCode.forbidden, "validation not passed", err.errors);
        return errRes.toString();
    }

    try {
        const result = await todoListService.create(reqBody);
        if (result instanceof Error) {
            return ResponseStruct.error("has error: " + result)
        }
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};

export const allTodoList = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const result = await todoListService.all();
        if (result instanceof Error) {
            return ResponseStruct.error("has error: " + result)
        }
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};

export const getTodo = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const result = await todoListService.find(event.pathParameters?.id as string);
        if (result instanceof Error) {
            return ResponseStruct.error("has error: " + result)
        }
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};

export const updateTodoList = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters?.id as string
    const reqBody = JSON.parse(event.body as string);

    // validate
    const todoListValidator = new TodoListValidator(event.body)
    try {
        await todoListValidator.updateValidate();
    } catch (err) {
        // @ts-ignore
        const errRes = new BodyResponse(HttpResponseCode.forbidden, HttpResponseCode.forbidden, "validation not passed", err.errors);
        return errRes.toString();
    }

    try {
        let result = await todoListService.update(id, reqBody);
        if (result instanceof Error) {
            return ResponseStruct.error("has error: " + result)
        }
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};

export const deleteTodoItem = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters?.id as string

    try {
        let result = await todoListService.delete(id);
        if (result instanceof Error) {
            return ResponseStruct.error("has error: " + result)
        }
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};