const Accordion = ({id, que, ans}) => {
    return (
        <>

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item m-2">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`} aria-expanded="true" aria-controls={`collapse-${id}`}>
                            {que}
                          </button>
                        </h2>
                        <div id={`collapse-${id}`} className="accordion-collapse collapse" aria-labelledby={`heading-${id}`}data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>{ans}</strong> 
                          </div>
                        </div>
                      </div>
 

</div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Accordion;