import GrandChild from "./GrandChild"


const Child = ({message}) => {
  return (
    <div>
      <h1>Child Componant</h1>
      <GrandChild message={message} />
    </div>
  )
}

export default Child;
