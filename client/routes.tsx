import { Routes, Route } from "react-router-dom";

// Page Components
import Index from "./pages/Index";
import Login from "./pages/Login";
import SMSVerification from "./pages/SMSVerification";
import StockSelection from "./pages/StockSelection";
import Cart from "./pages/Cart";
import GiftDesign from "./pages/GiftDesign";
import OrderDetails from "./pages/OrderDetails";
import OrderSummary from "./pages/OrderSummary";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import PurchaseError from "./pages/PurchaseError";
import About from "./pages/About";
import Careers from "./pages/Careers";
import EmailEditor from "./pages/EmailEditor";
import NotFound from "./pages/NotFound";

/**
 * Application Routes
 * 
 * This component defines all the routes for the Stock4U application.
 * The application follows a gift purchase flow:
 * 
 * 1. Home (/) - Landing page
 * 2. Login (/login) - User authentication
 * 3. SMS Verification (/sms-verification) - Phone verification
 * 4. Stock Selection (/stock-selection) - Choose stocks for gift
 * 5. Cart (/cart) - Review selections
 * 6. Gift Design (/gift-design) - Customize gift appearance
 * 7. Order Details (/order-details) - Add recipient details
 * 8. Order Summary (/order-summary) - Final review
 * 9. Checkout (/checkout) - Payment processing
 * 10. Success/Error pages - Purchase completion
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* Main Flow */}
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sms-verification" element={<SMSVerification />} />
      <Route path="/stock-selection" element={<StockSelection />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/gift-design" element={<GiftDesign />} />
      <Route path="/order-details" element={<OrderDetails />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/checkout" element={<Checkout />} />
      
      {/* Payment Result Pages */}
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/purchase-success" element={<PurchaseSuccess />} />
      <Route path="/purchase-error" element={<PurchaseError />} />
      
      {/* Static Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />

      {/* Admin Tools */}
      <Route path="/email-editor" element={<EmailEditor />} />
      
      {/* Catch-all route - MUST be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
