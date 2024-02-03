import {useReducer} from 'react';
function UseReducerComponent () {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1, showText: state.showText};
            case 'toggleShowText':
                return {count: state.count, showText: !state.showText}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    });

    return (
        <div>
            <h1>useReducer</h1>
            <p>useReducer is a React Hook that provides an alternative way to manage state in functional components. It is often used as an alternative to the more commonly used useState Hook, especially when dealing with complex state logic or when state changes depend on the previous state.</p>
            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({type: 'increment'})
                dispatch({type: 'toggleShowText'})
            }}>Click here</button>
            {state.showText && <p>This is a text</p>}
        </div>
    );
}
export default UseReducerComponent;
