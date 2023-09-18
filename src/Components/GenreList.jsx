import { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi'

function GenreList() {
    const [genreItem, setGenre] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)



    useEffect(() => {
        GlobalApi.getGenreList.then((resp) => {
            setGenre(resp.data.results);
        })
    }, [])
    return (
        <>
            <div>
                <h2 className='w-10/12 mx-auto my-5 text-2xl font-semibold dark:text-white'>Genre List</h2>
                {
                    genreItem.map((item, index) => (
                        <>
                            <div onClick={() => setActiveIndex(index)} className={`w-10/12 flex gap-2 items-center hover:bg-gray-300 p-2 mx-auto rounded-lg hover:dark:bg-gray-600 group ${activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null}`}>
                                <img src={item.image_background} alt="" className={`h-14 w-14 object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex === index ? "scale-105" : null}`} />
                                <h2 className={`ml-2 text-1xl font-semibold dark:text-white group-hover:font-bold scale-105 transition-all ease-out duration-300 ${activeIndex === index ? "font-bold" : null}`}>{item.name}</h2>
                            </div>
                        </>
                    ))
                }
            </div>

        </>
    )
}

export default GenreList