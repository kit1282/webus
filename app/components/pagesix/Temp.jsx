export default function Features() {
  return (
    <div className="flex ">
      <div className="flex flex-col">
        <h1 className=" w-[271px] h-[40px]  top-[1248px] left-[219px] gap-0  text-[40px] font-medium leading-3 text-left">
          UI design
        </h1>
        <p className="w-[270px] h-[120px] top-[1620px] left-[219px] gap-0 text-[25px] font-normal  text-left">
          Creating visually appealing and intuitive interfaces for seamless
          interactions
        </p>
      </div>

      <div className="flex">

            <div className="flex flex-col">
                <div className="w-[270px] h-[150px] flex flex-col top-[1248px] left-[630px] gap-0">
            <h1 className="text-[16px] font-bold leading-[25px] text-left">
              Visual Design
            </h1>
            <ul>
              <li className="text-[16px] font-normal leading-[25px] text-left">
                Create aesthetically pleasing layouts, color schemes, and
                typography that align with brand identity and enhance user
                engagement.
              </li>
            </ul>
                </div>
                <div className="w-[270px] h-[150px] absolute top-[1448px] left-[630px] gap-0">
            <h1 className="text-[16px] font-bold leading-[25px] text-left">
              Responsive Design
            </h1>
            <ul>
              <li className="text-[16px] font-normal leading-[25px] text-left">
                Ensure seamless user experiences across various devices and
                screen sizes, from mobile to desktop
              </li>
            </ul>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="w-[270px] h-[150px] absolute top-[1248px] left-[1013px] gap-0">
              <h1 className="text-[16px] font-bold leading-[25px] text-left">
                Interaction Design
              </h1>
              <li>
                <ul className="text-[16px] font-normal leading-[25px] text-left">
                  Design intuitive user interactions and animations that guide
                  users through the interface smoothly and enhance overall
                  usability.
                </ul>
              </li>
                </div>
                <div className="w-[270px] h-[150px] absolute top-[1448px] left-[1013px] gap-0">
              <h1 className="text-[16px] font-bold leading-[25px] text-left">
                Accessibility
              </h1>
              <li>
                <ul className="text-[16px] font-normal leading-[25px] text-left">
                  Implement inclusive design principles to make interfaces
                  usable for people with diverse abilities and needs.
                </ul>
              </li>
                </div>
            </div>

        </div>

    </div>
    
  );
}
