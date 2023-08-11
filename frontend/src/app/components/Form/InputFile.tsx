'use client'
import {ChangeEvent, forwardRef, useState} from 'react';


export const InputFile= () => {
const [file, setFile] = useState<File | null>(null);
const [preview, setPreview] = useState<string | null>(null);
const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const newImage = e.target.files?.[0] || null; 
    setFile(newImage);
    if(newImage){
        const reader = new FileReader();
        reader.onloadend = (e)=>{
            const base64String = e.target?.result;
            setPreview(base64String as string);
        }
        reader.readAsDataURL(newImage);
    }
};


    return (
        <>
            {file ? (
                <div className='w-full h-full cursor-pointer bg-cover bg-center rounded-3xl'
                    style={{backgroundImage: `url(${preview})`}}>
                </div>
            ) :
            (
                <input className="block w-full h-full opacity-0 cursor-pointer rounded-3xl" type="file"
                    onChange={handleChange}
                />
            )}

        </>
    );
};
export const Input = forwardRef(InputFile);