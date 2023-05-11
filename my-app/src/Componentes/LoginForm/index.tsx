import React, { useState } from "react";
import {
    ContainerForms,
    emailInput,
    passwordInput
} from "./styles"
/*
    Parte do codigo do forms
*/
interface loginFormProps {
    onSubmit : ( email: string, password: string) => void;
}

const LoginForm: React.FC<loginFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        onSubmit(email, password);
    };

return (
    <form onSubmit = {handleSubmit}>
        <div className="ContainerForms">
            <div className="emailInput">
                <label htmlFor="email"> Email: </label>
                <input 
                type="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
            </div>
            <div className="passwordInput">
                <label htmlFor="password"> Senha: </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                />
            </div>
        </div>
    </form>

);

};

export default LoginForm;
