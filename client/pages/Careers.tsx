import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Careers() {
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
            <Link to="/about" className="text-[#4C7EFB] text-lg hebrew-font hover:text-blue-600 transition-colors">אודות</Link>
            <Link to="/stock-selection" className="text-[#4C7EFB] text-lg hebrew-font hover:text-blue-600 transition-colors">רשימת מתנות</Link>
            <Link to="/careers" className="text-[#4C7EFB] text-lg hebrew-font hover:text-blue-600 transition-colors font-bold">קריירה</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#486284] mb-6">הצטרפו לצוות Stock4U</h1>
          <p className="text-xl text-[#8CA2C0] max-w-3xl mx-auto">
            אנחנו מחפשים אנשים מוכשרים שרוצים להיות חלק מהמהפכה הפיננסית. בואו לבנות יחד את עתיד ההשקעות.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#F5F7FC] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#486284] mb-4">מפתח/ת Front-End</h3>
            <p className="text-[#8CA2C0] mb-4">
              אנחנו מחפשים מפתח/ת Front-End מנוסה לעבודה עם React, TypeScript ו-Tailwind CSS.
            </p>
            <ul className="text-[#8CA2C0] space-y-2">
              <li>• ניסיון של 3+ שנים ב-React</li>
              <li>• ידע ב-TypeScript</li>
              <li>• ניסיון בעבודה עם APIs</li>
              <li>• עין לעיצוב וחוש אסתטי</li>
            </ul>
          </div>

          <div className="bg-[#F5F7FC] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#486284] mb-4">מנתח/ת פיננסי</h3>
            <p className="text-[#8CA2C0] mb-4">
              אנחנו מחפשים מנתח/ת פיננסי מנוסה לצוות המחקר וההשקעות שלנו.
            </p>
            <ul className="text-[#8CA2C0] space-y-2">
              <li>• תואר בכלכלה או מימון</li>
              <li>• ניסיון בניתוח מניות</li>
              <li>• ידע בשווקי הון</li>
              <li>• יכולת כתיבה ופרזנטציה</li>
            </ul>
          </div>

          <div className="bg-[#F5F7FC] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#486284] mb-4">מומחה/ית UX/UI</h3>
            <p className="text-[#8CA2C0] mb-4">
              אנחנו מחפשים מעצב/ת UX/UI שיעזור לנו ליצור חוויית משתמש מעולה.
            </p>
            <ul className="text-[#8CA2C0] space-y-2">
              <li>• ניסיון של 2+ שנים בעיצוב UX/UI</li>
              <li>• ידע בכלים כמו Figma</li>
              <li>• הבנה בעקר��נות הנגישות</li>
              <li>• חשיבה אנליטית</li>
            </ul>
          </div>

          <div className="bg-[#F5F7FC] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#486284] mb-4">איש/ת שיווק דיגיטלי</h3>
            <p className="text-[#8CA2C0] mb-4">
              אנחנו מחפשים איש/ת שיווק דיגיטלי שיוביל את האסטרטגיה הדיגיטלית שלנו.
            </p>
            <ul className="text-[#8CA2C0] space-y-2">
              <li>• ניסיון בשיווק דיגיטלי</li>
              <li>• ידע ב-Google Ads ופייסבוק</li>
              <li>• ניתוח נתונים ומדדים</li>
              <li>• יצירתיות וחדשנות</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#486284] mb-8">מעוניינים להצטרף?</h2>
          <p className="text-xl text-[#8CA2C0] mb-8">שלחו לנו את הקורות חיים שלכם ונחזור אליכם בהקדם</p>
          <a
            href="mailto:careers@stock4u.co.il"
            className="inline-block bg-[#4C7EFB] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg"
          >
            שלחו קורות חיים
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
