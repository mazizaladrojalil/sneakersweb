import Navbar from "@/components/Navbar";
import Homepage from "@/pages/Home/HomePage";

export default async function Page() {
  return (
    <div>
      <Navbar/>
      <main>
        <Homepage/>
      </main>
    </div>
  )
}