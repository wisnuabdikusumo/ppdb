"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Kontak Panitia PPDB</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="text-center p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-col items-center p-0 pb-4">
            <div className="p-4 bg-blue-100 rounded-full mb-3">
              <Mail className="h-10 w-10 text-blue-600" />
            </div>
            <CardTitle className="text-xl">Email</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <a href="mailto:ppdb.smak@example.com" className="text-muted-foreground hover:text-primary">ppdb.smak@example.com</a>
            <p className="text-sm text-muted-foreground">(Respon dalam 1x24 jam kerja)</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-col items-center p-0 pb-4">
            <div className="p-4 bg-green-100 rounded-full mb-3">
              <Phone className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-xl">Telepon</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">(021) 12345678</p>
            <p className="text-sm text-muted-foreground">(Senin-Jumat, 08.00-16.00 WIB)</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-col items-center p-0 pb-4">
            <div className="p-4 bg-purple-100 rounded-full mb-3">
              <MapPin className="h-10 w-10 text-purple-600" />
            </div>
            <CardTitle className="text-xl">Alamat</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">Jl. Pendidikan No. 123, Kota Contoh, 12345</p>
            <p className="text-sm text-muted-foreground">Kunjungi kami pada jam kerja</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;