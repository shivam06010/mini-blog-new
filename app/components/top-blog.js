import Image from "next/image";
import Link from "next/link";

export default function TopBlog({ blog }) {
  console.log(blog);
  return (
    <div className="bg-white border-1 border-stone-200 px-4 py-4 rounded-[20px] grid grid-cols-[1fr_1fr] items-center gap-10 max-w-[1100px] mx-auto mb-20">
      <div className="w-full h-full relative">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="rounded-[20px]"
        />
      </div>
      <main className="mt-1">
        <h1 className="text-[20px] mb-7 font-medium">{blog.title}</h1>

        <p className="text-14px] mb-7 text-stone-400">
          {blog.description.length > 600
            ? blog.description.slice(0, 560) + "...."
            : blog.description}
        </p>

        <Link
          href={`/${blog.slug}`}
          className="text-white px-4 py-2 text-[16px] rounded-[4px] bg-[#245BD1]"
        >
          Read more
        </Link>
      </main>
    </div>
  );
}
