import React, { useEffect } from "react";
export const useClickOutside = (
  ref: React.MutableRefObject<any>,
  callback: () => void
) => {
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    () => document.removeEventListener("click", handleClickOutside, false);
  });
};
