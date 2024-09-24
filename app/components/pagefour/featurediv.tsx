const FeatureDiv = ({ heading, point }: any) => {
 return(
    <div className="flex flex-col w-[330px] h-[100px] 
    sm:w-[270px] sm:h-[100px] gap">
    <h2 className=" sm:text-[16px] text-[14px] leading-[25px] font-semibold">{heading}</h2>
    <ul className="list-disc pl-5">
      <li className=" sm:text-[16px] text-[14px] leading-[25px] font-light">{point}</li>
    </ul>
  </div>
 );
};

export default FeatureDiv;


