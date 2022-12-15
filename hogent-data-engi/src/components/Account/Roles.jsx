import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import Title from "../Title";

export default function Roles() {

    const { register: registerSearch, handleSubmit: handleSubmitSearch } = useForm()
    const { register: registerRole, handleSubmit: handleSubmitRole, reset } = useForm()
    const { foundUser, searchUser, updateRole, error } = useContext(AuthContext)


    const submitSearch = (data) => {
        searchUser(data.email)
    }

    const submitRoleChange = (data) => {
        reset()
        updateRole(foundUser.id, data.rol)
    }

    return <div className="inside-main">
        <div className='center'>
            <div className='text-box'>
                <Title>Beheer Rollen</Title>
                <p className='form-text'>Beheer de rollen van de gebruikers</p>
            </div>
            <form className="form-login" onSubmit={handleSubmitSearch(submitSearch)}>
                <div className="input-item">
                    <label>Email Gebruiker</label>
                    <input {...registerSearch("email", { required: true })} placeholder="admin@mail.com" />
                </div>
                <span className="form-error">{error}</span>
                <button className="submit">Zoeken</button>
            </form>
            <br/>
            {
                foundUser ? <>
                    <div>
                        <h2>Gevonden Gebruiker</h2>
                        <p>Naam: {foundUser.voornaam} {foundUser.achternaam}</p>
                        <p>Email: {foundUser.email}</p>
                        <p>Huidige rollen: {foundUser.roles.join(", ")}</p>
                    </div>
                    <br />
                    <form className="form-login" onSubmit={handleSubmitRole(submitRoleChange)}>
                        <div className="input-item">
                        <label>Te verwijderen/Toe te voegen rol</label>
                        <input {...registerRole("rol", { required: true })} placeholder="admin, moderator, ..." />

                        <button className="submit">Aanpassen</button>
                </div>
                    </form>
                </>
                : null
            }

        </div>
    </div>
}