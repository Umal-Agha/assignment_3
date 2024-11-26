export default function Extension() {
  return (
    <div className="use-as-extension w-[1921px] h-[759px] absolute top-[2509px] left-[1px] py-[140px] px-[220px] bg-[#043873] gap-[98px] font-inter text-white flex items-center">
      {/* heading */}

      <div className="heading w-[697px] h-[294px] gap-[60px] flex flex-col">
        {/* text-block */}

        <div className="text-block w-[697px] h-[171px] gap-[24px] flex flex-col">
          <h1 className="w-[697px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">
            Use as Extension
          </h1>
          <p className="w-[697px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em]">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
        </div>

        {/* btn-get-started */}

        <div className="btn-get-started w-[171px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] transition-all hover:bg-[#367fd7]">
          <p className="w-[67px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em]">
            Let’s Go
          </p>
        </div>
      </div>

      {/* illustration */}

      <div className="w-[686px] h-[479px] gap-1">
        <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
      </div>
    </div>
  );
}
