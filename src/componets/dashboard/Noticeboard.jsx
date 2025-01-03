import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Noticeboard = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image[0]) formData.append("image", data.image[0]);

    try {
      const response = await axios.post("http://localhost:5000/api/notices", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data.message);
      reset(); 
    } catch (error) {
      console.error("Error posting notice:", error.response?.data || error.message);
      setMessage("Failed to create notice. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold">Post a Notice</h3>
        <img
          className="w-5 h-5"
          src="https://cdn-icons-png.flaticon.com/128/3161/3161837.png"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Notice Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Notice Title</label>
            <input
              type="text"
              placeholder="Enter the title here"
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          {/* Notice Description Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Notice Description</label>
            <textarea
              placeholder="Enter the description here"
              {...register("description", { required: "Description is required" })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Upload Image (optional)</label>
            <input
              type="file"
              {...register("image")}
              className="w-full p-3 border rounded-lg focus:outline-none"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Post Notice
          </button>
        </div>
      </form>

      {/* Message Display */}
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default Noticeboard;
