import Image from "next/image";

export default function SearchField() {
  return (
    <div className="relative">
      <input type="search" placeholder="Search for any word..." className="w-full h-12 bg-[#F4F4F4] rounded-2xl px-6 py-4"/>
      <Image 
        src="/icon-search.svg"
        alt="search icon"
        width={16}
        height={16}
        className="absolute top-4 right-6"
      />
    </div>
  )
}
