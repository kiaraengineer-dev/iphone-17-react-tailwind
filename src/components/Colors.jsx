import { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      image: "/img/iphone-blue.jpg",
      colorClass: "bg-blue-500",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      image: "/img/iphone-silver.jpg",
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      image: "/img/iphone-orange.jpg",
      colorClass: "bg-orange-500",
    },
  ];

  const models = [
    {
      name: "Pro Max",
      screen: " Tela 6.9 polegadas com ProMotion 120Hz e Always-On Display",
      Storage: "• 256GB, 512GB ou 1TB",
      battery: " • 33h de video",
      weight: "• Peso 221g",
    },
    {
      name: "Pro",
      screen: " Tela 6.9 polegadas com ProMotion 120Hz e Always-On Display",
      Storage: "• 128GB,256GB ou 512GB",
      battery: "• Bateria com até 29h de video",
      weight: "• Peso 199g",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <section id="cores" className=" bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400 ">
            Quatro acabamentos em titânio lindos
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-[500px]">
              <img
                src={colors.find((color) => color.id === selectedColor).image}
                alt="iphone 17"
                className="max-w-full max-h-[600px] mx-auto"
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {colors.find((color) => color.id === selectedColor).name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 ">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`w-10 h-10 rounded-full mx-2 relative tracking-normal duration-300 cursor-pointer  ${color.colorClass} ${selectedColor === color.id ? "ring-4 ring-white" : ""}`}
            ></button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br  from-gray-900 to-transparent rounded-3xl p-8  border border-gray-800"
            >
              <div className="text-3xl mb-4">📲</div>
              <h3 className="text-xl font-bold mb-3 ">{model.name}</h3>
              <p className="text-gray-400 mb-4 ">{model.screen}</p>
              <ul className="space-y-2 text-gray-300">
                <li>{model.Storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300  mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">
            Compre agora á partir de R$ 9.950,00
          </button>
          <p>Ou até 12x de R$ 774,92 sem juros</p>
        </div>
      </div>
    </section>
  );
}

export default Colors;
