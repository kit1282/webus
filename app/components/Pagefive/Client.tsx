import Image from 'next/image'

export default function Client() {
  return (
    <div className="bg-white py-20 px-8  mt-[1350px] flex flex-col">
      {/* Header Section */}
      <div className="max-w-7xl mx-[50px] top-[3483px]">
        <h1 className="text-5xl font-bold text-black">Product design</h1>
        <p className="text-4xl text-gray-400">agency clients</p>
      </div>

      {/* Client Logos */}
      <div className="flex flex-wrap justify-between gap-8 my-10 max-w-7xl mx-[50px]">
        <Image src="/image/samsung.png" alt="" width={150} height={10} />
        <Image src="/image/google.png" alt="Google" width={150} height={50} className='p-4 py-10'/>
        <Image src="/image/netflix.png" alt="Netflix" width={150} height={50} className='p-5 py-12'/>
        <Image src="/image/cisco.png" alt="Cisco" width={150} height={50} className='p-4 py-10'/>
        <Image src="/image/brenntag.png" alt="Brenntag" width={150} height={50} />
      </div>

      {/* Testimonials */}
      <div className=" flex flex-col gap-[100px]">
        {/* First Testimonial */}
        <div className="flex gap-0 items-start text-left w-[720px] ml-[90px] ">
          
          <div className='flex flex-col'>
            <p className="text-lg width-[2px] text-[25px] leading-[30px] font-semibold  text-black">
              Webus transformed our complex SaaS platform into an intuitive, user-friendly experience. Their product design expertise significantly improved our user engagement and retention rates. Their collaborative approach and attention to detail made the entire process seamless and enjoyable.
            </p>
            <div className='flex gap-4 mt-5'>
            <Image
            src="/image/Ellipse 27.png"
            alt="Samantha Chen"
            width={50}
            height={50}
            className="rounded-full"
          />
            <p className="text-sm text-gray-600 mt-2">
              <strong>Samantha Chen</strong> <br />
              CTO at TechInnovate Solutions
            </p>
            </div>
          </div>
        </div>

        {/* Second Testimonial */}
        <div className="flex gap-4 justify-between items-start w-full  ">
        <div className='flex ml-[100px]'>
        <div className="sm:w-[200px] sm:h-[200px] opacity-40 bg-custom-radial rounded-full -z-1
          w-[201px] h-[201px] "></div>
          <div className="sm:w-[240px] sm:h-[240px] border-[1px] border-white bg-custom-radial-2 rounded-full z-5 backdrop-blur-sm -ml-[150px] mt-[40px]
          w-[129px] h-[129px] "></div>
        </div>
         
          <div className='flex flex-col w-[750px]'>
            <p className="text-lg text-[25px] leading-[30px] font-semibold text-black">
              The team at Webus doesn't just design products; they craft experiences. Their deep understanding of user behavior and market trends resulted in a mobile app that exceeded our expectations. The UI is sleek, the UX is smooth, and our users love it. It's been a game-changer for our business.
            </p>
             <div className='flex gap-4 mt-5'>
             <Image
            src="/image/Ellipse 27.png"
            alt="Michael Rodriguez"
            width={50}
            height={50}
            className="rounded-full"
          />
            <p className="text-sm text-gray-600  mt-2">
              <strong>Michael Rodriguez</strong> <br />
              Founder of HealthTech Innovations
            </p>
             </div>
          </div>
        </div>

        {/* Third Testimonial */}
        <div className="flex gap-4 justify-between items-start ml-[90px] mt-10">
          
          <div className='flex flex-col w-[720px]'>
            <p className="text-lg text-[25px] leading-[30px] font-semibold text-black">
              Working with Webus on our e-commerce redesign was an eye-opening experience. Their data-driven approach to product design, combined with their creative flair, delivered a website that not only looks stunning but also performs exceptionally well. Our conversion rates have increased by 40% since the launch.
            </p>
            <div className='flex gap-4 mt-5'>
            <Image
            src="/image/Ellipse 27.png"
            alt="Emily Watson"
            width={50}
            height={50}
            className="rounded-full"
          />
            <p className="text-sm text-gray-600 mt-2">
              <strong>Emily Watson</strong> <br />
              Head of Digital at GlobalRetail Corp
            </p>
            </div>
          </div>

          <div className="sm:w-[300px] sm:h-[300px] opacity-40 bg-custom-radial rounded-full -z-1
          w-[201px] h-[201px] -mt-[150px] "></div>
        </div>

      </div>

    </div>
  );
}
