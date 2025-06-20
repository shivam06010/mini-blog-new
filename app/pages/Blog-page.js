export const dynamic = "force-dynamic";

import { getBlogs } from "@/lib/blogs";
import BlogGrid from "../components/Blogs-grid";
import TopBlog from "../components/top-blog";
import NoBlogs from "../components/no-blogs";

export default function BlogPage() {
  const blogs = getBlogs();

  return (
    <>
      <style>{`
        @keyframes blink {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: #245bd1;
          }
        }

        .animate-blink-border {
          animation: blink 1s infinite;
        }
      `}</style>

      <div className="overflow-scroll py-9 xl:py-18 bg-[url('/images/colored.png')] bg-cover">
        <header className="text-center max-w-[1000px] mx-auto mb-10 xl:mb-20">
          <span className="text-[30px] xl:text-[40px] inline-block bg-[#245BD1] mb-7 xl:mb-10 px-5 py-2 xl:px-6 xl:py-3 rounded-[20px] xl:rounded-[29px]">
            ✨
          </span>
          <h1 className="text-[#245BD1] font-bold mb-8 text-[34px] xl:text-[46px] text-center">
            Writing That Feels Like a
            <span className="bg-[#d3e3fd] border-r-2 py-1.5 xl:py-3 pr-2 rounded-[2px] ml-1 animate-blink-border pl-1">
              Conversation
            </span>
          </h1>
          <p className="px-8 xl:px-0 xl:text-[22px] text-[18px] text-[#757575] font-normal opacity-85">
            Real stories, casual thoughts, and deep dives into life - written to
            resonate with readers just like you
          </p>
        </header>

        {blogs.length === 0 ? (
          <NoBlogs />
        ) : (
          <>
            <TopBlog blog={blogs[blogs.length - 1]} />
            <BlogGrid blogs={blogs.slice(0, blogs.length - 1)} />
          </>
        )}
      </div>
    </>
  );
}
