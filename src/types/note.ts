export type NoteTag = 'Work' | 'Personal' | 'Meeting' | 'Shopping' | 'Todo';

export interface Note {
  id: number;
  title: string;
  content: string;
  tag: NoteTag;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: NoteTag;
}
