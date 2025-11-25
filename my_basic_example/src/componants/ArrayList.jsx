const ArrayList = () => {

    const city = ["Nashik", "Pune", "Mumbai", "Thane", "Nagar"];

    const fruits = ["Apple", "Mango", "Kiwi"];

    const car1 = ["Mahindra", "BMW", "Audi"];
    const car2 = ["Hundai" , "Toyato"];

    const allCars = [...car1, ...car2];

    const students = [
        {
            id: 1,
            name: "Sai",
            age: 22,
            city: "Nashik"
        },
        {
            id: 2,
            name: "Ram",
            age: 26,
            city: "Pune"
        },
        {
            id: 3,
            name: "Raja",
            age: 27,
            city: "Solapur"
        },
        {
            id: 4,
            name: "Jay",
            age: 22,
            city: "Nagar"
        },
    ]

    
    

    return (
        <>
            <h1>Array List example</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>City Name: </h2>
                        <ul>
                            {city.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <hr />
                        <h2>Fruit List: </h2>
                        <ul>
                            {fruits.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <hr />

                        <h2>Car List: </h2>
                        <ul>
                            {allCars.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                            <hr />

                        <h2>Student List: Array of Object</h2>
                            {students.map((student) => (
                                <div key={student.id} className="border my-2 rounded p-2">
                                    <h4>Name: {student.name}</h4>
                                    <p>Age: {student.age}</p>
                                </div>
                            ))}


                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </>
    );
};

export default ArrayList;