import { useState, useCallback } from 'react';
import { Note } from '../types/note';

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = useCallback((title: string, content: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes(prev => [newNote, ...prev]);
  }, []);

  const updateNote = useCallback((id: string, title: string, content: string) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? { ...note, title, content, updatedAt: new Date() }
          : note
      )
    );
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  }, []);

  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    notes: filteredNotes,
    addNote,
    updateNote,
    deleteNote,
    searchQuery,
    setSearchQuery,
  };
}