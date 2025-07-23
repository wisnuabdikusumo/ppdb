import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import SchoolProfile from "./pages/SchoolProfile";
import MajorsInfo from "./pages/MajorsInfo";
import AdmissionFlow from "./pages/AdmissionFlow";
import ImportantDates from "./pages/ImportantDates";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import AuthPage from "./pages/AuthPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DashboardLayout from "./pages/DashboardLayout";
import Formulir from "./pages/dashboard/Formulir";
import Berkas from "./pages/dashboard/Berkas";
import Finalisasi from "./pages/dashboard/Finalisasi";
import Pembayaran from "./pages/dashboard/Pembayaran";
import Kartu from "./pages/dashboard/Kartu";
import Hasil from "./pages/dashboard/Hasil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Homepage />} />
            <Route path="profil-sekolah" element={<SchoolProfile />} />
            <Route path="jurusan" element={<MajorsInfo />} />
            <Route path="alur-pendaftaran" element={<AdmissionFlow />} />
            <Route path="jadwal" element={<ImportantDates />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="kontak" element={<Contact />} />
          </Route>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/lupa-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="formulir" element={<Formulir />} />
            <Route path="berkas" element={<Berkas />} />
            <Route path="finalisasi" element={<Finalisasi />} />
            <Route path="pembayaran" element={<Pembayaran />} />
            <Route path="kartu" element={<Kartu />} />
            <Route path="hasil" element={<Hasil />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;