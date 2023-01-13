const NavLinkHeader = ({ text }) => {
    return (
        <a href='#' className='group relative py-8'>
            <span className='group-hover:text-orange-primary'>{text}</span>
            <span
                className='absolute left-0 bottom-0 block h-2 w-full scale-0 
                transition-all duration-300 group-hover:scale-100 group-hover:bg-orange-primary'
            ></span>
        </a>
    )
}

export default NavLinkHeader
