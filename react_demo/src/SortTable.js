import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Table } from 'react-bootstrap';
import orderBy from 'lodash/orderBy'
import UserInfoContext from './UserInfoContext';
import { useTranslation } from "react-i18next";
const SortTable = () =>  {
  
  const { userInfo , setUserInfo  } = useContext(UserInfoContext);
  const { t } = useTranslation();
  const getNewSortDirection = (sortColumn, sortDirection) => {
    if (sortColumn !== userInfo.sortColumn) {
      return 'asc';
    }
    
    if (sortDirection === 'asc') {
      return 'desc'
    }

    if (sortDirection === 'desc') {
      return 'default'
    }
    return 'asc';
  }

  const getSortIcon = (sortDirection) => {
    if (sortDirection === 'asc') {
      return 'fa fa-fw fa-sort-asc'
    }

    if (sortDirection === 'desc') {
      return 'fa fa-fw fa-sort-desc'
    }
    return ''
  }

  const onClickSort = (sortColumn) => {
    const sortDirection = getNewSortDirection(sortColumn, userInfo.sortDirection);
    let data;
    let sortIcon = getSortIcon(sortDirection);
    if (sortDirection === 'default') {
      data = orderBy(userInfo.data,['id'],'asc');
    } else {
      data = orderBy(userInfo.data,[sortColumn],sortDirection);
    }
    setUserInfo({sortDirection,sortColumn,data,sortIcon});
  };

  return (
    <div className="p-4">
      <Table bordered hover>
        {/* label row */}
        <thead >
          <tr style={{cursor: 'pointer'}}>
            <th onClick={() => {onClickSort('name')}}>
              {t("Name")} 
              {userInfo.sortColumn === 'name' && <i className={userInfo.sortIcon}></i>}
            </th>
            <th onClick={() => {onClickSort('address')}}>
              {t("Address")}
              {userInfo.sortColumn === 'address' && <i className={userInfo.sortIcon}></i>}
            </th>
            <th onClick={() => {onClickSort('city_name')}}>
              {t("City")}
              {userInfo.sortColumn === 'city_name' && <i className={userInfo.sortIcon}></i>}
            </th>
            <th onClick={() => {onClickSort('region_name')}}>
              {t("Region")}
              {userInfo.sortColumn === 'region_name' && <i className={userInfo.sortIcon}></i>}
            </th>
            <th onClick={() => {onClickSort('country_name')}}>
              {t("Country")}
              {userInfo.sortColumn === 'country_name' && <i className={userInfo.sortIcon}></i>}
            </th>
            <th onClick={() => {onClickSort('birthday')}}>
              {t("Birthday")}
              {userInfo.sortColumn === 'birthday' && <i className={userInfo.sortIcon}></i>}
            </th>
          </tr>
        </thead>
        {/* data fetch from server */}
        <tbody>
            { 
              userInfo.data.map((item,index) => (
                <tr key={index}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.city_name}</td>
                <td>{item.region_name}</td>
                <td>{item.country_name}</td>
                <td>{item.birthday ? item.birthday.toLocaleDateString() : '-'}</td>
                </tr>
              ))
            }
        </tbody>
      </Table>
    </div>
  );
}

export default SortTable;
