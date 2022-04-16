import { NavigationContext } from "./Context";

export default function Router({ navigator, children}) {
  const navigationContext = { navigator };
  return (
    <NavigationContext.Provider value={navigationContext}>{children}</NavigationContext.Provider>
  )
}