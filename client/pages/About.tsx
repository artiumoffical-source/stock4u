import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white hebrew-font" dir="rtl">
      {/* Header */}
      <header className="w-full bg-white px-8 py-4 h-[75px] flex items-center border-b">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between w-full">
          {/* Left side - Cart and Login */}
          <div className="flex items-center gap-5">
            <Link to="/order-summary" className="relative">
              <div className="w-12 h-12 bg-[#4C7EFB] rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
                <svg className="w-6 h-6 text-white" viewBox="0 0 25 25" fill="none">
                  <path d="M19.9481 10.3117H5.35211..." stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link to="/login" className="bg-[#DBE3F3] rounded-full px-6 py-3 hover:bg-blue-100 transition-colors">
              <span className="text-[#4C7EFB] font-bold hebrew-font">כניסה</span>
            </Link>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2F1980a1c23e6842f3ad4ec2fcdce81e95?format=webp&width=800"
              alt="Stock4U Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-[#4C7EFB] text-lg hebrew-font hover:text-blue-600 transition-colors">בית</Link>
            <Link to="/about" className="text-[#4C7EFB] text-lg hebrew-font hover:text-blue-600 transition-colors font-bold">אודות</Link>
            <Link to="/stock-selection" className="text-[#4C7EFB] text-lg hebrew-font hover:text-blue-600 transition-colors">רשימת מתנות</Link>
            <Link to="/careers" className="text-[#4C7EFB] text-lg hebrew-font hover:text-blue-600 transition-colors">קריירה</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#486284] mb-6">אודות Stock4U</h1>
          <p className="text-xl text-[#8CA2C0] max-w-3xl mx-auto">
            אנחנו מאמינים שכל אחד צריך להיות חלק מהשוק ההון. Stock4U מספקת פלטפורמה פשוטה ונגישה להשקעה במניות ותעודות סל מובילות.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F5F7FC] rounded-3xl p-8 text-center">
            <div className="text-5xl font-bold text-[#486284] mb-4">24+</div>
            <div className="text-xl text-[#8CA2C0]">מדי��ות שבהם אנו עובדים</div>
          </div>
          <div className="bg-[#F5F7FC] rounded-3xl p-8 text-center">
            <div className="text-5xl font-bold text-[#486284] mb-4">17M</div>
            <div className="text-xl text-[#8CA2C0]">אנשים שהאמינו בנו</div>
          </div>
          <div className="bg-[#F5F7FC] rounded-3xl p-8 text-center">
            <div className="text-5xl font-bold text-[#486284] mb-4">+95%</div>
            <div className="text-xl text-[#8CA2C0]">לקוחות מרוצים</div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#486284] mb-8">מוכנים להתחיל?</h2>
          <Link
            to="/stock-selection"
            className="inline-block bg-[#4C7EFB] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg"
          >
            בחרו את המניות שלכם
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
