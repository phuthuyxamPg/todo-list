export class ToDoQueryModel {
    title: string | undefined;
    description: string | undefined;
    priority: number | undefined;

    constructor(cascade: string | null) {
        if (cascade == null) throw new Error("body data is null");

        const obj = JSON.parse(cascade);
        this.title = obj.title;
        this.description = obj.description;
        this.priority = obj.priority
    }
}
