import {useRef, useState} from "react";

function UseRefComponent() {
    const inputRef = useRef(null);
    const [name, setName] = useState('Pedro');

    const onClick = () => {
        setName(inputRef.current.value);
    }
  return (
    <div>
        <h1>useRef</h1>
        <p>Certainly! useRef is a React Hook that provides a way to create mutable object properties that persist across renders without causing the component to re-render when the value changes. It's particularly useful for accessing and interacting with the DOM directly.</p>
        <h2>{name}</h2>
        <input
            type="text"
            placeholder="Ex..."
            ref={inputRef}
        />
        <button
            onClick={onClick}
        >Change name</button>
    </div>
  );
}
export default UseRefComponent;
