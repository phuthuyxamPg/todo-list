import {v4} from "uuid";
import {PriorityCode} from "../enum/priorityCode"
import * as Repo from "../repositories/toDoRepo"
import {Config} from "../config";
import {ToDoModel} from "../repositories/toDoModel";

const config = new Config();
const db = config.TABLE_NAME;

export class ToDoService {
    todoListRepo;
    constructor() {
        this.todoListRepo = new Repo.ToDoRepo();
    }
    async create(data: ToDoModel) :Promise<object>{
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
        return this.todoListRepo.create(todoList);
    }

    async all() :Promise<object>{
        // biz get todo list
        const todoList : Repo.ScanItem = {
            TableName: String(db),
            Select: "ALL_ATTRIBUTES",
        };
        
        return this.todoListRepo.getAll(todoList);
    }

    async find(id: string) :Promise<object>{
        // biz find todo list
        const todo : Repo.GetItem = {
            TableName: String(db),
            Key: {
                todoId : id
            }
        };

        return this.todoListRepo.get(todo);
    }

    async update(id: string, data: ToDoModel) :Promise<object>{
        // biz update todo item
        const todoRecord : Repo.UpdateItem = {
            TableName: String(db),
            Key: {
                todoId : id
            },
            UpdateExpression: `set #title = :title, #description = :description, #priority = :priority`,
            ExpressionAttributeNames: {
                "#title": "title",
                "#description": "description",
                "#priority": "priority",
            },
            ExpressionAttributeValues: {
                ":title": data.title,
                ":description": data.description,
                ":priority": data.priority,
            },
            ReturnValues: "ALL_NEW"
        };

        return this.todoListRepo.update(todoRecord);
    }

    async delete(id: string) :Promise<object>{
        // biz delete todo list
        const todo : Repo.DeleteItem = {
            TableName: String(db),
            Key: {
                todoId : id
            }
        };

        return this.todoListRepo.delete(todo);
    }
}