import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Routing

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your Order");
    router.replace("/product");
    // instead of router.push you can use router.replace
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
