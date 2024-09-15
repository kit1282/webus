export default function OfficeAddress(){
    return(
        <div className="bg-black absolute inset-y-[5800px] w-[390px] h-[440px] flex flex-col
        sm:inset-y-[6080px] sm:w-[1455px] sm:h-[270px] sm:flex-row ">
            <h1 className=" w-[96px] h-[36px] text-[36px] leading-[36px] font-light text-white ml-[31px] mt-[50px]
            sm:w-[170px] sm:h-[64px] sm:text-[64px] sm:leading-[64px] sm:ml-[86px] sm:mt-[110px]">
                Office
            </h1>
            <div className="= w-[210px] h-[95px] mt-[60px] ml-[31px]
            sm:w-[210px] sm:h-[104px] sm:ml-[486px] sm:mt-[110px]">
                <h2 className="text-[25px] leading-[25px] font-bold text-white
                sm:text-[25px] sm:leading-[25px]">
                Tennessee, US
                </h2>
                <p className="text-[14px] leading-[30px] mt-3 font-normal text-white
                sm:text-[18px] sm:leading-[30px]">
                1000 Battlefield drive
                Nashville TN 37204
                </p>
            </div>
            <div className="= w-[210px] h-[95px] mt-[60px] ml-[31px]
            sm:w-[210px] sm:h-[104px] sm:ml-[186px] sm:mt-[110px]">
                <h2 className="text-[25px] leading-[25px] font-bold text-white
                sm:text-[25px] sm:leading-[25px]">
                Delhi, India
                </h2>
                <p className="text-[14px] leading-[30px] mt-3 font-normal text-white
                sm:text-[18px] sm:leading-[30px]">
                A-10 Vishwakarma colony
                New Delhi - 110044
                </p>
            </div>
        </div>
    );
}