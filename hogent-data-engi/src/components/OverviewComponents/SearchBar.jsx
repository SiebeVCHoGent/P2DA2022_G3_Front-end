import { useContext } from 'react';
import {useForm} from 'react-hook-form'
import { SearchContext } from "../../contexts/SearchProvider";

import { ImSearch } from 'react-icons/im'

export default function SearchBar() {
    const { register, handleSubmit} = useForm();
    const { searchKMO, error } = useContext(SearchContext)

    const onSubmit = (data) => {
        searchKMO(data.query)
    }

    return <div className='search-div'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <span className="search-container">
                <input 
                    className="search-in" 
                    placeholder="Zoek op bedrijfsnaam of sector..."
                    {...register('query', {required:true})}
                ></input>
                <span className="search-glass" onClick={handleSubmit(onSubmit)}><ImSearch/></span>
            </span>
        </form>
        <p className='form-error'>{error ? error : ''}</p>
    </div>
}