export function useRoutes(routes) {

  const pathname = window.location.pathname;

  return routes.map((route) => {
    const match =  (route.path === pathname || ('/' + route.path) === pathname);

    return match ? route.element : null;
  })
}