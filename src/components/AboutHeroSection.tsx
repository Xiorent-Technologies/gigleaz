import { FaSearch, FaBolt } from "react-icons/fa";

export default function AboutHeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-br from-[#0d1f16] to-[#0f3d2d] text-white">

            {/* LEFT SIDE */}
            <div className="max-w-xl w-full">
                {/* Top pill */}
                {/* <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-1 mb-6 text-sm">
          👋 Welcome to Gigleaz
        </div> */}
                <div className="inline-flex items-left bg-[#f5f5f4] rounded-full px-4 py-1 mb-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cfede1] mr-2">
                        <FaBolt className="text-green-600 text-xs" />
                    </div>
                    <span className="text-gray-900 font-medium">Welcome to Gigleaz</span>
                </div>


                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                    From <span className="text-[#d4af37]">IT</span> roots to a <br />global{" "}
                    <span className="text-[#187b52]">EdTech</span> <br /> product.
                </h1>


                {/* Subtext */}
                <p className="text-gray-300 mb-6">
                    Gigleaz is no longer a company — it is now reborn as a product under a
                    US EdTech ecosystem.
                </p>

                {/* Input Box 1 (Search) */}
                <div className="flex items-center justify-evenly bg-white rounded-full shadow-md overflow-hidden max-w-lg mb-4" style={{paddingInline: '1rem'}}>
                    <div className="pl-4 text-gray-500">
                        <FaSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="What do you want to learn today?"
                        className="flex-grow px-3 py-3 text-gray-700 outline-none" 
                    />  
                    <button className="bg-[#1ed760] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#17b04e] transition">
                    Join Us Now →
                </button>
                </div>

                {/* Input Box 2 (Power Icon) */}


                {/* Button */}
               
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="mt-12 lg:mt-0 lg:ml-12">
                <img
                    src="/about/aboutHeropageimg.png"
                    alt="Students learning"
                    className="rounded-2xl shadow-lg w-[500px] object-cover"
                />
            </div>
        </section>
    );
}
