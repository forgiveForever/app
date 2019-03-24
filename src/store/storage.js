
const sessionStorage = window.sessionStorage;
export class storage {
  /**设置用户信息*/
  static setUserInfo(value ={}) {
    return sessionStorage.setItem('userInfo', JSON.stringify(value));
  }
  /**获取tabs*/
  static getUserInfo() {
    const userInfo = sessionStorage.getItem('userInfo');
    return userInfo ? JSON.parse(sessionStorage.getItem('userInfo')): null;
  }

}

