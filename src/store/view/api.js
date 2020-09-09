import axios from 'axios'


export function usersInfoAPI(){

    return new Promise((resolve, reject) => {
        return axios.get(`https://reqres.in/api/users?delay=3`)
          .then(response => {
            resolve(response.data)
            //console.log(response.data)
          })
          .catch(err => reject(err))
      })
    
}

export function delayedInfoAPI(){

  return new Promise((resolve, reject) => {
      return axios.get(`https://reqres.in/api/users?page=2`)
        .then(res => {
          resolve(res.data)
          //console.log(response.data)
        })
        .catch(err => reject(err))
    })
  
}
