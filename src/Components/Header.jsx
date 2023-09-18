import { HiMoon, HiSun, HiMagnifyingGlass } from 'react-icons/hi2';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { ThemeContext } from '../Contexts/Context';

function Header() {
    const {theme,setTheme} = useContext(ThemeContext)
    return (
        <div>
            <div className='flex items-center gap-5 w-11/12 mx-auto'>
                <img className='h-14 w-14' src={logo} alt="logo " />
                <div className='flex p-2 bg-slate-300 items-center w-full rounded-full'>
                    <HiMagnifyingGlass className='text-2xl' />
                    <input placeholder='Search your fevourite game' className='outline-none bg-transparent px-2 w-full' type="text" />
                </div>
                {theme ==='light' ? <HiMoon className='text-4xl cursor-pointer' onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}} /> : <HiSun className='text-4xl cursor-pointer text-white' onClick={() => {setTheme('light');localStorage.setItem('theme','light')}} />}

            </div>
        </div>
    )
}

export default Header