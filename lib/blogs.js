import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";

const db = sql("blogs.db");

export function getBlogs() {
  return db.prepare("SELECT * FROM blogs").all();
}

export function getBlog(slug) {
  return db.prepare("SELECT * FROM blogs WHERE slug = ?").get(slug);
}

export async function saveBlog(blog) {
  blog.slug = slugify(blog.title, { lower: true });
  blog.description = xss(blog.description);

  const extension = blog.image.name.split(".").pop();
  const filename = `${blog.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await blog.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("saving item failed!");
    }
  });

  blog.image = `/images/${filename}`;

  db.prepare(
    `INSERT INTO blogs
    (title, description, image, slug)
    VALUES (
    @title,
    @description,
    @image,
    @slug

    )`
  ).run(blog);
}

export async function editBlog(blog) {
  const { title, description, image, slug } = blog;

  db.prepare(
    `
    UPDATE blogs 
    SET title = ?, description = ?, image = ? 
    WHERE slug = ?
    `
  ).run(title, description, image, slug);
}
