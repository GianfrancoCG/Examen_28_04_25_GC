import { Entry } from "../types/entry";

export default function EntryItem({ entry }: { entry: Entry }) {
  return (
    <div className="col-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5>{entry.title}</h5>
          <h6 className="text-muted">{entry.category}</h6>
          <p className="mb-0">{entry.author}</p>
        </div>
      </div>
    </div>
  );
}
