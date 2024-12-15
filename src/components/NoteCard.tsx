import React, { useState } from 'react';
import { Pencil, Trash2, Save, X } from 'lucide-react';
import { Note } from '../types/note';

interface NoteCardProps {
  note: Note;
  onUpdate: (id: string, title: string, content: string) => void;
  onDelete: (id: string) => void;
}

export function NoteCard({ note, onUpdate, onDelete }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    onUpdate(note.id, title, content);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              <Save size={16} />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-gray-600 hover:text-blue-500"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => onDelete(note.id)}
                className="p-2 text-gray-600 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          <p className="text-gray-600 whitespace-pre-wrap">{note.content}</p>
          <div className="mt-4 text-sm text-gray-400">
            Last updated: {new Date(note.updatedAt).toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
}