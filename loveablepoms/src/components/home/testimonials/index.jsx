function  Testimonials() {
    return (
        // <!-- //////// TESTIMONIALS //////// -->
        <section className="S-Testimonials" id="testimonials">

            {/* <!-- divider -Sky --> */}
            <div className="D-Sky">
                <img  className="img-fluid w-100"   src="images/divider-sky.svg" alt="" />
            </div>

            
            <div className="container">

                {/* <!-- divider --> */}

                <div className="row justify-content-center pt-24 pb-24 "> 
                    <hr className="divider-dotted col-3" />  
                </div>

                {/* <!-- title --> */}

                <div className="row justify-content-center">
                
                    <div className="col-8 Title text-center">                  
                        <h4>Testimonials</h4>
                        <p >
                            We ensure that every puppy goes to a responsible and loving home.
                        </p>
                    </div>
                </div>

                {/* <!-- cards--> */}

                <div className="d-flex flex-column flex-md-row justify-content-evenly pt-32">
                    <div className="col-12 col-md-4 testimonial-card">
                        <svg width="95%" height="300" viewBox="0 0 307 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M306.5 116.048C306.5 216.456 267.99 251.069 153.5 245.56C48.5087 240.507 8.07426 231.978 0.5 116.048C0.5 52.0224 28.5248 0.119019 153.5 0.119019C238 0.119019 306.5 34.7626 306.5 116.048Z" fill="#C0CAF2"/>
                        </svg>

                        <div className="testimonial-content ">
                        
                            <img src="https://placehold.co/70x70" className="img-thumbnail" alt="" /><br />
                            <span className="quote">[Quote]</span> <br />
                            <span className="sub-text">Ut wisi laoreet te et consequat. ipsum eum ea elit, adipiscing quis.</span> <br />
                            <span>Markus Dominguez</span>

                        </div>
                        
                    </div>



                    <div className="col-12 col-md-4 testimonial-card ">

                        <svg     width="95%" height="300" viewBox="0 0 307 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M306.5 116.048C306.5 216.456 267.99 251.069 153.5 245.56C48.5087 240.507 8.07426 231.978 0.5 116.048C0.5 52.0224 28.5248 0.119019 153.5 0.119019C238 0.119019 306.5 34.7626 306.5 116.048Z" fill="#C0CAF2"/>
                        </svg>

                        <div className="testimonial-content ">
                        
                            <img src="https://placehold.co/70x70" className="img-thumbnail" alt="" /><br />
                            <span className="quote" >[Quote]</span> <br />
                            <span className="sub-text">Ut wisi laoreet te et consequat. ipsum eum ea elit, adipiscing quis.</span> <br />
                            <span>Markus Dominguez</span>

                        </div>


                        
                        
                    </div>
                    <div className="col-12 col-md-4 testimonial-card ">
                        <svg width="95%" height="300" viewBox="0 0 307 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M306.5 116.048C306.5 216.456 267.99 251.069 153.5 245.56C48.5087 240.507 8.07426 231.978 0.5 116.048C0.5 52.0224 28.5248 0.119019 153.5 0.119019C238 0.119019 306.5 34.7626 306.5 116.048Z" fill="#C0CAF2"/>
                        </svg>

                        <div className="testimonial-content ">
                        
                            <img src="https://placehold.co/70x70" className="img-thumbnail" alt="" /><br />
                            <span className="quote">[Quote]</span> <br />
                            <span className="sub-text">Ut wisi laoreet te et consequat. ipsum eum ea elit, adipiscing quis.</span> <br />
                            <span>Markus Dominguez</span>

                        </div>
                        
                    </div>    

                </div>


            </div>




        </section>
    );
}

export default Testimonials;