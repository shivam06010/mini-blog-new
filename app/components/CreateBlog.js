"use client";

import { postBlog } from "@/lib/actions";
import { useActionState } from "react";
import { useFormState } from "react-dom";
import ImagePicker from "./ImagePicker";
import BlogFormSubmit from "./blog-form-submit";

export default function CreateBlog() {
  const [state, formAction] = useActionState(postBlog, { message: null });

  return (
    <div className="max-w-[1200px] pt-8 px-10 mx-auto bg-white border-1 border-stone-100">
      <h2 className="text-[20px] font-[200] mb-5">Create New Post</h2>
      <p className="text-[14px] text-stone-400">
        Start writing a new post — share your thoughts, stories, or updates with
        your readers
      </p>

      <form className="my-10 space-y-5" action={formAction}>
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
      </form>
    </div>
  );
}
