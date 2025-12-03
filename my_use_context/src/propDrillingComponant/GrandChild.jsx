
import GreatGrandChild from './GreatGrandChild'

const GrandChild = ({message}) => {
  return (
    <div>
        <h1>Grand Child Componant</h1>
        <GreatGrandChild message={message}/>
      
    </div>
  )
}

export default GrandChild
