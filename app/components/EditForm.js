"use client";

import { useActionState, useState } from "react";
import BlogFormSubmit from "./blog-form-submit";
import ImagePicker from "./ImagePicker";
import { editAndPostBlog } from "@/lib/actions";

function EditForm({ blog }) {
  const [state, formAction] = useActionState(editAndPostBlog, {
    message: null,
  });

  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [image, setImage] = useState(blog.image);

  return (
    <form
      className="xl:my-10 mt-7 mb-4 bg-white space-y-8 xl:space-y-10 "
      action={formAction}
    >
      <div className="flex flex-col gap-2">
        <label>Blog Title</label>

        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          defaultValue={blog.title}
          name="title"
          className="py-3 px-4 border-stone-200 border-1 rounded-[8px] text-[14px] focus:border-[1px] focus:outline-none
 focus:border-[#0057c5]"
          placeholder="Enter a Engaging title..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Content</label>
        <textarea
          defaultValue={blog.description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Share your thoughts, stories and ideas..."
          name="description"
          className="min-h-[200px] focus:border-[1px] focus:outline-none
 focus:border-[#0057c5] py-4 px-4 border-stone-200 border-1 rounded-[8px] text-[14px]"
        />
      </div>
      <input type="hidden" name="slug" value={blog.slug} />
      <input type="hidden" name="existingImage" value={blog.image} />
      <ImagePicker setImage={setImage} name="image" prevImage={blog?.image} />

      <div className="flex justify-end">
        {!title || !description || !image ? (
          <BlogFormSubmit isDisabled={false}>Save Changes</BlogFormSubmit>
        ) : (
          <BlogFormSubmit isDisabled={false}>Save Changes</BlogFormSubmit>
        )}
      </div>
    </form>
  );
}

export default EditForm;
