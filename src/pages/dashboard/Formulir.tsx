"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/contexts/SessionContext";
import { useEffect } from "react";

const formSchema = z.object({
  full_name: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  nisn: z.string().length(10, "NISN harus 10 digit"),
  pob: z.string().min(3, "Tempat lahir minimal 3 karakter"),
  dob: z.string().min(1, "Tanggal lahir wajib diisi"),
  gender: z.string().min(1, "Jenis kelamin wajib diisi"),
  address: z.string().min(10, "Alamat minimal 10 karakter"),
  phone_number: z.string().min(10, "Nomor telepon minimal 10 digit"),
  school_origin: z.string().min(3, "Asal sekolah minimal 3 karakter"),
  major_choice_1: z.string().min(1, "Pilihan jurusan 1 wajib diisi"),
  major_choice_2: z.string().min(1, "Pilihan jurusan 2 wajib diisi"),
  father_name: z.string().min(3, "Nama ayah minimal 3 karakter"),
  father_occupation: z.string().min(3, "Pekerjaan ayah minimal 3 karakter"),
  mother_name: z.string().min(3, "Nama ibu minimal 3 karakter"),
  mother_occupation: z.string().min(3, "Pekerjaan ibu minimal 3 karakter"),
});

const Formulir = () => {
  const { session } = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  useEffect(() => {
    const fetchRegistrationData = async () => {
      if (!session?.user) return;
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (data) {
        form.reset({
          ...data,
          dob: data.dob ? new Date(data.dob).toISOString().split('T')[0] : '',
        });
      }
    };
    fetchRegistrationData();
  }, [session, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!session?.user) {
      toast.error("Anda harus login untuk menyimpan data.");
      return;
    }

    const { error } = await supabase.from("registrations").upsert({
      id: session.user.id,
      ...values,
      status: 'uploading_docs', // Move to next step
    });

    if (error) {
      toast.error(`Gagal menyimpan data: ${error.message}`);
    } else {
      toast.success("Data formulir berhasil disimpan!");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulir Pendaftaran</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Simplified for brevity, add all fields here */}
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan nama lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nisn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NISN</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan NISN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Add other fields similarly */}
            <Button type="submit">Simpan dan Lanjutkan</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Formulir;