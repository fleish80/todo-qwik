import {component$, Resource, useResource$} from '@builder.io/qwik';
import {TodoModel} from '~/features/todo/models/todo.model';
import {todoService} from '~/features/todo/services/todo.service';

export default component$(({todos}: { todos: TodoModel[] }) => {

    return (
        <ul>
            {todos.map((todo) => (
                <li>
                    {todo.description}
                </li>
            ))}
        </ul>
    )

});
