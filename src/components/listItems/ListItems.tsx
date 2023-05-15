import { ListItem } from "../../types/ListItem";

type ListItemsProps = {
  items: ListItem[],
  onItemClick: (item: ListItem) => void,
  selectedItem?: ListItem | null,
}

export const ListItems = ({ items, onItemClick }: ListItemsProps) => {
  return (
    <ul>
    {items.map((item) => (
      <li key={item.id} onClick={() => onItemClick(item)}>
        <div>Title: {item.title}</div>
        <div>Context: {item.context}</div>
        <div>Created At: {item.createdAt.toString()}</div>
        <div>Locked: {item.locked.toString()}</div>
      </li>
    ))}
  </ul>
  );
}