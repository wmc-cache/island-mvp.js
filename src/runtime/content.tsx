import { useRoutes } from 'react-router-dom';
// import A from '../../docs/guide/a';
// import B from '../../docs/guide/b';
// import Index from '../../docs/guide/index';
import { routes } from 'island:routes';

// const routes = [
//     {
//         path: '/guide',
//         element: <Index />
//     },
//     {
//         path: '/guide/a',
//         element: <A />
//     },
//     {
//         path: '/guide/b',
//         element: <B />
//     }
// ];

export const Content = () => {
    console.log("routes", routes)
    const routeElement = useRoutes(routes);
    return routeElement;
};