import UseEffectComponent from "./Components/UseEffectComponent";
import UseReducerComponent from "./Components/UseReducerComponent";
import UseRefComponent from "./Components/UseRefComponent";
import UseLayoutEffectComponent from "./Components/UseLayoutEffectComponent";
import UseImperativeHandleComponent from "./Components/UseImperativeHandle";
import UseContext from "./Components/UseContext";

function App (){
    return (
        <>
            <UseEffectComponent />
            <hr />
            <UseReducerComponent />
            <hr/>
            <UseRefComponent />
            <hr/>
            <UseLayoutEffectComponent />
            <hr/>
            <UseImperativeHandleComponent />
            <hr/>
            <UseContext />
        </>
  );
}
export default App;
