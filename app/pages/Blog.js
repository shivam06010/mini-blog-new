import Image from "next/image";
import Link from "next/link";
import DeleteBlogButton from "../components/delete-blog-button";
import ReadMoreBtn from "../components/read-more-btn";

export default function Blog({ blog, edit }) {
  return (
    <li className=" xl:h-[470px] w-[380px] xl:w-full mx-auto bg-white border-1 hover:scale-102 hover:shadow-md transition-all duration-200 rounded-[10px] border-stone-200 px-3 py-3">
      <div className="h-[192px] relative ">
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          src={blog.image}
          alt={blog.title}
          className="rounded-t-[8px] border-[0.5px] border-stone-200"
          fill
        />
      </div>
      <div className="grid grid-rows-[0.5fr_1.5fr_0.3fr] xl:grid-rows-[1fr_2.1fr_0.6fr]">
        {/* <div className="grid grid-rows-[0.5fr_1.5fr_0.3fr] xl:flex xl:flex-col xl:justify-end"> */}
        <h2 className="text-[20px] xl:text-[20px] mt-5 mb-3">
          {blog.title.length > 36
            ? blog.title.slice(0, 36) + "....."
            : blog.title}
        </h2>
        <p className="text-[#737373] text-[14px] leading-6 mb-3">
          {blog.description.length > 260
            ? `${blog.description.slice(0, 260)}.....`
            : blog.description}
        </p>

        <div className="text-end ">
          {!edit && <ReadMoreBtn href={`/${blog.slug}`}>Read More</ReadMoreBtn>}
          {edit && (
            <div className="flex gap-3 items-center justify-end mr-0 xl:mr-2">
              {/* <Link
                href={`/admin/${blog.slug}`}
                className="text-white px-4 py-2 text-[16px] rounded-[4px] bg-[#245BD1]"
              >
                Edit
              </Link> */}

              <ReadMoreBtn href={`/admin/${blog.slug}`} edit={true}>
                Edit
              </ReadMoreBtn>
              <DeleteBlogButton blog={blog} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
