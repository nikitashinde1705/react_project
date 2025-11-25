// const FunctionExample = () => {

//     function getName(){
//         return "Nikita Shinde";
//     }

//     function geAddreass(){
//         return "Yeola, Nashik.";
//     }

//     return (
//         <>
//         <h1>This is function componant</h1>
//         <h1>Hello my name is {getName()}</h1>
//         <p style={{color:"green", fontWeight:"bold", fontSize:"2rem"}}>I am from {geAddreass()}</p>
//         </>
//     );
// };

// export default FunctionExample;


const FunctionExample = () => {

    function getName(yourName){
        return yourName;
    }

    const name1 = "Nikita";
    const name2 = "Shinde";

    return (
        <>
        <h1>This is function componant</h1>
        <h1 style={{color:"grey"}}>Hello my name is {getName(name1)}</h1>
        <h1 style={{color:"red"}}>Hello my surname is {getName(name2)}</h1>
        {/* <p style={{color:"green", fontWeight:"bold", fontSize:"2rem"}}>I am from {geAddreass()}</p> */}
        </>
    );
};

export default FunctionExample;