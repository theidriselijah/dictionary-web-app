import HeaderBar from '@/components/HeaderBar'
import SearchField from '@/components/SearchField'
import SearchResult from '@/components/SearchResult'
import NoDefFound from '@/components/NoDefFound'
import { ChangeEvent, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

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
  const [checked, setChecked] = useState(false)
  const { theme, setTheme } = useTheme()
  const [searchResult, setSearchResult] = useState<SearcheResultType | undefined>({
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

  console.log(isWordBeingSearched)

  function selectHandleChange(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target

    setSelectedFont(value)
  }

  function isCheckedHandleChange(event: ChangeEvent<HTMLInputElement>) {
    setChecked(!checked)
    if (checked === true) {
      setTheme("light")
    } else if (checked === false) {
      setTheme("dark")
    }
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
    <main className="m-6 md:m-10 xl:mx-auto max-w-xl">
      <HeaderBar
        value={selectedFont}
        checked={checked}
        selectHandleChange={(event) => selectHandleChange(event)}
        isCheckedHandleChange={(event) => isCheckedHandleChange(event)}
      />
      <SearchField
        value={wordSearched}
        inputHandleChange={(event) => inputHandleChange(event)}
      />
      {isWordBeingSearched && searchResult != undefined ? <SearchResult
        word={searchResult?.word}
        phonetic={searchResult?.phonetic}
        meanings={searchResult?.meanings}
        phonetics={searchResult?.phonetics}
        sourceUrls={searchResult?.sourceUrls}
        selectedFont={selectedFont}
      /> : searchResult === undefined ? (
        <NoDefFound 
          title="No Definitions Found"
          message="Sorry pal, we couldn't find definitions for the word you were looking for."
        />
      ) : (<div></div>)}
    </main>
  )
}