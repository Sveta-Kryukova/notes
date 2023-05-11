import React, { useState } from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { SearchBox } from './components/searchBox/SearchBox';
import { ListItems } from './components/listItems';
import { WorkSpace } from './components/workSpace';

function App() {
  const [query, setQuery] = useState("")

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const items = [ {
    id: 1,
    title: "Note 1",
    context: "This is the content of note 1",
    createdAt: new Date(),
    locked: false,
  },
  {
    id: 2,
    title: "Note 2",
    context: "This is the content of note 2",
    createdAt: new Date(),
    locked: true,
  },
  {
    id: 3,
    title: "Note 3",
    context: "This is the content of note 3",
    createdAt: new Date(),
    locked: false,
  },];

  return (
    <div className="App">
      <div>
        <Button onClick={() => alert("Hello World")}>Add</Button>
        <Button onClick={() => alert("Hello World")}>Delete</Button>
        <Button onClick={() => alert("Hello World")}>Edit</Button>
        <SearchBox value={query} onChange= {handleQueryChange} />
      </div>
      <div>
      <ListItems items={items} filter={query} />
        <WorkSpace />
      </div>
    </div>
  );
}

export default App;