const ConditionalStatements = () => {

    const age = 19;

    const isAdmin = true;

    const hasPermission = false;

    function Admin(){
        return <h3>This is admin pattern</h3>
    }

     function User(){
        return <h3>This is user Dashboard</h3>
    }

    const isAdminUser = false;

    const items = [];

    const marks = 78;

    return (
        <>

        <div className="container">
            <h1>Conditional Statement Example</h1>
            <h3>Example 1 -Simple if Condition(variable based)</h3>
            <h4>My age {age}</h4>
            {age >= 18 ? <p>You are adult</p> : <p>You are a Minor</p>}
            <hr />
            <h3>Example 2 - show only if condition is true (&& operator)</h3>

            {isAdmin && <p>Welcome Admin</p>}

            <hr />
            <h3>Example 3 - show only if condition is true (&& operator)</h3>
            {hasPermission ? <p className="text-success">Access granted</p> : <p className="text-danger">Access Denay</p>}

            <h3>Example 4 - render different componant based on condition</h3>
            {isAdminUser ? <Admin/> : <User/>}

            <h3>Example 5 - render only if array has items</h3>
            {items.length > 0 ? (
                <p>you have {items.length} items</p>
              )  : (
                <p>no item found</p>
            )} 

            <hr />
            <h3>Example 6 - using style condition</h3>
            <h3>Marks result</h3>
            <p style={{
                color : marks >=35 ? "green" : "red"
            }}>
                {marks>=35 ? "pass" : "red"}
            </p>
           

        </div>
        
        </>
    );
};
export default ConditionalStatements;