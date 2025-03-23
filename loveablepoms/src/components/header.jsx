import React from 'react';
import logo from "../assets/images/loveablepoms-logo.svg";

function Header() {
    return (
        <section className="S-Intro items-center pt-16 my-auto flex flex-col">
            <div className="flex container flex-col my-auto items-center">
                <div className="row content-center justify-center">
                    <div class="col-9 col-md-4">
                        <img className="w-100 text-center" src={logo} alt="Loveable poms logo" />
                    </div>
                </div>
                <div className="row content-center justify-center">
                    <div className="col-10 col-md-7 text-center">
                        <h5>Pure Love, Tiny Paws – Find Your Perfect Pomeranian Today!</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;