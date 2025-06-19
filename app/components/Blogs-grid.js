import Blog from "../pages/Blog";

export default function BlogGrid({ blogs, edit = false }) {
  const sortedBlogs = [...blogs].reverse();

  return (
    <ul className="grid grid-cols-[1fr_1fr_1fr] gap-5 max-w-[1300px] mx-auto">
      {sortedBlogs.map((blog) => (
        <Blog blog={blog} key={blog.id} edit={edit} />
      ))}
    </ul>
  );
}
