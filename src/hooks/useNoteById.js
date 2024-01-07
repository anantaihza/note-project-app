import { getNote } from "../utils/network-data";
import { useEffect, useState } from "react";

const useNoteById = (idNote) => {
    const [note, setNote] = useState({});
    const [loading, setLoading] = useState(true);

    const getNoteById = async (id) => {
        const { error, data } = await getNote(id);
        if (!error) {
            setNote(data);
            setLoading(false);
        }
    }

    useEffect(() => {
        getNoteById(idNote);
    }, [idNote]);

    return { note, loading };
}

export default useNoteById;