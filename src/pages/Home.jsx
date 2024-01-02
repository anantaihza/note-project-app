import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getActiveNotes,
  getArchivedNotes,
  searchTitleNotes,
} from "../utils/local-data";

import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Decoration from "../components/Decoration";
import ListCard from "../components/Card/ListCard";
import TitleNote from "../components/Title/TitleNote";
import Summary from "../components/SummaryCount/Summary";

export default function Home() {
  const [searchParam, setSearchParam] = useSearchParams();

  const title = searchParam.get("title");

  const changeSearchParam = (keyword) => {
    setSearchParam({ title: keyword });
  };

  const [search, setSearch] = useState(title || "");
  const activeNotes = getActiveNotes();
  const archivedNotes = getArchivedNotes();
  const countActive = activeNotes.length;
  const countArchived = archivedNotes.length;

  const searchResult = searchTitleNotes(search, activeNotes);

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden min-h-screen pt-12">
        <Summary
          activeCard="aktif"
          countActive={countActive}
          countArchived={countArchived}
        />
        <TitleNote statusNote="aktif" />
        <Search setSearch={setSearch} onParam={changeSearchParam} />
        <ListCard notes={searchResult} />

        <Decoration position="right" />
        <Decoration position="left" />
      </div>
    </>
  );
}
