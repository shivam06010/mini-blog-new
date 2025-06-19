"use server";

import { revalidatePath } from "next/cache";
import { editBlog, saveBlog } from "./blogs";
import { redirect } from "next/navigation";

export async function postBlog(prevState, formData) {
  const slug = formData.get("slug");
  const title = formData.get("title");
  const description = formData.get("description");
  const imageFile = formData.get("image");
  const existingImage = formData.get("existingImage");

  let imagePath = null;

  // const slug = formData.get("slug");
  // const blog = {
  //   title: formData.get("title"),
  //   description: formData.get("description"),
  //   image: formData.get("image"),
  // };

  if (imageFile && imageFile.size > 0) {
    const extension = imageFile.name.split(".").pop();
    const filename = `${slug}-${Date.now()}.${extension}`;
    const fullPath = path.join("public", "images", filename);
    const bufferedImage = Buffer.from(await imageFile.arrayBuffer());

    fs.writeFileSync(fullPath, bufferedImage);
    imagePath = `/images/${filename}`;
  } else if (existingImage) {
    imagePath = existingImage;
  }

  if (
    !title ||
    title.trim() == "" ||
    !description ||
    description.trim() == "" ||
    !imagePath
  )
    return { message: "Invalid inputs" };

  console.log(formData);
  const blog = {
    title,
    description,
    image: imagePath,
    slug,
  };

  if (slug) {
    await editBlog(blog);
    revalidatePath("/admin");
    redirect("/admin");
  } else {
    await saveBlog(blog);
    revalidatePath("/");
    redirect("/");
  }
}
