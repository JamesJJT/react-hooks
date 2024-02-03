import {useEffect, useLayoutEffect, useRef} from "react";
function UseLayoutEffectComponent() {
    const inputRef = useRef(null);
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])
    useEffect(() => {
        inputRef.current.value = 'Hello';
    }, [])
    return (
        <div>
            <h2>useEffectLayout</h2>
            <p>useLayoutEffect is a React Hook that is similar to useEffect, but it runs synchronously after all DOM mutations. It fires after all the DOM mutations are flushed to the browser's layout, but before the painted result is displayed on the screen. This makes it suitable for scenarios where you need to perform measurements or operations that require the most up-to-date layout information.</p>
            <input
                type="text"
                value="pedro"
                ref={inputRef}
                style={{width: 400, height: 50, fontSize: 20, padding: 10, margin: 10}}
            />
        </div>
    );
}
export default UseLayoutEffectComponent;
