import { Link } from "react-router-dom";

import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white hebrew-font" dir="rtl">
      {/* Header */}
      <header className="w-full bg-white px-8 py-4 h-[75px] flex items-center">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between w-full">
          {/* Left side - Cart and Login */}
          <div className="flex items-center gap-5">
            {/* Shopping Cart */}
            <Link to="/order-summary" className="relative">
              <div className="w-12 h-12 bg-stock4u-happy-blue rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9491 10.3121H5.35309C5.0577 10.3124 4.76621 10.3795 4.50041 10.5083C4.2346 10.6372 4.00135 10.8244 3.81809 11.0561C3.63559 11.2871 3.50807 11.5566 3.44517 11.8442C3.38228 12.1318 3.38567 12.43 3.45509 12.7161L5.02009 19.1241C5.24668 19.9497 5.73865 20.6778 6.42009 21.1961C7.10209 21.7151 7.93709 21.9961 8.79609 21.9961H16.5041C17.3631 21.9961 18.1981 21.7151 18.8801 21.1961C19.5615 20.6778 20.0535 19.9497 20.2801 19.1241L21.8451 12.7171C21.9504 12.2851 21.9042 11.8301 21.7142 11.4282C21.5241 11.0262 21.2018 10.7018 20.8011 10.5091C20.5345 10.3811 20.2428 10.3138 19.9471 10.3121M8.73809 14.2061V18.1011M12.6511 14.2061V18.1011M16.5641 14.2061V18.1011M19.4991 10.3121C19.4987 9.41614 19.3213 8.52909 18.9771 7.70191C18.6328 6.87473 18.1285 6.12374 17.4931 5.4921C16.2066 4.21259 14.4655 3.4949 12.6511 3.4961C10.8366 3.4949 9.09561 4.21259 7.80909 5.4921C7.17385 6.12383 6.66971 6.87485 6.32562 7.70203C5.98154 8.5292 5.8043 9.41621 5.80409 10.3121"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>

            {/* Login Button */}
            <Link
              to="/login"
              className="bg-stock4u-light-blue rounded-full px-6 py-3 hover:bg-blue-100 transition-colors"
            >
              <span className="text-stock4u-happy-blue font-bold hebrew-font">
                כניסה
              </span>
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
            <Link to="/" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              בית
            </Link>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-stock4u-happy-blue"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6147 18.2617L15.1993 14.047C16.4584 12.6648 17.1061 10.8699 17.0059 9.04073C16.9057 7.21155 16.0654 5.49097 14.6621 4.24167C13.2588 2.99237 11.4022 2.31195 9.48358 2.34385C7.56497 2.37574 5.73429 3.11746 4.37743 4.41265C3.02056 5.70784 2.24352 7.45531 2.21011 9.2867C2.17669 11.1181 2.88951 12.8903 4.1983 14.2298C5.50709 15.5693 7.30961 16.3715 9.22589 16.4671C11.1422 16.5628 13.0225 15.9445 14.4705 14.7426L18.886 18.9573C18.9837 19.0443 19.113 19.0916 19.2466 19.0894C19.3802 19.0871 19.5076 19.0355 19.6021 18.9453C19.6966 18.8551 19.7507 18.7334 19.753 18.6059C19.7554 18.4784 19.7058 18.355 19.6147 18.2617ZM3.26598 9.42203C3.26598 8.22144 3.63895 7.0478 4.33772 6.04955C5.0365 5.05129 6.0297 4.27324 7.19172 3.81379C8.35375 3.35435 9.6324 3.23413 10.866 3.46836C12.0996 3.70258 13.2327 4.28072 14.1221 5.12967C15.0115 5.97862 15.6172 7.06025 15.8625 8.23777C16.1079 9.4153 15.982 10.6358 15.5006 11.745C15.0193 12.8542 14.2042 13.8023 13.1584 14.4693C12.1126 15.1363 10.8831 15.4923 9.62535 15.4923C7.93937 15.4904 6.32302 14.8502 5.13085 13.7122C3.93868 12.5743 3.26802 11.0314 3.26598 9.42203Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-stock4u-happy-blue text-lg hebrew-font">
                חיפו��
              </span>
            </div>
            <Link to="/careers" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              קריירה
            </Link>
            <Link
              to="/stock-selection"
              className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors"
            >
              רשימת מתנות
            </Link>
            <Link to="/about" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              אודות
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-stock4u-light-blue overflow-hidden h-[566px]">
        {/* Background Stock Chart */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1921 614"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0.433594 595.989L219.59 456.719L260.449 513.919L364.455 441.797L409.029 498.998L650.471 307.501L706.189 484.076L895.628 374.649L1070.21 309.719L1315.37 175.423L1460.23 406.711L2020.32 17.3564"
              stroke="#689EDA"
              strokeWidth="42"
              fill="none"
            />
          </svg>
        </div>

        {/* Character Images Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2F1c4a1455277d46fd898e404fd012d0c2?format=webp&width=1920&quality=90"
            alt="Stock4U Characters with Main Title"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Content - Empty to let background image handle all visual elements */}
        <div className="relative z-20 text-center py-20">
          {/* Content is handled by background image */}
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-[1342px] mx-auto px-4 pt-8">
        <div className="bg-black rounded-[25px] border-[19px] border-stock4u-light-blue relative overflow-hidden w-full h-[684px]">
          <div className="w-full h-full flex items-center justify-center">
            <button
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
              className="w-[178px] h-[178px] bg-stock4u-happy-blue rounded-full flex items-center justify-center shadow-[10px_10px_0_rgba(0,0,0,0.1)] hover:scale-105 transition-transform"
            >
              <svg
                className="w-12 h-12 text-white ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Gift Packages Carousel */}
      <section className="w-full py-6 mb-6">
        <div className="max-w-[1639px] mx-auto relative">
          {/* Carousel Container with Real Figma Image */}
          <div className="flex justify-center items-center">
            <Link to="/stock-selection" className="block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2Fdd35d8126d3046409354f589f2bbc58e?format=webp&width=1600&quality=90"
                alt="Gift Package Cards"
                className="w-full max-w-[1472px] h-auto object-contain hover:opacity-90 transition-opacity cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section - Exact Figma Match */}
      <section className="h-[566px] relative overflow-hidden">
        {/* Use the exact Figma design as background image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d2a8fbb0bc7d24e0fc8879295b276f6758c8be62?width=3840"
          alt="How It Works - זה כללו פשוט!"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* Statistics Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-stock4u-light-blue/40 rounded-3xl p-8 text-center">
            <div className="text-6xl font-bold text-stock4u-dark-grey mb-4 english-font">
              24+
            </div>
            <p className="text-stock4u-grey text-xl">מדינות שבהם אנו עובדים</p>
          </div>
          <div className="bg-stock4u-light-blue/40 rounded-3xl p-8 text-center">
            <div className="text-6xl font-bold text-stock4u-dark-grey mb-4 english-font">
              17M
            </div>
            <p className="text-stock4u-grey text-xl">אנשים שהאמינו בנו</p>
          </div>
          <div className="bg-stock4u-light-blue/40 rounded-3xl p-8 text-center">
            <div className="text-6xl font-bold text-stock4u-dark-grey mb-4 english-font">
              +95%
            </div>
            <p className="text-stock4u-grey text-xl">לקוחות מרוצים</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold text-stock4u-dark-grey mb-8 hebrew-font">
          אוקיי אני רוצה לשלוח מתנ��, מה עכ��יו?
        </h2>
        <Link
          to="/stock-selection"
          className="inline-block bg-stock4u-happy-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg"
        >
          מתחילים בבחירת מתנה &gt;
        </Link>
      </section>

      {/* Company Logos Ticker */}
      <section className="py-6 overflow-hidden">
        <p className="text-center text-stock4u-dark-grey mb-6">
          חברות פופולאריות להשקעה
        </p>
        <div className="flex items-center gap-12 opacity-30 animate-pulse">
          {/* Placeholder for company logos */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
