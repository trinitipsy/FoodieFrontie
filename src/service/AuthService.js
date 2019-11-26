import axios from 'axios';
import JwtDecode from 'jwt-decode';

const USER_API_BASE_URL = 'http://localhost:8080/users/';

export class AuthService {

  login(credentials) {
    return axios.post(USER_API_BASE_URL + "login", credentials);
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  getAuthHeader() {
    return { headers: { Authorization: 'Bearer ' + this.getUserInfo().token } };
  }

  getAuthorization() {
    if (this.getUserInfo()) {
      return 'Bearer ' + this.getUserInfo().token;
    } else {
      return "";
    }
  }

  logOut() {
    localStorage.removeItem("userInfo");
    //return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
  }

  getRole() {
    const userInfo = this.getUserInfo();
    if (!userInfo || !userInfo.token) {
      return null;
    }

    const jwt = JwtDecode(userInfo.token);
    const auth = jwt.auth;

    if (auth.length) {
      return auth[0].authority;
    } else {
      return null;
    }
  }

  isUser() {
    return this.getRole() == 'ROLE_USER';
  }

  isAdmin() {
    return this.getRole() == 'ROLE_ADMIN';
  }

}

export default new AuthService();
