import { Entry } from "../types/entry";
import EntryItem from "./EntryItem";

export default function EntryList({ data }: { data: Entry[] }) {
  if (!data.length) return <p>No entries yet.</p>;

  return (
    <div className="row">
      {data.map((entry) => (
        <EntryItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
