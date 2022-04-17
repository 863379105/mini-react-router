import { NavigationContext } from "./Context";

export default function Router({ navigator, children, location}) {
  const navigationContext = { navigator, location };
  return (
    <NavigationContext.Provider value={navigationContext}>{children}</NavigationContext.Provider>
  )
}