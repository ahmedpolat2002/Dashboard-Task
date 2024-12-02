import React from "react";
import Link from "next/link";

export default async function Home() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await res.json();
  // console.log(data);

  return (
    <main>
      <h1>مرحبا بالعالم</h1>
      <Link href="/dashboard">To Dashboard</Link>
    </main>
  );
}
