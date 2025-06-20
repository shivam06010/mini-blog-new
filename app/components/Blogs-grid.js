import Image from "next/image";
import Blog from "../pages/Blog";

export default function BlogGrid({ blogs, edit = false }) {
  const sortedBlogs = [...blogs].reverse();

  return (
    <ul className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_1fr_1fr] xl:gap-5 xl:max-w-[1300px] mx-auto">
      {sortedBlogs.map((blog) => (
        <Blog blog={blog} key={blog.id} edit={edit} />
      ))}
    </ul>
  );
}
