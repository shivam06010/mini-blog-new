import Image from "next/image";

function NoBlogs() {
  return (
    <div className="mx-auto pt-8 xl:mt-30 text-center xl:max-w-[1200px]">
      <Image
        src="/images/blog2.png"
        alt="no blogs"
        height={90}
        width={90}
        className="block mx-auto"
      />
      <h2 className="xl:text-[22px] text-[20px] text-[#2e2e2e] my-3 xl:my-5">
        No Blogs yet!
      </h2>
      <p className="text-[#757575] px-8">
        No blog posts have been added yet. Please check back later
      </p>
    </div>
  );
}

export default NoBlogs;
