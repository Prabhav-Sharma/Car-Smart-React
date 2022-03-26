import {createContext, useContext, useReducer} from "react";
import { bookmarksReducer } from "./bookmarksReducer";

const BookmarksContext  = createContext({});

const BookmarksProvider=({children})=>{
   const [bookmarksState, bookmarksDispatch] = useReducer(bookmarksReducer, {bookmarks:[]});

    return <BookmarksContext.Provider value={{bookmarksState, bookmarksDispatch}}>{children}</BookmarksContext.Provider>
}

const useBookmarks= ()=> useContext(BookmarksContext);

export {useBookmarks, BookmarksProvider}

