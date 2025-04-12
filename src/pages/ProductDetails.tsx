import React, { useEffect, useState } from "react";
import { Carousel } from 'primereact/carousel';
import { Galleria } from 'primereact/galleria';
import ProductCardSection from "../components/cardproducts/productsCard";
import axios from "axios";
import { Product } from "./../types"; 




interface ProductData {
images: string[];
name: string;
price: string;
gender: string;
age: string;
size: string;
color: string;
vaccinated: string;
dewormed: string;
cert: string;
microchip: string;
location: string;
publishedDate: string;
additionalInfo: string;
}

interface Customer {
  image: string;
}



const ProductDetails: React.FC = () => {
const [product, setProduct] = useState<ProductData | null>(null);
const [customers, setCustomers] = useState<Customer[]>([]);
const [productList, setProductList] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "https://round-3-pet-store.digital-vision-solutions.com/api/products"
      );
      console.log("Products response:", response.data);
      const firstProduct = response.data.data[0]; // just for demo
      setProduct(firstProduct);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  fetchProduct();
}, []);




useEffect(() => {
  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        "https://round-3-pet-store.digital-vision-solutions.com/api/customers"
      );
      console.log("Customers response:", response.data);
      setCustomers(response.data.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  fetchCustomers();
}, []);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://round-3-pet-store.digital-vision-solutions.com/api/products"
      );
      console.log("Products response:", response.data);
      setProductList(response.data.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);


const productTemplate = (customer: Customer) => {
  return (
    <div className="px-2">
      <img src={customer.image} alt="Customer with our animal" className="w-full h-auto rounded-lg" />
    </div>
  );
};

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 4,
    numScroll: 4,
  },
  {
    breakpoint: "600px",
    numVisible: 1,
    numScroll: 2,
  },
];


return (
    <section className="mt-10 p-4 md:p-20">
      {/* Details Section */}
    <div className="flex flex-col md:flex-row border border-[#EBEEEF] rounded-2xl justify-between">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-1/2 p-5">
          {/* Product Image */}
          {product?.images && (
  <div className="w-full">
    <Galleria
      value={product.images}
      numVisible={4}
      style={{ width: '100%' }}
      item={(item) => <img src={item} alt="Product Image" style={{ width: '100%', display: 'block' }} />}
      thumbnail={(item) => <img src={item} alt="Product Thumbnail" style={{ display: 'block', width: '50px' }} />}
    />
  </div>
)}

          {/* Section Icons */}
        <div className="flex flex-col md:flex-row mt-5 py-2 px-3 gap-3 bg-red-100 w-full rounded-2xl">
            <div className="flex items-center gap-1">
            <img src="images/icon1.png" alt="dog icon" width={20} height={20} />
            <p className="font-bold text-sm text-[#002A48] sm:text-base">100% health guarantee for pets</p>
            </div>
            <div className="flex items-center gap-1">
            <img src="images/icon2.png" alt="icon" width={20} height={20} />
            <p className="font-bold text-sm text-[#002A48] sm:text-base">100% guarantee of pet identification</p>
            </div>
        </div>

          {/* Share Icons */}
        <div className="flex flex-col md:flex-row mt-5 py-2 px-3 gap-10 bg-transparent w-full">
            <div className="flex items-center gap-1">
            <i className="pi pi-share-alt text-[#002A48]"></i>
            <p className="font-bold text-sm text-[#002A48] sm:text-base">Share:</p>
            </div>
            <div className="flex items-center gap-3 text-[#99A2A5]">
            <a href="#"><i className="pi pi-facebook hover:text-[#2b2c2c]"></i></a>
            <a href="#"><i className="pi pi-twitter hover:text-[#2b2c2c]"></i></a>
            <a href="#"><i className="pi pi-instagram hover:text-[#2b2c2c]"></i></a>
            <a href="#"><i className="pi pi-youtube hover:text-[#2b2c2c]"></i></a>
            </div>
        </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 p-5">
        {product ? (
            <>
            <h2 className="text-2xl font-bold text-black mb-4">{product.name}</h2>
            <p className="text-xl text-[#002A48] font-semibold mb-4">{product.price}</p>

          

 {/* Buttons */}
<div className="flex flex-row sm:flex-row gap-4 w-full mt-6 ">
                    <button className="bg-transparent w-full border border-gray-900 text-sm sm:text-base text-gray-900 font-semibold transition-all duration-400 
                    p-2 rounded-full hover:bg-gray-900 hover:text-white justify-center flex items-center cursor-pointer">
                        Contact us 
                    </button>

                    <button className="bg-gray-900 p-1 w-full text-white text-sm sm:text-base rounded-full hover:bg-transparent hover:border
                    hover:border-gray-900 hover:text-black transition-all duration-400  cursor-pointer">
<i className="pi pi-comment"></i> Chat with Monito
                    </button>
    </div>

{/* Details */}
<div className="flex  text-[#667479] justify-between  border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Gender:</p>
    <p>{product.gender}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Age:</p>
    <p>{product.age}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Size:</p>
    <p>{product.size}</p>
</div>


<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Color:</p>
    <p>{product.color}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Vaccinated:</p>
    <p>{product.vaccinated}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Dewormed:</p>
    <p>{product.dewormed}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Cert:</p>
    <p>{product.cert}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Microchip:</p>
    <p>{product.microchip}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Location:</p>
    <p>{product.location}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">PublishedDate:</p>
    <p>{product.publishedDate}</p>
</div>

<div className="flex  text-[#667479] justify-between border-b border-b-gray-200 mt-5">
    <p className=" font-bold">Additional Information :</p>
    <p>{product.additionalInfo}</p>
</div>

            </>
        ) : (
            <p>Loading product details...</p>
        )}
        </div>
    </div>

{/* Our Customers Section */}
    <div className="mt-10 p-4">
<h2 className="text-[#00171F] text-2xl font-extrabold px-15">Our lovely customer</h2>

<div className="p-4">
<Carousel
        value={customers}
        autoplayInterval={3000}
        numVisible={4}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
</div>
    </div>

    {/* Cards Section */}
    <div className="pt-[2px] row-span-1 min-h-screen">
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-black">
              Hard to choose right products for your pets?
            </p>
            <h2 className="text-2xl text-[#003459] font-bold">Our Products</h2>
          </div>

        </div>

        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            {productList.map((product, idx) => (
              <ProductCardSection key={idx} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>




    </section>
);
};


export default ProductDetails;


