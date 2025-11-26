const ObjectExample = () => {

    const user = {
        name : "Nikita Shinde",
        city : "Nashik",
        degree : "BE"
    };

    const user2 = {

        name : "Yash",
        city : "Mumbai",
        degree : "Mtech"
    };

    const employee = {
        name : "Aman Jain",
        department : "IT",
        address : {
            city : "Pune",
            pinccode : 45897,
        }
    };

    const products = [
        {
            id: 101,
            price: 35000,
            name: "Laptop",
            specifincations: {
                ram: "8GB", storage: "512 SSD"
            }

        },
        {
            id: 102,
            price: 67000,
            name: "Mobile",
            specifincations: {
                ram: "16GB", storage: "64 SSD"
            }

        },
        {
            id: 103,
            price: 56777,
            name: "Tab",
            specifincations: {
                ram: "4GB", storage: "32GB"
            }

        },
        {
            id: 104,
            price: 33309,
            name: "Camera",
            specifincations: {
                ram: "128GB", storage: "512 SSD"
            }

        },
    ];



    return(
        <>
            <div className="container">
                <h2>User Details</h2>
                <div className="row">
                    <p><b>Name: {user.name}</b></p>
                    <p><b>City: {user.city}</b></p>
                    <p><b>Degree: {user.degree}</b></p>
                </div>
                <hr />

                <h2>User 2 details</h2>
                <p>Name : {user2.name}</p>
                <p>City : {user2.city}</p>
                <p>Degree : {user2.degree}</p>
                <hr />

                <h2>Employee details</h2>
                <p><b>Name : </b>{employee.name}</p>
                <p><b>Departement : </b>{employee.department}</p>
                <p><b>Address : </b>{employee.address.city} , {employee.address.pinccode}</p>

                <h2>Product Details: </h2>
                {products.map((p) => (
                    <div key={p.id} className="border p-3">
                        <p><b>Name: </b>{p.name}</p>
                         <p><b>Price: </b>{p.price}</p>
                        <p><b>Ram: </b>{p.specifincations.ram}</p>
                        <p><b>Storage: </b>{p.specifincations.storage}</p>

                    </div>
                ))}

            </div>
        </>
    );
};

export default ObjectExample;