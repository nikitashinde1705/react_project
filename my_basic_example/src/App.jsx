import './App.css'
import FunctionExample from './componants/FunctionExample'
import EventExample from './componants/EventExample'
import ArrayList from './componants/ArrayList'
import ObjectExample from './componants/ObjectExample'
import ConditionalStatements from './componants/ConditionalStatements'
import Message from './componants/Message'
import Student from './componants/Student'
import { PassingNumberProps, PassingBoolean, PassingObject, PassingArray,PassingImage } from './componants/PassingValuesProps'
import logo from './assets/react.svg'
import Accordion from './componants/Accordian'
import Cards from './componants/Cards'

function App() {

  // const student = {
  //         name: "Khushi" , age:16, city: "Mumbai"
  //       }

  // const subjects = ["HTML", "CSS", "Bootstrap"];

  return (
    <>

    {/* <FunctionExample/>
    <EventExample/>
    <ArrayList/> */}
    {/* <ObjectExample/> */}
    {/* <ConditionalStatements/> */}

    <div className="container">
      <div className="row border p-5 m-5">

        <div className="col-md-6 m-2 ">
        {/* <Message text="Hello its Nikita"/>
        <Message text="I am from Nashik"/>
        <Student name="Nikita" age="22" city="Nashik"/>
        <hr />
         <Student name="Aditi" age="21" city="Pune"/>
         <hr />

        <h2>Passing Number</h2>
        <PassingNumberProps marks={89}/>
        <PassingNumberProps marks={96}/>
        <hr />
        <PassingBoolean isAdmin={false} />

        <hr /> */}

        
       {/* <h2>Passing Object</h2>
        <PassingObject info={student} />

         <h2>Passing array</h2>
         <PassingArray list={subjects}/>
         <hr />
         <h2>Passing image</h2>
         <PassingImage image={logo}/> */}

         <h4>Accordian using props</h4>
         <Accordion id={1} que="What is React props?" ans="In React, props short for properties are a mechanism for passing data from a parent component to a child component. They are a fundamental concept for building reusable and dynamic React applications."/>
         <Accordion id={2} que="What is the purpose of props in React?" ans="Props is a special keyword in React that stands for properties and is used for passing data from one component to another. "/>
         <Accordion id={3} que="What ia your name ?" ans="My name is Ankita"/>

         



      </div>
    </div>
    </div>

    <div className="container">
          <div className="row">
                <h3>Cards using props</h3>
              <div className="col-md-3">
                <Cards photo={logo} title="React Logo" body="React is an Framework" button="READ MORE"/>
              </div>
              <div className="col-md-3">
                <Cards photo={logo} title="React Logo" body="React is an Framework" button="READ MORE"/>
              </div>
              <div className="col-md-3">
                <Cards photo={logo} title="React Logo" body="React is an Framework" button="READ MORE"/>
              </div>
              <div className="col-md-3">
                <Cards photo={logo} title="React Logo" body="React is an Framework" button="READ MORE"/>
              </div>
              
          
           
          </div>
         </div>
      
    </>
  )
}

export default App
