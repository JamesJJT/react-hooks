import { useEffect, useState } from 'react';
function UseEffectComponent () {
    const [count, setCount] = useState(0);
    useEffect(() => {
        //when the component mounts, it sets the component to count + 1
        //Think of use effect as a combination of componentDidMount, componentDidUpdate, and componentWillUnmount
        setCount(1);
    }, [])
    return (
        <div>
            <h1>useEffect and useState Component</h1>
            <h2>useEffect</h2>
            <p> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            <h2>useState</h2>
            <p>useState is a Hook that lets you add state to your function components. It accepts an argument which is the initial state and returns an array of two items. The first item is the current state value and the second is a function that lets you update it.</p>
            <button
                onClick={() => {setCount( prevcount => prevcount - 1)}}
            >-</button>
            <p>{count}</p>
            <button onClick={() => {setCount(prevcount => prevcount + 1)}}>+</button>
        </div>
    );
}
export default UseEffectComponent;
