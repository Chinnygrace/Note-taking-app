import React from 'react';
import { useNotes } from './hooks/useNotes';
import { NoteForm } from './components/NoteForm';
import { NoteCard } from './components/NoteCard';
import { SearchBar } from './components/SearchBar';
import { StickyNote } from 'lucide-react';

function App() {
  const { notes, addNote, updateNote, deleteNote, searchQuery, setSearchQuery } = useNotes();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <StickyNote className="text-blue-500" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Notes App</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-[350px,1fr]">
          <div className="space-y-6">
            <NoteForm onSubmit={addNote} />
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="space-y-6">
            {notes.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <p className="text-gray-500">No notes found. Start by creating one!</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {notes.map((note) => (
                  <NoteCard
                    key={note.id}
                    note={note}
                    onUpdate={updateNote}
                    onDelete={deleteNote}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;