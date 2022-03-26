export const bookmarksReducer=(state, action)=>{
   switch(action.type){
       case "ADD_TO_BOOKMARKS":
        return {...state, bookmarks:action.payload }

        case "REMOVE_FROM_BOOKMARKS":
            return {...state, bookmarks:action.payload }
        
        case "FETCH_BOOKMARKS":
            return {...state, bookmarks:action.payload }
   }

}