import React from "react";

function ContactItem({ name, value }) {
  return (
    <div className="my-3">
      <div className="flex justify-between mb-1 w-full">
        <span className="text-base font-medium text-green-700 ">{name}</span>
        <span className="text-sm font-medium text-green-700 ">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-gradient-to-r from-emerald-500 to-lime-600 h-2.5 rounded-full"
          style={{ width: value }}
        ></div>
      </div>
    </div>
  );
}

export default ContactItem;
