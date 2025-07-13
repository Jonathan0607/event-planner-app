'use client'

import Image from "next/image";
import { SignOutButton } from '@clerk/nextjs'

function LandingPage() {
    return ( 
    <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex-col">
        <section className="flex items-center flex-col">
            <Image
            src="/logo.svg"
            height= {100}
            width = {100}
            alt= "Logo"
            />
            <h1 className = "text-2xl font-bold lg:text-3xl">Your Time, Perfectly Planned</h1>
            <p>Random Description for the product</p>
        </section>
        


    </main> 
    );
}

export default LandingPage;