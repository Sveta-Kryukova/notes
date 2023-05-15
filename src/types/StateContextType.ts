import{ ListItem } from './ListItem';

export interface StateContextType {
  query: string;
  selectedItem: ListItem | null;
  items: ListItem[];
  editedItem: ListItem | null;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemClick: (item: ListItem) => void;
  handleAddNote: () => void;
  handleDelete: () => void;
  handleEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditContext: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}