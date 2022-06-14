import * as yup from "yup";
import {ToDoQueryModel} from "../repositories/toDoModel";
const schemaCreateOrUpdate = yup.object().shape({
    title: yup.string().required()
});
export class ToDoValidator {
    request : ToDoQueryModel;
    constructor(req : ToDoQueryModel) {
        this.request = req;
    }

    createValidate = async () => {
        await schemaCreateOrUpdate.validate(this.request, { abortEarly: false });
    }

    updateValidate = async () => {
        await schemaCreateOrUpdate.validate(this.request, { abortEarly: false });
    }
}