"use server";

import sql from "better-sqlite3";
import fs from "node:fs";

const db = sql("blogs.db");

export async function deleteBlog(blog) {
  db.prepare(
    `
      DELETE from blogs WHERE slug  = ?
      `
  ).run(blog.slug);
}
