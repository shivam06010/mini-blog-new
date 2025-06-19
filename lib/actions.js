"use server";

import { revalidatePath } from "next/cache";
import { saveBlog } from "./blogs";
import { redirect } from "next/navigation";

export async function postBlog(prevState, formData) {
  const blog = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  if (
    !blog.title ||
    blog.title.trim() == "" ||
    !blog.description ||
    blog.description.trim() == "" ||
    !blog.image ||
    blog.image.size === 0
  )
    return { message: "Invalid inputs" };

  console.log(formData);

  await saveBlog(blog);
  revalidatePath("/");
  redirect("/");
}
