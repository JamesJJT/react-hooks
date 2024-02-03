import {useEffect} from "react";

function Child({returnComment}) {
    useEffect(() => {
        console.log("Function was called")
    }, [returnComment]);
    return (
        <div>
            <h2>Child</h2>
            <p>Child component</p>
            <p>{returnComment()}</p>
        </div>
    );
}
export default Child;
