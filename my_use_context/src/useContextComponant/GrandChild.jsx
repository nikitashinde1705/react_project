import GreatGrandChild from "./GreatGrandChild"
import { useContext } from "react";
import MyContext from "./MyContext";

const GrandChild = () => {
    const msg = useContext(MyContext);
  return (
    <div>
        <h4>Grand Child Componant - {msg}</h4>
      <GreatGrandChild/>
    </div>
  )
}

export default GrandChild
