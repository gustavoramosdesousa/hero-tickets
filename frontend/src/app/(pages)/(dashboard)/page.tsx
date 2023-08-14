import { isAwaitKeyword } from "typescript";
import { BannerPrimary } from "../../components/BannerPrimary";
import { categories } from "../../utils/categories";
import { fetchWrapper } from "@/app/utils/fetchWrapper";
import { BannerSecundary } from "@/app/components/BannerSecondary";

export default async function Dashboard(){
    const response = await fetchWrapper('/events/main', {
        method:'GET'
    });
    const secondaryResponse = response.slice(1); //pula o primeiro retorno
   return(
        <div className="container mx-auto">
            <BannerPrimary events={response[0]}/>

            <div className="p-2 text-blue ">
                <p className="text-2xl font-medium">Eventos em Destaque</p>
                <p className="text-base font-light">Texto Texto Texto e Mais Texto</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                {secondaryResponse.map((event:any) => (
                    <BannerSecundary event={event}/>
                ))}
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