import { getBlogs } from "@/lib/blogs";
import BlogGrid from "../components/Blogs-grid";
import TopBlog from "../components/top-blog";

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
            border-color: #4d80ef;
          }
        }

        .animate-blink-border {
          animation: blink 1s infinite;
        }
      `}</style>

      <div className="overflow-scroll py-10 bg-[url('/images/colored.png')] bg-cover">
        <header className="text-center max-w-[1000px] mx-auto mb-15">
          <span className="text-[40px] inline-block bg-[#245BD1] mb-5 px-4 py-2 rounded-[20px]">
            🌟
          </span>
          <h1 className="text-[#245BD1] font-bold mb-3 text-[48px] text-center">
            Writing That Feels Like a
            <span className="bg-[#d3def5] border-r-2  ml-1 animate-blink-border pl-1">
              Conversation
            </span>
          </h1>
          <p className="text-[20px]">
            Discover captivating stories, insightful articles, and creative
            ideas. A beautifully minimal blogging experience that puts great
            content first.
          </p>
        </header>

        <TopBlog blog={blogs[blogs.length - 1]} />

        <BlogGrid blogs={blogs.slice(0, blogs.length - 1)} />
      </div>
    </>
  );
}
