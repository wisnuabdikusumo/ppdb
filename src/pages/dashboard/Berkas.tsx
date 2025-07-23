"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/contexts/SessionContext";
import { toast } from "sonner";
import { Upload, CheckCircle, Trash2 } from "lucide-react";

const requiredDocuments = [
  { id: "kk", name: "Kartu Keluarga (KK)" },
  { id: "akta", name: "Akta Kelahiran" },
  { id: "ijazah", name: "Ijazah/SKL" },
  { id: "photo", name: "Pas Foto" },
];

const Berkas = () => {
  const { session } = useSession();
  const [uploading, setUploading] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});

  const fetchUploadedFiles = async () => {
    if (!session?.user) return;
    const { data, error } = await supabase
      .from("registration_documents")
      .select("document_type, file_name")
      .eq("registration_id", session.user.id);
    
    if (data) {
      const files = data.reduce((acc, doc) => {
        acc[doc.document_type] = doc.file_name || 'File terunggah';
        return acc;
      }, {} as Record<string, string>);
      setUploadedFiles(files);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, [session]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    const file = event.target.files?.[0];
    if (!file || !session?.user) return;

    setUploading(docType);
    const filePath = `${session.user.id}/${docType}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("registration-documents")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      toast.error(`Gagal mengunggah file: ${uploadError.message}`);
    } else {
      const { error: dbError } = await supabase.from("registration_documents").upsert({
        registration_id: session.user.id,
        document_type: docType,
        file_path: filePath,
        file_name: file.name,
      }, { onConflict: 'registration_id, document_type' });

      if (dbError) {
        toast.error(`Gagal menyimpan data file: ${dbError.message}`);
      } else {
        toast.success(`${docType.toUpperCase()} berhasil diunggah!`);
        fetchUploadedFiles();
      }
    }
    setUploading(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unggah Berkas</CardTitle>
        <CardDescription>
          Unggah semua dokumen yang diperlukan dalam format PDF atau JPG (maks 2MB).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {requiredDocuments.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <Label>{doc.name}</Label>
              {uploadedFiles[doc.id] && (
                <div className="text-sm text-green-600 flex items-center gap-2 mt-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>{uploadedFiles[doc.id]}</span>
                </div>
              )}
            </div>
            <Button asChild variant="outline" size="sm" disabled={!!uploading}>
              <Label htmlFor={doc.id}>
                {uploading === doc.id ? "Mengunggah..." : <Upload className="mr-2 h-4 w-4" />}
                {uploadedFiles[doc.id] ? "Ganti File" : "Pilih File"}
              </Label>
            </Button>
            <Input
              id={doc.id}
              type="file"
              className="hidden"
              onChange={(e) => handleUpload(e, doc.id)}
              disabled={!!uploading}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Berkas;