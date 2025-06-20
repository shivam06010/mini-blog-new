"use server";
import fs from "node:fs";
import { revalidatePath } from "next/cache";
import { editBlog, saveBlog } from "./blogs";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { supabase } from "@/supabaseClient";

export async function postBlog(prevState, formData) {
  const blog = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  blog.slug = slugify(blog.title, { lower: true });
  const imageFile = blog.image;
  const extension = blog.image.name.split(".").pop();
  const filename = `${blog.slug}-${Date.now()}.${extension}`;

  if (
    !blog.title ||
    blog.title.trim() == "" ||
    !blog.description ||
    blog.description.trim() == "" ||
    !blog.image
  )
    return { message: "Invalid inputs" };

  let { data, error } = await supabase.storage
    .from("images")
    .upload(filename, imageFile);

  const { data: url } = await supabase.storage
    .from("images")
    .getPublicUrl(filename);

  blog.image = url.publicUrl;

  await saveBlog(blog);
  // alert("Blog added Successfully !");
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function editAndPostBlog(prevState, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const slug = formData.get("slug");
  const imageFile = formData.get("image");
  const existingImage = formData.get("existingImage");

  // if (!title || !description || !slug) {
  //   return { message: "Invalid inputs" };
  // }

  let imagePath = existingImage;

  if (imageFile && imageFile.size > 0) {
    const extension = imageFile.name.split(".").pop();
    const filename = `${slug}-${Date.now()}.${extension}`;
    // const fullPath = `public/images/${filename}`;
    // const bufferedImage = Buffer.from(await imageFile.arrayBuffer());
    // fs.writeFileSync(fullPath, bufferedImage);

    let { data, error } = await supabase.storage
      .from("images")
      .upload(filename, imageFile);

    if (error) throw error;

    const { data: url } = await supabase.storage
      .from("images")
      .getPublicUrl(filename);

    imagePath = url.publicUrl;
    console.log(imagePath);
  }

  const blog = {
    title,
    description,
    slug,
    image: imagePath,
  };

  await editBlog(blog);
  revalidatePath("/admin");
  revalidatePath("/");

  redirect("/admin");
}
