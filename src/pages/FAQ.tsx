"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Bagaimana cara mendaftar PPDB online?",
      answer: "Anda dapat mendaftar dengan membuat akun di halaman 'Daftar / Login', lalu mengisi formulir pendaftaran dan mengunggah berkas yang diperlukan.",
    },
    {
      question: "Dokumen apa saja yang harus disiapkan untuk pendaftaran?",
      answer: "Dokumen yang umumnya diperlukan antara lain: Scan Kartu Keluarga (KK), Scan Akta Kelahiran, Scan Ijazah/SKL, Pas Foto terbaru, Scan Rapor semester 1-5, dan Scan Sertifikat/Piagam Prestasi (jika ada).",
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer: "Informasi mengenai biaya pendaftaran akan ditampilkan pada halaman pembayaran setelah Anda menyelesaikan pengisian formulir. Mohon periksa kembali informasi tersebut.",
    },
    {
      question: "Kapan pengumuman hasil seleksi akan diumumkan?",
      answer: "Tanggal pengumuman hasil seleksi dapat dilihat di halaman 'Jadwal Penting'. Anda juga akan menerima notifikasi di dasbor pendaftar Anda.",
    },
    {
      question: "Bagaimana jika saya lupa password akun?",
      answer: "Anda bisa menggunakan fitur 'Lupa Password' di halaman login. Tautan reset password akan dikirimkan ke email yang terdaftar.",
    },
    {
      question: "Bisakah saya mengubah data setelah finalisasi?",
      answer: "Setelah data difinalisasi, Anda tidak dapat mengubahnya secara mandiri. Jika ada kesalahan fatal, segera hubungi panitia PPDB melalui kontak yang tersedia.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Pertanyaan yang Sering Diajukan (FAQ)</h1>
      <p className="text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Temukan jawaban atas pertanyaan umum seputar proses Penerimaan Peserta Didik Baru (PPDB) di sini.
      </p>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;