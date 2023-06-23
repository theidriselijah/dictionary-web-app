import { SearcheResultType } from "@/pages"

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
}

export default function SearchResult(props: SearchResultProps) {
  return (
    <div>
        <div>
          {props.word}
          {props.phonetic}
          {props.phonetics?.map((item, index) => (
            <p key={index}>{item.audio}</p>
          ))}
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
        </div>
    </div>
  )
}
