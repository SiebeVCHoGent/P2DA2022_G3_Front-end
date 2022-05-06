import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './account.css'


export default function Login(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return <main>
        <div className="inside-main">
            <div className='center'>
                <div className='text-box'>
                    <h1 className='form-title'>Aanmelden</h1>
                    <p className='form-text'>Welkom bij HOGENT - Data Engineering Project</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-item'>
                        <label>Email*</label>
                        <input id='email'
                            {...register("email", { required: "Gelieve een email adres in te vullen" })}
                        />
                    </div>
                    
                    <div className='input-item'>
                        <label>Wachtwoord*</label>
                        <input id='ww' type='password'
                            {...register("ww", { required: "Gelieve een wachtwoord in te vullen" })}
                        />
                    </div>
                    <button type='sumbit' className='submit'>Aanmelden</button>
                    <p className="form-text">Nog geen account? <Link to='/account/register'>Registreer hier.</Link></p>
                </form>
            </div>
        </div>
    </main>
}