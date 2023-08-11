import { BannerPrimary } from "../../components/BannerPrimary";
import { categories } from "../../utils/categories";

export default function Dashboard(){
   return(
        <div className="container mx-auto">
            <BannerPrimary/>

            <div className="p-2 text-blue ">
                <p className="text-2xl font-medium">Eventos em Destaque</p>
                <p className="text-base font-light">Texto Texto Texto e Mais Texto</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="rounded ">
                    <div className="p-3 w-full h-[150px] relative bg-black bg-opacity-25 rounded-3xl shadow">
                        <div className=" text-white absolute top-1">
                            <p className="text-normal pb-1 font-bold">Jorge e Matheus</p>
                            <div className='flex'>
                                <div className='mr-4 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    <p>calendário</p>
                                </div>

                                <div className='mr-4 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Horário</p>
                                </div>
                            </div>
                        </div>
                        <div className=" text-white absolute bottom-3">
                            <div className='flex'>
                                <div className='mr-4 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                    </svg>
                                    <p>Localização</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="p-2 text-blue">
                <p className="text-2xl font-medium">Navegue por tipo de Evento</p>
                <p className="text-base font-light">Texto Texto Texto e Mais Texto</p>
            </div>
            <div className="grid md:grid-cols-7 grid-cols-2 gap lg:gap-2 sm:gap-1">
                
                    {categories.map((category)=>{
                        return (
                            <>
                                <div className="flex flex-col items-center justify-center cursor-pointer">
                                    <img  src={category.icon} alt="" className="rounded-full"/>
                                    <p> {category.name} </p>
                                </div>
                            </>
                        );}
                    )}
                
            </div>
        </div>
    );
}