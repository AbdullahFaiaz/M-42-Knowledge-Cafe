import a from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='w-[90%] md:w-[80%] mx-auto'>
        <div className='flex border-b items-center justify-between py-4'>
            <h1 className=' exo-bold text-4xl'>Knowledge Cafe</h1>
            <span><img src={a} alt="profile" /></span>
        </div>
        </header>

    );
};

export default Header;