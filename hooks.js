import { useContext } from "react";
import { NavigationContext, RouteContext } from "./Context";
import { normalizePathname } from "./utils";


//TODO：监听路由
//TODO：渲染子路由
export function useRoutes(routes) {
  //TODO: 毫无头绪
  const location = useLocation()
  const pathname = location.pathname;
  return routes.map((route) => {
    const match =  pathname.startsWith(route.path)
    return match && 
    route.children.map( child => {
      console.log(child);
      let m = normalizePathname(child.path || '/') === pathname;
      console.log(m);
      return m && <RouteContext.Provider value={{outlet: child.element}} children={route.element} />
    });
  })
}

export function useLocation() {
  const { location } = useContext(NavigationContext);
  return location;
}

export function useNavigate() {
  const {navigator} = useContext(NavigationContext)
  return navigator.push;
}

export function useOutlet() {
  const { outlet } = useContext(RouteContext)
  return outlet;
}