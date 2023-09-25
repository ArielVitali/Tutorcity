import React from "react";

const Badge = ({ isPublished }) => {
  const published = isPublished ? (
    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
      Published
    </span>
  ) : (
    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
      Unpublished
    </span>
  );
  return published;
};

export default Badge;
