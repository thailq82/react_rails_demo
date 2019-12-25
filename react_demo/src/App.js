import React, { useState , useEffect } from 'react';
import axios from "axios";
import SortTable from './SortTable';
import UserInfoContext from './UserInfoContext.js';
import {Button} from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    sortDirection: 'default',
    sortColumn: '',
    sortIcon: '',
    data: [],
  });
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState("en");
  useEffect(() => {
    i18n.changeLanguage(language);
  },[i18n,language]);

  const peopleApiUrl = 'http://localhost:3000/api/v1/people/index';

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const asyncAxiosResult = await axios(peopleApiUrl);
    const data = asyncAxiosResult.data;
    data.map((item) => {
      if (item && item.birthday) {
        item.birthday = new Date(item.birthday);
      }
	  return item;
    })
    setUserInfo({
      sortDirection: '',
      sortColumn: '',
      sortIcon: 'fa fa-fw fa-sort',
      data,
    });
  }

  return (
    <>
      <div className="p-4">
        <Button variant={ language === "en" ? 'primary' : 'outline-secondary'} onClick={() => {setLanguage("en")}}>EN</Button>
        <Button variant={ language === "es" ? 'primary' : 'outline-secondary'} onClick={() => {setLanguage("es")}}>ES</Button>
        <Button variant={ language === "fr" ? 'primary' : 'outline-secondary'} onClick={() => {setLanguage("fr")}}>FR</Button>
      </div>
      <UserInfoContext.Provider value={{userInfo,setUserInfo}}>
        <SortTable />   
      </UserInfoContext.Provider>
    </>
  );
}

export default App;
