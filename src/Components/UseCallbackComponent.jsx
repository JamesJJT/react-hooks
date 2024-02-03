import {useCallback, useState} from "react";
import Child from "./SubComponents/Child";
function UseCallbackComponent() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Sub to the channel');

    const returnComment = useCallback(() => {
        return data;
    }, [data]);

  return (
    <div>
        <h1>useCallback</h1>
        <p>useCallback is a React Hook that returns a memoized callback function. It is used to optimize performance by caching the result of a function so that it is not recalculated every time the component renders.</p>
        <Child returnComment={returnComment}/>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <span>Toggle</span>}
    </div>
  );
}
export default UseCallbackComponent;
