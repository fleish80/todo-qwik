import {component$} from '@builder.io/qwik';
import {TodoModel} from '~/features/todo/models/todo.model';

export default component$(({todos}: { todos: TodoModel[] }) => {

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li>
                        {todo.description}
                    </li>
                ))}
            </ul>
            <button onClick$={() => location.replace('/add')}>Add</button>
        </div>

    )

});
