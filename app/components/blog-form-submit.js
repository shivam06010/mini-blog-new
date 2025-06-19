"use client";

import { useFormStatus } from "react-dom";

export default function BlogFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="text-[16px] px-3 py-3 text-white bg-[#245BD1]"
    >
      {pending ? "Submitting..." : "Publish Post"}
    </button>
  );
}
