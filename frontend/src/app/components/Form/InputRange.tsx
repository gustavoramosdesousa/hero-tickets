import {ForwardRefRenderFunction, forwardRef} from 'react';
interface IInput{
    title: string;
    className?:string;
};

export const InputRange: ForwardRefRenderFunction<HTMLInputElement & HTMLTextAreaElement, IInput> = (
    {title, className, ...rest}, ref
) => {

    return (
        <div className={`${className} mb-4 text-blue font-light`}>
            <label >{title}</label>
            <input className='w-full px-6 py-[5px] bg-white rounded-lg border border-teal-400' min={0} max={100} type='range' ref={ref} {...rest} />
        </div>
    );
};
export const Input = forwardRef(InputRange);