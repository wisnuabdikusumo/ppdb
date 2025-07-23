"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSession } from "@/contexts/SessionContext";

const HeroSection = () => {
  const { session, loading } = useSession();
  const user = session?.user;

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Optional: Add a subtle pattern or image here */}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Selamat Datang di PPDB Online <br className="hidden sm:inline"/> <span className="text-yellow-300">SMK Unitomo Surabaya</span>
        </h1>
        {user && (
          <p className="text-xl md:text-2xl font-semibold mb-4">
            Halo, {user.email}!
          </p>
        )}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          Wujudkan masa depan cerahmu bersama kami! Daftarkan dirimu sekarang
          dan jadilah bagian dari keluarga besar sekolah kami.
        </p>
        {!user && (
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105" asChild>
            <Link to="/login">Daftar Sekarang</Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;