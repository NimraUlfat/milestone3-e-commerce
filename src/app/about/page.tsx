import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Your Fashion Store</title>
        <meta name="description" content="About Your Fashion Store" />
        <meta name="keywords" content="fashion, clothing, style, store" />
      </Head>

      {/* Hero Section with Image */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/fashion5.jpg" 
            alt="Fashion Store"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Welcome to Your Fashion Store</h1>
          <p className="text-xl mb-8">Where style meets elegance and comfort. Discover fashion that speaks to you.</p>
        </div>
      </section>

      {/* About Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Our Story</h2>
          
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              At <strong>Your Fashion Store</strong>, we believe that fashion is an expression of
              individuality. Our journey started with the mission to create an inclusive space for
              all fashion lovers to find clothing that fits their personality and lifestyle.
            </p>

            <p>
              With a carefully curated collection of clothing, accessories, and shoes, we strive
              to bring the latest trends from around the world to your doorstep. We focus on high-quality
              pieces that combine both comfort and style, ensuring you look your best every day.
            </p>
            
            {/* Fashion Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="relative">
                <img
                  src="/images/fashion-6.jpg" 
                  alt="Fashion Look 1"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
              </div>
              <div className="relative">
                <img
                  src="/images/fashion7.webp" 
                  alt="Fashion Look 2"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
              </div>
              <div className="relative">
                <img
                  src="/images/fashion9.webp" 
                  alt="Fashion Look 3"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-12">Our Mission</h3>
            <p>
              We are committed to offering a wide range of styles that empower you to express yourself
              confidently. Whether you are looking for the latest trends or timeless classics, we ensure that
              our collection is always fresh, relevant, and diverse.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8">Why Choose Us?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Exclusive, hand-picked fashion items from around the world.</li>
              <li>Affordable prices without compromising on quality.</li>
              <li>Hassle-free returns and fast shipping.</li>
              <li>Fashion that suits all body types and personalities.</li>
            </ul>

            <div className="mt-12 text-center">
              <p className="text-xl font-medium text-gray-800">
                Thank you for choosing Your Fashion Store. Let us be part of your fashion journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
