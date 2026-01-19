import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  return (
    <div className="maindiv">
      <div className="flex flex-col items-center justify-center font-sans">
        <div className="second-maindiv w-full text-center flex flex-col items-center">
          <div className="w-full flex justify-center mb-12">
            <Image
              className="illustration w-full max-w-[600px] object-contain h-auto"
              src="/images/wip-removebg-preview.png"
              alt="Work in progress"
              width={500}
              height={500}
            />
          </div>
          <div className="h1div flex flex-col gap-4 items-center w-full max-w-2xl px-4">
            <h1 className="font-sans text-[40px] font-bold text-black uppercase mb-[30px]">
              Building Something Great
            </h1>
            {/* progress bar  */}
            <div
              className="w-full relative mb-4"
              data-purpose="progress-bar-wrapper"
            >
              <div className="absolute" id="test50">
                <div className="bg-black text-xs font-bold py-1 px-3 rounded shadow-lg relative text-white">
                  40% Completed
                  <div className="tooltip-arrow"></div>
                </div>
              </div>
              <div className="w-full h-[16px]  rounded-full overflow-hidden border-1">
                <div
                  id="test100"
                  className="h-full bg-[#fca311] rounded-full"
                ></div>
              </div>
            </div>
            <Link
              href="/"
              className="inline-block bg-black text-white text-lg font-semibold px-4 py-1 rounded-lg hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
