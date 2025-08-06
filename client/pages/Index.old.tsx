import { useState } from "react";

import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white hebrew-font" dir="rtl">
      {/* Header */}
      <header className="w-full bg-white px-8 py-4 h-[75px] flex items-center">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between w-full">
          {/* Left side - Cart and Login */}
          <div className="flex items-center gap-5">
            {/* Shopping Cart */}
            <div className="relative">
              <div className="w-12 h-12 bg-stock4u-happy-blue rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9491 10.3121H5.35309C5.0577 10.3124 4.76621 10.3795 4.50041 10.5083C4.2346 10.6372 4.00135 10.8244 3.81809 11.0561C3.63559 11.2871 3.50807 11.5566 3.44517 11.8442C3.38228 12.1318 3.38567 12.43 3.45509 12.7161L5.02009 19.1241C5.24668 19.9497 5.73865 20.6778 6.42009 21.1961C7.10209 21.7151 7.93709 21.9961 8.79609 21.9961H16.5041C17.3631 21.9961 18.1981 21.7151 18.8801 21.1961C19.5615 20.6778 20.0535 19.9497 20.2801 19.1241L21.8451 12.7171C21.9504 12.2851 21.9042 11.8301 21.7142 11.4282C21.5241 11.0262 21.2018 10.7018 20.8011 10.5091C20.5345 10.3811 20.2428 10.3138 19.9471 10.3121M8.73809 14.2061V18.1011M12.6511 14.2061V18.1011M16.5641 14.2061V18.1011M19.4991 10.3121C19.4987 9.41614 19.3213 8.52909 18.9771 7.70191C18.6328 6.87473 18.1285 6.12374 17.4931 5.4921C16.2066 4.21259 14.4655 3.4949 12.6511 3.4961C10.8366 3.4949 9.09561 4.21259 7.80909 5.4921C7.17385 6.12383 6.66971 6.87485 6.32562 7.70203C5.98154 8.5292 5.8043 9.41621 5.80409 10.3121" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Login Button */}
            <div className="bg-stock4u-light-blue rounded-full px-6 py-3">
              <span className="text-stock4u-happy-blue font-bold hebrew-font">כניסה</span>
            </div>
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
              <svg className="w-5 h-5 text-stock4u-happy-blue" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6147 18.2617L15.1993 14.047C16.4584 12.6648 17.1061 10.8699 17.0059 9.04073C16.9057 7.21155 16.0654 5.49097 14.6621 4.24167C13.2588 2.99237 11.4022 2.31195 9.48358 2.34385C7.56497 2.37574 5.73429 3.11746 4.37743 4.41265C3.02056 5.70784 2.24352 7.45531 2.21011 9.2867C2.17669 11.1181 2.88951 12.8903 4.1983 14.2298C5.50709 15.5693 7.30961 16.3715 9.22589 16.4671C11.1422 16.5628 13.0225 15.9445 14.4705 14.7426L18.886 18.9573C18.9837 19.0443 19.113 19.0916 19.2466 19.0894C19.3802 19.0871 19.5076 19.0355 19.6021 18.9453C19.6966 18.8551 19.7507 18.7334 19.753 18.6059C19.7554 18.4784 19.7058 18.355 19.6147 18.2617ZM3.26598 9.42203C3.26598 8.22144 3.63895 7.0478 4.33772 6.04955C5.0365 5.05129 6.0297 4.27324 7.19172 3.81379C8.35375 3.35435 9.6324 3.23413 10.866 3.46836C12.0996 3.70258 13.2327 4.28072 14.1221 5.12967C15.0115 5.97862 15.6172 7.06025 15.8625 8.23777C16.1079 9.4153 15.982 10.6358 15.5006 11.745C15.0193 12.8542 14.2042 13.8023 13.1584 14.4693C12.1126 15.1363 10.8831 15.4923 9.62535 15.4923C7.93937 15.4904 6.32302 14.8502 5.13085 13.7122C3.93868 12.5743 3.26802 11.0314 3.26598 9.42203Z" fill="currentColor"/>
              </svg>
              <span className="text-stock4u-happy-blue text-lg hebrew-font">חיפוש</span>
            </div>
            <button className="text-stock4u-happy-blue text-lg hebrew-font">קריירה</button>
            <button className="text-stock4u-happy-blue text-lg hebrew-font">רשימת מתנות</button>
            <button className="text-stock4u-happy-blue text-lg hebrew-font">אודות</button>
            <button className="text-stock4u-happy-blue text-lg hebrew-font">בית</button>
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
            <button className="w-[178px] h-[178px] bg-stock4u-happy-blue rounded-full flex items-center justify-center shadow-[10px_10px_0_rgba(0,0,0,0.1)] hover:scale-105 transition-transform">
              <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
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

      {/* How It Works Section */}
      <section className="bg-stock4u-light-blue h-[921px] flex items-center">
        <div className="max-w-[999px] mx-auto px-4 w-full relative">
          <h2 className="text-4xl font-bold text-center text-stock4u-dark-grey mb-16 hebrew-font">
            רגע! איך זה עובד?
          </h2>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 3 - שולחים למי שאוהבים */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-[324px] h-[281px] bg-white rounded-[34px] mx-auto mb-8"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="numbers-font text-[120px] text-stock4u-pop-yellow" style={{
                    textShadow: '6.886px 6.886px 0 rgba(0,0,0,0.1)',
                    WebkitTextStroke: '7.57px white'
                  }}>3</span>
                </div>
              </div>
              <h3 className="text-[40px] font-extrabold text-stock4u-nostalgic-blue mb-4 hebrew-font leading-normal h-[80px] flex items-center justify-center">
                שולחים למי<br />שאוהבים
              </h3>
              <p className="text-stock4u-nostalgic-blue font-bold text-[22px] max-w-[238px] mx-auto h-[49px] flex items-center justify-center">
                המתנה תגיע ישירות למייל או לנייד
              </p>
            </div>

            {/* Step 2 - כותבים ברכה מושקעת */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-[324px] h-[281px] bg-white rounded-[34px] mx-auto mb-8"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="numbers-font text-[120px] text-stock4u-pop-yellow" style={{
                    textShadow: '6.886px 6.886px 0 rgba(0,0,0,0.1)',
                    WebkitTextStroke: '7.57px white'
                  }}>2</span>
                </div>
              </div>
              <h3 className="text-[40px] font-extrabold text-stock4u-nostalgic-blue mb-4 hebrew-font leading-normal h-[80px] flex items-center justify-center">
                כותבים ברכה<br />מושקעת
              </h3>
              <p className="text-stock4u-nostalgic-blue font-bold text-[22px] max-w-[238px] mx-auto h-[49px] flex items-center justify-center">
                אל תדאגו, נעזור לכם אם צריך
              </p>
            </div>

            {/* Step 1 - מוסיפים מניות לעגלת הקניות */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-[324px] h-[281px] bg-white rounded-[34px] mx-auto mb-8"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="numbers-font text-[120px] text-stock4u-pop-yellow" style={{
                    textShadow: '6.886px 6.886px 0 rgba(0,0,0,0.1)',
                    WebkitTextStroke: '7.57px white'
                  }}>1</span>
                </div>
              </div>
              <h3 className="text-[40px] font-extrabold text-stock4u-nostalgic-blue mb-4 hebrew-font leading-normal h-[80px] flex items-center justify-center">
                מוסיפים מניות<br />לעגלת הקניות
              </h3>
              <p className="text-stock4u-nostalgic-blue font-bold text-[22px] max-w-[238px] mx-auto h-[49px] flex items-center justify-center">
                ניתן גם לבחור חבילות מוכנות או ליצור משלכם
              </p>
            </div>
          </div>

          {/* Curved Arrows between steps - exact positioning from Figma */}
          <div className="absolute" style={{ left: '249px', top: '282px', transform: 'rotate(-159.023deg)', width: '151px', height: '56px' }}>
            <svg width="170" height="95" viewBox="0 0 170 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_284_26903)">
                <path d="M16.3569 55.3427C16.353 55.3442 16.3545 55.3499 16.3586 55.3495C28.1163 53.941 39.708 57.7012 51.2345 54.5668C52.8655 54.1233 53.8852 52.3807 53.0424 50.9156C51.5176 48.2652 48.9155 47.9551 46.754 48.8715C42.8472 50.5134 39.2398 49.8008 35.5051 49.425C28.5825 48.7197 21.6795 47.8149 14.7873 46.938C8.36651 46.1203 6.59933 47.9496 8.33141 53.9724C10.6358 62.0314 13.0573 70.0615 15.4649 78.0969C16.1602 80.41 19.5689 81.0808 20.1205 78.7294C20.6824 76.3346 20.0128 72.6643 18.0692 64.5123C17.6025 62.5547 19.65 60.664 21.3955 61.6655C45.0968 75.2786 70.0071 78.7498 96.2903 70.4165C107.526 66.8605 117.528 61.2982 124.087 51.1047C125.905 48.2799 128.32 47.5139 131.223 47.057C139.962 45.6422 147.754 42.0946 154.561 36.4774C156.172 35.15 154.647 33.4965 152.837 34.5354C146.548 38.1454 140.206 41.5344 132.781 42.5665C130.715 42.8537 129.045 41.0319 129.3 38.9615C129.319 38.8108 129.337 38.6604 129.357 38.5101C130.984 26.032 124.879 15.2072 113.318 10.057C103.174 5.54773 92.8532 9.23276 88.4887 18.9208C83.584 29.7917 87.6371 41.1156 98.2655 45.2153C102.009 46.6595 106.156 47.1492 110.144 47.892C110.952 48.0419 111.771 48.1455 112.624 48.2293C115.066 48.4694 116.469 51.042 114.886 52.9173C112.251 56.039 109.034 58.2139 105.584 60.0385C86.505 70.1048 66.3568 72.4066 45.5092 67.2818C38.787 65.6358 32.3439 62.795 25.894 60.2287C22.5879 58.9211 19.5245 56.9927 16.3598 55.3429C16.3589 55.3424 16.3578 55.3423 16.3569 55.3427ZM123.326 29.2881C123.33 29.2865 123.335 29.2896 123.334 29.294C123.066 32.1487 122.863 36.589 122.07 40.9519C121.86 42.12 119.887 43.7884 118.686 43.833C111.505 44.0426 104.303 43.7802 97.8059 40.1284C91.9782 36.8437 89.8606 29.4809 92.5712 22.5867C95.163 16.0099 100.767 12.7736 107.358 14.4538C114.532 16.2777 119.339 21.0397 123.319 29.2851C123.32 29.2879 123.323 29.2892 123.326 29.2881Z" fill="#689EDA"/>
                <path d="M114.857 6.59598C102.951 1.30402 90.3206 5.63661 85.0365 17.3628C79.3516 29.963 83.9953 43.77 96.9026 48.7487C101.078 50.3594 105.815 50.9388 109.45 51.6158L109.453 51.6157C109.887 51.6961 110.317 51.7627 110.744 51.8214C108.778 53.7643 106.453 55.2938 103.817 56.6881L103.816 56.6885C85.5761 66.3125 66.3804 68.5121 46.4134 63.6038L46.41 63.603C42.2206 62.5772 38.1615 61.0663 33.9924 59.4049C39.7387 59.7647 45.9401 59.9309 52.2283 58.221C54.041 57.7281 55.569 56.507 56.4204 54.8828C57.3033 53.1987 57.4672 51.0113 56.3255 49.0267C55.0958 46.8892 53.2632 45.4656 51.1068 44.8946C49.0316 44.345 46.9729 44.6651 45.2757 45.3846L45.2766 45.3843C42.48 46.556 40.0671 46.0772 35.8843 45.6563C29.0224 44.9571 22.1789 44.0608 15.2656 43.1812L14.6105 43.1039C13.0891 42.9417 11.6207 42.9033 10.284 43.0966C8.74414 43.3193 7.0343 43.9028 5.72496 45.3142C4.38865 46.7548 3.95607 48.5303 3.92034 50.1331C3.88567 51.6887 4.21194 53.3523 4.69118 55.0188L4.69209 55.0185C5.84788 59.0605 7.03255 63.0951 8.22911 67.1218L11.8373 79.1842L11.8374 79.1873C12.6523 81.8979 14.9815 83.5353 17.2423 83.9007C18.414 84.0901 19.8229 83.9824 21.1281 83.2413C22.5133 82.4549 23.4448 81.1406 23.8076 79.5941C24.256 77.6827 24.1411 75.5897 23.7792 73.2105C23.5066 71.4179 23.0562 69.2457 22.4446 66.5788C46.1296 79.3186 71.1514 82.3586 97.434 74.0257L97.4334 74.0269C108.931 70.388 119.707 64.5632 126.93 53.6763L127.272 53.1542C128.215 51.6882 129.298 51.1941 131.812 50.7983L131.82 50.7973L131.828 50.7955C141.234 49.2727 149.648 45.4408 156.97 39.3989L156.97 39.3998C157.88 38.6501 158.714 37.5458 158.96 36.1019C159.214 34.6068 158.754 33.1455 157.792 32.0804C155.869 29.9515 152.943 30.1078 150.952 31.2506C144.945 34.6984 139.407 37.6169 133.152 38.6754C134.85 24.656 127.836 12.3785 114.859 6.59711L114.857 6.59598ZM100.309 18.7321C101.937 17.8248 103.979 17.5005 106.422 18.1235L106.425 18.1246C111.932 19.5247 115.904 23.0172 119.468 30.043C119.237 32.8514 119.028 36.2944 118.425 39.8068C118.386 39.8447 118.345 39.8864 118.298 39.9265C118.24 39.9761 118.181 40.0194 118.126 40.0572C111.192 40.2376 105.066 39.8642 99.6611 36.8265C95.7896 34.6412 93.9401 29.4556 96.0957 23.9727L96.0953 23.9718C97.1283 21.3525 98.6538 19.6552 100.309 18.7321ZM119.908 30.9307L119.909 30.9344C120.106 31.3413 120.371 31.7005 120.683 32.0036C120.337 31.6737 120.053 31.2756 119.855 30.8224C119.872 30.8585 119.89 30.8945 119.908 30.9307Z" stroke="white" strokeWidth="7.57477"/>
              </g>
              <defs>
                <filter id="filter0_d_284_26903" x="0.130859" y="0.582397" width="169.572" height="94.0737" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="6.88616" dy="6.88616"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_284_26903"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_284_26903" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>

          <div className="absolute" style={{ left: '600px', top: '0px', transform: 'rotate(48.542deg)', width: '83px', height: '92px' }}>
            <svg width="132" height="69" viewBox="0 0 132 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_284_26904)">
                <path d="M116.603 40.1468C116.608 40.1471 116.611 40.1402 116.607 40.1366C114.049 37.951 112.54 36.8806 111.312 35.5617C101.506 24.9831 88.8568 19.5755 75.226 16.375C70.9966 15.3795 66.0973 15.6876 61.8304 16.7353C48.87 19.9 37.7341 26.2847 28.2563 36.45C27.1937 37.5897 27.847 39.3587 29.3818 39.0897C31.6986 38.6837 33.6134 37.4795 35.6531 36.9922C38.3277 36.3462 40.9641 35.42 43.677 35.0543C44.596 34.9334 46.1878 35.9768 46.5551 36.8666C46.9225 37.7565 46.5207 39.577 45.7944 40.1768C43.874 41.7476 41.7183 43.1705 39.4466 44.1304C32.0485 47.2742 24.561 50.2457 17.0658 53.1611C11.6437 55.2711 9.53761 54.0958 8.79374 48.5137C7.60147 39.58 8.8269 30.9182 12.5151 22.698C12.8372 21.971 13.4258 21.3651 14.1453 20.7036C15.1646 19.7666 16.8715 20.0263 17.2119 21.3684C18.337 25.8046 16.0571 29.8321 15.8461 34.0693C15.7677 35.6434 17.5933 36.1664 18.7025 35.0468C19.7054 34.0346 20.6482 33.0766 21.5714 32.0962C31.0798 21.9796 42.4607 14.8358 55.674 10.5958C64.6115 7.72513 73.5141 7.75376 82.3218 11.1115C91.7373 14.7069 100.892 18.931 108.473 25.7589C112.221 29.1251 116.166 32.7146 116.597 40.1414C116.598 40.1442 116.6 40.1466 116.603 40.1468Z" fill="#689EDA"/>
                <path d="M111.007 22.9453C114.818 26.3683 119.853 30.8596 120.379 39.9218L120.356 39.9224C120.479 41.9722 119.07 44.0907 116.373 43.9259C115.41 43.8673 114.571 43.4619 113.949 42.8488C112.791 41.865 111.907 41.1566 111.042 40.439C110.167 39.7133 109.327 38.9881 108.54 38.1421L108.535 38.1363C99.4341 28.3187 87.5935 23.1696 74.3604 20.0624L74.3584 20.0616C70.8615 19.2385 66.5896 19.4669 62.7335 20.4137L62.7293 20.4148C53.5854 22.6476 45.4261 26.5606 38.1466 32.4015C39.759 31.9653 41.5258 31.5229 43.1712 31.3011L43.1824 31.2991C44.1896 31.1665 45.0744 31.3729 45.6599 31.568C46.2892 31.7777 46.8673 32.074 47.3621 32.3901C48.1483 32.8924 49.2887 33.8102 49.9339 35.1479L50.056 35.4219L50.1618 35.7024C50.6499 37.1109 50.4841 38.5617 50.2788 39.4678C50.0803 40.3437 49.5988 41.8031 48.4455 42.8855L48.1996 43.1028L48.1924 43.1079C46.0837 44.8327 43.6217 46.4753 40.9284 47.6146L40.9283 47.616C33.4775 50.7822 25.9476 53.7691 18.4396 56.6896L18.4396 56.691C15.7262 57.7468 12.2885 58.6888 9.32239 57.0246C6.47141 55.425 5.53338 52.2736 5.11631 49.5523L5.03962 49.0142C3.75573 39.3931 5.07883 30.0205 9.05953 21.1481L9.06091 21.1481C9.73448 19.6385 10.8658 18.5735 11.5815 17.9155C12.9883 16.6222 14.8933 16.1223 16.6535 16.4631C18.501 16.821 20.3069 18.1658 20.8831 20.4368C21.5188 22.9431 21.345 25.2734 20.9961 27.2613C30.4963 17.8496 41.6952 11.1037 54.5164 6.98942C64.2138 3.8749 74.0037 3.8869 83.6711 7.57239L83.6731 7.57321C93.2022 11.2121 102.893 15.6362 111.007 22.9447L111.007 22.9453ZM119.985 38.4597C120.204 38.9191 120.325 39.4171 120.356 39.9197L120.378 39.9197C120.348 39.4038 120.209 38.9093 119.985 38.4597Z" stroke="white" strokeWidth="7.57477"/>
              </g>
              <defs>
                <filter id="filter0_d_284_26904" x="0.779297" y="0.938721" width="130.267" height="67.6655" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="6.88616" dy="6.88616"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_284_26904"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_284_26904" result="shape"/>
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
            <div className="text-6xl font-bold text-stock4u-dark-grey mb-4 english-font">24+</div>
            <p className="text-stock4u-grey text-xl">מדינות שבהם אנו עובדים</p>
          </div>
          <div className="bg-stock4u-light-blue/40 rounded-3xl p-8 text-center">
            <div className="text-6xl font-bold text-stock4u-dark-grey mb-4 english-font">17M</div>
            <p className="text-stock4u-grey text-xl">אנשים ש��אמינו בנו</p>
          </div>
          <div className="bg-stock4u-light-blue/40 rounded-3xl p-8 text-center">
            <div className="text-6xl font-bold text-stock4u-dark-grey mb-4 english-font">+95%</div>
            <p className="text-stock4u-grey text-xl">לקוחות מרוצים</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-stock4u-dark-grey mb-8 hebrew-font">
          אוקיי אני רוצה לשלוח מתנה, מה עכשיו?
        </h2>
        <button className="bg-stock4u-happy-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg">
          מתחילים בבחירת מתנה &gt;
        </button>
      </section>

      {/* Company Logos Ticker */}
      <section className="py-8 overflow-hidden">
        <p className="text-center text-stock4u-dark-grey mb-8">חברות פופולאריות להשקעה</p>
        <div className="flex items-center gap-12 opacity-30 animate-pulse">
          <div className="flex items-center gap-12 whitespace-nowrap">
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">GOOG</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">AMZN</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">NASDAQ</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">AAPL</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">AAN</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">NVDA</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">MSFT</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">META</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">SONY</span>
            <span className="text-4xl font-bold text-stock4u-dark-grey english-font">CRM</span>
          </div>
        </div>
      </section>


      <footer className="bg-stock4u-white py-12 relative overflow-hidden">
        <div className="max-w-[1228px] mx-auto px-4 w-full">
          {/* Logo with legs positioned on the left */}
          <div className="absolute left-[9px] top-0 z-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2F40d90a49a5fd4287942cd3de0b3e9761?format=webp&width=800"
              alt="Stock4U Logo"
              className="w-[124px] h-[173px]"
            />
          </div>

          {/* Main footer content */}
          <div className="flex items-center gap-3 ml-[160px] h-[152px]">
            {/* Social Media Section */}
            <div className="flex items-center gap-6">
              <div className="flex w-[281px] flex-col items-end gap-5">
                <h3 className="text-[24px] font-extrabold text-stock4u-happy-blue hebrew-font">אנחנו ברשתות</h3>
                <div className="flex h-[105px] flex-col justify-between items-end self-stretch">
                  <div className="flex justify-end items-center self-stretch">
                    <span className="text-stock4u-happy-blue text-[18px] font-normal">טיקטוק</span>
                    <svg className="flex p-2 items-center gap-2.5" width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.2486 11.2348C20.5652 10.4543 20.1885 9.45219 20.1886 8.41479H17.0986V20.8148C17.0753 21.486 16.7921 22.1219 16.3089 22.5883C15.8257 23.0547 15.1802 23.3152 14.5086 23.3148C13.0886 23.3148 11.9086 22.1548 11.9086 20.7148C11.9086 18.9948 13.5686 17.7048 15.2786 18.2348V15.0748C11.8286 14.6148 8.80859 17.2948 8.80859 20.7148C8.80859 24.0448 11.5686 26.4148 14.4986 26.4148C17.6386 26.4148 20.1886 23.8648 20.1886 20.7148V14.4248C21.4416 15.3246 22.946 15.8074 24.4886 15.8048V12.7148C24.4886 12.7148 22.6086 12.8048 21.2486 11.2348Z" fill="#4C7EFB"/>
                    </svg>
                  </div>
                  <div className="flex justify-end items-center self-stretch">
                    <span className="text-stock4u-happy-blue text-[18px] font-normal">אינסטגרם</span>
                    <svg className="flex p-2 flex-col items-start gap-2.5" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.0108 8.08124C18.9483 8.08374 19.4241 8.08874 19.835 8.1004L19.9966 8.10624C20.1833 8.1129 20.3675 8.12124 20.59 8.13124C21.4766 8.1729 22.0816 8.3129 22.6125 8.51874C23.1625 8.7304 23.6258 9.01707 24.0891 9.47957C24.513 9.89601 24.8409 10.4 25.05 10.9562C25.2558 11.4871 25.3958 12.0921 25.4375 12.9796C25.4475 13.2012 25.4558 13.3854 25.4625 13.5729L25.4675 13.7346C25.48 14.1446 25.485 14.6204 25.4866 15.5579L25.4875 16.1796V17.2712C25.4895 17.8791 25.4831 18.4869 25.4683 19.0946L25.4633 19.2562C25.4566 19.4437 25.4483 19.6279 25.4383 19.8496C25.3966 20.7371 25.255 21.3412 25.05 21.8729C24.8409 22.4292 24.513 22.9331 24.0891 23.3496C23.6727 23.7735 23.1687 24.1014 22.6125 24.3104C22.0816 24.5162 21.4766 24.6562 20.59 24.6979L19.9966 24.7229L19.835 24.7279C19.4241 24.7396 18.9483 24.7454 18.0108 24.7471L17.3891 24.7479H16.2983C15.6902 24.75 15.0821 24.7437 14.4741 24.7287L14.3125 24.7237C14.1146 24.7162 13.9168 24.7076 13.7191 24.6979C12.8325 24.6562 12.2275 24.5162 11.6958 24.3104C11.1398 24.1013 10.6362 23.7734 10.22 23.3496C9.79574 22.9332 9.46754 22.4293 9.25829 21.8729C9.05245 21.3421 8.91245 20.7371 8.87079 19.8496L8.84579 19.2562L8.84162 19.0946C8.82626 18.4869 8.81931 17.8791 8.82079 17.2712V15.5579C8.81848 14.9501 8.82459 14.3422 8.83912 13.7346L8.84495 13.5729C8.85162 13.3854 8.85995 13.2012 8.86995 12.9796C8.91162 12.0921 9.05162 11.4879 9.25745 10.9562C9.4672 10.3997 9.79597 9.89577 10.2208 9.47957C10.6367 9.05586 11.1401 8.72797 11.6958 8.51874C12.2275 8.3129 12.8316 8.1729 13.7191 8.13124C13.9408 8.12124 14.1258 8.1129 14.3125 8.10624L14.4741 8.10124C15.0818 8.08643 15.6896 8.08004 16.2975 8.08207L18.0108 8.08124ZM17.1541 12.2479C16.0491 12.2479 14.9892 12.6869 14.2078 13.4683C13.4264 14.2497 12.9875 15.3095 12.9875 16.4146C12.9875 17.5196 13.4264 18.5794 14.2078 19.3608C14.9892 20.1423 16.0491 20.5812 17.1541 20.5812C18.2592 20.5812 19.319 20.1423 20.1004 19.3608C20.8818 18.5794 21.3208 17.5196 21.3208 16.4146C21.3208 15.3095 20.8818 14.2497 20.1004 13.4683C19.319 12.6869 18.2592 12.2479 17.1541 12.2479ZM17.1541 13.9146C17.4824 13.9145 17.8075 13.9791 18.1109 14.1047C18.4142 14.2303 18.6898 14.4144 18.922 14.6465C19.1542 14.8786 19.3384 15.1542 19.4641 15.4575C19.5898 15.7608 19.6545 16.0858 19.6545 16.4142C19.6546 16.7425 19.59 17.0676 19.4644 17.3709C19.3388 17.6742 19.1547 17.9499 18.9226 18.182C18.6905 18.4142 18.4149 18.5984 18.1116 18.7241C17.8083 18.8498 17.4833 18.9145 17.155 18.9146C16.4919 18.9146 15.856 18.6512 15.3872 18.1823C14.9183 17.7135 14.655 17.0776 14.655 16.4146C14.655 15.7515 14.9183 15.1156 15.3872 14.6468C15.856 14.178 16.4919 13.9146 17.155 13.9146M21.53 10.9979C21.2537 10.9979 20.9887 11.1077 20.7934 11.303C20.598 11.4984 20.4883 11.7633 20.4883 12.0396C20.4883 12.3158 20.598 12.5808 20.7934 12.7761C20.9887 12.9715 21.2537 13.0812 21.53 13.0812C21.8062 13.0812 22.0712 12.9715 22.2665 12.7761C22.4619 12.5808 22.5716 12.3158 22.5716 12.0396C22.5716 11.7633 22.4619 11.4984 22.2665 11.303C22.0712 11.1077 21.8062 10.9979 21.53 10.9979Z" fill="#4C7EFB"/>
                    </svg>
                  </div>
                  <div className="flex justify-end items-center self-stretch">
                    <span className="text-stock4u-happy-blue text-[18px] font-normal">פייסבוק</span>
                    <div className="flex p-2 flex-col items-start gap-2.5">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2918 1.83148H2.68346C2.47682 1.83148 2.27863 1.91357 2.13251 2.05969C1.98639 2.20582 1.9043 2.404 1.9043 2.61065V15.219C1.9043 15.4256 1.98639 15.6238 2.13251 15.7699C2.27863 15.9161 2.47682 15.9981 2.68346 15.9981H9.4693V10.5086H7.62763V8.38357H9.4693V6.78982C9.43115 6.41564 9.47532 6.03766 9.59872 5.68236C9.72212 5.32707 9.92176 5.00308 10.1836 4.73311C10.4455 4.46314 10.7633 4.25373 11.1146 4.11957C11.466 3.98541 11.8425 3.92974 12.2176 3.95648C12.769 3.95268 13.32 3.98106 13.868 4.04148V5.95398H12.7418C11.8493 5.95398 11.6793 6.37898 11.6793 6.99523V8.36232H13.8043L13.528 10.4873H11.6793V15.9981H15.2918C15.3941 15.9981 15.4954 15.978 15.59 15.9388C15.6845 15.8997 15.7704 15.8423 15.8428 15.7699C15.9151 15.6976 15.9725 15.6117 16.0117 15.5172C16.0508 15.4226 16.071 15.3213 16.071 15.219V2.61065C16.071 2.50833 16.0508 2.40701 16.0117 2.31247C15.9725 2.21794 15.9151 2.13205 15.8428 2.05969C15.7704 1.98734 15.6845 1.92995 15.59 1.89079C15.4954 1.85164 15.3941 1.83148 15.2918 1.83148Z" fill="#4C7EFB"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical divider */}
              <svg width="2" height="153" viewBox="0 0 2 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.48828 0.985107V152.844" stroke="#4C7EFB"/>
              </svg>
            </div>

            {/* Contact Section */}
            <div className="flex items-center gap-6">
              <div className="flex w-[281px] flex-col items-end gap-5">
                <h3 className="text-[24px] font-extrabold text-stock4u-happy-blue hebrew-font">צרו קשר</h3>
                <div className="flex h-[105px] flex-col justify-between items-end self-stretch">
                  <div className="flex justify-end items-center self-stretch">
                    <span className="text-stock4u-happy-blue text-[18px] font-normal">support@stock4u.co.il</span>
                    <svg className="flex p-2 flex-col items-start gap-2.5" width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.4883 11.9498V21.4148C27.4883 22.18 27.196 22.9163 26.671 23.473C26.146 24.0298 25.4282 24.3649 24.6643 24.4098L24.4883 24.4148H10.4883C9.72307 24.4148 8.98677 24.1224 8.43002 23.5975C7.87327 23.0725 7.53817 22.3547 7.49328 21.5908L7.48828 21.4148V11.9498L16.9333 18.2468L17.0493 18.3128C17.186 18.3796 17.3361 18.4143 17.4883 18.4143C17.6404 18.4143 17.7906 18.3796 17.9273 18.3128L18.0433 18.2468L27.4883 11.9498Z" fill="#4C7EFB"/>
                      <path d="M24.4886 8.41479C25.5686 8.41479 26.5156 8.98479 27.0436 9.84179L17.4886 16.2118L7.93359 9.84179C8.18439 9.43462 8.52888 9.0933 8.93837 8.84628C9.34785 8.59927 9.81045 8.45373 10.2876 8.42179L10.4886 8.41479H24.4886Z" fill="#4C7EFB"/>
                    </svg>
                  </div>
                  <div className="flex justify-end items-center gap-[3px] self-stretch">
                    <span className="text-stock4u-happy-blue text-[18px] font-normal">03-12345678</span>
                    <svg className="flex p-1 items-center gap-2.5" width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7383 7.28979C10.7383 6.56045 11.028 5.86098 11.5437 5.34525C12.0595 4.82953 12.7589 4.53979 13.4883 4.53979H21.7383C22.4676 4.53979 23.1671 4.82953 23.6828 5.34525C24.1985 5.86098 24.4883 6.56045 24.4883 7.28979V23.7898C24.4883 24.5191 24.1985 25.2186 23.6828 25.7343C23.1671 26.2501 22.4676 26.5398 21.7383 26.5398H13.4883C12.7589 26.5398 12.0595 26.2501 11.5437 25.7343C11.028 25.2186 10.7383 24.5191 10.7383 23.7898V7.28979ZM18.9883 22.4148C18.9883 22.0501 18.8434 21.7004 18.5856 21.4425C18.3277 21.1847 17.978 21.0398 17.6133 21.0398C17.2486 21.0398 16.8989 21.1847 16.641 21.4425C16.3831 21.7004 16.2383 22.0501 16.2383 22.4148C16.2383 22.7795 16.3831 23.1292 16.641 23.3871C16.8989 23.6449 17.2486 23.7898 17.6133 23.7898C17.978 23.7898 18.3277 23.6449 18.5856 23.3871C18.8434 23.1292 18.9883 22.7795 18.9883 22.4148Z" fill="#4C7EFB"/>
                    </svg>
                  </div>
                  <div className="flex justify-end items-center self-stretch">
                    <span className="text-stock4u-happy-blue text-[18px] font-normal">כניסת בתי עסק - שותפים</span>
                    <svg className="flex p-2 items-center gap-2.5" width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.5403 8.66479H18.4363C17.5373 8.66479 16.7883 8.66479 16.1943 8.74479C15.5663 8.82879 14.9993 9.01479 14.5443 9.46979C14.0883 9.92579 13.9023 10.4928 13.8183 11.1198C13.7383 11.7148 13.7383 12.4648 13.7383 13.3628V13.4408C11.7173 13.5068 10.5033 13.7428 9.66028 14.5868C8.48828 15.7578 8.48828 17.6438 8.48828 21.4148C8.48828 25.1858 8.48828 27.0718 9.66028 28.2428C10.8323 29.4138 12.7173 29.4148 16.4883 29.4148H20.4883C24.2593 29.4148 26.1453 29.4148 27.3163 28.2428C28.4873 27.0708 28.4883 25.1858 28.4883 21.4148C28.4883 17.6438 28.4883 15.7578 27.3163 14.5868C26.4733 13.7428 25.2593 13.5068 23.2383 13.4408V13.3628C23.2383 12.4648 23.2383 11.7148 23.1583 11.1208C23.0743 10.4928 22.8883 9.92579 22.4323 9.47079C21.9773 9.01479 21.4103 8.82879 20.7823 8.74479C20.1883 8.66479 19.4383 8.66479 18.5403 8.66479ZM21.7383 13.4168V13.4148C21.7383 12.4508 21.7363 11.8028 21.6723 11.3198C21.6093 10.8588 21.5023 10.6608 21.3723 10.5308C21.2423 10.4008 21.0443 10.2938 20.5823 10.2308C20.1003 10.1668 19.4523 10.1648 18.4883 10.1648C17.5243 10.1648 16.8763 10.1668 16.3933 10.2318C15.9323 10.2938 15.7343 10.4008 15.6043 10.5318C15.4743 10.6628 15.3673 10.8588 15.3043 11.3198C15.2413 11.8028 15.2383 12.4508 15.2383 13.4148V13.4168C15.6296 13.4155 16.0463 13.4148 16.4883 13.4148H20.4883C20.9296 13.4148 21.3463 13.4155 21.7383 13.4168ZM23.4883 16.4148C23.4883 16.68 23.3829 16.9344 23.1954 17.1219C23.0079 17.3094 22.7535 17.4148 22.4883 17.4148C22.2231 17.4148 21.9687 17.3094 21.7812 17.1219C21.5936 16.9344 21.4883 16.68 21.4883 16.4148C21.4883 16.1496 21.5936 15.8952 21.7812 15.7077C21.9687 15.5202 22.2231 15.4148 22.4883 15.4148C22.7535 15.4148 23.0079 15.5202 23.1954 15.7077C23.3829 15.8952 23.4883 16.1496 23.4883 16.4148ZM14.4883 17.4148C14.7535 17.4148 15.0079 17.3094 15.1954 17.1219C15.3829 16.9344 15.4883 16.68 15.4883 16.4148C15.4883 16.1496 15.3829 15.8952 15.1954 15.7077C15.0079 15.5202 14.7535 15.4148 14.4883 15.4148C14.2231 15.4148 13.9687 15.5202 13.7812 15.7077C13.5936 15.8952 13.4883 16.1496 13.4883 16.4148C13.4883 16.68 13.5936 16.9344 13.7812 17.1219C13.9687 17.3094 14.2231 17.4148 14.4883 17.4148Z" fill="#4C7EFB"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Vertical divider */}
              <svg width="2" height="153" viewBox="0 0 2 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.48828 0.985107V152.844" stroke="#4C7EFB"/>
              </svg>
            </div>

            {/* Legal Info Section */}
            <div className="flex items-center gap-6">
              <div className="flex w-[280px] flex-col items-end gap-5">
                <h3 className="text-[24px] font-extrabold text-stock4u-happy-blue hebrew-font">מידע משפטי</h3>
                <div className="flex h-[105px] flex-col justify-between items-end self-stretch">
                  <div className="text-stock4u-happy-blue text-[18px] font-normal self-stretch text-right">ת��אי שימו��</div>
                  <div className="text-stock4u-happy-blue text-[18px] font-normal self-stretch text-right">מדיניות ��רטיות</div>
                  <div className="text-stock4u-happy-blue text-[18px] font-normal self-stretch text-right">מדיניות החזרים</div>
                </div>
              </div>

              {/* Vertical divider */}
              <svg width="2" height="153" viewBox="0 0 2 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.985107V152.844" stroke="#4C7EFB"/>
              </svg>
            </div>

            {/* Additional Pages Section */}
            <div className="flex items-center gap-6">
              <div className="flex w-[280px] flex-col items-end gap-5">
                <h3 className="text-[24px] font-extrabold text-stock4u-happy-blue hebrew-font">עמודים נוספים</h3>
                <div className="flex h-[105px] flex-col justify-between items-end self-stretch">
                  <div className="text-stock4u-happy-blue text-[18px] font-normal self-stretch text-right">אודות</div>
                  <div className="text-stock4u-happy-blue text-[18px] font-normal self-stretch text-right">קריירה</div>
                  <div className="text-stock4u-happy-blue text-[18px] font-normal self-stretch text-right">שאלות תשובות</div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo with legs (feet) positioned at the bottom left */}
          <div className="absolute left-0 bottom-[-80px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2Ff8d99751b7594886b74fb57ea2e3b3a9?format=webp&width=800"
              alt="Stock4U Feet"
              className="w-[160px] h-[253px]"
              style={{ filter: 'drop-shadow(7.945px 6.179px 0 rgba(0,0,0,0.15))' }}
            />
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  );
}
