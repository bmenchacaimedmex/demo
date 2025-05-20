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
        {/* <TagFilter          
          key={tag}
          active
          interactive
          removable
          round
          onRemove={() => removeTag(tag)}
        > Prueba 1 </TagFilter> */}
      </div>
    </div>
  );
}
