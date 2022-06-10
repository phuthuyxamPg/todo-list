import * as yup from "yup";
const schemaCreateOrUpdate = yup.object().shape({
    title: yup.string().required()
});
export class TodoListValidator {
    private request : any;
    constructor(req : any) {
        this.request = req;
    }

    createValidate = async () => {
        await schemaCreateOrUpdate.validate(this.request, { abortEarly: false });
    }

    updateValidate = async () => {
        await schemaCreateOrUpdate.validate(this.request, { abortEarly: false });
    }
}