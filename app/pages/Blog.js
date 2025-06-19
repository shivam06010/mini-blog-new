import Image from "next/image";
import Link from "next/link";
import DeleteBlogButton from "../components/delete-blog-button";

export default function Blog({ blog, edit }) {
  return (
    <li className="h-[450px] bg-white border-1 rounded-2xl border-stone-100 px-3 py-3">
      <div className="h-[192px] relative ">
        <Image
          src={blog.image}
          alt={blog.title}
          className="rounded-t-2xl"
          fill
        />
      </div>
      <div className="grid grid-rows-[1fr_2.4fr_1fr]">
        <h2 className="text-[20px] mt-5 mb-2">{blog.title}</h2>
        <p className="text-stone-400 leading-7 mb-3">
          {blog.description.length > 200
            ? `${blog.description.slice(0, 180)}.....`
            : blog.description}
        </p>

        <div className="">
          {!edit && (
            <Link
              href={`/${blog.slug}`}
              className="text-white px-4 py-2 text-[16px] rounded-[4px] bg-[#245BD1]"
            >
              Read more
            </Link>
          )}
          {edit && (
            <div className="flex gap-3 items-center justify-end mr-2">
              <Link
                href={`/admin/${blog.slug}`}
                className="text-white px-4 py-2 text-[16px] rounded-[4px] bg-[#245BD1]"
              >
                Edit
              </Link>
              <DeleteBlogButton blog={blog} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
