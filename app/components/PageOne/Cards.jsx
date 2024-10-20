import Image from "next/image";

export default function Cards() {
  return (
    <>
      <div className="sm:min-w-[1262px] sm:min-h-[226px] sm:gap-[22px] sm:ml-[90px] sm:mt-[300px] sm:flex grid grid-cols-2 gap-y-10 mt-[150px] ml-[30px]  ">
        {/* <link href="#" > */}
        <a href="#">
          <div
            className="bg-[#f9f9f9] sm:h-[226px] sm:min-w-[250px] cursor-pointer sm:ease-in-out  sm:hover:-translate-y-[5px] sm:hover:bg-black sm:hover:text-white sm:duration-300 sm:p-5 
           w-[159px] h-[173px]  p-4"
          >
            <div
              className="sm:min-w-[208px] sm:min-h-[196px] p-[10px] gap-[60px] flex flex-col 
            w-[129px] h-[146px]"
            >
              <div
                className="sm:w-[188px] sm:min-h-[26px] gap-[21px] flex justify-between
              w-[110px] h-[26px]"
              >
                <h2
                  className=" sm:text-[25px] sm:leading-6 font-normal
                text-[18px] leading-4 "
                >
                  Contact
                </h2>
                <span
                  className="sm:w-[20px] sm:h-[21px] sm:text-2xl sm:top-[220px] sm:left-[423px] gap-0 opacity-.3 sm:mr-[10px]
                text-lg -mt-1 "
                >
                  ↗️
                </span>
              </div>
              <div className="sm:w-[188px] sm:h-[90px] sm:gap-[10px] ">
                <div
                  className="sm:min-w-[184px] min-h-[40px] gap-[10px] 
                min-w-[100px]"
                >
                  <p
                    className=" sm:text-[40px] font-extralight leading-[40px] 
                  text-[28px]"
                  >
                    Hit us up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* </link> */}

        <a href="1">
          <div
            className="bg-[#f9f9f9] sm:h-[226px] sm:min-w-[250px] [370px]  cursor-pointer sm:ease-in-out sm:hover:-translate-y-[5px] sm:hover:bg-red-500 sm:hover:text-white sm:duration-300 sm:p-5  
           w-[159px] h-[173px]  p-4"
          >
            <div
              className="sm:min-w-[208px] sm:min-h-[196px] p-[10px] sm:gap-[60px] flex flex-col
            w-[129px] h-[146px] gap-[30px]"
            >
              <div
                className="sm:w-[188px] sm:min-h-[26px] gap-[21px] flex justify-between
              w-[110px] h-[26px]"
              >
                <h2
                  className=" sm:text-[25px] sm:leading-6 font-normal
                text-[18px] leading-4"
                >
                  Career
                </h2>
                <span className="sm:w-[20px] sm:h-[21px] sm:text-2xl sm:top-[220px] sm:left-[423px] gap-0 opacity-.3 sm:mr-[10px]">
                  ↗️
                </span>
              </div>
              <div className="sm:w-[188px] sm:h-[90px] sm:gap-[10px] ">
                <div
                  className="sm:min-w-[184px] sm:min-h-[80px] gap-[10px] 
                min-w-[100px]"
                >
                  <p
                    className=" sm:text-[40px] font-extralight leading-[40px]
                  text-[28px]"
                  >
                    Work with us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="2">
          <div
            className="sm:h-[226px] sm:w-[450px]  sm:cursor-pointer sm:ease-in-out sm:hover:-translate-y-[5px] sm:duration-300 sm:p-5 bg-[url('/image/cardbg.png')] hover:bg-blend-luminosity sm:hover:bg-blend-normal 
            w-[159px] h-[173px] p-4 -z-10 
            filter grayscale transition-all duration-300 hover:grayscale-0"
          >
            <div
              className="sm:w-[441px] sm:min-h-[196px] p-[10px] gap-[30px] flex flex-col 
            w-[129px] h-[146px]"
            >
              <div
                className="sm:w-[388px] sm:min-h-[26px] gap-[21px] flex justify-between 
              w-[110px] h-[26px]"
              >
                <h2
                  className=" sm:text-[25px] sm:leading-6 font-normal sm:w-[340px] -my-[2px] -sm:mx-[1px]
                text-[18px] leading-4 "
                >
                  Projects
                </h2>
                <span
                  className="sm:w-[20px] sm:h-[21px] sm:text-2xl sm:top-[220px] sm:left-[423px] gap-0 opacity-.3 sm:mr-[10px]
                text-lg -mt-1 "
                >
                  ↗️
                </span>
              </div>
              <div className="sm:w-[388px] sm:h-[90px] sm:gap-[10px] ">
                <div
                  className="sm:min-w-[184px] min-h-[80px] gap-[10px] 
                min-w-[100px]"
                >
                  <p
                    className=" sm:text-[40px] font-extralight leading-[40px] 
                  text-[28px]"
                  >
                    Our Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="4">
          <div
            className="bg-[#f9f9f9] sm:h-[226px] sm:min-w-[250px] sm:cursor-pointer sm:ease-in-out sm:hover:-translate-y-[5px] sm:hover:bg-black sm:hover:text-white sm:duration-300 sm:p-5  
           w-[159px] h-[173px]  p-4"
          >
            <div
              className="sm:min-w-[208px] sm:min-h-[196px] p-[10px] gap-[30px] flex flex-col
            w-[129px] h-[146px]"
            >
              <div
                className="sm:w-[188px] sm:min-h-[26px] gap-[21px] flex justify-between 
              w-[110px] h-[26px]"
              >
                <h2
                  className=" sm:text-[25px] sm:leading-6 font-normal
                text-[18px] leading-4"
                >
                  Insights
                </h2>
                <span
                  className="sm:w-[20px] sm:h-[21px] sm:text-2xl sm:top-[220px] sm:left-[423px] gap-0 opacity-.3 sm:mr-[10px]
                text-lg -mt-1"
                >
                  ↗️
                </span>
              </div>
              <div className="sm:w-[188px] sm:h-[90px] sm:gap-[10px] ">
                <div
                  className="sm:min-w-[184px] min-h-[80px] gap-[10px] 
                min-w-[100px]"
                >
                  <p
                    className=" sm:text-[40px] font-extralight leading-[40px]
                  text-[28px]"
                  >
                    News & Blogs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
