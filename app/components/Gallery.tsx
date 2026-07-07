export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0b241c] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Gallery
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Moments from our Madarsa, Masjid and community activities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="h-56 rounded-2xl border border-yellow-500 bg-[#112d20] flex items-center justify-center">
            📸 Image 1
          </div>

          <div className="h-56 rounded-2xl border border-yellow-500 bg-[#112d20] flex items-center justify-center">
            📸 Image 2
          </div>

          <div className="h-56 rounded-2xl border border-yellow-500 bg-[#112d20] flex items-center justify-center">
            📸 Image 3
          </div>

          <div className="h-56 rounded-2xl border border-yellow-500 bg-[#112d20] flex items-center justify-center">
            📸 Image 4
          </div>

        </div>
      </div>
    </section>
  );
}