import React from "react";

type ListItem = {
  id: number,
  title: string,
  context: string,
  createdAt: Date,
  locked: boolean
}

type ListItemsProps = {
  items: ListItem[],
  filter: string
}

export const ListItems = ({ items, filter }: ListItemsProps) => {
  const filteredItems = items.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>
          <div>Title: {item.title}</div>
          <div>Context: {item.context}</div>
          <div>Created At: {item.createdAt.toString()}</div>
          <div>Locked: {item.locked.toString()}</div>
        </li>
      ))}
    </ul>
  );
}
