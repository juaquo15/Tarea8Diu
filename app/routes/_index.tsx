import type { MetaFunction } from "@remix-run/node";

import Navbar from "../components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen">
      <Navbar/>
      <div className="bg-indigo-50 w-full">
      </div>
    </div>
  );
}
