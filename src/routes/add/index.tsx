import {component$} from '@builder.io/qwik';
import {DocumentHead, RequestHandler} from '@builder.io/qwik-city';
import TodoAddComponent from '~/features/todo/components/todo-add-component';
import {TodoModel} from '~/features/todo/models/todo.model';
import {todoService} from '~/features/todo/services/todo.service';

export const onPost: RequestHandler = async ({request}) => {
    const formData = await request.formData();
    const entries = formData.entries();
    let result = entries.next();
    let todo: Partial<TodoModel>;
    while (!result.done) {
        if (result.value) {
            todo = JSON.parse(result.value[0]);
            return todoService.add(todo);
        }
        result = entries.next();
    }
}

export default component$(() => {
    return (
        <TodoAddComponent/>
    )

});

export const head: DocumentHead = {
    title: 'Add Todo',
};
