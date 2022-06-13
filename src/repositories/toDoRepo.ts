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
        try {
            return await docClient.put(params).promise();
        } catch (err) {
            throw err
        }
    }

    getAll = async (params: ScanItem) : Promise<ScanOutput> => {
        try {
            return await docClient.scan(params).promise();
        } catch (err) {
            throw err
        }
    }

    get = async (params: GetItem) : Promise<GetItemOutput> => {
        try {
            return await docClient.get(params).promise();
        } catch (err) {
            throw err
        }
    }

    update = async (params: UpdateItem): Promise<UpdateItemOutPut> => {
        try {
            return await docClient.update(params).promise();
        } catch (err) {
            throw err
        }
    }

    query = async (params: QueryItem): Promise<QueryItemOutput> => {
        try {
            return await docClient.query(params).promise();
        } catch (err) {
            throw err
        }
    }

    delete = async (params: DeleteItem): Promise<DeleteItemOutput> => {
        try {
            return await docClient.delete(params).promise();
        } catch (err) {
            throw err
        }
    }
}