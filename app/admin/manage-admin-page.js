"use client";

import { useState } from "react";
import CreateBlog from "../components/CreateBlog";
import ManageBlogs from "../components/ManageBlogs";

export const metadata = {
  title: "Admin Page",
  description: "For the admins of MiniBlogs",
};

export default function ManageAdminPage({ blogs }) {
  const [pageState, setPageState] = useState(0);

  return (
    <div className="bg-[#f8f9ff] h-screen pb-12">
      <div className="max-w-[380px] xl:max-w-[1280px] mx-auto">
        <header className="flex flex-col gap-3 pt-5 xl:pt-10 pb-10 xl:pb-15">
          <h2 className="text-[18px] font-medium">
            Admin Panel - Blog Management
          </h2>
          <p className="text-[16px] text-stone-400 font-extralight">
            Create, edit, or delete blog entries to keep your content fresh,
            organized, and up-to-date
          </p>
        </header>

        <div className="flex justify-center">
          <div className="bg-white inline-block  p-1 rounded-full mb-5 xl:mb-8 border-[0.5px] border-stone-300 ">
            <button
              onClick={() => setPageState(0)}
              className={`px-10 py-3 cursor-pointer bg-white rounded-full ${
                pageState == 0 && "active"
              }`}
            >
              Create
            </button>
            <button
              onClick={() => setPageState(1)}
              className={`px-10 py-3 cursor-pointer bg-white rounded-full ${
                pageState == 1 && "active"
              }`}
            >
              Manage Blogs
            </button>
          </div>
        </div>

        <main>
          {pageState == 0 && <CreateBlog />}
          {pageState == 1 && <ManageBlogs blogs={blogs} />}
        </main>
      </div>
    </div>
  );
}
