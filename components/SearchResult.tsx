import Image from "next/image"
import Link from "next/link"

type SearchResultProps = {
  word: string
  phonetic: string
  meanings: {
    partOfSpeech: string
    definitions: {
      definition: string
      example: string
    }[]
    synonyms: string[]
    antonyms: string[]
  }[]
  phonetics: {
    audio: string
  }[]
  sourceUrls: string[]
  selectedFont: string
}

export default function SearchResult(props: SearchResultProps) {
  let audioLink = ''
  if (props?.phonetics?.length > 0) {
    const filteredArray = props?.phonetics?.slice(-1)[0]
    audioLink = filteredArray?.audio
  }

  
  let link = ''
  if (props?.sourceUrls != undefined) {
    link = props?.sourceUrls[0]
  } else {
    link = ''
  }

  return (
    <div>
        <div className="flex justify-between">
          <div>
            <h1 className="font-incon font-bold text-[32px]">{props.word}</h1>
            <p className="font-inter text-[18px] text-[#A445ED]">{props.phonetic}</p>
          </div>
          <Link href={audioLink} target="_blank">
            <div>
              <Image 
                src="/icon-play.svg"
                alt="Default Play"
                width={48}
                height={48}
                className="transition-opacity duration-300 ease-in-out"
              />
                <Image 
                src="/icon-play-hover.svg"
                alt="Hover Image"
                width={48}
                height={48}
                className="relative bottom-12 right-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
                />
            </div>
          </Link>
        </div>
        <div className={`${props.selectedFont}`}>
          {props.meanings?.map((item, index) => (
            <div key={index}>
              <div className="">
                <p className="mt-[34px] text-[18px] font-bold inline-block">{item?.partOfSpeech}</p>
                <div className="h-px w-[310px] ml-[25px] bg-[#E9E9E9] inline-block"></div>
              </div>
              <p className="text-[16px] font-normal text-[#757575] mb-[17px] mt-[25px]">Meaning</p>
              <div>{item?.definitions?.map((item, index) => (
                <ul key={index} className="list-disc marker:text-[#8F19E8] ml-4">
                  <li className="mb-[13px] text-[15px] leading-6">{item.definition}</li>
                  {item.example && <p className="text-[16px] text-[#757575] leading-6 mb-[32px]">{`"${item.example}"`}</p>}
                </ul>
              ))}</div>
              <div className="mt-[24px]">
                {item?.synonyms.length != 0 ? <p><span className="text-[16px] font-normal text-[#757575] mr-[39px]">Synonyms</span>{item?.synonyms.map((item, index) => (
                    <p key={index} className="inline-block m-[14px] text-[#8F19E8] text-[16px] font-bold">{item}</p>
                ))}</p> : <p></p>}
                {item?.antonyms.length != 0 ? <p><span className="text-[16px] font-normal text-[#757575] mr-[39px]">Antonyms</span>{item?.antonyms.map((item, index) => (
                    <p key={index} className="inline-block m-[14px] text-[#8F19E8] text-[16px] font-bold">{item}</p>
                ))}</p> : <p></p>}
              </div>
            </div>
          ))}
          <div className="h-px w-full bg-[#E9E9E9]"></div>
          <p className="text-[14px] underline text-[#757575] mt-[26px] mb-[10px]">Source</p>
          <a href={link} target="_blank">
            <div className="flex mb-[63px]">
              <p>{props?.sourceUrls}</p>
              <Image 
                src='/icon-new-window.svg'
                alt="new window"
                width={12}
                height={12}
                className="ml-1"
              />
            </div>
          </a>
        </div>
    </div>
  )
}