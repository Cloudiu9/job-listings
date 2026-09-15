"use client";

import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { RootState } from "@/redux/store";
import { resetFilters } from "@/redux/features/filters/filtersSlice";
import { AnimatePresence, motion } from "motion/react";

export default function FilterBar() {
  const dispatch = useDispatch();
  const tags = useSelector((state: RootState) => state.filters.selectedFilters);

  return (
    <AnimatePresence>
      {tags.length > 0 && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 100,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
          className="flex justify-center"
        >
          <div
            className={`relative z-10 -mt-16 max-w-3xl items-center p-3 shadow-lg bg-white rounded-md flex flex-1 gap-3 flex-wrap font-bold text-main transition-all ease-in-out duration-150`}
          >
            {tags.map((tag: string) => (
              <Tag key={tag} tag={tag} close={true} />
            ))}

            <button
              onClick={() => dispatch(resetFilters())}
              className="ml-auto cursor-pointer hover:underline"
            >
              Clear
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
