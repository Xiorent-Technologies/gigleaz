// Reinventing.jsx
 // if you use Iconify, else replace with inline SVGs

export default function Reinventing() {
  const items = [
    {
      title: "Transparent governance",
      subtitle: "Transparent governance",
      image: "/about/Group.png",
      
    },
    {
      title: "Educator & creator-first approach",
      subtitle: "Educator & creator-first approach",
      image: "/about/arcticons_creator-studio.png",
      
    },
    {
      title: "Product-led innovation",
      subtitle: "Product-led innovation",
      image: "/about/bulb.png",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12  max-w-7xl mx-auto text-white">

    <div
        id="blurred-ellipse"
        className="absolute w-[111px] h-[1435px] right-[200px] top-[1150px] rotate-[82deg] bg-primary blur-[111px] transform"
      />


      {/* Header */}
      <h2 className="text-6xl font-bold mb-4">Reinventing Gigleaz</h2>

      {/* Subheader */}
      <p className="text-white mb-12 max-w-3xl">
        Shedding the corporate shell, Gigleaz emerged as a product-first platform
        with one clear mission: empower through education
      </p>

      {/* Grid with 3 items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-[#d5cbb5]/40 rounded-xl p-8 text-center bg-white/5 backdrop-blur-md"
          >
            <div className="flex justify-center mb-6 text-6xl text-[#d5cbb5]">
              <img src={item.image} alt={item.title} width={100} height={100} />
            </div>
            <h3 className="text-3xl text-white mb-2">{item.title}</h3>
            <p className="text-sm text-[#f4ede0]">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
