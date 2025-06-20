"use client";

import { postBlog } from "@/lib/actions";
import { useActionState } from "react";
import ImagePicker from "./ImagePicker";
import BlogFormSubmit from "./blog-form-submit";
import FormCreateOrEdit from "./Form";
import { MdOutlinePeopleAlt } from "react-icons/md";

export default function CreateBlog() {
  // const [state, formAction] = useActionState(postBlog, { message: null });

  return (
    <div className="max-w-[1280px] px-3 pt-5 xl:pt-8 xl:px-10 mx-auto bg-white border-[0.5px] rounded-[6px] border-stone-300">
      <h2 className="text-[20px] xl:text-[22px] flex gap-2 items-center font-[200] mb-3">
        <MdOutlinePeopleAlt size={24} className="text-[#0057c5]" />
        <span>Create New Blog</span>
      </h2>
      <p className="text-[16px] - text-stone-400">
        Start writing a new post — share your thoughts, stories, or updates with
        your readers
      </p>

      {/* <form className="my-10 space-y-5" action={formAction}>
        <div className="flex flex-col gap-2">
          <label>Post Title</label>
          <input
            type=""
            name="title"
            className="py-3 px-3 border-stone-200 border-1 rounded-[12px] text-[14px]"
            placeholder="Enter a Engaging title..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Content</label>
          <textarea
            placeholder="Share your thoughts, stories and ideas..."
            name="description"
            className="min-h-[200px] py-3 px-3 border-stone-200 border-1 rounded-[12px] text-[14px]"
          />
        </div>
        <ImagePicker name="image" />

        <div className="flex justify-end">
          <BlogFormSubmit />
        </div>
      </form> */}

      <FormCreateOrEdit />
    </div>
  );
}
