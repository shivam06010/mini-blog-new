import BlogGrid from "./Blogs-grid";
import NoBlogs from "./no-blogs";

function ManageBlogs({ blogs }) {
  if (blogs.length === 0) return <NoBlogs />;
  return (
    <div>
      <BlogGrid blogs={blogs} edit={true} />
    </div>
  );
}

export default ManageBlogs;
