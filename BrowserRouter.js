import Router from "./Router";
import { createBrowserHistory } from "history";
import { useRef } from "react";

export default function BrowserRouter({children}) {
  const historyRef = useRef();
  if (!historyRef.current) {
    historyRef.current = createBrowserHistory();
  }
  const history = historyRef.current
  return  <Router children={children} navigator={history} />;
}

