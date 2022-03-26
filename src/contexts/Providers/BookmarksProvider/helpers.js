import axios from "axios";

const addToBookmarks=async (product, token, toggler, dispatcher)=>{
    toggler(true);
     try{
       const response= await axios({
       method:"post",
       url:"/api/user/wishlist",
       headers:{authorization:token},
       data:{product:product}
    });
    toggler(false);
    dispatcher({type:"ADD_TO_BOOKMARKS", payload:response.data.wishlist});
}catch(e){
    console.log(e);
    toggler(false);
}
}

const removeFromBookmarks=async(id ,token, toggler, dispatcher)=>{
    toggler(true);
  try{
   const response= await axios({
       method:"DELETE",
       url:`/api/user/wishlist/${id}`,
       headers:{authorization:token}
   });
   toggler(false);
   dispatcher({type:"REMOVE_FROM_BOOKMARKS", payload:response.data.wishlist})
  }catch(e){
      console.log(e)
      toggler(false);
  }
}

export {removeFromBookmarks, addToBookmarks};