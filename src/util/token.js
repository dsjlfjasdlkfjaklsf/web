export default {
    setToken: (token) => {
        window.sessionStorage.setItem('token',token)
    },
    clealToken: () => {
        window.sessionStorage.setItem('token','')
    }
}
  