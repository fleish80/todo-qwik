import {RequestHandler} from '@builder.io/qwik-city';
import {TodoModel} from '~/features/todo/models/todo.model';
import {todoApiService} from '~/api-services/todo-api.service';

export const onGet: RequestHandler<TodoModel[]> = async ({request, params}) => {
    const todos = await todoApiService.load();
    return todos;
};
