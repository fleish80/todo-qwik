import {randomUUID} from 'crypto';
import {TodoModel} from '~/features/todo/models/todo.model';

class TodoApiService {

    todos: TodoModel[] = [
        {uid: randomUUID(), description: 'Create my first Qwik application'},
        {uid: randomUUID(), description: 'Create todo application'},
    ]

    load() {
        return new Promise<TodoModel[]>((resolve) => {
            resolve(this.todos)
        });
    }

    add(todo: Partial<TodoModel>): Promise<boolean> {

        return new Promise<boolean>((resolve) => {
            setTimeout(() => {
                todo.uid = randomUUID();
                this.todos = [...this.todos, todo as TodoModel];
                resolve(true)
            }, 0)
        });


    }

}

export const todoApiService = new TodoApiService();

