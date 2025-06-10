import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveEntry } from "../services/entryService";
import { Entry } from "../types/entry";

export default function NewEntryPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<Entry>({
    title: "",
    category: "",
    author: ""
  });

  const handle =
    (key: keyof Entry) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveEntry(form);
    navigate("/");
  };

  return (
    <div className="container">
      <h1>New Entry</h1>
      <form onSubmit={submit}>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Title"
            value={form.title}
            onChange={handle("title")}
            required
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Category"
            value={form.category}
            onChange={handle("category")}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Author"
            value={form.author}
            onChange={handle("author")}
            required
          />
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}
