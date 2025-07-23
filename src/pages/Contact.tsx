"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Kontak Panitia PPDB</h1>
      <p className="text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="text-center p-6">
          <CardHeader className="flex flex-col items-center p-0 pb-4">
            <Mail className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Email</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">ppdb.smak@example.com</p>
            <p className="text-sm text-muted-foreground">(Respon dalam 1x24 jam kerja)</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardHeader className="flex flex-col items-center p-0 pb-4">
            <Phone className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">Telepon</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">(021) 12345678</p>
            <p className="text-sm text-muted-foreground">(Senin-Jumat, 08.00-16.00 WIB)</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardHeader className="flex flex-col items-center p-0 pb-4">
            <MapPin className="h-10 w-10 text-primary mb-2" />
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