import {RequestHandler} from '@builder.io/qwik-city';
import {TodoModel} from '~/features/todo/models/todo.model';
import {todoService} from '~/features/todo/services/todo.service';

export const onPut: RequestHandler = async ({request}) => {
    const formData = await request.formData();
    const entries = formData.entries();
    let result = entries.next();
    let todo: TodoModel;
    while (!result.done) {
        if (result.value) {
            todo = JSON.parse(result.value[0]);
            return todoService.edit(todo);
        }
        result = entries.next();
    }
}
