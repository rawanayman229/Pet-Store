const HomeBanner2: React.FC = () => {
    return (
    <section
        className="mt-15 bg-cover bg-center bg-no-repeat w-full h-auto rounded-xl flex flex-col md:flex-row justify-between items-center px-4 md:px-20 text-center md:text-left"
        style={{ backgroundImage: "url('images/banner2.png')" }}
    >
        {/* Left Content */}
        <div className="text-white mt-6 md:mt-0">
        <div className="flex gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950">
        Adoption </h1>
        <img src="images/paw.png" alt="Dog Paw" width={30} height={30}/>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-3">
        We need help. so do they.
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-900 max-w-xl mx-auto md:mx-0">
        Adopt a pet and give it a home,<br/>
        it will be love you back unconditionally.
        </p>

          {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-transparent hover:border hover:border-gray-900 hover:text-black cursor-pointer">
            Explore Now
            </button>
            <button className="bg-transparent border border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white justify-center flex items-center gap-2 cursor-pointer">
            View Intro
            <i className="pi pi-arrow-right text-base"></i>
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

export default HomeBanner2;


