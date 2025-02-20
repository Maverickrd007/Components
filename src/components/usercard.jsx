import React from "react";

const Usercard = () => {
  
  const profilePhoto = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Farticles%2Fcrmnrly0zjeo&psig=AOvVaw2s7ImGxv_X_YIr403XKHqw&ust=1740120283946000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICNjK7T0YsDFQAAAAAdAAAAABAE";
  const name = "Ummu woe woe";
  const email = "wowo@example.com";
  const phone = "+1 34635635";
  const address = "1that home 2345";

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
