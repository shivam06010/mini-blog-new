"use client";

import { supabase } from "@/supabaseClient";
import Image from "next/image";
import { useState } from "react";
import { IoExtensionPuzzle } from "react-icons/io5";

function Page() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  const handleUpload = async () => {
    try {
      setUploading(true);
      if (!file) {
        alert("please select a file to upload");
        return;
      }

      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { data, error } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (error) throw error;

      const { data: url } = await supabase.storage
        .from("images")
        .getPublicUrl(filePath);
      console.log(url.publicUrl);
      setFileUrl(url.publicUrl);
      alert("file uploaded");
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "uploading" : "upload"}
      </button>

      {fileUrl && (
        <div>
          <p>file uploaded to {fileUrl}</p>
          <img
            src={fileUrl}
            alt="uploaded"
            style={{ height: "300px", width: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default Page;
