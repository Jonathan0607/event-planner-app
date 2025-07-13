import { SignIn } from "@clerk/nextjs";
import Image from "next/image";


function LoginPage() {
    return (
        <main className ="flex flex-col items-center p-5 gap-10 animate-fade-in">
            <div></div>
            <Image
                src = '/logo.svg'
                width = {100}
                height = {100}
                alt = 'Logo'
                className=""
            />
            <div className = "">
                <SignIn/>
            </div>
        </main>
    );
}

export default LoginPage;