import sql from "better-sqlite3";

const db = sql("blogs.db");

export function getBlogs() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM blogs").all();
}

export function getBlog(slug) {
  return db.prepare("SELECT * FROM blogs WHERE slug = ?").get(slug);
}
