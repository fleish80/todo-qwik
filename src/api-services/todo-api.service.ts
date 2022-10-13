import {randomUUID} from 'crypto';
import {TodoModel} from '~/features/todo/models/todo.model';

const todos: TodoModel[] = [
    {uid: randomUUID(), description: 'Create my first Qwik application'},
    {uid: randomUUID(), description: 'Create todo application'},
]

class TodoApiService {

    load() {
        return new Promise<TodoModel[]>((resolve) => {
            setTimeout(() => {
                resolve(todos)
            }, 250)
        })
    }

}

export const todoApiService = new TodoApiService();

