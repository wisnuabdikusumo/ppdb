"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, FlaskConical, BookOpen, Code } from "lucide-react";

const MajorsInfo = () => {
  const majors = [
    {
      name: "IPA (Ilmu Pengetahuan Alam)",
      icon: <FlaskConical className="h-8 w-8 text-blue-500" />,
      description: "Fokus pada mata pelajaran sains seperti Fisika, Kimia, Biologi, dan Matematika. Mempersiapkan siswa untuk studi lanjut di bidang teknik, kedokteran, sains murni, dll.",
      quota: 120,
    },
    {
      name: "IPS (Ilmu Pengetahuan Sosial)",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      description: "Mempelajari Geografi, Sejarah, Sosiologi, dan Ekonomi. Cocok bagi siswa yang tertarik pada ilmu sosial, hukum, manajemen, komunikasi, dll.",
      quota: 120,
    },
    {
      name: "Bahasa",
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      description: "Mendalami Bahasa Indonesia, Bahasa Inggris, dan bahasa asing lainnya. Membuka peluang karir di bidang penerjemahan, sastra, pariwisata, dan hubungan internasional.",
      quota: 60,
    },
    {
      name: "Teknik Komputer dan Jaringan (SMK)",
      icon: <Code className="h-8 w-8 text-green-500" />,
      description: "Mempelajari perakitan komputer, instalasi jaringan, dan pemrograman dasar. Mempersiapkan siswa untuk menjadi teknisi komputer, administrator jaringan, atau melanjutkan studi di bidang IT.",
      quota: 90,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Informasi Jurusan & Peminatan</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Pilih jurusan yang sesuai dengan minat, bakat, dan cita-citamu. Setiap jurusan dirancang untuk membekali siswa dengan pengetahuan dan keterampilan yang relevan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {majors.map((major, index) => (
          <Card key={index} className="hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="p-3 bg-muted rounded-full">
                {major.icon}
              </div>
              <div>
                <CardTitle className="text-xl">{major.name}</CardTitle>
                <CardDescription>Kuota: {major.quota} Siswa</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{major.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MajorsInfo;