import Image from "next/image";
import Link from "next/link";
import ReadMoreBtn from "./read-more-btn";

export default function TopBlog({ blog }) {
  console.log(blog);
  if (!blog) return;
  return (
    <div className="bg-white xl:h-[400px] border-1 max-w-[380px] pt-2.5 pb-0 xl:pt-0 grid grid-rows-[auto_1fr] border-stone-200  rounded-[12px] xl:grid xl:grid-cols-[1fr_1fr]  hover:scale-103 duration-200 hover:shadow-md transition-all gap-0 xl:max-w-[1100px] mx-auto mb-3 xl:mb-15">
      <div className="w-[355px] h-[240px] xl:w-full justify-self-center xl:h-[400px] relative">
        <Image
          src={blog.image}
          alt={blog.title}
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill
          className="xl:rounded-[20px]  rounded-[8px] xl:pl-4 xl:pr-7 xl:py-4"
        />

        {/* <img
          src={blog.image}
          alt={blog.title}
          style={{ objectPosition: "center" }}
          className="xl:rounded-[30px] rounded-[20px] px-4 py-2 xl:pl-4 xl:pr-7 xl:py-4"
        /> */}
      </div>
      <main className="px-3 py-3 xl:py-5 xl:pr-7 xl:grid xl:grid-rows-[50px_260px_50px]">
        <h1 className="text-[20px] mb-3 xl:mb-5 font-medium">
          {blog.title.length > 105
            ? blog.title.slice(0, 60) + "....."
            : blog.title}
        </h1>

        <p className="text-[14px] xl:text-[16px] mb-4 leading-6 xl:leading-7 text-[#737373]">
          {blog.description.length > 670
            ? blog.description.slice(0, 670) + "...."
            : blog.description}
        </p>

        <div className="flex justify-end">
          <ReadMoreBtn href={`/${blog.slug}`}>Read More</ReadMoreBtn>
        </div>
      </main>
    </div>
  );
}
