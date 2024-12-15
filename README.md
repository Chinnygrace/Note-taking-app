# React Notes App

A modern, responsive note-taking application built with React, TypeScript, and Tailwind CSS. This application allows users to create, edit, delete, and search through their notes with a clean and intuitive interface.

## Features

- ✨ Create new notes with title and content
- 📝 Edit existing notes
- 🗑️ Delete notes
- 🔍 Search through notes in real-time
- 📱 Responsive design for all devices
- ⚡ Fast and lightweight
- 🎨 Clean and modern UI
- 🕒 Automatic timestamps for creation and updates

## Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **Lucide React** - Beautiful, consistent icons

## Project Structure

```
src/
├── components/          # React components
│   ├── NoteCard.tsx    # Individual note display
│   ├── NoteForm.tsx    # Form for creating notes
│   └── SearchBar.tsx   # Search functionality
├── hooks/
│   └── useNotes.ts     # Custom hook for note management
├── types/
│   └── note.ts         # TypeScript interfaces
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 

### Installation

1. Clone the repository:
   git clone <repository-url>
   cd react-notes-app
   ```

2. Install dependencies:
   npm install
   ```

3. Start the development server:
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run lint` - Runs ESLint to check code quality

## Component Overview

### NoteForm
- Handles creation of new notes
- Input validation for title and content
- Clear form after submission

### NoteCard
- Displays individual notes
- Provides edit and delete functionality
- Shows last updated timestamp
- Inline editing capability

### SearchBar
- Real-time search functionality
- Searches through both titles and content
- Debounced search for better performance

## Custom Hooks

### useNotes
- Manages the state of notes
- Handles CRUD operations
- Implements search functionality
- Maintains notes order

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Best Practices Used

- ✅ Component-based architecture
- ✅ Custom hooks for state management
- ✅ TypeScript for type safety
- ✅ Responsive design principles
- ✅ Modern React patterns
- ✅ Clean code and documentation
- ✅ Consistent file structure
- ✅ Reusable components

## Future Enhancements

- [ ] Persistent storage (localStorage or backend integration)
- [ ] Note categories/tags
- [ ] Rich text editor
- [ ] Note sharing functionality
- [ ] Dark mode support
- [ ] Export notes feature
- [ ] Authentication system
- [ ] Collaborative editing
