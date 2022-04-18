import Router from "./Router";
import { createBrowserHistory } from "history";
import { useLayoutEffect, useRef, useState } from "react";

export default function BrowserRouter({children}) {
  const historyRef = useRef();
  if (!historyRef.current) {
    historyRef.current = createBrowserHistory();
  }
  let history = historyRef.current
  let [state, setState] = useState({
    location: history.location
  });
  useLayoutEffect(() => {
    const unlisten = history.listen(({location}) => {
      setState({location});
    })
   // const unlisten = history.listen(setState);
    return unlisten;
  }, [history])
  //TODO：疑问
  // history.listen(({location}) => {
  //   setState({location});
  // })
  return  <Router children={children} navigator={history} location={state.location} />;
}

