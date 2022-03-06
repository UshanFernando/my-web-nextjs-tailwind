import React from "react";

function ContactItem({ name, value }) {
  return (
    <div className="my-3">
      <div class="flex justify-between mb-1 w-full">
        <span class="text-base font-medium text-green-700 ">{name}</span>
        <span class="text-sm font-medium text-green-700 ">{value}</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-gradient-to-r from-emerald-500 to-lime-600 h-2.5 rounded-full"
          style={{ width: value }}
        ></div>
      </div>
    </div>
  );
}

export default ContactItem;
