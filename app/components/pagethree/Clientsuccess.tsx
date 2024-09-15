// components/ClientSuccess.js
const ClientSuccess = () => {
    return (
      <section className="bg-white py-16 relative">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 lg:px-12">
          {/* Left Content */}
          <div className="relative z-10  ">
          <div className=" bg-[url('/image/webusBG.png')]  bg-top[5px] bg-no-repeat bg-center h-screen bg-white absolute top-[20px] left-[-20px] text-[200px] ">
          <h1 className="text-5xl font-normal leading-tight w-[591px] h-[128px]  top-[1px] left-[90px] gap-0 ">
              UX Mastery in Action: <br /> Client Success
            </h1>
            
            </div>
           
            <p className="text-lg text-gray-600 max-w-lg w-[456px] h-[100px] absolute top-[300px] left-[386px]">
              Our case studies showcase how we've revolutionized user experiences across industries, turning complex challenges into intuitive, engaging digital solutions that drive measurable business growth.
            </p>
  
            {/* Watermark Text */}
            
          </div>
  
          {/* Right Content (3D Object) */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/image/5.png"
              alt="3D Object"
              className="w-80 h-80 object-contain"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ClientSuccess;
  