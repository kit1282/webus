import Image from 'next/image';

export default function ProductDesign({ 
    title = "Product Design", 
    description = "At Webus, we transform complex challenges into intuitive, user-centric digital solutions. Our product design process blends creativity, strategy, and technology to craft experiences that captivate users and drive growth. Through research, prototyping, and refinement, we create products that exceed expectations. Whether you're a startup or established brand, our expert team brings your vision to life.", 
    imageSrc = "/image/rectangle19.png", 
    imageAlt = "Design Mockups", 
    highlightText = "Innovative designs,", 
    secondaryText = "extraordinary,", 
    tertiaryText = "results" 
}) {
    return (
        <div className="p-10 bg-white">
            <div className=" sm:mx-auto flex flex-col gap-12">
                {/* Product Design Header Section */}
                <h1 className="text-4xl sm:text-[64px] font-light sm:leading-[64px] text-[36px] leading-[36px] ">
                    {title}
                </h1>
                <p className="sm:mt-4 text-black-700 sm:text-lg sm:w-[948px] w-[328px] leading-[25px] text-[14px] ">
                    {description}
                </p>

                {/* Content Section */}
                <div className="sm:mt-10 flex flex-col-reverse sm:flex-row  gap-12 sm:items-start">
                    {/* Image on the Left */}
                    <div className='w-[750px]'>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={300}
                            height={250}
                            className="rounded-lg shadow-lg sm:w-[750px] sm:h-[540px]"
                        />
                    </div>

                    {/* Text Section on the Right */}
                    <div className="w-[250px] sm:ml-8 sm:mt-[100px]">
                        <h2 className="sm:text-[64px] text-[36px] leading-9 font-medium sm:leading-[64px]">
                            {highlightText}
                        </h2>
                        <p className="sm:text-[64px] text-[36px] leading-9 font-light mt-2 text-gray-400 sm:leading-[64px]">
                            {secondaryText}
                        </p>
                        <p className="sm:text-[64px] text-[36px] leading-9 font-light mt-2 text-gray-300 sm:leading-[64px]">
                            {tertiaryText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
