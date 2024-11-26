import Image from "next/image";
import circles from "@/app/assets/circles.png";
export default function WorkManagement() {
  return (
    <div className="w-[1920px] h-[1588px] absolute top-[921px] left-[1px] py-[140px] px-[220px] gap-[100px] font-inter flex flex-col">
      {/* content-1 */}

      <div className=" content-1 w-[1480px] h-[547px] gap-[60px] flex ">
        {/* headline */}

        <div className="headline w-[672px] h-[411px] gap-[60px] flex flex-col">
          {/* text-block */}

          <div className="text-block w-[672px] h-[288px] gap-[24px] flex flex-col">
            <h1 className="w-[672px] h-[174px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">
              Project Management
            </h1>
            <p className="w-[672px] h-[90px] font-normal text-lg leading-[30px] tracking-[-0.02em]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
          </div>

          {/* btn-get-started */}

          <div className="btn-get-started w-[201px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] transition-all hover:bg-[#367fd7] text-white">
            <p className="w-[97px] h-23px] font-medium text-lg leading-[23px] tracking-[-0.02em]">
              Get Started
            </p>
          </div>
        </div>

        {/* image-container */}

        <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
      </div>

      {/* content-2 */}

      <div className="w-[1480px] h-[661px] gap-[100px] flex items-center">
        <Image src={circles} alt="" className="w-[710px] h-[661px]" />
        <div className="headline w-[670px] h-[294px] gap-[60px] flex flex-col">
          {/* text-block */}

          <div className="text-block w-[670px] h-[171px] gap-[24px] flex flex-col">
            <h1 className="w-[670px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">
              Work together
            </h1>
            <p className="w-[670px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
          </div>

          {/* btn-get-started */}

          <div className="btn-get-started w-[186px] h-[63px] rounded-md py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9] transition-all hover:bg-[#367fd7]">
            <p className="w-[82px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white">
              Try it now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
