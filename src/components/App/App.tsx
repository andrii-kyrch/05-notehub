import css from './App.module.css';
import SearchBox from '../SearchBox/SearchBox';
import Pagination from '../Pagination/Pagination';
import NoteList from '../NoteList/NoteList';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../../services/noteService';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess } = useQuery({
    queryKey: ['notes', currentPage],
    queryFn: () => fetchNotes(currentPage),
  });

  const totalPages = data?.totalPages ?? 0;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox />
        {isSuccess && (
          <Pagination
            page={currentPage}
            total={totalPages}
            onChange={setCurrentPage}
          />
        )}

        <button className={css.button}>Create note +</button>
      </header>
      {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
    </div>
  );
}
