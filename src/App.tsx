import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { SearchBox } from './components/searchBox/SearchBox';
import { ListItems } from './components/listItems';
import { WorkSpace } from './components/workSpace';
import { ListItem } from './components/listItems/ListItems';

function App() {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const [items, setItems] = useState<ListItem[]>([
    {
      id: 1,
      title: "Note 1",
      context: "zxc",
      createdAt: new Date(),
      locked: false,
    },
  ]);
  const [editedItem, setEditedItem] = useState<ListItem | null>(null);

  useEffect(() => {
    if (editedItem) {
      const updatedItems = items.map(item => {
        if (item.id === editedItem.id) {
          return editedItem;
        } else {
          return item;
        }
      });
      setItems(updatedItems);
    }
  }, [editedItem, items]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedItem(null);
  }

  const handleItemClick = (item: ListItem) => {
    setSelectedItem(item);
    setEditedItem(null);
  }

  const handleAddNote = () => {
    const newNote = {
      id: items.length + 1,
      title: "",
      context: "",
      createdAt: new Date(),
      locked: false,
    }
    setItems([...items, newNote]);
    setSelectedItem(newNote);
    setEditedItem(newNote);
  }

  const handleDelete = () => {
    if (selectedItem) {
      const confirmDelete = window.confirm("Are you sure you want to delete this note?");
      if (confirmDelete) {
        const updatedItems = items.filter(item => item.id !== selectedItem.id);
        setItems(updatedItems);
        setSelectedItem(null);
      }
    }
  }

  const handleEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedItem) {
      const updatedItem = { ...editedItem, title: e.target.value };
      setSelectedItem(updatedItem);
      setEditedItem(updatedItem);
    }
  };
  
  const handleEditContext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (editedItem) {
      const updatedItem = { ...editedItem, context: e.target.value };
      setSelectedItem(updatedItem);
      setEditedItem(updatedItem);
    }
  };
  

  return (
    <div className="App">
      <div>
        <Button onClick={handleAddNote}>Add</Button>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={() => setEditedItem(selectedItem)}>Edit</Button>
        <SearchBox value={query} onChange={handleQueryChange} />
      </div>
      <div className="App-body">
        <ListItems
          items={items}
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
          filter={query}
        />
        <WorkSpace
          selectedItem={selectedItem}
          onEditTitle={handleEditTitle}
          onEditContext={handleEditContext}
        />
      </div>
    </div>
  );
}

export default App;