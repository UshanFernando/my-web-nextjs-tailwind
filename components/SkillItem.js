import React from "react";
import { motion } from "framer-motion";

function SkillItem({ name, value }) {
  const slideLeft = {
    hidden: { width: 0 },
    show: {
      width: value,
    },
  };

  return (
    <div className="my-3">
      <div class="flex justify-between mb-1 w-full">
        <span class="text-base font-medium text-green-700 ">{name}</span>
        <span class="text-sm font-medium text-green-700 ">{value}</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          class="bg-gradient-to-r from-emerald-500 to-lime-600 h-2.5 rounded-full"
          style={{ width: value }}
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          transition={{
            ease: "easeInOut",
            duration: 1.4,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
}

export default SkillItem;
