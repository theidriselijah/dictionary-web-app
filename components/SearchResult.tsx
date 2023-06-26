import Image from "next/image"

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

  return (
    <div>
        <div className="flex justify-between">
          <div>
            <h1 className="font-incon font-bold text-[32px]">{props.word}</h1>
            <p className="font-inter text-[18px] text-[#A445ED]">{props.phonetic}</p>
          </div>
          <Image 
            src="/icon-play.svg"
            alt="play"
            width={48}
            height={48}
          />
        </div>
        <div className={`${props.selectedFont}`}>
          
        </div>
    </div>
  )
}



{/* <div>
  {props.word}
  {props.phonetic}
  {americanEnglishPhonetic.audio}
  {props.meanings?.map((item, index) => (
    <div key={index}>
      <h1>{item?.partOfSpeech}</h1>
      <p>{item?.definitions?.map((item, index) => (
        <div key={index}>
          <p>{item.definition}</p>
          <p>{item.example}</p>
        </div>
      ))}</p>
      <h3>{item?.synonyms}</h3>
      <h3>{item?.antonyms}</h3>
    </div>
  ))}
  {props?.sourceUrls}
</div> */}