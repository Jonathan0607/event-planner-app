import LandingPage from "@/components/landingPage";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser

  return (<LandingPage/>);
  
  return redirect("/events")
}
