import SneakerLogos from '@/assets/images/logo.svg'
import AvatarImage from '@/assets/images/image-avatar.png'
import MenuIcon from '@/components/Icons/MenuIcon'
import CartIcon from '@/components/Icons/CartIcon'
import CloseIcon from '@/components/Icons/CloseIcon'
import { useState } from 'react'
import NavLinkHeader from '@/components/Header/NavLinkHeader'

export const MainHeader = () => {
    const [navClass, setNavClass] = useState(
        'hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0'
    )

    const handledOpenMenu = () => {
        setNavClass(
            'absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 z-10'
        )
    }

    const handledCloseMenu = () => {
        setNavClass(
            'hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0'
        )
    }

    return (
        <>
            <header className='container mx-auto flex items-center gap-8 p-4 md:p-0'>
                <button className='md:hidden' onClick={handledOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={SneakerLogos}
                    alt='Logo Sneakers'
                    className='mr-auto mb-1 md:mr-0'
                />
                <nav className={navClass}>
                    <button
                        className='mb-12 md:hidden'
                        onClick={handledCloseMenu}
                    >
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text='Collections' />
                    <NavLinkHeader text='Men' />
                    <NavLinkHeader text='Woman' />
                    <NavLinkHeader text='About' />
                    <NavLinkHeader text='Contact' />
                </nav>
                <div className='flex gap-4'>
                    <button>
                        <CartIcon />
                    </button>
                    <img
                        src={AvatarImage}
                        alt='Imagen Usuario'
                        className='w-10'
                    />
                </div>
            </header>
            <span className='container mx-auto hidden h-[1px] w-full bg-gray-400 md:block'></span>
        </>
    )
}
