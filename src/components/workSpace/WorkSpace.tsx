import { ListItem } from "../../types/ListItem";
import "./workSpace.css";

type WorkSpaceProps = {
  selectedItem: ListItem | null;
  onEditTitle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEditContext?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const WorkSpace = ({
  selectedItem,
  onEditTitle,
  onEditContext,
}: WorkSpaceProps) => {
  if (!selectedItem) {
    return <div className="blank-space"></div>;
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(selectedItem.createdAt);

  return (
    <div className="work-space">
      <p className="date">{formattedDate}</p>

      <div
        contentEditable
        className="title-input"
        onChange={onEditTitle as ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined}
      >
        {selectedItem.title}
      </div>

      <br />

      <textarea
        className="context-input"
        value={selectedItem.context}
        onChange={onEditContext as ((e: React.ChangeEvent<HTMLTextAreaElement>) => void) | undefined}
      />
    </div>
  );
};
