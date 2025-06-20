"use client";
import { useActionState, useState } from "react";
import BlogFormSubmit from "./blog-form-submit";
import ImagePicker from "./ImagePicker";
import { postBlog } from "@/lib/actions";

function FormCreateOrEdit({ blog, editing = false }) {
  const [state, formAction] = useActionState(postBlog, { message: null });
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState(null);

  return (
    <form
      className="mt-8 mb-4 xl:my-10 space-y-6 xl:space-y-10"
      action={formAction}
    >
      <div className="flex flex-col gap-2">
        <label>Blog Title</label>

        <input
          onChange={(e) => setTitle(e.target.value)}
          type=""
          name="title"
          className="py-3 px-4 border-stone-200 border-1 rounded-[8px] text-[14px] focus:border-[1px] focus:outline-none

 focus:border-[#0057c5]"
          placeholder="Enter a Engaging title..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Content</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Share your thoughts, stories and ideas..."
          name="description"
          className="min-h-[200px] focus:border-[1px] focus:outline-none
 focus:border-[#0057c5] py-4 px-4 border-stone-200 border-1 rounded-[8px] text-[14px]"
        />
      </div>
      <ImagePicker setImage={setImage} name="image" prevImage={blog?.image} />

      <div className="flex justify-end">
        {!title || !description || !image ? (
          <BlogFormSubmit isDisabled={true}>Create Blog</BlogFormSubmit>
        ) : (
          <BlogFormSubmit isDisabled={false}>Create Blog</BlogFormSubmit>
        )}
      </div>
    </form>
  );
}

export default FormCreateOrEdit;
