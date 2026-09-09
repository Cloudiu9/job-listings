"use client";

import Image from "next/image";

// TODO make tags bigger on full desktop size, current font size is too small

interface TagProps {
  tag: string;
  close?: boolean;
}

export default function Tag({ tag, close = false }: TagProps) {
  return (
    <>
      {!close && (
        <div className="py-1 px-2 bg-page-bg hover:text-white hover:cursor-pointer hover:bg-main">
          <span>{tag}</span>
        </div>
      )}

      {close && (
        <div className="flex group hover:cursor-pointer">
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
        </div>
      )}
    </>
  );
}
