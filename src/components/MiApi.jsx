import { useState, useEffect } from "react";

const MiApi = () => {
    //Guardar info traída desde la Api
    const [info, setInfo] = useState ([]);
    //Llamar a la función que consume la Api
    useEffect (() => {
        consultarInfo();
    }, [])
    //Funcion que consulta la Api
    const consultarInfo = async () => {
        const response = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await response.json();
        setInfo(data);
    }
    //Estado de búsqueda
    const [search, setSearch] = useState ('')
    //Función de búsqueda
    const busqueda = (e) => {
        setSearch(e.target.value)
    }
    //Filtrado
    let results = []
    if(!search) {
        results = info
    } else{
        results = info.filter((elemento) =>
        elemento.name.toLowerCase().includes(search.toLocaleLowerCase()) )
    }
    
    //Funcion de sort
    const [order, setOrder] = useState('ASC');
    const sorting = (col) => {
        if(order === 'ASC') {
            const sorted = [...info].sort((a, b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setInfo(sorted);
            setOrder('DSC');
        }
        if(order === 'DSC') {
            const sorted = [...info].sort((a, b) =>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setInfo(sorted);
            setOrder('ASC');
        }
    }


    return (
        <div>
            <div className="digi-container">
                <div>
                    <input value={search} onChange={busqueda} type="text" placeholder="Busca tu Digimon" className="form-control mt-3" />
                    <button className="btn btn-sm bg-warning mt-3" onClick={()=>sorting("name")}>Sort: A-Z</button>
                </div>
                <table className='table table-bordered  table-hover shadow-lg mt-3'>
                    <thead>
                        <tr className='bg-primary text-black'>
                            <th>Digimon</th>
                            <th>Foto</th>
                            <th>Nivel</th>
                        </tr>
                    </thead>
                    <tbody className='bg-secondary text-black'>
                        { results.map((elemento) => (
                            <tr key={elemento.id}>
                                <td>{elemento.name}</td>
                                <td className="digimon-img"><img src={elemento.img} alt="" /></td>
                                <td>{elemento.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

    export default MiApi;