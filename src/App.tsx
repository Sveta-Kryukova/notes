import React, { useState, useEffect} from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { SearchBox } from './components/searchBox/SearchBox';
import { ListItems } from './components/listItems';
import { WorkSpace } from './components/workSpace';
import { ListItem } from "./types/ListItem";
import { StateContextType } from "./types/StateContextType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


const StateContext = React.createContext<StateContextType>({
  query: "",
  selectedItem: null,
  items: [],
  editedItem: null,
  handleQueryChange: () => {},
  handleItemClick: () => {},
  handleAddNote: () => {},
  handleDelete: () => {},
  handleEditTitle: () => {},
  handleEditContext: () => {},
});

function App() {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const [items, setItems] = useState<ListItem[]>([]);
  const [editedItem, setEditedItem] = useState<ListItem | null>(null);
  
  useEffect(() => {
    const db = openDatabase();
    db.then(database => {
      const transaction = database.transaction("notes", "readonly");
      const store = transaction.objectStore("notes");
      const request = store.getAll();
      request.onsuccess = () => {
        const notes = request.result;
        setItems(notes);
      }
    });
  }, []);

  const openDatabase = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = window.indexedDB.open("notes-app", 1);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = () => {
        const database = request.result;
        const objectStore = database.createObjectStore("notes", { keyPath: "id" });
        objectStore.createIndex("title", "title", { unique: false });
        objectStore.createIndex("context", "context", { unique: false });
        objectStore.createIndex("createdAt", "createdAt", { unique: false });
      }
    });
  }

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
      id: Date.now(),
      title: "",
      context: "",
      createdAt: new Date(),
      locked: false,
    }
    const db = openDatabase();
    db.then(database => {
      const transaction = database.transaction("notes", "readwrite");
      const store = transaction.objectStore("notes");
      const request = store.add(newNote);
      request.onsuccess = () => {
        setItems(prevItems => [...prevItems, newNote]);
        setSelectedItem(newNote);
        setEditedItem(newNote);
      }
    });
  }

  const handleDelete = () => {
    if (selectedItem) {
      const confirmDelete = window.confirm("Are you sure you want to delete this note?");
      if (confirmDelete) {
        const db = openDatabase();
        db.then(database => {
          const transaction = database.transaction("notes", "readwrite");
          const store = transaction.objectStore("notes");
          const request = store.delete(selectedItem.id);
          request.onsuccess = () => {
            const updatedItems = items.filter(item => item.id !== selectedItem.id);
            setItems(updatedItems);
            setSelectedItem(null);
          }
        });
      }
    }
  }
  
  const handleEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedItem) {
      const updatedItem = { ...editedItem, title: e.target.value };
      setSelectedItem(updatedItem);
      setEditedItem(updatedItem);
      const updatedItems = [...items];
      const index = updatedItems.findIndex(item => item.id === updatedItem.id);
      updatedItems[index] = updatedItem;
      setItems(updatedItems);
      const db = openDatabase();
      db.then(database => {
        const transaction = database.transaction("notes", "readwrite");
        const store = transaction.objectStore("notes");
        store.put(updatedItem);
      });
    }
  }

  const handleEditContext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (editedItem) {
      const updatedItem = { ...editedItem, context: e.target.value };
      setSelectedItem(updatedItem);
      setEditedItem(updatedItem);
      const updatedItems = [...items];
      const index = updatedItems.findIndex(item => item.id === updatedItem.id);
      updatedItems[index] = updatedItem;
      setItems(updatedItems);
      const db = openDatabase();
      db.then(database => {
        const transaction = database.transaction("notes", "readwrite");
        const store = transaction.objectStore("notes");
        store.put(updatedItem);
      });
    }
  }

  return (
    <StateContext.Provider value={{
      query,
      selectedItem,
      items,
      editedItem,
      handleQueryChange,
      handleItemClick,
      handleAddNote,
      handleDelete,
      handleEditTitle,
      handleEditContext,
    }}>

    <div className="App">
      <div className='toolBar'>
        <div className='buttonGroup'>
          <Button onClick={handleAddNote}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>

          <Button onClick={handleDelete} disabled={!selectedItem}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>

          <Button onClick={() => setEditedItem(selectedItem)} disabled={!selectedItem}>
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </div>

        <SearchBox value={query} onChange={handleQueryChange} />
      </div>
      <div className="appBody">
        <ListItems
          items={items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))}
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />

        <WorkSpace
          selectedItem={selectedItem}
          onEditTitle={(e) => handleEditTitle(e)}
          onEditContext={(e) => handleEditContext(e)}
        />
      </div>
    </div>
    </StateContext.Provider>
  );
}

export default App;