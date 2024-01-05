// untuk pencarian judul
const searchTitleNotes = (title, notes) => {
  return notes.filter((note) =>
    note.title.toLowerCase().includes(title.toLowerCase())
  );
};

export { searchTitleNotes };
