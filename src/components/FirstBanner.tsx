import React from "react";

const FirstBanner: React.FC = () => {
  return (
    <section
    className="mt-20 w-full h-auto rounded-xl bg-[url('images/bannerMob.png')]  sm:bg-[url('images/banner1.png')] flex flex-col md:flex-row justify-between items-center px-4 md:px-20 text-right md:text-right"
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
      {/* Left Content (Hidden on small screens) */}
      <img
        src="images/bannerPhoto.png"
        alt="a girl holds dog"
        width={500}
        height={500}
        className="mt-10 -mb-0 md:block hidden"
      />

      {/* Right Content (Order changed on small screens) */}
      <div className="text-white mt-6 md:mt-0 sm:text-center sm:justify-center sm:items-center md:text-right w-full md:w-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-950">
          One More Friend
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-3">
          Thousands More Fun!
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-900 max-w-xl mx-auto md:mx-0">
          Having a pet means you have more joy, a new friend, a happy<br />
          person who will always be with you to have fun. We have 200+ <br />
          different pets that can meet your needs!
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-end sm:flex-row gap-4 w-full mt-6 ">
          <button className="bg-transparent border border-gray-900 text-gray-900 font-semibold transition-all duration-400 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white justify-center flex items-center gap-2 cursor-pointer">
            View Intro
            <i className="pi pi-play-circle"></i>
          </button>

          <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-transparent hover:border hover:border-gray-900 hover:text-black transition-all duration-400  cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>

      {/* Image for small screens (appears below the text) */}
      <img
        src="images/bannerPhoto.png"
        alt="a girl holds dog"
        className="mt-8 sm:order-1 md:hidden block w-full max-w-md mx-auto"
      />
    </section>
  );
};

export default FirstBanner;