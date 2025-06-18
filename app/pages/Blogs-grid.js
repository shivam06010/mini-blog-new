import { getBlogs } from "@/lib/blogs";
import Blog from "./Blog";

export default async function BlogGrid({ blogs }) {
  console.log(blogs);
  return (
    <ul className="grid grid-cols-[1fr_1fr_1fr] gap-5 max-w-[1300px] mx-auto">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </ul>
  );
}
