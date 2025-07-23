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
import ForgotPassword from "./pages/ForgotPassword"; // Import ForgotPassword
import ResetPassword from "./pages/ResetPassword"; // Import ResetPassword

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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Route>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/lupa-password" element={<ForgotPassword />} /> {/* Add ForgotPassword route */}
          <Route path="/reset-password" element={<ResetPassword />} /> {/* Add ResetPassword route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;