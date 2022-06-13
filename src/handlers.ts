import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import {ToDoService} from "./services/toDoService"
import {ToDoValidator} from "./validator/toDoValidator"
import {ResponseStruct} from "./common/response"
import {ToDoModel} from "./repositories/toDoModel";

const todoListService = new ToDoService()

export const createTodoList = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const reqBody = JSON.parse(event.body as string);
    try {
        // validate
        const todo = new ToDoModel(event.body);
        const todoListValidator = new ToDoValidator(todo);
        await todoListValidator.createValidate();
        const result = await todoListService.create(reqBody);
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};

export const allTodoList = async (): Promise<APIGatewayProxyResult> => {
    try {
        const result = await todoListService.all();
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};

export const getTodo = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const result = await todoListService.find(event.pathParameters?.id as string);
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};

export const updateTodoList = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters?.id as string
    const reqBody = JSON.parse(event.body as string);
    try {
        // validate
        const todo = new ToDoModel(event.body);
        const todoListValidator = new ToDoValidator(todo);
        await todoListValidator.updateValidate();
        const result = await todoListService.update(id, reqBody);
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};

export const deleteTodoItem = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters?.id as string
    try {
        const result = await todoListService.delete(id);
        return ResponseStruct.success(result)
    } catch (err) {
        return ResponseStruct.error("has error: " + err)
    }
};