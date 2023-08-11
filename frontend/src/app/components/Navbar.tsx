import Image from 'next/image';

export const Navbar = () => {
    return(
        <nav className='bg-blue mx-auto px-6 absolute w-full top-0 h-16 flex items-center'>
            <Image className='flex items-center px-3 py-2'
                src="/logo-hero.png" alt="logo" width={150} height={150} />
            <div className='flex items-center w-[50vw]'>
                <input className='w-full rounded-md px-3 py-2 text-sm font-normal' 
                    type="text" placeholder="Insira o nome ou endereço do evento aqui!"/>
            </div>
        </nav>
    );
};