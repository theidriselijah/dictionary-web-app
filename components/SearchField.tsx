import Image from "next/image";

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchField(props: InputProps) {

  return (
    <div className="relative mb-7">
      <input type="text" placeholder="Search for any word..." name="search" value={props.value} onChange={props.handleChange} className="w-full h-12 bg-[#F4F4F4] rounded-2xl px-6 py-4"/>
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
