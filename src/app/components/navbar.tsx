import Image from "next/image";
import logo from "@/app/assets/Logo.png";
export default function Navbar() {
  return (
    <>
      <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center sticky left-[1px]">
        {/* left */}
        <div className="w-[191px] h-[34px] transition-all hover:scale-125">
          <Image src={logo} alt="" />
        </div>
        {/* right */}
        <div className="w-[737.5px] h-[60px] text-white font-sans flex justify-between items-center">
          <div className="w-[549px] h-8">
            <ul className="flex gap-8">
              <li><a href="#!" className="hover:text-[#FFE492]">Products</a></li>
              <li><a href="#!" className="hover:text-[#FFE492]">Solution</a></li>
              <li><a href="#!" className="hover:text-[#FFE492]">Resources</a></li>
              <li><a href="#!" className="hover:text-[#FFE492]">Pricing</a></li>
            </ul>
          </div>
          <div className="w-[126px] h-[60px] text-[#043873] font-inter">
            <div className="w-[126px] h-[60px] rounded-lg py-4 px-10 bg-[#FFE492] transition-all hover:bg-[#ffda6c]">
              <p className="font-medium text-lg leading-[23px] tracking-[-0.02em]">
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
