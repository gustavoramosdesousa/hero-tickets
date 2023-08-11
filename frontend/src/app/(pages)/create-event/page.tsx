import { Input } from "@/app/components/Form/Input";
import { categories } from "../../utils/categories";
import { InputFile } from "@/app/components/Form/InputFile";

export default function CreateEvent(){
    return(
        <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 gap-1 grid-cols-1 p-8">
                <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
                    <div className="mb-4">
                        <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
                        <p className="text-blue text-base font-light">
                            Crie o seu próprio evento da maneira que você preferir!
                        </p>
                    </div>
                 
                    <Input title="Titulo" placeholder="Insira aqui o nome do seu evento" type="text"/>
                    <Input title="Endereço" placeholder="Insira aqui o seu endereço" type="text"/>
                    <Input title="Cupom" placeholder="Insira aqui o seu cupom" type="text"/>
                    <div className="grid grid-cols-2 gap-3">
                        <Input title="Data" placeholder="Insira aqui o nome do seu evento" type="date"/>
                        <Input title="Horário" placeholder="Insira aqui o seu endereço" type="number"/>
                    </div>
                    <p className="text-blue text-base font-medium mb-4">
                            Categorias do Evento
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                        {categories.map((category)=>{
                            return (
                                <div className="text-blue">
                                    <input type="checkbox" className="mr-2"/>
                                    <label htmlFor="">{category.name}</label>
                                </div>
                            );}
                        )}
                        
                    </div>
                    <div className="mt-4">
                        <p className="text-blue text-base font-medium"> Valor </p>
                        <p className="text-neutral-500 text-sm font-light"> 
                                Caso seu evento seja gratuito, o campo deverá ficar vazio.
                        </p>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        <Input className="col-span-2" title="Preço" placeholder="R$ 00,00" type="text"/>
                        <Input className="col-span-3" title="Setor" placeholder="Nome do setor" type="text"/>
                    </div>
                    <Input className=" " title="Descrição" placeholder="Descreva brevemente seu evento" type="textarea"/>
                </div>
                <div className="mb-4 ml-4">
                    <p className="text-blue text-2xl font-medium"> Adicionar Eventos </p>
                    <p className="text-blue text-base font-light"> 
                        Crie o seu próprio evento!
                    </p>
                    <div className="my-4">
                        <p className="text-blue text-base font-medum">Banner</p>
                        <p className="text-neutral-500 text-sm font-light">Insira um banner no formato 336x280</p>
                        <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                            <InputFile/>
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="text-blue text-base font-medum">Flyers</p>
                        <p className="text-neutral-500 text-sm font-light">Insira até três flyers</p>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile/>
                            </div>
                            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile/>
                            </div>
                            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile/>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="text-blue text-base font-medum">Mapa do Evento</p>
                        <p className="text-neutral-500 text-sm font-light">Insira o Mapa do evento indicando seus setores</p>
                        <div className="w-full h-56 bg-zinc-300 rounded-3xl shadow">
                            <InputFile/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}