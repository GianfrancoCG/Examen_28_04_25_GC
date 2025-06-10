import axios from "axios";
import { Entry } from "../types/entry";

const base = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const getEntries = async (): Promise<Entry[]> => {
  const { data } = await axios.get<Entry[]>(`${base}/entries`);
  return data;
};

export const saveEntry = async (payload: Entry): Promise<Entry> => {
  const { data } = await axios.post<Entry>(`${base}/entries`, payload);
  return data;
};
