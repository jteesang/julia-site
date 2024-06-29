import About from "@/app/components/About";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-sans text-lg lg:flex space-y-4">
        <h1 className="flex font-semibold text-2xl justify-center">julia m. tseng</h1>
        <p className="flex justify-center">independent engineer, designer | making software fun again</p>
        <About/>

 
      </div>
    </main>
  );
}
