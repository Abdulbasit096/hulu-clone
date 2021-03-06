const HeaderItem = ({Icon,title}) => {
    return (
        <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
            <Icon className="h-6 w-6 group-hover:animate-bounce transition-all duration-200" />
            <p className='opacity-0 tracking-widest group-hover:opacity-100'>{title}</p>
        </div>
    )
}
HeaderItem.displayName = 'HeaderItem';
export default HeaderItem
