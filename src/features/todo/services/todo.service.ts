import {randomUUID} from 'crypto';
import {TodoModel} from '~/features/todo/models/todo.model';

class TodoService {

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

    get(todoToFind: Partial<TodoModel>): Promise<TodoModel | undefined> {
        return new Promise<TodoModel | undefined>((resolve) => {
            setTimeout(() => {
                const todoFound = this.todos.find((todo) => todo.uid === todoToFind.uid);
                resolve(todoFound);
            },0);
        });
    }

    edit(todoToEdit: TodoModel): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            setTimeout(() => {
                const index = this.todos.findIndex((todo) => todo.uid === todoToEdit.uid);
                this.todos[index] = todoToEdit;
                resolve(true)
            }, 0);
        });
    }

}

export const todoService = new TodoService();

