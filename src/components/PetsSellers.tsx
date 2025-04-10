const PetsSellers: React.FC = () => {
    return (
        <section className="p-10 max-w-7xl mx-auto">
            <p className="text-sm text-black">Proud to be part of
            <span className="text-2xl text-[#003459] font-bold"> Pet Sellers</span></p>
            {/* Brands */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center  gap-12 justify-between mt-5">
            <img src="images/brand1.png" alt="brand1" width={100}  height={100}/>
            <img src="images/brand2.png" alt="brand2" width={100}  height={100}/>
            <img src="images/brand3.png" alt="brand3" width={100}  height={100}/>
            <img src="images/brand4.png" alt="brand4" width={100}  height={100}/>
            <img src="images/brand5.png" alt="brand5" width={100}  height={100}/>
            <img src="images/brand6.png" alt="brand6" width={100}  height={100}/>
            <img src="images/brand7.png" alt="brand7" width={100}  height={100}/>
            </div>
        </section>
    );
};

export default PetsSellers;
