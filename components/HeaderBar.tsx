import Image from "next/image";


export default function HeaderBar() {

  return (
    <div className="flex justify-between mb-6">
        <Image
            src="/logo.svg"
            alt="logo"
            width={32}
            height={32}
        />
        <div className="flex items-center">
            <div className="flex relative min-w-[120px] h-6">
                <select name="font" id="font" className="outline-none appearance-none w-full text-xl">
                    <option value="sans-serif">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="mono">Mono</option>
                </select>
                <div className="absolute right-0 top-2.5">
                    <Image 
                        src="/icon-arrow-down.svg"
                        alt="down arrow"
                        width={12}
                        height={6}
                    />
                </div>
            </div>
            <div className="mx-4 w-px h-8 bg-[#E9E9E9]"></div>
            <div className="flex">
                <div className="flex">
                    <input type="checkbox" id="check" className="hidden"/>
                    <label htmlFor="check" className="bg-[#757575] w-10 h-5 rounded-full cursor-pointer relative duration-200 before:absolute before:content-[''] before:bg-[#FFFFFF] before:w-3.5 before:h-3.5 before:rounded-full before:m-[3px] before:duration-200 toggle"></label>
                </div>
                <Image 
                        src="/icon-moon.svg"
                        alt="darkmode"
                        width={20}
                        height={20}
                        className="ml-3"
                    />
            </div>
        </div>
    </div>
  )
}
