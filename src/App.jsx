import { useState } from "react";
import logo from './images/logo.svg'
import illustrat from './images/illustration-working.svg'
import brand from './images/icon-brand-recognition.svg'
import detail from './images/icon-detailed-records.svg'
import fully from './images/icon-fully-customizable.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import pinterest from './images/icon-pinterest.svg'
import twitter from './images/icon-twitter.svg'



function App() {

  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [hasError, setHasError] = useState(false);
 const [open, setOpen] = useState(false);
  function validURL(str) {
    return /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g.test(
      str
    );
  }

  function formSubmit(e) {
    e.preventDefault();

    if (input === "") {
      setErrorMsg("Please enter something");
      setHasError(true);
    } else if (!validURL(input)) {
      setErrorMsg("Please enter a valid URL");
      setHasError(true);
    } else {
      setErrorMsg("");
      setHasError(false);
      alert("Success");
    }
  }

  return (
    <div>
      <nav className="relative container mx-auto p-6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <img src={logo} alt="" />
            <div className="hidden space-x-8 font-bold lg:flex">
              <a href="#" className="text-gray-400 hover:text-gray-700">
                Features
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700">
                Pricing
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700">
                Resources
              </a>
            </div>
          </div>
          <div className='hidden items-center space-x-6 font-bold text-gray-400 lg:flex'>
            <div className="hover:text-violet-500">Login</div>
            <a href="#" className='px-8 py-3 font-bold text-black bg-cyan-300 rounded-full hover:opacity-70'>Sign Up</a>
          </div>
          {/**hamburger menu */}
            <div className="md:hidden  ">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`z-40 block hamburger md:hidden ${
              open ? "open" : ""
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        </div>
        <div id="menu" className={`absolute p-6 rounded-lg bg-gray-700 left-6 right-6 top-20 z-100  ${
          open ? "flex flex-col" : "hidden"
        }`}>
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center capitalize">feature</a>
            <a href="#" className="w-full text-center capitalize">pricing</a>
            <a href="#" className="w-full text-center capitalize">resources</a>
            <a href="#" className="w-full pt-6 border-t border-gray-400  text-center capitalize">login</a>
            <a href="#" className="w-full py-3 text-center capitalize rounded-full bg-cyan-500">sign up</a>
            
          </div>
        </div>
      </nav>
      <section id='hero'>
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          <div className='flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52'>
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left"> More than just shorter links </h1>
            <p className='text-2xl text-center text-gray-400 lg:max-w-md lg:text-left'>
              Build your brand recognition and get detailed insights on how your
              links are performing.
            </p>
            <div className='mx-auto lg:mx-0'>
              <a href="" className="py-5 px-10 text-2xl font-bold text-white bg-cyan-400 rounded-full lg:py-4 hover:opacity-70">Get started</a>
            </div>
          </div>
          <div className="mb-2 mx-auto md:w-180 lg:w-1/2 lg:mb-0">
            <img src={illustrat} alt="" />
          </div>
        </div>
      </section>

      <section id='shorten' className='relative bg-gray-100 '>
        <div className='max-w-4xl mx-auto p-6 space-y-6 '>
          <form onSubmit={formSubmit} id="link-form" className='relative flex flex-col w-full p-10 mt-20 space-y-4 rounded-lg bg-gray-600 md:flex-row md:space-y-0 md:space-x-3' >
            <input type="text" className= {`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none bg-white ${
    hasError ? "border-red-500" : ""
  }`} placeholder='shorten a link here ' id='link-input' 
            value={input}
            onChange={(e) => setInput(e.target.value)} />

            <button className="px-10 py-3 text-white bg-cyan-500 rounded-lg hover:bg-cyan-400 focus:outline-none md:py-2" type="submit">
              shorten It!
            </button>
            <div id='err-msg' className="bottom-5 left-10 absolute text-red-400 text-sm italic">{errorMsg}</div>
          </form>
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-violet-900 md:text-left">
              https://frontendmentor.io
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan-300">
                https://rel.link/k4ikyk
              </div>
              <button className="p-2 px-8 text-white bg-cyan-300 rounded-lg hover:opacity-70.focus:outline-none">copy</button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-violet-900 md:text-left">
              https://frontendmentor.io
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan-300">
                https://rel.link/k4ikyk
              </div>
              <button className="p-2 px-8 text-white bg-cyan-300 rounded-lg hover:opacity-70.focus:outline-none">copy</button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-violet-900 md:text-left">
              https://frontendmentor.io
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan-300">
                https://rel.link/k4ikyk
              </div>
              <button className="p-2 px-8 text-white bg-cyan-300 rounded-lg hover:opacity-70.focus:outline-none">copy</button>
            </div>
          </div>

        </div>
      </section>

      <section id="stats" className="py-24 bg-gray-100 ">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, earum accusantium. Dicta, reprehenderit sed. Facilis fuga assumenda</p>
        </div>
      </section>

      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          <div className="hidden absolute top-24 left-16 h-3 bg-cyan-500 md:block w-10/12"></div>{/**horizontal line */}
            <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan-500 md:hidden"></div>{/**vertical line */}

            <div className="relative flex flex-col p-6 space-x-6 bg-white rounded-lg md:w-1/3">
             <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-black">
                  <img src={brand} alt="" />
              </div>
             </div>
             <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">brand recognition</h5>
             <p className="text-center text-gray-400 md:text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus perferendis laudantium, quidem fugiat modi!</p>  
            </div>

            <div className="relative flex mt-24 md:mt-8 flex-col p-6 space-x-6 bg-white rounded-lg md:w-1/3">
             <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-black">
                  <img src={detail} alt="" />
              </div>
             </div>
             <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">brand recognition</h5>
             <p className="text-center text-gray-400 md:text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus perferendis laudantium, quidem fugiat modi!</p>  
            </div>

            <div className="relative flex mt-24 md:mt-14 flex-col p-6 space-x-6 bg-white rounded-lg md:w-1/3">
             <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-black">
                  <img src={fully} alt="" />
              </div>
             </div>
             <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">brand recognition</h5>
             <p className="text-center text-gray-400 md:text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus perferendis laudantium, quidem fugiat modi!</p>  
            </div>

        </div>
      </section>

      <section id="cta" className="py-24 bg-gray-800">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <button className="px-10 py-5 mx-auto text-2xl font-bold text-white bg-cyan-500 rounded-full hover:bg-cyan-400 md:text-base md:py-3 focus:outline-none">Get Started</button>
          
        </div>
      </section>

      <footer className="py-16 bg-black ">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          <img src={logo} alt="" />
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center w-full md:item-start">
              <div className="mb-5 font-bold text-white capitalize">
                feature
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-center">
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">link shortening</a>
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">branded links</a>
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">analytics</a>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:item-start">
              <div className="mb-5 font-bold text-white capitalize">
                Resources
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-center">
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">blog</a>
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">developers</a>
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">support</a>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:item-start">
              <div className="mb-5 font-bold text-white capitalize">
                company
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-center">
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">about</a>
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">our team</a>
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">carrers</a>
                <a href="#" className="capitalize text-gray-300 hover:text-cyan-500">contact</a>
              </div>
            </div>
          </div>
            <div className="flex space-x-6">
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="#">
                <img src={pinterest} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </div>
        </div>
      </footer>

    </div>
    
  )
}

export default App
