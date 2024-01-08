import { useState } from "react";
import useNotes from "../hooks/useNotes";
import { useSearchParams } from "react-router-dom";
import { searchTitleNotes } from "../utils/search";

import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Decoration from "../components/Decoration";
import ListCard from "../components/Card/ListCard";
import TitleNote from "../components/Title/TitleNote";
import TitleUser from "../components/Title/TitleUser";
import Summary from "../components/SummaryCount/Summary";

export default function Archive({ username, logout }) {
  const [searchParam, setSearchParam] = useSearchParams();

  const title = searchParam.get("title");

  const changeSearchParam = (keyword) => {
    setSearchParam({ title: keyword });
  };

  const [search, setSearch] = useState(title || "");
  const { archiveNotes, activeCount, archiveCount, archiveLoading } = useNotes();

  const searchResult = searchTitleNotes(search, archiveNotes);

  return (
    <>
      <Navbar logout={logout} />
      <div className="relative overflow-hidden min-h-screen pt-12">
      <TitleUser name={username} />
        <Summary
          activeCard="arsip"
          countActive={activeCount}
          countArchived={archiveCount}
        />
        <TitleNote statusNote="arsip" />
        <Search setSearch={setSearch} onParam={changeSearchParam} />
        <ListCard notes={searchResult} isLoading={archiveLoading} />

        <Decoration position="left" />
        <Decoration position="right" />
      </div>
    </>
  );
}

Archive.propTypes = {
  username: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
}