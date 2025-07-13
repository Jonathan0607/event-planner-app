import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

function RegisterPage() {
    return (
            <main className ="flex flex-col items-center p-5 gap-10 animate-fade-in">
                <div></div>
                <Image
                    src = '/logo.svg'
                    width = {100}
                    height = {100}
                    alt = 'Logo'
                />
                <div className = "">
                    <SignUp/>
                </div>
            </main>
    );
}

export default RegisterPage;