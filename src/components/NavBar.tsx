export function NavBar() {
    return(
        <div className="w-full flex items-center justify-center bg-gray-700 border border-gray-600 gap-6 mb-8 p-2">
            <a className="p-2 border border-gray-600 text-amber-300 flex justify-center w-[122px] relative" href="./cabecinha">Cabecinha</a>
            <a className="p-2 border border-gray-600 text-amber-300 flex justify-center w-[122px] relative" href="./ct">Base CT</a>
            <a className="p-2 border border-gray-600 text-amber-300 flex justify-center w-[122px] relative" href="./janelaMeio">Janela Meio</a>
            <a className="p-2 border border-gray-600 text-amber-300 flex justify-center w-[122px] relative" href="./meioAlto">Meio Alto</a>
            <a className="p-2 border border-gray-600 text-amber-300 flex justify-center w-[122px] relative" href="./liga">Liga</a>
            <a className="p-2 border border-gray-600 text-amber-300 flex justify-center w-[122px] relative" href="./janelaB">Janela bomb B</a>
            <a className="p-2 border border-gray-600 text-amber-300 flex justify-center w-[122px] relative" href="./portaB">Porta bomb B</a>        
        </div>
    )
}