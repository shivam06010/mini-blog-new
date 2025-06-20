import EditForm from "@/app/components/EditForm";
import Header from "@/app/components/header";
import { getBlog } from "@/lib/blogs";
import { MdOutlinePeopleAlt } from "react-icons/md";

export default async function editPage({ params }) {
  const blog = await getBlog(params.editSlug);

  return (
    <div className="bg-[#f8f9ff] pb-10">
      <Header />
      <div className="max-w-[385px] xl:max-w-[1280px] pt-6 xl:pt-8 px-4 xl:px-10 mx-auto bg-white border-[0.5px] xl:mt-12 mt-8 rounded-[6px] border-stone-300">
        <h2 className="text-[22px] flex gap-2 items-center font-[200] mb-3">
          <MdOutlinePeopleAlt size={24} className="text-[#0057c5]" />
          <span>Edit Blog</span>
        </h2>
        <p className="text-[16px] - text-stone-400">
          Start writing a new post — share your thoughts, stories, or updates
          with your readers
        </p>

        {/* <FormCreateOrEdit blog={blog} editing={true} /> */}
        <EditForm blog={blog} />
      </div>
    </div>
  );
}
