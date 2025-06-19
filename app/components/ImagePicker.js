"use client";
import { IoCloudUploadSharp } from "react-icons/io5";

import { useRef, useState } from "react";
import Image from "next/image";

function ImagePicker({ name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  function handlePickClick() {
    imageInput.current.click();
  }

  return (
    <div className="space-y-5">
      <label htmlFor={name} className="block">
        Attachment
      </label>
      <div
        className={`${
          pickedImage
            ? `relative flex items-center justify-center`
            : "bg-[#f9fafb]"
        } h-[250px] w-[450px] relative  border-1 border-stone-200 border-dashed`}
      >
        {!pickedImage && (
          <div className="flex justify-center items-center mt-10 gap-2 flex-col">
            <IoCloudUploadSharp size={40} className="text-stone-500" />
            <p className="">Drag and drop or click to browse</p>
            <p className="text-[12px] text-stone-400">
              PDF, JPG, GIF up to 10MB
            </p>
            <button
              className="text-white mt-2 bg-[#245BD1] px-3 py-3 rounded-[6px]"
              type="button"
              onClick={handlePickClick}
            >
              Choose Image
            </button>
          </div>
        )}

        {pickedImage && (
          <Image
            src={pickedImage}
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            alt="the image selected by the user"
          />
        )}
        {pickedImage && (
          <button
            className="text-white absolute mt-2 bg-[#245BD1] px-3 py-3 rounded-[6px]"
            onClick={() => setPickedImage(null)}
          >
            {" "}
            X Remove Photo
          </button>
        )}
      </div>
      <input
        required
        className="hidden"
        type="file"
        id={name}
        accept="image/png, image/jpeg"
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImagePicker;
