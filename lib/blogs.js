import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";

const db = sql("blogs.db");

export function getBlogs() {
  return db.prepare("SELECT * FROM blogs").all();
}

export async function getBlog(slug) {
  return db.prepare("SELECT * FROM blogs WHERE slug = ?").get(slug);
}

export async function saveBlog(blog) {
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
