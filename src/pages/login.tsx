import Button from "@/components/ui/button";
import {authenticateUser} from "@/store/authSlice";
import {FormEvent, useState} from "react";
import {useAppDispatch} from "@/store/store";

function submitForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
}

const Login = () => {
    const dispatch = useAppDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="flex justify-center">
                <form className="flex flex-col" onSubmit={(event) => {
                    event.preventDefault()
                    dispatch(authenticateUser({login, password}))
                }}>
                    <input className="p-3 m-2 rounded-full bg-blue-200" type="text" name="login" placeholder="Bolas"
                           onChange={(event) => setLogin(event.target.value)}/>
                    <input className="p-3 m-2 rounded-full bg-blue-200" type="password" name="password"
                           onChange={(event) => setPassword(event.target.value)}
                           placeholder="*****"/>
                    <Button type="submit">Connexion</Button>
                </form>

            </div>
        </>
    )
}

export default Login