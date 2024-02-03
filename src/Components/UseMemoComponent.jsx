import {useEffect, useMemo, useState} from 'react';

function UseMemoComponent() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;
        let longestName = '';
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log("This was computed")

        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            <h1>useMemo</h1>
            <p>useMemo is a React Hook that is used to memoize the result of a function. It is used to optimize performance by caching the result of a function so that it is not recalculated every time the component renders.</p>
            <p>{getLongestName}</p>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <span>Toggle</span>}
        </div>
    );
}
export default UseMemoComponent;
