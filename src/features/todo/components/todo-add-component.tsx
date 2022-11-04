import {$, component$, useStore} from '@builder.io/qwik';

export default component$(() => {
    const store = useStore({
        description: ''
    });

    const addTodo$ = $(async () => {

        const data = new URLSearchParams();
        data.set('description', store.description);

        await fetch('/add', {
            method: 'POST',
            body: JSON.stringify({description: store.description})
        });
        location.replace('/');
    });

    return (
        <form>
            <label for="description">Description</label>
            <input id="description" type="text" value={store.description}
                   onInput$={(e) => (store.description = (e.target as HTMLInputElement).value)}/>
            <button type="button" onClick$={addTodo$}>Add</button>
        </form>
    )
})
