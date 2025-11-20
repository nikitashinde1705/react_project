const Contact = () => {
    return (
        <>
        <form action="">
            <div className="container mb-5">
                <div className="row ">
                    <h1>Contact Us</h1>

                    <label htmlFor="">First Name</label>
                    <input type="text" />

                    <label htmlFor="">Last Name</label>
                    <input type="text" />

                    <label htmlFor="">Email</label>
                    <input type="text" />

                    <label htmlFor="">Feedback</label>
                    <textarea name="" id=""></textarea>

                    <button type="button" class="btn btn-warning">Submit</button>
                </div>
            </div>
        </form>
        </>
    );
};

export default Contact;