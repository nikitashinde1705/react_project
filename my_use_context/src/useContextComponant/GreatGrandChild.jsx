import { useContext } from "react"
import MyContext from "./MyContext";

const GreatGrandChild = () => {

    const msg = useContext(MyContext);

  return (
    <div>
        <h4>Great Grand Child Componant - {msg}</h4>

      
    </div>
  )
}

export default GreatGrandChild
