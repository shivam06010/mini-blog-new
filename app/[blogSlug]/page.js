import { getBlog } from "@/lib/blogs";

import Link from "next/link";
import Header from "../components/header";

export default function BlogDetailPage({ params }) {
  const blog = getBlog(params.blogSlug);

  if (!blog) {
    return <div>404 - Blog Not Found</div>;
  }

  return (
    <>
      <Header />

      <div className="bg-[url('/images/colored.png')] bg-cover pb-10">
        <div className="max-w-[1100px] mx-auto pt-10">
          <Link href="/" className="mb-10 inline-block">
            &larr; Back to All Blogs
          </Link>
        </div>
        <div className=" bg-white max-w-[1100px] mx-auto py-5 px-10 ">
          <h2 className="text-[30px] font-semibold mb-4">{blog.title}</h2>
          <div className=" mb-10 relative">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[400px] rounded-[10px]"
            />
          </div>
          <p className="text-lg">{blog.description}</p>
        </div>
      </div>
    </>
  );
}
