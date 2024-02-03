import {createContext, useState} from 'react';
import Login from "./SubComponents/Login";
import User from "./SubComponents/User";

export const AppContext = createContext(null);
function UseContextComponent() {
  const [username, setUsername] = useState('');
  return (
    <div>
      <h2>UseContextComponent</h2>
      <p>useContext is a React Hook that allows you to use the value of a context in a functional component. It accepts a context object (the value returned from React.createContext) and returns the current context value for that context.</p>
      <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
}
export default UseContextComponent;
