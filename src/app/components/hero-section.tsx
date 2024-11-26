export default function Hero() {
  return (
    <div className="hero-section w-[1920px] h-[829px] py-[140px] px-[220px] absolute top-[92px] left-[1px] flex items-center bg-[#043873]">
      {/* heading st*/}

      <div className="heading text-white w-[656px] h-[361px] gap-[60px] flex flex-col ">
        {/* text-block */}

        <div className="text-block w-[656px] h-[238px] gap-6 font-inter text-white flex flex-col">
          <h3 className="font-bold text-[64px]  leading-[77.45px] tracking-[-0.02em] text-left ">
            Get More Done with <br />
            whitespace
          </h3>
          <p className="w-[656px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
        </div>

        {/* btn-free-trail */}

        <div className="btn-free-trail w-[219px] h-[63px] rounded-lg p-[20px] gap-[10px] bg-[#4F9CF9] transition-all hover:bg-[#367fd7]">
          <p className="w-[159px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-0.02em]">
            Try Whitepace free
          </p>
        </div>
      </div>

      {/* image-container st*/}

      <div className="w-[824px] h-[549px] gap-1 bg-[#C4DEFD]"></div>
    </div>
  );
}
