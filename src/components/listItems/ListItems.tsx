import { ListItem } from "../../types/ListItem";
import './ListItems.css';

type ListItemsProps = {
  items: ListItem[],
  onItemClick: (item: ListItem) => void,
  selectedItem?: ListItem | null,
}

export const ListItems = ({ items, onItemClick }: ListItemsProps) => {
  const formatDateTime = (date: Date) => {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    if (isToday) {
      const hours = date.getHours() % 12 || 12;
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const amPm = date.getHours() < 12 ? 'AM' : 'PM';
      return `${hours}:${minutes} ${amPm}`;
    } else {
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${month}/${day}`;
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength - 3) + '...';
  };

  return (
    <ul className="list-items">
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item)}>
          <div className="item-title">{truncateText(item.title, 20)}</div>
          <div className="item-context">{truncateText(item.context, 50)}</div>
          <div className="item-date">{formatDateTime(item.createdAt)}</div>
        </li>
      ))}
    </ul>
  );
}
