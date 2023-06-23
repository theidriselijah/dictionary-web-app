import HeaderBar from "@/components/HeaderBar";
import SearchField from "@/components/SearchField";
import SearchResult from "@/components/SearchResult";
import { ChangeEvent, useEffect, useState } from "react";

export interface SearcheResultType {
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

export default function DictionaryWebApp() {
  const [wordSearched, setWordSearched] = useState('')
  const [searchResult, setSearchResult] = useState<SearcheResultType>({
    word: "",
    phonetic: "",
    meanings: [
      {
        partOfSpeech: "",
        definitions: [],
        synonyms: [""],
        antonyms: [""],
      }
    ],
    phonetics: [
      {
        audio: ""
      }
    ],
    sourceUrls: [],
  })

  console.log(searchResult)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const { value } = event.target

    setWordSearched(value)
  }

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`)
      .then(res => res.json())
      .then(data => setSearchResult(data[0]))
      .catch(err => {
        console.log(err.message)
      })
  }, [wordSearched])
  
  return (
    <main className="m-6">
      <HeaderBar />
      <SearchField
        value={wordSearched}
        handleChange={event => handleChange(event)}
      />
      <SearchResult
        word={searchResult?.word}
        phonetic={searchResult?.phonetic}
        meanings={searchResult?.meanings}
        phonetics={searchResult?.phonetics}
        sourceUrls={searchResult?.sourceUrls}
      />
    </main>
  )
}
