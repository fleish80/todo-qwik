import {RequestHandler} from '@builder.io/qwik-city';
import {TodoModel} from '~/features/todo/models/todo.model';
import {todoService} from '~/features/todo/services/todo.service';

export const onGet: RequestHandler<TodoModel[]> = async () => {
    return await todoService.load();
};
