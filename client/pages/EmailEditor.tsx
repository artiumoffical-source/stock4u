import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EmailEditor() {
  return (
    <div className="min-h-screen bg-white hebrew-font" dir="rtl">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white border border-stock4u-light-blue rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-stock4u-dark-grey mb-6">
            עורך מיילים
          </h1>
          <p className="text-stock4u-dark-grey text-lg">
            העמוד טוען בהצלחה! 🎉
          </p>
          <p className="text-stock4u-grey mt-4">
            נוכל לפתח כאן את מערכ�� עריכת המיילים.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
