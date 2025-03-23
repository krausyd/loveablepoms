function Process() {
    return (
        // <!-- //////// PROCESS //////// -->
        <section className="S-Process" id="ourprocess">

            {/* <!-- divider -Sky --> */}
            <div className="D-Trees">
                <img  className="img-fluid w-100"   src="images/divider-trees.svg" alt="" />
            </div>

            {/* <!-- divider --> */}

            <div className="row justify-content-center  pt-24 pb-24"> 
                <hr className="divider-dotted col-3" />  
            </div>

            {/* <!-- title --> */}

            <div className="row justify-content-center">
                
                <div className="col-8 Title text-center">                    

                    <h4>The Process</h4>
                    <p>We ensure that every puppy goes to a responsible and loving home.</p>
                </div>

            </div>

            {/* <!-- steps --> */}

            <div className="d-flex flex-column flex-md-row justify-content-evenly pt-32">
                 {/* <!-- STEP 1 --> */}
                <div className="process-card ">
                    <h3 className="step-number ">1</h3>
                    <svg width="204" height="203" viewBox="0 0 204 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.499994 95.5302C0.499994 178.167 45.9431 202.119 102 202.119C158.057 202.119 198.475 190.941 203.5 95.5302C203.5 42.8361 184.908 0.119141 102 0.119141C45.9431 0.119141 0.499994 28.6311 0.499994 95.5302Z" fill="#805900"/>
                    </svg>   
                </div>

                {/* <!-- STEP 2 --> */}

                <div className="process-card ">
                    <h3 className="step-number ">2</h3>
                    <svg width="204" height="203" viewBox="0 0 204 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.499994 95.5302C0.499994 178.167 45.9431 202.119 102 202.119C158.057 202.119 198.475 190.941 203.5 95.5302C203.5 42.8361 184.908 0.119141 102 0.119141C45.9431 0.119141 0.499994 28.6311 0.499994 95.5302Z" fill="#805900"/>
                    </svg>  
                    
                </div>

                {/* <!-- STEP 3 --> */}

                <div className="process-card ">

                    <h3 className="step-number ">3</h3>
                    <svg width="204" height="203" viewBox="0 0 204 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.499994 95.5302C0.499994 178.167 45.9431 202.119 102 202.119C158.057 202.119 198.475 190.941 203.5 95.5302C203.5 42.8361 184.908 0.119141 102 0.119141C45.9431 0.119141 0.499994 28.6311 0.499994 95.5302Z" fill="#805900"/>
                    </svg>   
                </div>

                {/* <!-- STEP 4 --> */}

                <div className="process-card ">
                    
                    <h3 className="step-number ">4</h3>
                    <svg width="204" height="203" viewBox="0 0 204 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.499994 95.5302C0.499994 178.167 45.9431 202.119 102 202.119C158.057 202.119 198.475 190.941 203.5 95.5302C203.5 42.8361 184.908 0.119141 102 0.119141C45.9431 0.119141 0.499994 28.6311 0.499994 95.5302Z" fill="#805900"/>
                    </svg>  
                    
                </div>


            </div>

        </section>
        );
}

export default Process;