import {useState} from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="container mx-auto flex justify-center items-center bg-white" aria-label="navbar">
        {/* Hamburger Menu for mobile */}
        <button onClick={() => setIsOpen(!isOpen)}
          className='text-black focus:outline-none md:hidden'>
            {/* Hamburger Icon and Close Icon */}
            {isOpen ? (
              <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
          
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
              />
          </svg>
            ): (
              <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
            )}
        </button>

         {/* Navigation Links */}
         <div className={`w-full md:flex md:items-center md:w-auto md:space-x-4 absolute md:relative top-16 left-0 md:top-0 md:left-0 p-4 md:p-0 bg-white md:bg-transparent transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
          <a href="#aboutus" className="block py-2 px-4 text-black hover:text-pink-600 md:inline-block">About Us</a>
          <a href="#ourpuppies" className="block py-2 px-4 text-black hover:text-pink-600 md:inline-block">Our puppies</a>
          <a href="#testimonials" className="block py-2 px-4 text-black hover:text-pink-600 md:inline-block">Testimonials</a>
          <a href="#ourprocess" className="block py-2 px-4 text-black hover:text-pink-600 md:inline-block">Our process</a>
          <a href="#contact" className="block py-2 px-4 text-black hover:text-pink-600 md:inline-block">Contact Us</a>

         </div>
      </nav>
    );
}

export default NavBar;