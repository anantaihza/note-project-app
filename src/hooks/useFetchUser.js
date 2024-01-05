import { getUserLogged, getAccessToken } from "../utils/network-data";
import { useEffect, useState } from "react";

const useFetchUser = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initialized, setInitialized] = useState(true);

  const updateAuthedUser = (data) => {
    setAuthedUser(data);
  };

  const fetchUserLogged = async () => {
    const { error, data } = await getUserLogged();

    if (!error) {
      setAuthedUser(data);
      setInitialized(false);
    }
  };

  useEffect(() => {
    if (getAccessToken()) {
      setInitialized(true);
      fetchUserLogged();
    } else {
      setInitialized(false);
    }
  }, []);

  return { authedUser, updateAuthedUser, initialized, fetchUserLogged };
};

export default useFetchUser;
