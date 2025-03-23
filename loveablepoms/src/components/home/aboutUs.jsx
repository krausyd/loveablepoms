import clouds from "../../assets/images/divider-clouds.svg"
import puppy1 from "../../assets/images/puppy1.png"
function AboutUs() {
    return (
        <section className="S-AboutUs" id="aboutus">
            {/* <!-- divider -clouds --> */}
            <div className="D-Clouds">
                <img className="img-fluid w-100" src={clouds} alt="image with clouds that serve as divider for the page" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 col-md-4 d-flex align-items-center">
                        <div className=" Title ">
                            <h4>About Us</h4>
                            <p>
                                We are a dedicated breeder specializing in purebred Pomeranians, with years of experience selecting and caring for healthy, happy, and well-socialized puppies. Our commitment is to provide top-quality puppies raised with love and ethical breeding practices. All of our pomeranians are part of our family, and every single puppy is treated the same way, with love, respect, and kindness.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <svg className="position-absolute"   width="350" height="338" viewBox="0 0 438 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M180.424 294C171.662 294.892 162.643 295.305 153.434 295.305C68.6948 295.305 7.59575 278.964 0 139.482C0 62.4483 28.1043 0 153.434 0C212.606 0 263.954 20.3236 289.553 65.8861C291.733 65.8428 293.947 65.8211 296.195 65.8211C374.302 65.8211 437.621 104.239 437.621 194.38C437.621 305.726 374.302 338 296.195 338C246.342 338 205.366 331.865 180.424 294Z" fill="#8095E4"/>
                        </svg>
                        <img className="position-relative img-about" src={puppy1} alt="" /> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;