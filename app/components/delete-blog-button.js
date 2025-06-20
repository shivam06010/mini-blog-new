"use client";
import { useRouter } from "next/navigation";

import { deleteBlog } from "@/lib/testing";
import { MdDeleteOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

export default function DeleteBlogButton({ blog }) {
  const router = useRouter();

  async function handleDelete() {
    const confirm = window.confirm(
      "Are you sure you want to delete this Blog post?"
    );
    if (!confirm) return;
    await deleteBlog(blog);
    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-[11px]  cursor-pointer rounded-[6px] border-red-500 border-[1px] "
    >
      <RiDeleteBinLine className="text-red-500 " size={20} />
    </button>
  );
}
