import React from 'react';

// Default value
const userInfo = {
    sortDirection: 'default',
    sortColumn: '',
    sortIcon: '',
    data: [],
}
const setUserInfo = () => {};
const UserInfoContext = React.createContext({userInfo,setUserInfo});
export default UserInfoContext; 