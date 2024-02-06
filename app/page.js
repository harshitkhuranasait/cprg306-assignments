import Link from "next/link";
 
 export default function Page() {
  return(
    <main className="container mx-auto p-4 bg-grey-200 min-h-screen items-center justify-center flex-col">
      <h1 className="text-4xl front-extrabold text-blue-500 mb-8">CPRG-306: Web Development 2</h1>
      <div className="flex justify-center items-center"></div>
      <Link href="week-2" className="text-blue-500 hover:text-green-500 transition duration-500"> Assignments week-2</Link>
 
      <div className="flex justify-center items-center"></div>
      <Link href="week-3" className="text-blue-500 hover:text-green-500 transition duration-500"> Assignments week-3</Link>
    </main>
  );
};