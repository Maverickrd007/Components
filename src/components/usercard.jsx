import React from "react";

const Usercard = () => {

  const profilePhoto = "https://via.placeholder.com/100";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, Springfield, USA";

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center w-80 border border-gray-200">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4 border-4 border-gray-300"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm">{email}</p>
      <p className="text-gray-600 text-sm">{phone}</p>
      <p className="text-gray-600 text-sm text-center mt-2">{address}</p>
    </div>
  );
};

export default Usercard;