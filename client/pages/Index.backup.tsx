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
                חיפוש
              </span>
            </div>
            <Link to="/" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              קריירה
            </Link>
            <Link
              to="/stock-selection"
              className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors"
            >
              רשימת מתנות
            </Link>
            <Link to="/" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              אודות
            </Link>
            <Link to="/" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              בית
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
      <section className="max-w-[1342px] mx-auto px-4 py-16">
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
      <section className="w-full py-16 mb-20">
        <div className="max-w-[1639px] mx-auto relative">
          {/* Carousel Container with Real Figma Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2Fdd35d8126d3046409354f589f2bbc58e?format=webp&width=1600&quality=90"
              alt="Gift Package Cards"
              className="w-full max-w-[1472px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section - Exact Figma Match */}
      <section
        className="h-[566px] flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #C1D5F7 0%, #E4EAFE 50%, #F2F5FF 100%)',
        }}
      >
        <div className="max-w-[999px] mx-auto px-4 w-full relative">
          <h2 className="text-4xl font-bold text-center mb-16 hebrew-font" style={{ color: '#4B5FC7' }}>
            רגע! איך זה עובד?
          </h2>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 3 - שולחים למי שאוהבים */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-[324px] h-[281px] bg-white rounded-[34px] mx-auto mb-8"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className="numbers-font text-[120px] text-stock4u-pop-yellow"
                    style={{
                      textShadow: "6.886px 6.886px 0 rgba(0,0,0,0.1)",
                      WebkitTextStroke: "7.57px white",
                    }}
                  >
                    3
                  </span>
                </div>
              </div>
              <h3 className="text-[40px] font-extrabold mb-4 hebrew-font leading-normal h-[80px] flex items-center justify-center" style={{ color: '#4B5FC7' }}>
                שולחים למי
                <br />
                שאוהבים
              </h3>
              <p className="font-bold text-[22px] max-w-[238px] mx-auto h-[49px] flex items-center justify-center" style={{ color: '#4B5FC7' }}>
                המתנה תגיע ישירות למייל או ל��ייד
              </p>
            </div>

            {/* Step 2 - כותבים ברכה מושקעת */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-[324px] h-[281px] bg-white rounded-[34px] mx-auto mb-8"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className="numbers-font text-[120px] text-stock4u-pop-yellow"
                    style={{
                      textShadow: "6.886px 6.886px 0 rgba(0,0,0,0.1)",
                      WebkitTextStroke: "7.57px white",
                    }}
                  >
                    2
                  </span>
                </div>
              </div>
              <h3 className="text-[40px] font-extrabold mb-4 hebrew-font leading-normal h-[80px] flex items-center justify-center" style={{ color: '#4B5FC7' }}>
                כותבים ברכה
                <br />
                מושקעת
              </h3>
              <p className="font-bold text-[22px] max-w-[238px] mx-auto h-[49px] flex items-center justify-center" style={{ color: '#4B5FC7' }}>
                אל תדאגו, נעזור לכם אם צריך
              </p>
            </div>

            {/* Step 1 - מוסיפים מניות לעגלת הקניות */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-[324px] h-[281px] bg-white rounded-[34px] mx-auto mb-8"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className="numbers-font text-[120px] text-stock4u-pop-yellow"
                    style={{
                      textShadow: "6.886px 6.886px 0 rgba(0,0,0,0.1)",
                      WebkitTextStroke: "7.57px white",
                    }}
                  >
                    1
                  </span>
                </div>
              </div>
              <h3 className="text-[40px] font-extrabold mb-4 hebrew-font leading-normal h-[80px] flex items-center justify-center" style={{ color: '#4B5FC7' }}>
                מוסיפים מניות
                <br />
                לעגלת הקניות
              </h3>
              <p className="font-bold text-[22px] max-w-[238px] mx-auto h-[49px] flex items-center justify-center" style={{ color: '#4B5FC7' }}>
                ניתן גם לבחור חבילות מוכנות או ליצור משלכם
              </p>
            </div>
          </div>

          {/* Curved Arrows between steps - exact positioning from Figma */}
          <div
            className="absolute"
            style={{
              left: "249px",
              top: "282px",
              transform: "rotate(-159.023deg)",
              width: "151px",
              height: "56px",
            }}
          >
            <svg
              width="170"
              height="95"
              viewBox="0 0 170 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_284_26903)">
                <path
                  d="M16.3569 55.3427C16.353 55.3442 16.3545 55.3499 16.3586 55.3495C28.1163 53.941 39.708 57.7012 51.2345 54.5668C52.8655 54.1233 53.8852 52.3807 53.0424 50.9156C51.5176 48.2652 48.9155 47.9551 46.754 48.8715C42.8472 50.5134 39.2398 49.8008 35.5051 49.425C28.5825 48.7197 21.6795 47.8149 14.7873 46.938C8.36651 46.1203 6.59933 47.9496 8.33141 53.9724C10.6358 62.0314 13.0573 70.0615 15.4649 78.0969C16.1602 80.41 19.5689 81.0808 20.1205 78.7294C20.6824 76.3346 20.0128 72.6643 18.0692 64.5123C17.6025 62.5547 19.65 60.664 21.3955 61.6655C45.0968 75.2786 70.0071 78.7498 96.2903 70.4165C107.526 66.8605 117.528 61.2982 124.087 51.1047C125.905 48.2799 128.32 47.5139 131.223 47.057C139.962 45.6422 147.754 42.0946 154.561 36.4774C156.172 35.15 154.647 33.4965 152.837 34.5354C146.548 38.1454 140.206 41.5344 132.781 42.5665C130.715 42.8537 129.045 41.0319 129.3 38.9615C129.319 38.8108 129.337 38.6604 129.357 38.5101C130.984 26.032 124.879 15.2072 113.318 10.057C103.174 5.54773 92.8532 9.23276 88.4887 18.9208C83.584 29.7917 87.6371 41.1156 98.2655 45.2153C102.009 46.6595 106.156 47.1492 110.144 47.892C110.952 48.0419 111.771 48.1455 112.624 48.2293C115.066 48.4694 116.469 51.042 114.886 52.9173C112.251 56.039 109.034 58.2139 105.584 60.0385C86.505 70.1048 66.3568 72.4066 45.5092 67.2818C38.787 65.6358 32.3439 62.795 25.894 60.2287C22.5879 58.9211 19.5245 56.9927 16.3598 55.3429C16.3589 55.3424 16.3578 55.3423 16.3569 55.3427ZM123.326 29.2881C123.33 29.2865 123.335 29.2896 123.334 29.294C123.066 32.1487 122.863 36.589 122.07 40.9519C121.86 42.12 119.887 43.7884 118.686 43.833C111.505 44.0426 104.303 43.7802 97.8059 40.1284C91.9782 36.8437 89.8606 29.4809 92.5712 22.5867C95.163 16.0099 100.767 12.7736 107.358 14.4538C114.532 16.2777 119.339 21.0397 123.319 29.2851C123.32 29.2879 123.323 29.2892 123.326 29.2881Z"
                  fill="#689EDA"
                />
                <path
                  d="M114.857 6.59598C102.951 1.30402 90.3206 5.63661 85.0365 17.3628C79.3516 29.963 83.9953 43.77 96.9026 48.7487C101.078 50.3594 105.815 50.9388 109.45 51.6158L109.453 51.6157C109.887 51.6961 110.317 51.7627 110.744 51.8214C108.778 53.7643 106.453 55.2938 103.817 56.6881L103.816 56.6885C85.5761 66.3125 66.3804 68.5121 46.4134 63.6038L46.41 63.603C42.2206 62.5772 38.1615 61.0663 33.9924 59.4049C39.7387 59.7647 45.9401 59.9309 52.2283 58.221C54.041 57.7281 55.569 56.507 56.4204 54.8828C57.3033 53.1987 57.4672 51.0113 56.3255 49.0267C55.0958 46.8892 53.2632 45.4656 51.1068 44.8946C49.0316 44.345 46.9729 44.6651 45.2757 45.3846L45.2766 45.3843C42.48 46.556 40.0671 46.0772 35.8843 45.6563C29.0224 44.9571 22.1789 44.0608 15.2656 43.1812L14.6105 43.1039C13.0891 42.9417 11.6207 42.9033 10.284 43.0966C8.74414 43.3193 7.0343 43.9028 5.72496 45.3142C4.38865 46.7548 3.95607 48.5303 3.92034 50.1331C3.88567 51.6887 4.21194 53.3523 4.69118 55.0188L4.69209 55.0185C5.84788 59.0605 7.03255 63.0951 8.22911 67.1218L11.8373 79.1842L11.8374 79.1873C12.6523 81.8979 14.9815 83.5353 17.2423 83.9007C18.414 84.0901 19.8229 83.9824 21.1281 83.2413C22.5133 82.4549 23.4448 81.1406 23.8076 79.5941C24.256 77.6827 24.1411 75.5897 23.7792 73.2105C23.5066 71.4179 23.0562 69.2457 22.4446 66.5788C46.1296 79.3186 71.1514 82.3586 97.434 74.0257L97.4334 74.0269C108.931 70.388 119.707 64.5632 126.93 53.6763L127.272 53.1542C128.215 51.6882 129.298 51.1941 131.812 50.7983L131.82 50.7973L131.828 50.7955C141.234 49.2727 149.648 45.4408 156.97 39.3989L156.97 39.3998C157.88 38.6501 158.714 37.5458 158.96 36.1019C159.214 34.6068 158.754 33.1455 157.792 32.0804C155.869 29.9515 152.943 30.1078 150.952 31.2506C144.945 34.6984 139.407 37.6169 133.152 38.6754C134.85 24.656 127.836 12.3785 114.859 6.59711L114.857 6.59598ZM100.309 18.7321C101.937 17.8248 103.979 17.5005 106.422 18.1235L106.425 18.1246C111.932 19.5247 115.904 23.0172 119.468 30.043C119.237 32.8514 119.028 36.2944 118.425 39.8068C118.28 40.5851 117.923 42.0066 117.064 43.1039C116.242 44.1548 115.07 44.7208 113.973 44.788C111.158 44.9603 107.925 44.8036 104.769 43.6221L104.768 43.6221C96.9949 40.7006 95.4619 32.4699 99.0925 25.0435L100.309 18.7321Z"
                  stroke="white"
                  strokeWidth="7.57477"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_284_26903"
                  x="0.130859"
                  y="0.582397"
                  width="169.572"
                  height="94.0737"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="6.88616" dy="6.88616" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_284_26903"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_284_26903"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div
            className="absolute"
            style={{
              left: "600px",
              top: "0px",
              transform: "rotate(48.542deg)",
              width: "83px",
              height: "92px",
            }}
          >
            <svg
              width="132"
              height="69"
              viewBox="0 0 132 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_284_26904)">
                <path
                  d="M116.603 40.1468C116.608 40.1471 116.611 40.1402 116.607 40.1366C114.049 37.951 112.54 36.8806 111.312 35.5617C101.506 24.9831 88.8568 19.5755 75.226 16.375C70.9966 15.3795 66.0973 15.6876 61.8304 16.7353C48.87 19.9 37.7341 26.2847 28.2563 36.45C27.1937 37.5897 27.847 39.3587 29.3818 39.0897C31.6986 38.6837 33.6134 37.4795 35.6531 36.9922C38.3277 36.3462 40.9641 35.42 43.677 35.0543C44.596 34.9334 46.1878 35.9768 46.5551 36.8666C46.9225 37.7565 46.5207 39.577 45.7944 40.1768C43.874 41.7476 41.7183 43.1705 39.4466 44.1304C32.0485 47.2742 24.561 50.2457 17.0658 53.1611C11.6437 55.2711 9.53761 54.0958 8.79374 48.5137C7.60147 39.58 8.8269 30.9182 12.5151 22.698C12.8372 21.971 13.4258 21.3651 14.1453 20.7036C15.1646 19.7666 16.8715 20.0263 17.2119 21.3684C18.337 25.8046 16.0571 29.8321 15.8461 34.0693C15.7677 35.6434 17.5933 36.1664 18.7025 35.0468C19.7054 34.0346 20.6482 33.0766 21.5714 32.0962C31.0798 21.9796 42.4607 14.8358 55.674 10.5958C64.6115 7.72513 73.5141 7.75376 82.3218 11.1115C91.7373 14.7069 100.892 18.931 108.473 25.7589C112.221 29.1251 116.166 32.7146 116.597 40.1414C116.598 40.1442 116.6 40.1466 116.603 40.1468Z"
                  fill="#689EDA"
                />
                <path
                  d="M111.007 22.9453C114.818 26.3683 119.853 30.8596 120.379 39.9218L120.356 39.9224C120.479 41.9722 119.07 44.0907 116.373 43.9259C115.41 43.8673 114.571 43.4619 113.949 42.8488C112.791 41.865 111.907 41.1566 111.042 40.439C110.167 39.7133 109.327 38.9881 108.54 38.1421L108.535 38.1363C99.4341 28.3187 87.5935 23.1696 74.3604 20.0624L74.3584 20.0616C70.8615 19.2385 66.5896 19.4669 62.7335 20.4137L62.7293 20.4148C53.5854 22.6476 45.4261 26.5606 38.1466 32.4015C39.759 31.9653 41.5258 31.5229 43.1712 31.3011L43.1824 31.2991C44.1896 31.1665 45.0744 31.3729 45.6599 31.568C46.2892 31.7777 46.8673 32.074 47.3621 32.3901C48.1483 32.8924 49.2887 33.8102 49.9339 35.1479L50.056 35.4219L50.1618 35.7024C50.6499 37.1109 50.4841 38.5617 50.2788 39.4678C50.0803 40.3437 49.5988 41.8031 48.4455 42.8855L48.1996 43.1028L48.1924 43.1079C46.0837 44.8327 43.6217 46.4753 40.9284 47.6146L40.9283 47.616C33.4775 50.7822 25.9476 53.7691 18.4396 56.6896L18.4396 56.691C15.7262 57.7468 12.2885 58.6888 9.32239 57.0246C6.47141 55.425 5.53338 52.2736 5.11631 49.5523L5.03962 49.0142C3.75573 39.3931 5.07883 30.0205 9.05953 21.1481L9.06091 21.1481C9.73448 19.6385 10.8658 18.5735 11.5815 17.9155C12.9883 16.6222 14.8933 16.1223 16.6535 16.4631C18.501 16.821 20.3069 18.1658 20.8831 20.4368C21.5188 22.9431 21.345 25.2734 20.9961 27.2613C30.4963 17.8496 41.6952 11.1037 54.5164 6.98942C64.2138 3.8749 74.0037 3.8869 83.6711 7.57239L83.6731 7.57321C93.2022 11.2121 102.893 15.6362 111.007 22.9447L111.007 22.9453ZM119.985 38.4597C120.204 38.9191 120.325 39.4171 120.356 39.9197L120.378 39.9197C120.348 39.4038 120.209 38.9093 119.985 38.4597Z"
                  stroke="white"
                  strokeWidth="7.57477"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_284_26904"
                  x="0.779297"
                  y="0.938721"
                  width="130.267"
                  height="67.6655"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="6.88616" dy="6.88616" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_284_26904"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_284_26904"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
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
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-stock4u-dark-grey mb-8 hebrew-font">
          אוקיי אני רוצה לשלוח מתנה, מה עכשי��?
        </h2>
        <Link
          to="/stock-selection"
          className="inline-block bg-stock4u-happy-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg"
        >
          מתחילים בבחירת מתנה &gt;
        </Link>
      </section>

      {/* Company Logos Ticker */}
      <section className="py-8 overflow-hidden">
        <p className="text-center text-stock4u-dark-grey mb-8">
          חברות פופולאריות להשקעה
        </p>
        <div className="flex items-center gap-12 opacity-30 animate-pulse">
          <div className="flex items-center gap-12 whitespace-nowrap">
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              GOOG
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              AMZN
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              NASDAQ
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              AAPL
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              AAN
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              NVDA
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              MSFT
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              META
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              SONY
            </span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">
              CRM
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
