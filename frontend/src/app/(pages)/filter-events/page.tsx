import { Input } from "@/app/components/Form/Input";
import { categories } from "../../utils/categories";
import { InputFile } from "@/app/components/Form/InputFile";
import { InputRange } from "@/app/components/Form/InputRange";
import { Button } from "@/app/components/Form/Button";
import { CardFilter } from "@/app/components/Form/CardFilter";
import { useSearchParams } from "next/navigation";
import {useEffect, useState} from 'react';
import { fetchWrapper } from "@/app/utils/fetchWrapper";

export default function FilterEvents(){
    const [events, setEvents] = useState([]);


    const searchParams = useSearchParams();
    const getEvents = async (data: any) =>{
        const response = await fetchWrapper(`/events/filter?`+ new URLSearchParams({
           name: data.name,
        })
        , {method: 'GET'});
        setEvents(response);
    }

    useEffect(()=>{
        if(searchParams.get('q')){
            getEvents({name: searchParams.get('q')});
        }
    },[]);


    return(
        <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 gap-1 grid-cols-1 p-8">
                <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
                    <div className="mb-4">
                        <p className="text-blue text-2xl font-medium">Filtrar Eventos</p>
                        <p className="text-blue text-base font-light">
                            Busque o evento que é a sua cara de maneira mais detalhada!
                        </p>
                    </div>
                 
                    <Input title="Nome" placeholder="Insira aqui o nome do seu evento" type="text"/>
                    <Input title="Localização" placeholder="Insira aqui o seu endereço" type="text"/>
                    <div className="grid grid-cols-2 gap-3">
                        <Input title="Data" placeholder="Insira aqui o nome do seu evento" type="date"/>
                        <Input title="Horário" placeholder="Insira aqui o seu endereço" type="number"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-blue text">Categoria</label>
                        <select name="" id="" className='w-full px-6 py-[5px] bg-white rounded-lg border border-teal-400'>
                            <option value=""> Selecione</option>
                            {categories.map((category, index)=>{
                                return ( 
                                <option key={index} value={category.name} >{category.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <InputRange className="" title="Valor"/>
                    <InputRange className="" title="Distância"/>
                    <div className="grid grid-cols-2 gap-3 w-2/3 m-auto">
                        <Button  title="Limpar" className="bg-white border border-blue text-blue"/>
                        <Button  title="Entrar" className="bg-blue border border-blue text-white"/>
                    </div>
                </div>
                <div className="mb-4 ml-4">
                    <p className="text-blue text-2xl font-medium"> Resultado da Busca </p>
                    <p className="text-blue text-base font-light"> 
                        Crie o seu próprio evento!
                    </p>
                    {events.map((event, index) => {
                        return <CardFilter event={event} key={index}/>
                    })}

                </div>
            </div>
        </div>

    );
}