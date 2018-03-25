import axios from 'axios';

export const $fetchUsers = (usersLength) => axios.get(`https://randomuser.me/api/?results=${usersLength}`);
