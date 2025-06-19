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
    <div className="bg-[#f8f9ff] pb-10">
      <div className="max-w-[1200px] mx-auto">
        <header className="flex flex-col gap-3 py-10">
          <h2 className="text-[16px] font-medium">
            Admin Panel - Blog Management
          </h2>
          <p className="text-[14px] text-stone-400">
            Create, edit, or delete blog entries to keep your content fresh,
            organized, and up-to-date
          </p>
        </header>

        <div className="flex justify-center">
          <div className="bg-white inline-block rounded-full mb-10 ">
            <button
              onClick={() => setPageState(0)}
              className={`px-10 py-3  bg-white rounded-full ${
                pageState == 0 && "active"
              }`}
            >
              Create
            </button>
            <button
              onClick={() => setPageState(1)}
              className={`px-10 py-3  bg-white rounded-full ${
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
