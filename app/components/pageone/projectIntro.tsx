import Image from 'next/image';

export default function ProjectIntro () {
    return (
        <div>
            <div className="sm:w-[597px] sm:h-[192px] absolute sm:inset-x-[90px] sm:inset-y-[2085px]
            w-[328px] h-[144px] inset-x-[31px] inset-y-[2285px] ">
                <h1 className="font-light sm:text-[64px] sm:leading-[64px] 
                text-[36px] leading-[36px]">Shaping Digital Futures, 
                </h1>
                <span className="font-light sm:text-[64px] sm:leading-[64px] text-black/10 
                text-[36px] leading-[36px]">One Design at a Time</span>
            </div>
            <div className="sm:w-[512px] sm:h-[300px] absolute sm:inset-x-[837px] sm:inset-y-[2036px]
            w-[155px] h-[90px] inset-x-[204px] inset-y-[2466px] ">
            <Image src="/image/sixisix.png" width={155} height={90} alt="Sixsix Image" 
            className='sm:w-[512px] sm:h-[300px] '/>
            </div>
            <h2 className='sm:w-[224px] sm:h-[64px] sm:inset-x-[1112px] sm:inset-y-[2288px] sm:leading-[64px] sm:text-[64px] sm:font-light sm:absolute sm:opacity-100 opacity-0'>projects</h2>
        </div>
    );
}