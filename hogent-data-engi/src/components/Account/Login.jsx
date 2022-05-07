import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Title from '../Title';
import './account.css'


export default function Login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { login, error } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        const succes = await login(data)

        if (succes)
            navigate('/account')
        reset({ ww: '' })
    }

    return <div className="inside-main">
        <div className='center'>
            <div className='text-box'>
                <Title>Aanmelden</Title>
                <p className='form-text'>Welkom bij HOGENT - Data Engineering Project</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-item'>
                    <label>Email*</label>
                    <span className="form-error">{errors?.email?.message}</span>
                    <input id='email' type='email'
                        {...register("email", { required: "Gelieve een e-mailadres in te vullen" })}
                    />
                </div>

                <div className='input-item'>
                    <label>Wachtwoord*</label>
                    <span className="form-error">{errors?.ww?.message}</span>
                    <input id='ww' type='password'
                        {...register("ww", { required: "Gelieve een wachtwoord in te vullen" })}
                    />
                </div>
                <span className="form-error">{error ? error : ''}</span>
                <button type='sumbit' className='submit'>Aanmelden</button>
                <p className="form-text">Nog geen account? <Link to='/account/register'>Registreer hier.</Link></p>
            </form>
        </div>
    </div>
}