import {component$, Resource} from '@builder.io/qwik';
import {DocumentHead, RequestHandler, useEndpoint} from '@builder.io/qwik-city';
import {TodoModel} from '~/features/todo/models/todo.model';
import {todoApiService} from '~/api-services/todo-api.service';
import TodoEditComponent from '~/features/todo/components/todo-edit-component';

export const onGet: RequestHandler<TodoModel> = async ({ params }) => {
    return await todoApiService.get({uid: params.id});
};


export default component$(() => {
    const resource = useEndpoint<typeof onGet>();

    return <Resource
        value={resource}
        onPending={() => <>Loading...</>}
        onRejected={(error: Error) => <>Error: {error.message}</>}
        onResolved={(todo: TodoModel) => (
            <TodoEditComponent todo={todo}></TodoEditComponent>
        )}
    />
});

export const head: DocumentHead = {
    title: 'Edit Todo',
};

