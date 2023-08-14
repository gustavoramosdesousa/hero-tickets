'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export const Navbar = () => {
    const[search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = () =>{
        const queryString = encodeURIComponent(search);
        router.push(`/filter-events?q=${queryString}`);
    }


    return(
        <nav className='bg-blue mx-auto px-6 absolute w-full top-0 h-16 flex items-center'>
            <Image className='flex items-center px-3 py-2'
                src="/logo-hero.png" alt="logo" width={150} height={150} />
            <div className='flex items-center w-[50vw]'>
                <input className='w-full rounded-md px-3 py-2 text-sm font-normal' 
                    type="text" placeholder="Insira o nome ou endereço do evento aqui!"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) =>{
                            if(e.key === 'Enter'){
                                handleSubmit();
                            }
                        }}/>
            </div>
        </nav>
    );
};