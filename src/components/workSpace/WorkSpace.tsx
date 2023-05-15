import { ListItem } from "../../types/ListItem";
import "./workSpace.css";

type WorkSpaceProps = {
  selectedItem: ListItem | null,
  onEditTitle?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onEditContext?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export const WorkSpace = ({ selectedItem, onEditTitle, onEditContext }: WorkSpaceProps) => {
  if (!selectedItem) {
    return (
      <div className="work-space">
        <h3>Work Space</h3>
        <p>Please select an item from the list</p>
      </div>
    );
  }

  return (
    <div className="work-space">
      <p>Created at: {selectedItem.createdAt.toString()}</p>
      <textarea
        value={selectedItem.title}
        onChange={onEditTitle as ((e: React.ChangeEvent<HTMLTextAreaElement>) => void) | undefined}
      />
      <br />
      <textarea
        value={selectedItem.context}
        onChange={onEditContext as ((e: React.ChangeEvent<HTMLTextAreaElement>) => void) | undefined}
      />
    </div>
  );
}