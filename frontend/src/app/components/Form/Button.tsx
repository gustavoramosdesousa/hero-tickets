import {ForwardRefRenderFunction, forwardRef} from 'react';
interface IButtonProps{
    title: string;
    className?: string;
};

export const Button = ({title, className} : IButtonProps) => {
    return (
        <div className='flex items-center justify-center w-full'>
           <button className={`${className} rounded-lg px-4 py-2 w-full `}>{title}</button>
        </div>
    );
};