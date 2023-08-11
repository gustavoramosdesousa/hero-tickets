export const Footer = () => {
    return(
        <div className='flex justify-end w-full h-[26px] fixed bottom-0 items-center bg-blue text-white pr-32'>
            <p>Hero Tickets | {new Date().getFullYear()} | </p>
            <p>Todos os direitos reservados.</p>
        </div>          
    );
};