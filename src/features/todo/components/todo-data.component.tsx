import {component$} from '@builder.io/qwik';
import {TodoModel} from '~/features/todo/models/todo.model';

export default component$(({todos}: { todos: TodoModel[] }) => {

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li>
                        {todo.description} <a href={`/edit/${todo.uid}`}>Edit</a>
                    </li>
                ))}
            </ul>
            <a href={'/add'}>Add</a>
        </div>

    )

});
