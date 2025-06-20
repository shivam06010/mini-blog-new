"use client";

import { useFormStatus } from "react-dom";

export default function BlogFormSubmit({ isDisabled, children }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`${
        isDisabled
          ? "bg-[#e3e3e3] text-[#757575] opacity-70 "
          : "bg-[#245BD1] text-white hover:bg-[#00459d] "
      }mt-4 cursor-pointer hover:scale-105 transition-all duration-200  flex gap-3 items-center  px-5 py-3 rounded-[6px]`}
    >
      {pending ? "Submitting..." : children}
    </button>
  );
}
