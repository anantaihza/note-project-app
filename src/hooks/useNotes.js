import { getActiveNotes, getArchivedNotes } from "../utils/network-data";
import { useEffect, useState } from "react";

const useNotes = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [activeCount, setActiveCount] = useState(0);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [archiveCount, setArchiveCount] = useState(0);

  const getActive = async () => {
    const { error, data } = await getActiveNotes();
    if (!error) {
      setActiveNotes(data);
      setActiveCount(data.length || 0);
    }
  };
  const getArchived = async () => {
    const { error, data } = await getArchivedNotes();
    if (!error) {
      setArchiveNotes(data);
      setArchiveCount(data.length || 0);
    }
  };

  useEffect(() => {
    getActive();
    getArchived();
  }, []);

  return { activeNotes, archiveNotes, activeCount, archiveCount };
};

export default useNotes;
