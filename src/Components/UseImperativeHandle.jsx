import {useRef} from "react";
import Button from "./SubComponents/Button";
function UseImperativeHandleComponent() {
    const buttonRef = useRef(null);
    return (
        <div>
            <h1>useImperativeHandle</h1>
            <p>useImperativeHandle is a React Hook that customizes the instance value that is exposed to parent components when using ref. It is used to hide certain properties or methods from the parent component.</p>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button from parent</button>
            <br />
            <Button ref={buttonRef}/>
        </div>
    );
}
export default UseImperativeHandleComponent;
