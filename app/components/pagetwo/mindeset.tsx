import Image from "next/image";

export default function Mindset() {
  return (
    <div className="-mt-[50px] sm:mt-[0px] ">

      <div className=" flex flex-col items-start sm:gap-[130px] px-8 sm:px-24 py-16 bg-white">

        <div className="flex flex-col sm:flex-row sm:gap-[200px] mt-12">
          <div className=" flex flex-col gap-5 sm:gap-[50px]">
            {/* Section Title */}
            <div className="flex flex-col space-y-2">
              <h2 className="text-[18px] font-bold sm:text-[25px]">
                How we think
              </h2>
              <h1 className="text-[36px] font-light sm:text-[64px]">
                Our Mindset
              </h1>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-[24px] font-normal sm:text-[16px] sm:leading-[25px] w-[330px] sm:w-[414px]">
              At Webus, we approach every project with a blend of creativity,
              strategic thinking, and technological expertise. Our mindset is
              rooted in understanding user needs, pushing boundaries, and
              crafting solutions that stand the test of time.
            </p>
          </div>

          
          <div className="flex flex-col mt-[70px] sm:mt-[0px] sm:grid sm:grid-cols-2 gap-[40px] sm:gap-[80px]">
            {/* First Principle: User-First Approach */}
            <div className="flex flex-col gap-8 sm:gap-0 space-y-2 w-full sm:w-[315px]">
              <h2 className="text-[14px] font-bold sm:text-[16px]">
                User-First Approach
              </h2>
              <p className="text-[14px] leading-[25px] font-normal sm:text-[16px]">
                We prioritize user needs in every design decision, creating
                intuitive and impactful digital solutions that deliver real
                value and enhance experiences.
              </p>
            </div>

            {/* Second Principle: Data-Driven Design */}
            <div className="flex flex-col gap-8 sm:gap-0 space-y-2 w-full sm:w-[290px] ">
              <h2 className="text-[14px] font-bold sm:text-[16px]">
                Data-Driven Design
              </h2>
              <p className="text-[14px] leading-[25px] font-normal sm:text-[16px]">
                Our designs blend creativity with analytics, ensuring visually
                appealing and strategically effective solutions that drive
                measurable results for our clients.
              </p>
            </div>
            {/* Third Principle: Continuous Innovation */}
            <div className="flex flex-col gap-8 sm:gap-0 space-y-2 w-full sm:w-[290px]">
              <h2 className="text-[14px] font-bold sm:text-[16px]">
                Continuous Innovation
              </h2>
              <p className="text-[14px] leading-[25px] font-normal sm:text-[16px]">
                We explore cutting-edge trends and technologies, bringing fresh
                perspectives to every project and staying ahead in the
                ever-evolving digital landscape.
              </p>
            </div>

            {/* Fourth Principle: Collaborative Synergy */}
            <div className="flex flex-col gap-8 sm:gap-0 space-y-2 w-full sm:w-[290px]">
              <h2 className="text-[14px] font-bold sm:text-[16px]">
                Collaborative Synergy
              </h2>
              <p className="text-[14px] leading-[25px] font-normal sm:text-[16px]">
                Our open environment fosters idea-sharing and creativity,
                leading to exceptional results through the combined strengths of
                our diverse team.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-[200px] mt-[40px] sm:mt-[0px]">
          <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2 gap-[40px] sm:gap-[80px]">
            {/* Fifth Principle: Agile Adaptability */}
            <div className="flex flex-col gap-8 sm:gap-0 space-y-2 w-full sm:w-[290px]">
              <h2 className="text-[14px] font-bold sm:text-[16px]">
                Agile Adaptability
              </h2>
              <p className="text-[14px] leading-[25px] font-normal sm:text-[16px]">
                We remain flexible in the fast-paced digital world, quickly
                adapting to changes and emerging opportunities to deliver
                timely, relevant solutions.
              </p>
            </div>
            {/* Sixth Principle: Holistic Problem-Solving */}
            <div className="flex flex-col gap-8 sm:gap-0 space-y-2 w-full sm:w-[290px]">
              <h2 className="text-[14px] font-bold sm:text-[16px]">
                Holistic Problem-Solving
              </h2>
              <p className="text-[14px] leading-[25px] font-normal sm:text-[16px]">
                We approach challenges comprehensively, considering broader
                contexts to create sustainable, scalable solutions that address
                both immediate and long-term needs.
              </p>
            </div>
            {/* Seventh Principle: Ethical Design */}
            <div className="flex flex-col gap-8 sm:gap-0 space-y-2 w-full sm:w-[290px]">
              <h2 className="text-[14px] font-bold sm:text-[16px]">
                Ethical Design
              </h2>
              <p className="text-[14px] leading-[25px] font-normal sm:text-[16px]">
                We prioritize ethical considerations in our work, ensuring our
                designs promote inclusivity, accessibility, and positive
                societal impact across all projects.
              </p>
            </div>
          </div>

          {/* Image Section (for larger screens) */}
          <div className="hidden sm:block sm:w-[440px] sm:h-[280px] mt-12">
            <Image
              src="/image/mindsetimg.png"
              alt="quote"
              width={440}
              height={280}
              className="w-full h-full "
            />
          </div>
        </div>

      </div>

    </div>
  );
}
