import {component$, Resource} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import TodoDataComponent from '~/features/todo/components/todo-data.component';
import {RequestHandler, useEndpoint} from '@builder.io/qwik-city';
import {TodoModel} from '~/features/todo/models/todo.model';
import {todoApiService} from '~/api-services/todo-api.service';


export const onGet: RequestHandler<TodoModel[]> = async ({request, params}) => {
  return await todoApiService.load();
};

export default component$(() => {

  const resource = useEndpoint<typeof onGet>();

  return <Resource
      value={resource}
      onPending={() => <>Loading...</>}
      onRejected={(error: Error) => <>Error: {error.message}</>}
      onResolved={(todos: TodoModel[]) => (
          <TodoDataComponent todos={todos}/>
      )}
  />
});

export const head: DocumentHead = {
  title: 'Todos List',
};
