import {v4} from "uuid";
import {PriorityCode} from "../enum/priorityCode"
import * as Repo from "../repositories/todoListRepo"
import {Config} from "../config";

const config = new Config();
const db = config.TABLE_NAME;
const todoListRepo = new Repo.TodoListRepo();

export class TodoListService {
    async create(data: any) :Promise<object | Error>{
        // biz create todo list
        data.priority = data.priority ? data.priority : PriorityCode.normal;

        const todoListItem = {
            ...data,
            todoId: v4(),
            createAt: String(new Date())
        }
        const todoList : Repo.PutItem = {
            TableName: String(db),
            Item: todoListItem,
        };
        let createData = await todoListRepo.create(todoList);

        return createData instanceof Error ? createData : todoListItem;
    }

    async all() :Promise<object | Error>{
        // biz get todo list
        const todoList : Repo.ScanItem = {
            TableName: String(db),
            Select: "ALL_ATTRIBUTES",
        };

        const result = await todoListRepo.getAll(todoList);
        return result instanceof Error ? result : (result.Items ? result.Items : []);
    }

    async find(id: string) :Promise<object | Error>{
        // biz find todo list
        const todo : Repo.GetItem = {
            TableName: String(db),
            Key: {
                todoId : id
            }
        };

        return await todoListRepo.get(todo);
    }

    async update(id: string, data: any) :Promise<object | Error>{
        // biz update todo item
        const todoItem = await this.find(id);
        if (Object.keys(todoItem).length === 0) return new Error("Todo Item not found")

        const todoRecord : Repo.UpdateItem = {
            TableName: String(db),
            Key: {
                todoId : id
            },
            UpdateExpression: `set #title = :title, #description = :description, #priority = :priority, #order = :order`,
            ExpressionAttributeNames: {
                "#title": "title",
                "#description": "description",
                "#priority": "priority",
                "#order": "order"
            },
            ExpressionAttributeValues: {
                // @ts-ignore
                ":title": data.title ? data.title : todoItem.title,
                // @ts-ignore
                ":description": data.description ? data.description : todoItem.description,
                // @ts-ignore
                ":priority": data.priority ? data.priority : todoItem.priority,
                // @ts-ignore
                ":order": data.order ? data.order : todoItem.order
            },
            ReturnValues: "ALL_NEW"
        };

        return await todoListRepo.update(todoRecord);
    }

    async delete(id: string) :Promise<object | Error>{
        // biz delete todo list
        const todo : Repo.DeleteItem = {
            TableName: String(db),
            Key: {
                todoId : id
            }
        };

        return await todoListRepo.delete(todo);
    }

}