import * as yup from "yup";
import {ToDoModel} from "../repositories/toDoModel";
const schemaCreateOrUpdate = yup.object().shape({
    title: yup.string().required()
});
export class ToDoValidator {
    request : ToDoModel;
    constructor(req : ToDoModel) {
        this.request = req;
    }

    createValidate = async () => {
        await schemaCreateOrUpdate.validate(this.request, { abortEarly: false });
    }

    updateValidate = async () => {
        await schemaCreateOrUpdate.validate(this.request, { abortEarly: false });
    }
}