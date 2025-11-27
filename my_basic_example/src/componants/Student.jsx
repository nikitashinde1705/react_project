// const Student = (props) => {
//     return(
//         <>
//         <div className="container">
//             <div className="row">
//                 <h3>Name: {props.name}</h3>
//                 <h3>Age: {props.age}</h3>
//                 <h3>City: {props.city}</h3>
//             </div>
//         </div>
//         </>
//     );
// };

const Student = ({name,age,city}) => {
    return(
        <>
        <div className="container">
            <div className="row text-success">
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
                <h3>City: {city}</h3>
                
            </div>
        </div>
        </>
    );
};

export default Student;