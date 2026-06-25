import { createContext ,useContext, useState } from "react";

const WatchlistContext=createContext();
export const useWatchlist=()=>useContext(WatchlistContext);

export const WatchlistProvider=({children})=>{
    const [watchlist ,setWatchlist]=useState([]);

    function addToWatchlist(movie){
        const exist=watchlist.some((item)=>item.id===movie.id);

        if(exist) return;
        setWatchlist((prev)=>[...prev,movie]);
    }

    function removeFromWatchlist(id){
        setWatchlist((prev)=>prev.filter((movie)=>movie.id!==id))
    }

    return (
        <WatchlistContext.Provider value={watchlist,addToWatchlist,removeFromWatchlist}>
            {children}
        </WatchlistContext.Provider>
    )
}