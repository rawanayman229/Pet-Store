// const SecondBanner: React.FC = () => {
//     return (
//     <section
//         className="mt-15 bg-cover bg-center bg-no-repeat w-full h-auto rounded-xl flex flex-col md:flex-row justify-between items-center px-4 md:px-20 text-center md:text-left"
//         style={{ backgroundImage: "url('images/banner2.png')" }}
//     >
//         {/* Left Content */}
//         <div className="text-white mt-6 md:mt-0 justify-center items-center sm:justify-center md:justify-left text-left">
//         <div className="flex gap-4">
//         <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-950">
//         Adoption </h1>
//         <img src="images/paw.png" alt="Dog Paw" width={50} height={50}/>
//         </div>

//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-5">
//         We need help. so do they.
//         </h2>
//         <p className="text-md  md:text-md sm:text-sm mt-4 text-gray-900">
//         Adopt a pet and give it a home,<br/>
//         it will be love you back unconditionally.
//         </p>

//    {/* Buttons */}
//         <div className="flex flex-row sm:flex-row gap-4 w-full mt-6">
//                     <button className="bg-transparent border border-gray-900 text-gray-900 font-semibold transition-all duration-400 
//                     px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white justify-center flex items-center gap-2 cursor-pointer">
//                         View Intro  
//                         <i className="pi pi-play-circle"></i>
//                     </button>

//                     <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-transparent hover:border
//                     hover:border-gray-900 hover:text-black transition-all duration-400  cursor-pointer">
//                         Explore Now
//                     </button>
//     </div>
// </div>

//         {/* Right Content */}
//         <img
// src="images/banner2photo.png"
// alt="a girl holds dog"
// width={500}
// height={500}
// className="mt-0 -mb-0"
// />
//     </section>
//     );
// };

// export default SecondBanner;

import React from "react";

const SecondBanner: React.FC = () => {
  return (
    <section
      className="mt-15 w-full h-auto rounded-xl flex flex-col md:flex-row justify-between items-center px-4 md:px-20 text-center md:text-left"
      style={{
        backgroundImage: "url('images/banner2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Content */}
      <div className="text-white mt-6 md:mt-0 justify-center items-center sm:justify-center md:justify-left text-left">
        <div className="flex gap-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-950">
            Adoption
          </h1>
          <img src="images/paw.png" alt="Dog Paw" width={50} height={50} />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-5">
          We need help. so do they.
        </h2>
        <p className="text-md  md:text-md sm:text-sm mt-4 text-gray-900">
          Adopt a pet and give it a home,<br />
          it will be love you back unconditionally.
        </p>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row gap-4 w-full mt-6">
          <button className="bg-transparent border border-gray-900 text-gray-900 font-semibold transition-all duration-400 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white justify-center flex items-center gap-2 cursor-pointer">
            View Intro
            <i className="pi pi-play-circle"></i>
          </button>

          <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-transparent hover:border hover:border-gray-900 hover:text-black transition-all duration-400  cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>

      {/* Right Content */}
      <img
        src="images/banner2photo.png"
        alt="a girl holds dog"
        width={500}
        height={500}
        className="mt-0 -mb-0"
      />
    </section>
  );
};

export default SecondBanner;