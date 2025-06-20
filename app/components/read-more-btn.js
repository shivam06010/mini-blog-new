import Link from "next/link";

export default function ReadMoreBtn({ href, children, edit = false }) {
  return (
    <Link
      href={href}
      className={`${
        edit ? "px-7 py-[10px] " : "px-4 py-3 "
      }text-white inline-block hover:scale-105 transition-all hover:shadow-md duration-200 text-[16px] rounded-[4px] bg-[#245BD1] hover:bg-[#00459d]`}
    >
      {children}
    </Link>
  );
}
