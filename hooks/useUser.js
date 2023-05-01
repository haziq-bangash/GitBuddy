import { useState, useEffect } from "react";
import { getUserData } from "../pages/api/github_api";

const useUser = (defaultSearchTerm) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await getUserData(term);

    setUser(response);
    // console.log(response)
  };

  return [user, search];
};

export default useUser;
