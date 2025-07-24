import axios from 'axios';
import type { NewNoteData, Note } from '../types/note';

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
      perPage: 12,
    },
  });
  return res.data;
};

export const createNote = async (noteData: NewNoteData) => {
  const res = await axios.post<Note>('/notes', noteData);
  return res.data;
};

export const deleteNote = async (noteId: number) => {
  const res = await axios.delete<Note>(`/notes/${noteId}`);
  return res.data;
};
