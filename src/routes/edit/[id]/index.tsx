import {component$} from '@builder.io/qwik';
import {DocumentHead, useLocation} from '@builder.io/qwik-city';

export default component$(() => {
    const {params} = useLocation();
    return <>id: {params.id}</>
});

export const head: DocumentHead = {
    title: 'Edit Todo',
};

