export default {
    setToken: (token,ID) => {
        window.sessionStorage.setItem('token',token)
        window.sessionStorage.setItem('ID',ID)
    },
    getID: () => {
      return window.sessionStorage.getItem('ID')
    },
    clealToken: () => {
        window.sessionStorage.setItem('token','')
        window.sessionStorage.setItem('ID','')
    }
}
