"use client";
import { useRouter } from "next/navigation";

import { deleteBlog } from "@/lib/testing";
import { MdDeleteOutline } from "react-icons/md";

export default function DeleteBlogButton({ blog }) {
  const router = useRouter();

  async function handleDelete() {
    const confirm = window.confirm(
      "Are you sure you want to delete this Blog post?"
    );
    if (!confirm) return;
    await deleteBlog(blog);
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="px-2 py-2 border-1 cursor-pointer rounded-[6px] border-red-500"
    >
      <MdDeleteOutline className="text-red-500" size={20} />
    </button>
  );
}
