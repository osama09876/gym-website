import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Home = () => {
  const [hover, setHover] = useState(false);
  const images = [
    "exer5.jpg",
    "exer6.jpg",
    "exer7.jpg",
    "exer5.jpg",
    "exer6.jpg",
    "exer7.jpg",
    // Add more image URLs as needed
  ];
  return (
    <>
      <div
        id="home"
        className=" w-full h-screen bg-[url('/home.jpg')] bg-cover bg-no-repeat bg-fixed flex items-center md:pl-28"
      >
        <div className="md:w-[50%] h-36 flex flex-col justify-between p-4">
          <h1 className="text-white md:text-4xl text-2xl font-medium">
            BUID YOUR BODY STRONG
          </h1>
          <h1 className="text-white md:text-4xl text-2xl font-medium">
            AND GROW YOUR STRENGTH
          </h1>
          <p className="text-white text-md text-justify">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising occur in which toil and pain can great
            pleasure.
          </p>
        </div>
      </div>
      <div
        id="about"
        className="w-full min-h-40 bg-white flex justify-center items-center"
      >
        <div className="flex md:w-[60%] justify-evenly items-center">
          <h1 className="text-4xl uppercase px-5 font-medium">fitness</h1>
          <div className="w-1 h-14 bg-gray-400"></div>
          <p className="text-lg px-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            facere ut ipsa dolore atque velit distinctio voluptatum? Natus,
            molestias in?
          </p>
        </div>
      </div>
      <div className="w-full flex flex-wrap md:relative h-screen bg-[url('/exer1.jpg')] bg-cover bg-fixed bg-no-repeat">
        <div className="md:w-[45%] w-[90%] h-screen bg-black opacity-80 md:absolute md:right-0 flex justify-center items-center">
          <div className="m-10">
            <h1 className="text-white text-lg">WELCOME TO FITNESS GYM</h1>
            <h1 className="text-white md:text-4xl text-2xl">
              Stay fit and healthy with pulse
            </h1>
            <div className="w-[75%]">
              <p className="text-white py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="serivces"
        className="w-full min-h-40 bg-white flex justify-center items-center"
      >
        <div className="flex items-center justify-center">
          <h1 className="text-4xl uppercase px-3 font-medium">our programs</h1>
          <div className="w-1 h-14 bg-gray-400"></div>
          <p className="text-lg px-3 text-gray-600 md:w-[50%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            facere ut ipsa dolore atque velit distinctio voluptatum? Natus,
            molestias in?
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen bg-[#182029] flex justify-evenly flex-wrap">
        <img src="/ecer3.jpg" alt="" className=" md:w-[450px] w-full" />
        <img src="/exer4.jpg" alt="" className=" md:w-[450px] w-full" />
        <img src="/exer2.jpg" alt="" className=" md:w-[450px] w-full" />
      </div>
      <div className=" w-full h-screen bg-[url('/youga.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
        <a class="play-btn" href="#"></a>
      </div>
      <div
        id="testimonals"
        className="w-full min-h-40 bg-white flex justify-center items-center"
      >
        <div className="flex items-center justify-center">
          <h1 className="text-4xl uppercase px-3 font-medium">TESTIMONIALS</h1>
          <div className="w-1 h-14 bg-gray-400"></div>
          <p className="text-lg px-3 text-gray-600 w-[50%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            facere ut ipsa dolore atque velit distinctio voluptatum? Natus,
            molestias in?
          </p>
        </div>
      </div>
      <div className="w-full h-screen bg-[url('/exer8.jpg')] bg-cover bg-fixed bg-no-repeat">
        <div className="md:w-[45%] w-[80%] h-screen bg-black opacity-80 absolute right-0 flex justify-center items-center">
          <div className="m-10">
            <h1 className="text-white text-7xl">"</h1>
            <h1 className="text-white text-4xl">
              Stay fit and healthy with pulse
            </h1>
            <div className="md:w-[75%] w-[90%]">
              <p className="text-white py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="team"
        className="w-full min-h-40 bg-white flex justify-center items-center"
      >
        <div className="flex items-center justify-center">
          <h1 className="text-4xl uppercase px-3 font-medium">OUR TEAM</h1>
          <div className="w-1 h-14 bg-gray-400"></div>
          <p className="text-lg px-3 text-gray-600 w-[50%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            facere ut ipsa dolore atque velit distinctio voluptatum? Natus,
            molestias in?
          </p>
        </div>
      </div>
      <div className=" w-full h-screen bg-[url('/team.jpg')] bg-cover bg-no-repeat"></div>
      <div
        id="contact"
        className=" w-full h-screen bg-[#182029] flex flex-wrap p-3 items-center justify-evenly"
      >
        <div className=" md:w-[40%] h-screen w-full flex flex-col justify-evenly">
          <h1 className=" uppercase text-white text-5xl font-medium">
            Contact Us
          </h1>
          <div className="flex items-center gap-5">
            <div className=" w-16 h-16 rounded-lg bg-blue-400 flex justify-center items-center">
              <FiPhoneCall className=" text-3xl text-white" />
            </div>
            <h1 className=" text-white text-2xl">( 012 ) 1234567</h1>
          </div>
          <div className="flex items-center gap-5">
            <div className=" w-16 h-16 rounded-lg bg-blue-400 flex justify-center items-center">
              <MdOutlineEmail className=" text-3xl text-white" />
            </div>
            <h1 className=" text-white text-2xl">info@fitnessgym.com</h1>
          </div>
          <div className="flex items-center gap-5">
            <div className=" w-16 h-16 rounded-lg bg-blue-400 flex justify-center items-center">
              <IoLocationOutline className=" text-3xl text-white" />
            </div>
            <h1 className=" text-white text-2xl">
              XYZ road Nazimabad No 05 Karachi, Pakistan
            </h1>
          </div>
          <div>
            <h1 className="text-white text-xl">Work Timings:</h1>
            <h1 className="text-white text-xl">
              Mon to Sat : 9am - 8pm daily sunday Off
            </h1>
          </div>
        </div>
        <div className=" md:w-[40%] w-full bg-[#182029]">
          <h1 className=" uppercase text-white text-5xl font-medium">
            FELL FREE CONTACT US
          </h1>
          <form >
            <input
              type="text"
              className=" h-10 md:w-60 w-full rounded-lg px-3 py-2 border-none m-2"
              placeholder="First Name"
            />
            <input
              type="text"
              className=" h-10 md:w-60 w-full rounded-lg px-3 py-2 border-none m-2"
              placeholder="Last Name"
            />
            <br />
            <input
              type="email"
              className=" h-10 md:w-60 w-full rounded-lg px-3 py-2 border-none m-2"
              placeholder="Email"
            />
            <input
              type="text"
              className=" h-10 md:w-60 w-full rounded-lg px-3 py-2 border-none m-2"
              placeholder="Phone Number"
            />
            <textarea className=" rounded-lg m-2 w-full min-h-40 p-3"></textarea>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
