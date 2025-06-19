import BlogGrid from "./Blogs-grid";

function ManageBlogs({ blogs }) {
  return (
    <div>
      <BlogGrid blogs={blogs} edit={true} />
    </div>
  );
}

export default ManageBlogs;
