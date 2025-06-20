import { getBlog } from "@/lib/blogs";

import Link from "next/link";
import Header from "../components/header";
import { FaArrowLeft } from "react-icons/fa6";

export default async function BlogDetailPage({ params }) {
  const blog = await getBlog(params.blogSlug);

  if (!blog) {
    return <div>404 - Blog Not Found</div>;
  }
  blog.description = blog.description?.replace(/\n/g, "<br />");

  return (
    <>
      <Header />

      <div className="bg-[url('/images/colored.png')]  bg-cover pb-10">
        <div className="max-w-[390px] xl:max-w-[1100px] mx-auto pt-6 xl:pt-10">
          <Link href="/" className=" text-[18px]  transition-all duration-200 ">
            <div className="flex gap-2 xl:mb-10 mb-6 items-center">
              <FaArrowLeft className="inline" size={16} />
              <span>Back to All Blogs</span>
            </div>
          </Link>
        </div>
        <div className=" bg-white xl:max-w-[1100px] max-w-[390px] border-[0.5px] border-stone-300 rounded-[8px] mx-auto px-3 py-5 xl:py-10 xl:px-10 ">
          <h2 className="xl:text-[30px] text-[26px] text-[#2e2e2e] xl:leading-13 leading-10 font-medium mb-6 xl:mb-10">
            {blog.title}
          </h2>
          <div className=" xl:mb-10 mb-6 flex justify-center xl:block relative">
            <img
              src={blog.image}
              alt={blog.title}
              className="xl:h-[400px] h-[300px] rounded-[6px] border-[0.5px] border-stone-300"
            />
          </div>
          <p
            className="text-lg xl:leading-9 leading-8 text-[16px] xl:text-[20px] opacity-80"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          >
            {/* {blog.description} */}
          </p>
        </div>
      </div>
    </>
  );
}
