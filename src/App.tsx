import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Books from "./pages/Books";
import Book from "./pages/Book";
import Course from "./pages/Course";
import Frameworks from "./pages/Frameworks";
import Shelf from "./pages/Shelf";
import Work from "./pages/Work";
import WorkCase from "./pages/WorkCase";
import Think from "./pages/Think";
import ThinkPiece from "./pages/ThinkPiece";
import Systems from "./pages/Systems";
import HowIBuild from "./pages/HowIBuild";
import Lab from "./pages/Lab";
import Patent from "./pages/Patent";
import Research from "./pages/Research";
import Now from "./pages/Now";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:shadow-card"
            >
              Skip to content
            </a>
            <div id="main">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:slug" element={<WorkCase />} />
                <Route path="/think" element={<Think />} />
                <Route path="/think/:slug" element={<ThinkPiece />} />
                <Route path="/systems" element={<Systems />} />
                <Route path="/how-i-build" element={<HowIBuild />} />
                <Route path="/lab" element={<Lab />} />
                <Route path="/patent" element={<Patent />} />
                <Route path="/research" element={<Research />} />
                <Route path="/now" element={<Now />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/books" element={<Books />} />
                <Route path="/shelf" element={<Shelf />} />
                <Route path="/course" element={<Course />} />
                <Route path="/courses" element={<Navigate to="/course" replace />} />
                <Route path="/book" element={<Book />} />
                <Route
                  path="/consultation"
                  element={<Navigate to="/book" replace />}
                />
                <Route path="/frameworks" element={<Frameworks />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ChatWidget />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
