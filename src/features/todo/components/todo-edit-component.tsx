import {$, component$, useStore} from '@builder.io/qwik';
import {TodoModel} from '~/features/todo/models/todo.model';

export default component$(({todo}: {todo: TodoModel}) => {
    const store = useStore({
        ...todo
    });

    const editTodo$ = $(async () => {
        await fetch('/edit', {
            method: 'PUT',
            body: JSON.stringify(store)
        });
        location.replace('/');
    });

    return (
        <form>
            <label for="description">Description</label>
            <input id="description" type="text" value={store.description}
                   onInput$={(e) => (store.description = (e.target as HTMLInputElement).value)}/>
            <button type="button" onClick$={editTodo$}>Edit</button>
        </form>
    )
})
