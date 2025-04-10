
const CategoryPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
    
      <div className="text-sm text-gray-500 mb-4">
        Home &gt; Dog &gt; <span className="text-[#003459] font-medium">Small Dog</span>
      </div>

    
      <div className="bg-[#003459] text-white rounded-2xl p-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">One More Friend</h2>
          <p className="text-lg">Thousands More Fun!</p>
          <p className="text-sm mt-2">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 2000+ different pets that can meet your needs!
          </p>
          <div className="mt-4 space-x-4">
            <button className="bg-white text-[#003459] font-semibold py-2 px-4 rounded-full">View Intro</button>
            <button className="bg-[#F7DBA7] text-[#003459] font-semibold py-2 px-4 rounded-full">Explore Now</button>
          </div>
        </div>
        <img src="/images/hero-dogs.png" alt="Dogs" className="w-1/2 rounded-2xl" />
      </div>

  
      
    </div>
  );
};

export default CategoryPage;
