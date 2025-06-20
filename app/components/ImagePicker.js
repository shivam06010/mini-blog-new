"use client";

import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import Image from "next/image";
import FormButton from "./formButton";

function ImagePicker({ name, prevImage, setImage }) {
  const [pickedImage, setPickedImage] = useState(prevImage);
  const imageInput = useRef();

  function handleImageChange(event) {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
    if (!file) {
      setPickedImage(null);
      setImage(null);
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
    <div className="space-y-2">
      <label htmlFor={name} className="block">
        Attachment
      </label>
      <div
        className={`${
          pickedImage
            ? `relative flex items-center group justify-center`
            : "bg-[#f9fafb]"
        } w-[355px] h-[250px] xl:h-[260px] xl:w-[450px] relative  border-1 rounded-[8px] border-stone-200 border-dashed`}
      >
        {!pickedImage && (
          <div className="flex justify-center items-center mt-10 gap-2 flex-col">
            <FiUpload size={40} className="text-[#9ba3af]" />
            <p className="mt-2">click to browse</p>
            <p className="text-[12px] text-stone-400">
              JPEG, JPG, PNG up to 10MB
            </p>
            <FormButton onClick={handlePickClick}>
              <FiUpload size={20} className="text-white" />
              <span>Choose Image</span>
            </FormButton>
          </div>
        )}

        {pickedImage && (
          <>
            <Image
              src={pickedImage}
              className="rounded-[8px]"
              style={{ objectFit: "cover", objectPosition: "center" }}
              fill
              alt="the image selected by the user"
            />
            <div className="absolute inset-0 group-hover:brightness-50 bg-black group-hover:bg-black xl:bg-transparent rounded-[8px] transition-all duration-200 opacity-70 xl:opacity-100 group-hover:opacity-70"></div>
          </>
        )}
        {pickedImage && (
          <button
            className="text-white opacity-100 xl:opacity-0 flex items-center gap-2 cursor-pointer hover:scale-105 hover:bg-[#00459d] xl:group-hover:opacity-100 transition-all duration-200 absolute mt-2 bg-[#245BD1] px-3 py-3 rounded-[6px]"
            onClick={() => {
              setPickedImage(null);
              setImage(null);
            }}
          >
            {" "}
            <IoMdClose size={20} /> <span>Remove Photo</span>
          </button>
        )}
      </div>

      <input
        className="hidden"
        type="file"
        id={name}
        accept="image/png, image/jpeg"
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
      />
      {prevImage && (
        <div>
          <input type="hidden" name="existingImage" value={prevImage} />
        </div>
      )}
    </div>
  );
}

export default ImagePicker;
