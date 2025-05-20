"use client";

import TagFilter from "@/components/tag-filter/TagFilter";
import TagBox from "@/components/TagBox";
import Image from "next/image";

export default function Home() {

  const tag = 123;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <TagBox/>  
        <a
          href="https://github.com/bmenchacaimedmex/demo"
          target="_blank"
          className="mt-8 text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors duration-200"
        >
          Ver repositorio en GitHub
        </a>
      </div>
    </div>
  );
}
