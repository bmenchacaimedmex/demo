import TagFilter from "@/components/tag-filter/TagFilter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <TagFilter/>
      </div>
    </div>
  );
}
