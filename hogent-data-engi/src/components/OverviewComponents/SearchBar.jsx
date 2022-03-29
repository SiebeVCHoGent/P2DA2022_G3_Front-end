import { useContext } from 'react';
import {useForm} from 'react-hook-form'
import { SearchContext } from "../../contexts/SearchProvider";

export default function SearchBar() {
    const { register, handleSubmit} = useForm();
    const { searchKMO } = useContext(SearchContext)

    const onSubmit = (data) => {
        searchKMO(data.query)
    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <span className="search-container">
                <input 
                    className="search-in" 
                    placeholder="Zoek op bedrijfsnaam of sector..."
                    {...register('query', {required:true})}
                ></input>
                <span className="search-glass" onClick={handleSubmit(onSubmit)}>S</span>
            </span>
        </form>
    </div>
}