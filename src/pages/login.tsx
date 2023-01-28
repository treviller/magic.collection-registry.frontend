import Button from "@/components/ui/button";

const Login = () => {
    return (
        <>
            <div className="flex justify-center">
                <form className="flex flex-col">
                    <input className="p-3 m-2 rounded-full bg-blue-200" type="text" name="login" placeholder="Bolas"/>
                    <input className="p-3 m-2 rounded-full bg-blue-200" type="password" name="password"
                           placeholder="*****"/>
                    <Button type="submit">Connexion</Button>
                </form>

            </div>
        </>
    )
}

export default Login