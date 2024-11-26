export default function YourWork() {
  return (
    <div className="your-work w-[1921px] h-[574px] absolute top-[4080px] left-[1px] py-[140px] px-[220px] bg-[#043873] text-white font-inter">
      {/* heading */}

      <div className="w-[1481px] h-[294px] gap-[60px] flex flex-col justify-center items-center ">
        {/* text-block */}

        <div className="text-block w-[1064] h-[171px] gap-[24px] flex flex-col">
          <h1 className="w-[1064px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">
            Your work, everywhere you are
          </h1>
          <p className="w-[1064px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] text-center">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>

        {/* btn-try */}

        <div className="btn-try w-[195px] h-[63px] rounded-lg py-5 px-10 gap-[10px] bg-[#4F9CF9] transition-all hover:bg-[#367fd7]">
          <p className="w-[91px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em]">
            Try Taskey
          </p>
        </div>
      </div>
    </div>
  );
}
