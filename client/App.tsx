import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { GiftProvider } from "./contexts/GiftContext";
import AppRoutes from "./routes";

const queryClient = new QueryClient();

/**
 * Main App Component
 *
 * Sets up the application with:
 * - React Query for data management
 * - Tooltip provider for UI components
 * - Gift context for state management
 * - Toast notifications
 * - React Router for navigation
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GiftProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </GiftProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
