import Image from "next/image";


function LoginPage() {
    return (
        <main className ="flex flex-col items-center p-5 gap-10">
            <Image
                src = '/logo.svg'
                width = {50}
                height = {50}
                alt = 'Logo'
            />

        </main>
    );
}

export default LoginPage;