import axios from 'axios';
import type { Note } from '../types/note';

const API_KEY = `${import.meta.env.VITE_NOTEHUB_TOKEN}`;

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (page: number): Promise<FetchNotesResponse> => {
  const res = await axios.get<FetchNotesResponse>(`/notes`, {
    params: {
      page,
    },
  });
  return res.data;
};

export const createNote = () => {};
