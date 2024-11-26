export default function Customise() {
  return (
    <div className="customise-it-to-your-needs w-[1921px] h-[812.09px] absolute top-[3268px] left-[1px] py-[140px] px-[220px] gap-[98px] font-inter flex items-center">
      {/* image-container */}

      <div className="w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]"></div>

      {/* heading */}

      <div className="heading w-[669px] h-[411px] gap-[60px] flex flex-col">
        {/* text-block */}

        <div className="text-block w-[669px] h-[288pxpx] gap-[24px] flex flex-col">
          <h1 className="w-[669px] h-[174px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">
            Customise it to your needs
          </h1>
          <p className="w-[669px] h-[90px] font-normal text-lg leading-[30px] tracking-[-0.02em]">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
        </div>

        {/* btn-get-started */}

        <div className="btn-grt-started w-[171px] h-[63px] rounded-lg py-5 px-10 gap-[10px] bg-[#4F9CF9] transition-all hover:bg-[#367fd7]">
          <p className="w-[67px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white">
            Let’s Go
          </p>
        </div>
      </div>
    </div>
  );
}
