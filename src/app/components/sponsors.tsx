import Image from "next/image";
import Apple from "@/app/assets/Apple.png";
import Microsoft from "@/app/assets/Microsoft.png";
import Slack from "@/app/assets/Slack.png";
import Google from "@/app/assets/Google.png";
export default function Sponsors() {
  return (
    <div className="our-sponsors w-[1922px] h-[538px] absolute top-[4654px] py-[140px] px-[220px] gap-[100px] font-inter flex flex-col ">
      <h1 className="w-[1482px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-center">
        Our sponsors
      </h1>
      <div className="sponsors w-[1482px] h-[71px] flex justify-between">
        <Image 
          src={Apple} 
          alt="" 
          className="w-[55.47px] h-[68px] gap-[4px]" 
        />
        <Image
          src={Microsoft}
          alt=""
          className="w-[287px] h-[62px] gap-[4px]"
        />
        <Image
         src={Slack} 
         alt="" 
         className="w-[280px] h-[71px] gap-[4px]" 
        />
        <Image
          src={Google}
          alt=""
          className="w-[211px] h-[69.81px] gap-[4px]"
        />
      </div>
    </div>
  );
}
