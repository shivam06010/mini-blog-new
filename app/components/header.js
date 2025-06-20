import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>

      <div className="bg-[#fefeff] border-1 border-stone-200 sticky top-0 left-0 z-50 w-full">
        <Link href="/">
          <div className="max-w-[1300px] flex items-center m-auto h-[70px]">
            <Image
              width={60}
              height={60}
              src="/images/icon.png"
              alt="MB"
              // className="blink  inline-block px-4 py-3 text-[14px] font-semibold text-white rounded-2xl mx-2 bg-[#245BD1]"
            />
            <h1 className=" text-[24px] font-semibold text-[#1C1C1C]">
              MiniBlog
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
}
