import './App.css'
import FunctionExample from './componants/FunctionExample'
import EventExample from './componants/EventExample'
import ArrayList from './componants/ArrayList'
import ObjectExample from './componants/ObjectExample'
import ConditionalStatements from './componants/ConditionalStatements'
import Message from './componants/Message'
import Student from './componants/Student'
import { PassingNumberProps, PassingBoolean, PassingObject, PassingArray,PassingImage } from './componants/PassingValuesProps'
// import product1 from './assets/watch.jpg'
// import product2 from './assets/mobile.jpg'
// import product3 from './assets/laptop.jpg'
// import product4 from './assets/headphone.jpg'
import Accordion from './componants/Accordian'
// import Cards from './componants/Cards'
import UseStateCounter from './componants/UseStateCounter'
import UseStateInput from './componants/UseStateInput'
import UseStateHideShow from './componants/UseStateHideShow'
import ProductQuantityOrder from './componants/ProductQuantityOrder'
import LikeSymbol from './componants/LikeSymbol'
import UseEffectCounter from './componants/UseEffect.Counter'
import UseEffectLiveTime from './componants/UseEffectLiveTime'
import UseEffectAPIList from './componants/UseEffectAPIList'
import SimpleForm from './componants/SimpleTextInputFormHandling'
import ControlledFormeHandling from './componants/MultipleInputFormHandling'
import MultipleInputFormuseRef from './componants/MultipleInputFormuseRef'
import UseEffectPractice from './componants/UseEffrectPractice'




 import Navbar from './course_project/Navbar'
 import Filter from './course_project/Filter'
 import Cards from './course_project/Cards'
 import { apiUrl, filterData } from './data'
 import { useEffect, useState } from 'react'
import Spinner from './course_project/Spinner'
import { toast } from 'react-toastify'

function App() {

  const [ courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output ->
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network me dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);


  // const student = {
  //         name: "Khushi" , age:16, city: "Mumbai"
  //       }

  // const subjects = ["HTML", "CSS", "Bootstrap"];

  return (
    <>
   

       <div>
        <div>
          <Navbar/>
        </div>

        <div>
          <Filter filterData={filterData}/>
        </div>

        <div>
          {
            loading ? (<Spinner/>) : (<Cards courses={courses}/>)
          }
        </div>
      


     
       </div>
    



























    {/* <FunctionExample/>
    <EventExample/>
    <ArrayList/> */}
    {/* <ObjectExample/> */}
    {/* <ConditionalStatements/> */}

    <div className="container">
      {/* <div className="row  p-5 m-5">

         <div className="col-md-6 m-2 ">
         <Message text="Hello its Nikita"/>
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

        <hr /> 

        
       <h2>Passing Object</h2>
        <PassingObject info={student} />

         <h2>Passing array</h2>
         <PassingArray list={subjects}/>
         <hr />
         <h2>Passing image</h2>
         <PassingImage image={logo}/> 

          <h4>Accordian using props</h4>
         <Accordion id={1} que="What is React props?" ans="In React, props short for properties are a mechanism for passing data from a parent component to a child component. They are a fundamental concept for building reusable and dynamic React applications."/>
         <Accordion id={2} que="What is the purpose of props in React?" ans="Props is a special keyword in React that stands for properties and is used for passing data from one component to another. "/>
         <Accordion id={3} que="What ia your name ?" ans="My name is Ankita"/> 

         



      </div> 
    </div> */}
    </div>

    <div className="container">
          {/* <div className="row">
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
              
          
           
          </div> */}

        
          {/* <UseStateCounter/>

          <UseStateInput/>

          <UseStateHideShow/> */}

          {/* <div className="row">
            <h2>Products</h2>
            <div className="col-md-3"><ProductQuantityOrder productName="Watch" price={120} photo={product1}/></div>
          <div className="col-md-3"><ProductQuantityOrder productName="Mobile" price={12000} photo={product2}/></div>
          <div className="col-md-3"><ProductQuantityOrder productName="Laptop" price={35000} photo={product3}/></div>
          <div className="col-md-3"><ProductQuantityOrder productName="Laptop" price={35000} photo={product4}/></div>
          </div> */}

          {/* <LikeSymbol/> */}

          {/* <UseEffectCounter/> */}
          {/* <UseEffectLiveTime/> */}
          


         </div>

    {/* <div className="container">
        <div className="row ">
            
            <UseEffectAPIList/>
           
        </div>
    </div> */}

    {/* <SimpleForm/> */}
    {/* <ControlledFormeHandling/> */}
    {/*<MultipleInputFormuseRef/> */}

    {/* <UseEffectPractice/> */}

 
      
    

    </>
  )
}

export default App
