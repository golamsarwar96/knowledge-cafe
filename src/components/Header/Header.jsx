import profile from '/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between p-4 items-center mx-4 border-b-2'>
             <h1 className='text-5xl font-bold'>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </header>
    );
};

export default Header;