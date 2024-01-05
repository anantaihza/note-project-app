import { getNote } from "../utils/network-data";
import { useEffect, useState } from "react";

const useNoteById = (idNote) => {
    const [note, setNote] = useState({});

    const getNoteById = async (id) => {
        const { error, data } = await getNote(id);
        if (!error) {
            setNote(data);
        }
    }

    useEffect(() => {
        getNoteById(idNote);
    }, [idNote]);

    return { note };
}

export default useNoteById;