"use client";

import { addTag, removeTag } from "@/redux/features/filters/filtersSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

// TODO make tags bigger on full desktop size, current font size is too small

interface TagProps {
  tag: string;
  close?: boolean;
}

export default function Tag({ tag, close = false }: TagProps) {
  const dispatch = useDispatch();

  return (
    <>
      {!close && (
        <button
          onClick={() => {
            dispatch(addTag(tag));
          }}
          className="py-1 px-2 md:text-[16px] bg-page-bg hover:text-white hover:cursor-pointer hover:bg-main"
        >
          <span>{tag}</span>
        </button>
      )}

      {close && (
        <button
          onClick={() => {
            dispatch(removeTag(tag));
          }}
          className="flex group text-[14px] hover:cursor-pointer"
        >
          <div className="py-1 px-2 bg-page-bg flex rounded ">
            <span>{tag}</span>
          </div>
          <Image
            src="icon-remove.svg"
            alt=""
            width={28}
            height={1}
            className="object-contain p-2 bg-main rounded-r group-hover:bg-black"
          />
        </button>
      )}
    </>
  );
}
