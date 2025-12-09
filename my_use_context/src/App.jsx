
import './App.css'
// import Child from './propDrillingComponant/Child'
// import { useContext } from 'react';
import MessageProvider from './useContextComponant/MessageProvider';
import Child from './useContextComponant/Child';
import Home from './componants/Home';
import ThemeProvider from './context/ThemeProvider';
import WithoutUseMemo from './componants/WithoutUseMemo';
import WithUseMemo from './componants/WithUseMemo';
import CounterUseState from './componants/CounterUseState';
import CounterUseReducer from './componants/UseReducer';
import TodoArrayLocalStorage from './componants/TodoArrayLocalStorage';
import ToDoCRUD from './componants/ToDoCRUD';


function App() {

  return (
    <>
      {/* <h1>Prop Drilling Example</h1>
      <Child message=" I am Nikita"/>     */}

      {/* <h1>Using Use Context</h1> */}
      {/* <MessageProvider>
        <Child/>
      </MessageProvider> */}
{/* 
      <ThemeProvider>
        <Home/>
      </ThemeProvider> */}

      {/* <WithoutUseMemo/> */}
      {/* <WithUseMemo/> */}

      {/* <CounterUseState/> */}
      {/* <CounterUseReducer/> */}

      {/* <TodoArrayLocalStorage/> */}
      <ToDoCRUD/>
     
    </>
  )
}

export default App
