import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EntryList from "../components/EntryList";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { getEntries } from "../services/entryService";
import { Entry } from "../types/entry";

export default function EntriesPage() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    getEntries().then(setEntries).catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1>Entries</h1>
      <Header />
      <Link to="/new" className="btn btn-primary mb-3">
        New Entry
      </Link>
      <EntryList data={entries} />
      <Footer/>
    </div>
  );
}
