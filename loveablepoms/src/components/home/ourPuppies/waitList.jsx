function WaitList() {
    return (
        <section className="S-WaitingList" id="ourpuppies">
            <div className="container">
                <div className="row justify-content-center align-items-center align-self-center">
                    <div className="col-12 col-md-6 ">
                        <div className="clouds-bg">
                            <img className="cloud-1" src="images/cloud-1.svg" alt="" />
                            <img className="cloud-2" src="images/cloud-2.svg" alt="" />
                            <img className="cloud-3" src="images/cloud-3.svg" alt="" />
                            <img className="cloud-4" src="images/cloud-4.svg" alt="" />
                            <img className="airballon  animate__animated  animate__slower animate__shakeY" src="images/airballon.svg" alt="" />
                        </div>

                        <div className="form-container">
                            <div className="box-pink My-Form List-Form d-none">
                                <h4 className="text-title">Join Our Waiting List!</h4>
                                <form>
                                    <div className="mb-3">
                                        <label for="InputName" className="form-label">Name</label>
                                        <input type="email" className="form-control" id="InputName" aria-describedby="Name" />
                                    </div>
                                
                                    <div className="mb-3">
                                        <label for="InputEmail" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="InputEmail" aria-describedby="Email" />
                                    </div>
                            
                                    
                                    <button type="submit" className="btn btn-lg  btn-pomps-primary">Join Waitlist</button>
                                </form>
                            </div>
                            <div className="box-blue List-Joined d-block">
                                <h4 className="icon"><i className="fa-solid fa-star"></i></h4>
                                <h4 className="text-title">You Are on List!</h4>
                                <span className="msg h5 mb-4">Thanks, we will contact you soon.</span>
                                <div className="social-media h5 mt-4 txt-center">
                                    <span>Check our Social Media</span>
                                    <div className="social-media-buttons d-flex d-flex-row justify-content-center align-items-center align-self-center mt-4">
                                        <button >Facebook  <i className="fa-brands fa-square-facebook"></i></button>
                                        <button className="ms-4">Instagram <i className="fa-brands fa-square-instagram"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default WaitList;