'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Access dynamic route parameters
import { products } from '@/app/data/products'; // Import the products array
import Image from 'next/image';

// Define the structure for the product type
type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductPage() {
  const { id } = useParams<{ id: string }>(); // Access dynamic route parameter `id`
  const [product, setProduct] = useState<Product | null>(null); // Type the state as Product or null

  useEffect(() => {
    if (id) {
      // Find the product by ID
      const foundProduct = products.find((product) => product.id === Number(id));
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {/* Use next/image component to render the product image */}
          <Image
            src={product.image}  // Use the image path stored in the product object
            alt={product.title}  // Product title as alt text for accessibility
            width={600}  // Set the width of the image
            height={400}  // Set the height of the image
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <h2 className="text-xl text-gray-500">{product.category}</h2>
          <p className="text-lg mt-4">{product.description}</p>

          {/* Display the price */}
          <p className="text-2xl font-bold mt-4">${product.price}</p> {/* Price added */}

          <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
