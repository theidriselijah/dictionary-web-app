import HeaderBar from "@/components/HeaderBar";
import SearchField from "@/components/SearchField";
import { useEffect, useState } from "react";

export default function DictionaryWebApp() {
  const [wordSearched, setWordSearched] = useState('')
  const [searchResult, setSearchResult] = useState([])

  function handleChange(event: any) {
      const {value} = event.target
    setWordSearched(value)
  }

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [wordSearched])
  
  return (
    <main className="m-6">
      <HeaderBar />
      <SearchField
        value={wordSearched}
        handleChange={event => handleChange(event)}
      />
    </main>
  )
}
