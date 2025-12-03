
import './App.css'
// import Child from './propDrillingComponant/Child'
// import { useContext } from 'react';
import MessageProvider from './useContextComponant/MessageProvider';
import Child from './useContextComponant/Child';
import Home from './componants/Home';
import ThemeProvider from './context/ThemeProvider';


function App() {

  return (
    <>
      {/* <h1>Prop Drilling Example</h1>
      <Child message=" I am Nikita"/>     */}

      <h1>Using Use Context</h1>
      {/* <MessageProvider>
        <Child/>
      </MessageProvider> */}

      <ThemeProvider>
        <Home/>
      </ThemeProvider>
     
    </>
  )
}

export default App
