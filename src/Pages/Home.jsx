import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalApi from "../Services/GlobalApi"
import AllGames from "../Components/AllGames"
import TrendGame from "../Components/TrendGame"
import { HiBars4,HiXMark } from 'react-icons/hi2';

function Home() {
    const [allGames, setAllGames] = useState([])
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    useEffect(() => {
        GlobalApi.getAllGames.then((resp) => {
            console.log(resp.data.results)
            setAllGames(resp.data.results)
        })
    }, [])
    return (
        <div>
            <h1 onClick={toggleMenu} className="lg:hidden lg:block md:hidden text-4xl my-2 p-3 w-40 dark:text-white">{menuOpen == true ? <HiXMark/> : <HiBars4/>}</h1>
            <div className="grid grid-cols-4 relative">
                <div className={`w-full max-md:absolute max-md:bg-red-600 ${menuOpen ?" left-0 max-md:w-8/12 max-md:mx-auto z-10 duration-1000 max-md:rounded-md" : "-left-full duration-1000 z-10"}`}>
                    <GenreList></GenreList>
                </div>
                <div className="col-span-4 md:col-span-3">
                    {allGames.length > 0 ? <div>
                        <AllGames allGames={allGames}></AllGames>
                        <TrendGame trendGames={allGames}></TrendGame>
                    </div>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Home