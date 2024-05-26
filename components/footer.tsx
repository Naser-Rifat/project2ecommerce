import React from "react";

function Footer() {
  return (
    <div className="mt-8 bg-sky-800 p-8 text-center rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4 ">Subscribe to our newsletter</h2>
      <p className="text-gray-700 mb-4">
        Get the latest updates on new products and upcoming sales
      </p>
      <div className=" flex justify-center">
     <label className="bg-white p-1 flex rounded-md ">

     <input
        type="email"
        placeholder="Enter your email"
        className="border rounded p-2 w-full max-w-xs"
      />
      <button className="ml-2 px-4 py-2 bg-orange-500 text-white rounded after:content-['→']">
        Subscribe
      </button>
     </label>
      </div>
    </div>
  );
}

export default Footer;
