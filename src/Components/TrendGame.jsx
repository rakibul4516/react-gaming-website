import PropTypes from 'prop-types'

function TrendGame({trendGames}) {
  return (
    <div className='my-10 w-11/12 mx-auto'>
        <h1 className='text-4xl font-semibold dark:text-white'>
            Trend Games
        </h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                trendGames.map((game,index)=>index<4 &&(
                    <>
                        <div className=' shadow-lg my-5 rounded-md hover:scale-105 hover:transition-all hover:ease-out hover:duration-600 dark:bg-gray-600 group'>
                            <img src={game.background_image} alt="Trending game" className='rounded-lg h-52 object-cover w-full' />
                            <h2 className='text-2xl text-center my-5 dark:text-white font-semibold'>{game.name}</h2>
                        </div>
                    </>
                ))
            }
        </div>
    </div>
  )
}

TrendGame.propTypes = {
    trendGames:PropTypes.array
}

export default TrendGame
