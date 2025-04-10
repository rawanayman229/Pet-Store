const Hero: React.FC = () =>{

    return (
        <section

            className="mt-20 bg-cover bg-center bg-no-repeat w-full min-h-[90vh] flex items-center justify-center px-4 md:px-20"
            style={{ backgroundImage: "url('/images/hero.png')" }}>


      {/* Left Content */}
<div className="text-white mt-6 md:mt-0 justify-center items-center sm:justify-center md:justify-left text-left">
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 ">
        One More Friend
    </h1>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-5">
        Thousands More Fun!
    </h2>
    <p className="text-md  md:text-md sm:text-sm mt-4 text-gray-900 ">
        Having a pet means you have more joy, a new friend, a happy<br />
        person who will always be with you to have fun. We have 200+ <br />
        different pets that can meet your needs!
    </p>

      {/* Buttons */}
    <div className="flex flex-row sm:flex-row gap-4 w-full mt-6 ">
                    <button className="bg-transparent border border-gray-900 text-gray-900 font-semibold transition-all duration-400 
                    px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white justify-center flex items-center gap-2 cursor-pointer">
                        View Intro  
                        <i className="pi pi-play-circle"></i>
                    </button>

                    <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-transparent hover:border
                    hover:border-gray-900 hover:text-black transition-all duration-400  cursor-pointer">
    Explore Now
                    </button>
    </div>
</div>
        {/* Right Content */}
        <img
src="images/heroPhoto.png"
alt="a girl holds dog"
width={500}
height={500}
className="mt-10 mb-0"
/>
        </section>
    );
};

export default Hero;
