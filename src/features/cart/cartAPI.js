export function addToCart(item) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart',{
      method :'POST',
      body : JSON.stringify(item),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchItemsByid(userid) {
  return new Promise(async (resolve) =>{
  const response = await fetch('http://localhost:8080/cart?user:'+userid) 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function UpadateItems(update) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart/'+update.id,{
      method :'PATCH',
      body : JSON.stringify(update),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function deleteItems(itemid) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart/'+itemid,{
      method :'DELETE',
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data:{id:itemid}})
  }
  );
}

