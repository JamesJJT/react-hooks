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
            <button
                onClick={() => {setCount( prevcount => prevcount - 1)}}
            >-</button>
            <p>{count}</p>
            <button onClick={() => {setCount(prevcount => prevcount + 1)}}>+</button>
        </div>
    );
}
export default UseEffectComponent;
