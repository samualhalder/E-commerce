

export function createUsers(userData) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users',{
      method :'POST',
      body : JSON.stringify(userData),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function updateUsers(userData) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users/'+userData.id,{
      method :'PATCH',
      body : JSON.stringify(userData),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function checkUsers(loginData) {
  return new Promise(async (resolve,reject) =>{
    const email=loginData.email;
    const password=loginData.password;
    const response = await fetch('http://localhost:8080/users?email='+email) 
    const data = await response.json()
    if(data.length){
      if(data[0].password===password){
        resolve({data: data[0]})
      }else{
        reject({message:'Wrong  password'})
      }
    }else{
      reject({message:'Wrong email '})
    }
    
  }
  );
}
