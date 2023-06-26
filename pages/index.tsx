import HeaderBar from '@/components/HeaderBar'
import SearchField from '@/components/SearchField'
import SearchResult from '@/components/SearchResult'
import { ChangeEvent, useEffect, useState } from 'react'

interface SearcheResultType {
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
  const [isWordBeingSearched, setIsWordBeingSearched] = useState(false)
  const [selectedFont, setSelectedFont] = useState('sans-serif')
  const [searchResult, setSearchResult] = useState<SearcheResultType>({
    word: '',
    phonetic: '',
    meanings: [
      {
        partOfSpeech: '',
        definitions: [],
        synonyms: [''],
        antonyms: [''],
      },
    ],
    phonetics: [
      {
        audio: '',
      },
    ],
    sourceUrls: [],
  })

  console.log(searchResult)

  function inputHandleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    if (value != '') {
      setWordSearched(value)
      setIsWordBeingSearched(true)
    } else {
      setIsWordBeingSearched(false)
      setWordSearched('')
    }
    
  }

  function selectHandleChange(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target

    setSelectedFont(value)
  }

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`)
      .then((res) => res.json())
      .then((data) => setSearchResult(data[0]))
      .catch((err) => {
        console.log(err.message)
      })
  }, [wordSearched])

  return (
    <main className="m-6">
      <HeaderBar
        value={selectedFont}
        selectHandleChange={(event) => selectHandleChange(event)}
      />
      <SearchField
        value={wordSearched}
        inputHandleChange={(event) => inputHandleChange(event)}
      />
      {isWordBeingSearched && <SearchResult
        word={searchResult?.word}
        phonetic={searchResult?.phonetic}
        meanings={searchResult?.meanings}
        phonetics={searchResult?.phonetics}
        sourceUrls={searchResult?.sourceUrls}
        selectedFont={selectedFont}
      />}
    </main>
  )
}
