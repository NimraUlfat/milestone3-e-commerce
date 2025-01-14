import Link from 'next/link';
import { products } from '@/app/data/products'; 
import Image from 'next/image';

export default function ProductList() {
  return (
    <div className="min-h-screen bg-white"> {/* Full page background */}
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-black text-center font-extrabold mb-6">Product List</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="text-black font-bold items-center"
              style={{ width: '400px', height: 'auto' }}
            >
              <div className="relative mb-8" style={{ width: '300px', height: '200px' }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.category}</p>

           
              <p className="text-2xl font-bold mt-2">${product.price}</p> 

              <Link href={`/products/${product.id}`}>
                <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
