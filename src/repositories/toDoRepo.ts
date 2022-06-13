import * as AWS from 'aws-sdk'
import {Config} from "../config";

const config = new Config();
const docClient = new AWS.DynamoDB.DocumentClient({region: config.AWS_REGION})

export type PutItem = AWS.DynamoDB.DocumentClient.PutItemInput;
export type PutItemOutput = AWS.DynamoDB.DocumentClient.PutItemOutput;

export type ScanItem = AWS.DynamoDB.DocumentClient.ScanInput;
export type ScanOutput = AWS.DynamoDB.DocumentClient.ScanOutput;

export type GetItem = AWS.DynamoDB.DocumentClient.GetItemInput;
export type GetItemOutput = AWS.DynamoDB.DocumentClient.GetItemOutput;

export type UpdateItem = AWS.DynamoDB.DocumentClient.UpdateItemInput;
export type UpdateItemOutPut = AWS.DynamoDB.DocumentClient.UpdateItemOutput;

export type QueryItem = AWS.DynamoDB.DocumentClient.QueryInput;
export type QueryItemOutput = AWS.DynamoDB.DocumentClient.QueryOutput;

export type DeleteItem = AWS.DynamoDB.DocumentClient.DeleteItemInput;
export type DeleteItemOutput = AWS.DynamoDB.DocumentClient.DeleteItemOutput;

export class ToDoRepo {
    create = async(params: PutItem): Promise<PutItemOutput> => {
        return await docClient.put(params).promise();
    }

    getAll = async (params: ScanItem) : Promise<ScanOutput> => {
        return await docClient.scan(params).promise();
    }

    get = async (params: GetItem) : Promise<GetItemOutput> => {
        return await docClient.get(params).promise();
    }

    update = async (params: UpdateItem): Promise<UpdateItemOutPut> => {
        return await docClient.update(params).promise();
    }

    query = async (params: QueryItem): Promise<QueryItemOutput> => {
        return await docClient.query(params).promise();
    }

    delete = async (params: DeleteItem): Promise<DeleteItemOutput> => {
        return await docClient.delete(params).promise();
    }
}import * as AWS from 'aws-sdk'
import {Config} from "../config";

const config = new Config();
const docClient = new AWS.DynamoDB.DocumentClient({region: config.AWS_REGION})

export type PutItem = AWS.DynamoDB.DocumentClient.PutItemInput;
export type PutItemOutput = AWS.DynamoDB.DocumentClient.PutItemOutput;

export type ScanItem = AWS.DynamoDB.DocumentClient.ScanInput;
export type ScanOutput = AWS.DynamoDB.DocumentClient.ScanOutput;

export type GetItem = AWS.DynamoDB.DocumentClient.GetItemInput;
export type GetItemOutput = AWS.DynamoDB.DocumentClient.GetItemOutput;

export type UpdateItem = AWS.DynamoDB.DocumentClient.UpdateItemInput;
export type UpdateItemOutPut = AWS.DynamoDB.DocumentClient.UpdateItemOutput;

export type QueryItem = AWS.DynamoDB.DocumentClient.QueryInput;
export type QueryItemOutput = AWS.DynamoDB.DocumentClient.QueryOutput;

export type DeleteItem = AWS.DynamoDB.DocumentClient.DeleteItemInput;
export type DeleteItemOutput = AWS.DynamoDB.DocumentClient.DeleteItemOutput;

export class ToDoRepo {
    create = async(params: PutItem): Promise<PutItemOutput> => {
        return await docClient.put(params).promise();
    }

    getAll = async (params: ScanItem) : Promise<ScanOutput> => {
        return await docClient.scan(params).promise();
    }

    get = async (params: GetItem) : Promise<GetItemOutput> => {
        return await docClient.get(params).promise();
    }

    update = async (params: UpdateItem): Promise<UpdateItemOutPut> => {
        return await docClient.update(params).promise();
    }

    query = async (params: QueryItem): Promise<QueryItemOutput> => {
        return await docClient.query(params).promise();
    }

    delete = async (params: DeleteItem): Promise<DeleteItemOutput> => {
        return await docClient.delete(params).promise();
    }
}