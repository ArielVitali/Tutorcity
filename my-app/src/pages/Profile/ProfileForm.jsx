import React from "react";

const ProfileForm = ({ formData, handleInputChange, onSubmit }) => {
  return (
    <form className="mt-8 space-y-5" onSubmit={onSubmit}>
      <div key={"first_name"}>
        <label className="font-medium">First name</label>
        <input
          type="text"
          name="first_name"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          value={formData.first_name}
          onChange={handleInputChange}
        />
      </div>
      <div key={"last_name"}>
        <label className="font-medium">Last name</label>
        <input
          type="text"
          name="last_name"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          value={formData.last_name}
          onChange={handleInputChange}
        />
      </div>
      <div key={"email"}>
        <label className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div key={"degree"}>
        <label className="font-medium">Degree</label>
        <input
          type="text"
          name="degree"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          value={formData.degree}
          onChange={handleInputChange}
        />
      </div>

      <div key={"experience"}>
        <label className="font-medium">Experience</label>
        <textarea
          name="experience"
          rows={4}
          value={formData.experience}
          onChange={handleInputChange}
          required
          className="block  textarea w-full rounded-md  p-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          className=" px-4 py-2 text-black w-[50%]  bg-[#5dd39e] border border-black hover:bg-[#1f2421] hover:text-white  rounded-lg duration-200"
          type="submit"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
