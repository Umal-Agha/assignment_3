import Image from "next/image";
import logo from "@/app/assets/Logo.png";
export default function Footer() {
  return (
    <div className="w-[1920px] h-[461px] absolute top-[5195px] left-[1px] pt-[140px] pb-[32px] px-[220px] gap-[200px] bg-[#043873] text-white font-inter">
      {/* content */}

      <div className="w-[1480px] h-[289px] gap-[100px] flex flex-col">
        {/* info */}

        <div className="w-[1480px] h-[169px] gap-[100px] flex">
          <div className="logo-description w-[295px] h-[169px] gap-[15px] flex flex-col">
            <Image 
            src={logo} 
            alt="" 
            className="w-[191px] h-[34px]" 
            />
            <p className="w-[240px] h-[120px] font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className="info-1 w-[295px] h-[127px] gap-[15px] flex flex-col">
            <p className="w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
              Product
            </p>
            <p className="w-[70px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-[#FFE492]">
              Overview
            </p>
            <p className="w-[50px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              Pricing
            </p>
            <p className="w-[177px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              Customer stories
            </p>
          </div>
          <div className="info-2 w-[295px] h-[130px] gap-[16px] flex flex-col">
            <p className="w-[91px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
              Resources
            </p>
            <p className="w-[33px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              Blog
            </p>
            <p className="w-[128px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              Guides & tutorials
            </p>
            <p className="w-[130px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              Help center
            </p>
          </div>
          <div className="info-3 w-[295px] h-[130px] gap-[16px] flex flex-col">
            <p className="w-[83px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
              Company
            </p>
            <p className="w-[66px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              About us
            </p>
            <p className="w-[62px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              Careers
            </p>
            <p className="w-[99px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              Media kit
            </p>
          </div>
        </div>

        {/* btm */}

        <div className="w-[1480px] h-[20px] flex justify-center">
          <div className="w-[169px] h-[20px] gap-[16px]">
            <p className="w-[169px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em]">
              ©2021 Whitepace LLC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
