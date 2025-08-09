import Image from "next/image";
import Link from "next/link";
import "./globals.css"
export default function Home() {
  return (
    <main className=" mx-100 min-h-screen " style={{display:"flex",alignItems:'center'}}>
      <section className="grid grid-col-2 h-[50vh] md:grid-cols-1 sm:grid-cols-1">
      <div className="flex flex-col gap-4 item-center justify-center color-black">
<p className="text-3xl bg-font-bold"> The best <span className="url">URL</span> shortner in the Market</p>
<p> We are the most starightforwaed URL Shortner in the world. Most of the url 
  shortners will track you or ask you to give your details for login. We 
  understand your needs and hence we have created URL shortner.
</p>
<div style={{display:'flex',gap:'2em',className:'btn',}}>
                <Link href="/shorten"><button>Try Now</button></Link>
                <Link href="/github"><button>Github</button></Link>
            </div>
      </div>
      <div>

      </div>
      </section>
    </main>
  );
}
