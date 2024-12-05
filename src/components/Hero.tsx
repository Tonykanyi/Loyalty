export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600"
          alt="Fashion Banner"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome to Loyalty
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover the latest trends in fashion. From casual wear to formal attire,
          we have everything you need to express your unique style.
        </p>
        <div className="mt-10">
          <a
            href="#featured"
            className="inline-block bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 rounded-md transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}