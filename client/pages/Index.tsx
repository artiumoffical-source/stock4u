import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-white hebrew-font" dir="rtl">
      <Header />

      {/* Hero Section - Exact Figma Match: 566px height */}
      <section className="relative h-[566px] bg-stock4u-light-blue overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c861279ab775a02162db7807d6d5056d3eb1252d?width=3840"
          alt="Stock4U Characters with Main Title"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* Video and Blue Background Section - positioned to overlap hero as in Figma */}
      <div className="relative -mt-[200px] z-30">
        {/* Blue Extension Background - 395px height, positioned to overlap hero */}
        <div className="w-full h-[395px] bg-stock4u-light-blue relative mt-[200px]">

          {/* Video Section - positioned to overlap both hero and blue background */}
          <div className="absolute -top-[50px] left-1/2 transform -translate-x-1/2">
            <div className="w-[1342px] h-[684px] bg-black rounded-[25px] border-[19px] border-stock4u-light-blue relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="w-full h-full flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                      "_blank",
                    )
                  }
                  className="hover:scale-105 transition-transform"
                >
                  <svg
                    width="178"
                    height="178"
                    viewBox="0 0 120 129"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(90deg)' }}
                    className="drop-shadow-[10px_10px_0_rgba(0,0,0,0.1)]"
                  >
                    <defs>
                      <filter id="filter0_d_314_18722" x="0.613281" y="0.743896" width="118.801" height="127.971" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="10" dy="10"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_314_18722"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_314_18722" result="shape"/>
                      </filter>
                    </defs>
                    <g filter="url(#filter0_d_314_18722)">
                      <path d="M96.9141 38.0789C113.581 47.7014 113.581 71.7576 96.9141 81.3801L38.1137 115.329C21.4471 124.951 0.613748 112.923 0.613749 93.6779L0.613752 25.7811C0.613753 6.53608 21.4471 -5.49202 38.1138 4.13049L96.9141 38.0789Z" fill="#4C7EFB"/>
                      <path d="M93.1641 44.5742C104.831 51.31 104.831 68.149 93.1641 74.8848L34.3633 108.833C22.6967 115.569 8.11328 107.149 8.11328 93.6777L8.11328 25.7812C8.11328 12.3098 22.6966 3.89045 34.3633 10.626L93.1641 44.5742Z" stroke="white" strokeWidth="15"/>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Space below blue background to accommodate the video overflow */}
        <div className="h-[351px] bg-white"></div>
      </div>

      {/* Gift Packages Carousel */}
      <section className="w-full py-6 mb-6">
        <div className="max-w-[1639px] mx-auto relative">
          {/* Carousel Container with Real Figma Image */}
          <div className="flex justify-center items-center">
            <Link to="/stock-selection?continue=true" className="block">
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
          אוקיי אני רוצה לשלוח מתנה, מה עכשיו?
        </h2>
        <Link
          to="/stock-selection?continue=true"
          className="inline-block bg-stock4u-happy-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg"
        >
          מתחילים בבחירת מתנה &gt;
        </Link>
      </section>

      {/* Company Logos Ticker */}
      <section className="py-6 overflow-hidden">
        <p className="text-center text-stock4u-dark-grey mb-6">
          חברו�� פופולאריות להשקעה
        </p>
        <div className="flex items-center gap-12 opacity-30 animate-pulse">
          {/* Placeholder for company logos */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
