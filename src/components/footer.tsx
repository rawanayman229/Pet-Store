import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FFF6E9] text-[#00171F] px-4 md:px-10 py-10 pt-12 rounded-t-[30px]" >
      
      <div className="bg-[#003459] text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-10 ">
        <div className="text-lg md:text-xl font-semibold">
          Register Now So You Don't Miss <br className="md:hidden" /> Our Programs
        </div>
        <div className="flex w-full md:w-auto items-center">
          <input 
            type="email"
            placeholder="Enter your Email"
            className="p-3 rounded-l-lg text-black bg-white w-full md:w-72 outline-none"
          />
          <button className="bg-[#003459] text-white px-5 py-3 font-semibold rounded-r-lg hover:bg-blue-500 transition">
            Subscribe Now
          </button>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-4 mb-4">
        <div className="flex gap-8 text-sm font-medium mb-4 md:mb-0">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/category" className="hover:text-blue-500 transition">Category</Link>
          <a href="#" className="hover:text-blue-500 transition">About</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
        </div>
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaYoutube /></a>
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2022 Monito. All rights reserved.</p>
        <div className="flex flex-col items-start">
        <a href="/"><img src="images/logo.png" alt="Logo" className="h-10" /></a>
        </div>
        <div className="flex gap-4">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
