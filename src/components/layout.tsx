import Header from "@/components/header";
import Footer from "@/components/footer";
import {ScriptProps} from "next/script";

export default function Layout({children}: ScriptProps) {
    return (
        <>
            <Header/>
            <main className="flex flex-col container mx-auto min-h-90v">{children}</main>
            <Footer/>
        </>
    )
}