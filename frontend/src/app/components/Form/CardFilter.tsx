import Image from 'next/image';
import { Button } from './Button';

export const CardFilter = ({event}: any) => {
    const image = `http://localhost:3333/uploads/${event.banner}`;

    return(
            <div className="rounded mb-6">
                <div className="p-3 w-full h-[150px] relative  rounded-3xl rounded-b-none shadow gb-cover bg-center"
                        style={{backgroundImage: `url(${image})`}}>
                    <div className=" text-white absolute top-1">
                        <p className="text-normal pb-1 font-bold">{event.title}</p>
                        <div className='flex'>
                            <div className='mr-4 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                <p>{event.date}</p>
                            </div>

                            <div className='mr-4 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>{event.date}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" text-white absolute bottom-3">
                        <div className='flex'>
                            <div className='mr-4 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                </svg>
                                <p>{event.location}</p>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="p-3 w-full relative bg-slate-200 bg-opacity-25 rounded-3xl rounded-t-none shadow">
                    <p>
                        {event.description}
                    </p>
                    <div className='flex justify-center w-2/5 mx-auto my-4'>
                        <Button title="Ver detalhes do Evento" className="bg-blue border border-blue text-white"/>
                    </div>
                </div>  
            </div>
    );
};