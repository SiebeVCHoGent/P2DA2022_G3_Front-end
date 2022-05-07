import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Title from "../Title";
import './account.css'

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: registerAcc, error, loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = async data => {
        const succes = await registerAcc({ ...data })
        if (succes)
            navigate('/account')
    }

    return <div className="inside-main">
        <div className='center'>
            <div className='text-box'>
                <Title>Registreren</Title>
                <p className='form-text'>Welkom bij HOGENT - Data Engineering Project</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
                <div className='input-item'>
                    <label>Voornaam*</label>
                    <span className="form-error">{errors?.voornaam?.message}</span>
                    <input id='voornaam'
                        {...register("voornaam", { required: "Gelieve een voornaam in te vullen" })}
                    />

                </div>

                <div className='input-item'>
                    <label>Achternaam*</label>
                    <span className="form-error">{errors?.achternaam?.message}</span>
                    <input id='achternaam'
                        {...register("achternaam", { required: "Gelieve een achternaam in te vullen" })}
                    />
                </div>

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
                <button type='sumbit' className='submit' disabled={loading}>Registreer</button>
                <p className="form-text">Heb je al een account? <Link to='/account/login'>Meld hier aan.</Link></p>
            </form>
        </div>
    </div>
}