import { getActiveNotes, getArchivedNotes } from "../utils/network-data";
import { useEffect, useState } from "react";

const useNotes = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [activeCount, setActiveCount] = useState(0);
  const [activeLoading, setActiveLoading] = useState(true);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [archiveCount, setArchiveCount] = useState(0);
  const [archiveLoading, setArchiveLoading] = useState(true);

  const getActive = async () => {
    const { error, data } = await getActiveNotes();
    if (!error) {
      setActiveNotes(data);
      setActiveCount(data.length || 0);
      setActiveLoading(false);
    }
  };
  const getArchived = async () => {
    const { error, data } = await getArchivedNotes();
    if (!error) {
      setArchiveNotes(data);
      setArchiveCount(data.length || 0);
      setArchiveLoading(false);
    }
  };

  useEffect(() => {
    getActive();
    getArchived();
  }, []);

  return { activeNotes, archiveNotes, activeCount, archiveCount, activeLoading, archiveLoading };
};

export default useNotes;
