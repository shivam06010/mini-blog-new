export const dynamic = "force-dynamic";

import { getBlogs } from "@/lib/blogs";
import Header from "../components/header";
import ManageAdminPage from "./manage-admin-page";

export const metadata = {
  title: "Admin Page",
  description: "For the admins of MiniBlogs",
};

export default function AdminPage() {
  const blogs = getBlogs();
  return (
    <>
      <Header />
      <ManageAdminPage blogs={blogs} />
    </>
  );
}
