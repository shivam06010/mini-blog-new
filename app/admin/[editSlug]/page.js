import BlogFormSubmit from "@/app/components/blog-form-submit";
import FormCreateOrEdit from "@/app/components/Form";
import ImagePicker from "@/app/components/ImagePicker";
import { getBlog } from "@/lib/blogs";

export default function editPage({ params }) {
  const blog = getBlog(params.editSlug);

  return (
    <div className="max-w-[1000px] mx-auto">
      <FormCreateOrEdit blog={blog} editing={true} />
    </div>
  );
}
