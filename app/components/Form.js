"use client";
import { useActionState } from "react";
import BlogFormSubmit from "./blog-form-submit";
import ImagePicker from "./ImagePicker";
import { postBlog } from "@/lib/actions";

function FormCreateOrEdit({ blog, editing = false }) {
  const [state, formAction] = useActionState(postBlog, { message: null });

  return (
    <form className="my-10 space-y-5" action={formAction}>
      <div className="flex flex-col gap-2">
        <label>Post Title</label>

        <input
          defaultValue={blog ? blog.title : ""}
          type=""
          name="title"
          className="py-3 px-3 border-stone-200 border-1 rounded-[12px] text-[14px]"
          placeholder="Enter a Engaging title..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Content</label>
        <textarea
          defaultValue={blog ? blog.description : ""}
          placeholder="Share your thoughts, stories and ideas..."
          name="description"
          className="min-h-[200px] py-3 px-3 border-stone-200 border-1 rounded-[12px] text-[14px]"
        />
      </div>
      <ImagePicker name="image" prevImage={blog?.image} />

      {editing && <input type="hidden" name="slug" value={blog.slug} />}

      <div className="flex justify-end">
        <BlogFormSubmit />
      </div>
    </form>
  );
}

export default FormCreateOrEdit;
