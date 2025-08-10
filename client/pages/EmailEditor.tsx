export default function EmailEditor() {
  return (
    <div 
      className="relative w-full min-h-screen bg-stock4u-pop-yellow overflow-hidden hebrew-font" 
      dir="rtl"
    >
      {/* Header Bar */}
      <div className="relative z-20 w-full h-24 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between h-full px-8">
          {/* Left Side - Cart & Exit */}
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-stock4u-happy-blue rounded-full flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 25 25" fill="none" className="text-white">
                <path d="M19.9003 10.3121H5.30426C5.00888 10.3124 4.71739 10.3795 4.45158 10.5083C4.18577 10.6372 3.95252 10.8244 3.76926 11.0561C3.58676 11.2871 3.45924 11.5566 3.39635 11.8442C3.33345 12.1318 3.33684 12.43 3.40626 12.7161L4.97126 19.1241C5.19785 19.9497 5.68982 20.6778 6.37126 21.1961C7.05326 21.7151 7.88826 21.9961 8.74726 21.9961H16.4553C17.3143 21.9961 18.1493 21.7151 18.8313 21.1961C19.5127 20.6778 20.0047 19.9497 20.2313 19.1241L21.7963 12.7171C21.9016 12.2851 21.8554 11.8301 21.6653 11.4282C21.4753 11.0262 21.1529 10.7018 20.7523 10.5091C20.4857 10.3811 20.194 10.3138 19.8983 10.3121M8.68926 14.2061V18.1011M12.6023 14.2061V18.1011M16.5153 14.2061V18.1011M19.4503 10.3121C19.4499 9.41614 19.2725 8.52909 18.9283 7.70191C18.584 6.87473 18.0797 6.12374 17.4443 5.4921C16.1577 4.21259 14.4167 3.4949 12.6023 3.4961C10.7878 3.4949 9.04678 4.21259 7.76026 5.4921C7.12502 6.12383 6.62088 6.87485 6.2768 7.70203C5.93271 8.5292 5.75547 9.41621 5.75526 10.3121" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="bg-stock4u-light-blue px-6 py-3 rounded-full">
              <span className="text-stock4u-happy-blue font-bold text-lg">יציאה</span>
            </div>
          </div>

          {/* Right Side - Navigation */}
          <div className="flex items-center gap-8 text-stock4u-happy-blue text-lg">
            <span className="hover:opacity-75 cursor-pointer">חיפוש</span>
            <span className="hover:opacity-75 cursor-pointer">קריירה</span>
            <span className="hover:opacity-75 cursor-pointer">רשימת מתנות</span>
            <span className="hover:opacity-75 cursor-pointer">אודות</span>
            <span className="hover:opacity-75 cursor-pointer">בית</span>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background pattern */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7a0ce1897b9a92990f9d99cb40666973ee6b2c50?width=4258" 
          alt="" 
          className="absolute -left-24 -top-52 w-[2129px] h-[1344px] object-cover"
        />

        {/* Currency Icons */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d9447e75e5d16d7acc5746e890a7a72b4bd81d99?width=237" 
          alt="" 
          className="absolute top-12 left-24 w-30 h-26 transform rotate-12 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/2efe6eb9b70a58fa7373e5a9fb7b68f2d1d1d874?width=242" 
          alt="" 
          className="absolute top-24 right-1/4 w-30 h-34 transform rotate-22 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/ffca60c468d25941ee9b92bce5e31209e962f31a?width=242" 
          alt="" 
          className="absolute top-8 right-12 w-30 h-34 transform rotate-48 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c836a7e3297767a1a2a077583f0ba0aabec15ba7?width=241" 
          alt="" 
          className="absolute left-8 top-80 w-30 h-31 transform -rotate-13 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/8f94da977ef118a23bf574ec64cc893002c31558?width=241" 
          alt="" 
          className="absolute right-12 bottom-48 w-30 h-31 transform -rotate-13 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/4449bd5e283a9206d15ddfce91fa026cc5b793b6?width=243" 
          alt="" 
          className="absolute right-32 top-64 w-31 h-38 transform -rotate-33 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/dc30876d4e45ff347666118bde718b5cf5c9ffb0?width=175" 
          alt="" 
          className="absolute right-1/3 top-12 w-22 h-36 transform rotate-19 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a70d9027dcb8137595aae5c3f6f8bb37597cbfdd?width=175" 
          alt="" 
          className="absolute left-72 bottom-32 w-22 h-36 transform rotate-0 drop-shadow-lg"
        />

        {/* Star decorations */}
        <svg className="absolute right-80 top-24 w-12 h-14 text-stock4u-pop-red drop-shadow-lg" viewBox="0 0 112 127" fill="none">
          <path d="M47.1692 51.8867L53.682 31.4268L59.0076 50.3659L75.0013 45.0234L63.129 59.8355L74.1024 73.1551L59.0076 69.3051L52.5117 87.662L46.5756 68.7115L33.5612 74.6307L42.7538 61.6107L29.1289 44.752L47.1692 51.8867Z" fill="currentColor" stroke="white" strokeWidth="9"/>
        </svg>
        
        <svg className="absolute left-16 bottom-24 w-12 h-14 text-stock4u-pop-red drop-shadow-lg" viewBox="0 0 111 127" fill="none">
          <path d="M46.9524 52.6367L53.4652 32.1768L58.7908 51.1159L74.7845 45.7734L62.9122 60.5855L73.8856 73.9051L58.7908 70.0551L52.2949 88.412L46.3588 69.4615L33.3444 75.3807L42.537 62.3607L28.9121 45.502L46.9524 52.6367Z" fill="currentColor" stroke="white" strokeWidth="9"/>
        </svg>

        <svg className="absolute right-1/3 bottom-12 w-28 h-34 text-stock4u-pop-red drop-shadow-lg" viewBox="0 0 175 206" fill="none">
          <path d="M71.9742 80.8029L87.6182 31.6572L100.411 77.15L138.828 64.3169L110.31 99.8963L136.669 131.891L100.411 122.643L84.8072 166.737L70.5483 121.217L39.2873 135.435L61.3682 104.16L28.6406 63.6651L71.9742 80.8029Z" fill="currentColor" stroke="white" strokeWidth="9"/>
        </svg>

        <svg className="absolute right-48 bottom-64 w-16 h-16 text-stock4u-pop-yellow drop-shadow-lg" viewBox="0 0 101 104" fill="none">
          <path d="M43.8715 12.3215C43.7246 11.8442 43.0344 11.8735 42.9463 12.3655C41.8008 18.438 38.2175 36.9125 37.1968 36.9125C35.9779 36.9125 9.92567 45.8634 12.3708 46.2746C14.816 46.6784 37.1968 50.3425 37.1968 50.3425C37.1968 50.3425 45.7439 79.6476 44.9288 78.4287L51.4419 51.9726L75.6071 44.3214C76.055 44.1745 76.0403 43.5357 75.585 43.4035L51.8457 36.0975L43.8715 12.3215Z" fill="currentColor" stroke="white" strokeWidth="11.689"/>
        </svg>

        <svg className="absolute left-72 top-80 w-35 h-37 text-stock4u-pop-yellow drop-shadow-lg" viewBox="0 0 177 183" fill="none">
          <path d="M81.7772 12.4975C81.4545 11.4487 79.9378 11.5133 79.7442 12.5943C77.2272 25.9378 69.3534 66.5331 67.1106 66.5331C64.4322 66.5331 7.18584 86.2014 12.5587 87.105C17.9316 87.9924 67.1106 96.0437 67.1106 96.0437C67.1106 96.0437 85.8916 160.438 84.1006 157.759L98.4122 99.6256L151.512 82.8131C152.496 82.4904 152.464 81.0867 151.464 80.7963L99.2996 64.7421L81.7772 12.4975Z" fill="currentColor" stroke="white" strokeWidth="11.689"/>
        </svg>

        {/* 3D currency symbols */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a7304a2766381e931e35d83124bab474727fa9f3?width=335" 
          alt="" 
          className="absolute right-1/4 top-72 w-42 h-42 transform rotate-21 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/650efdca367c7620a9484f97f351d434be96470b?width=340" 
          alt="" 
          className="absolute left-1/3 bottom-80 w-42 h-42 transform -rotate-176 drop-shadow-lg"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/637edfefd1c11e22f05f22ca05071c44e431aa66?width=341" 
          alt="" 
          className="absolute left-96 top-20 w-43 h-42 drop-shadow-lg"
        />

        {/* Stock4U Mascot */}
        <div className="absolute left-20 top-28">
          <div className="relative w-55 h-87 drop-shadow-xl">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/bc95305a408a0a10cdd090884c0f2965277b826e?width=340" 
              alt="Stock4U Mascot" 
              className="w-42 h-60 absolute left-3 top-0"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/988f9f10d61d5bc113bb788429b166aa50308073?width=434" 
              alt="" 
              className="w-54 h-42 absolute left-1 bottom-0"
            />
          </div>
        </div>

        {/* Special gift shape */}
        <svg className="absolute right-1/3 top-20 w-26 h-31 transform -rotate-8" viewBox="0 0 121 140" fill="none">
          <path opacity="0.2" d="M108.563 50.6977C106.027 45.1443 101.507 41.499 94.8496 39.7071C96.5785 31.8934 95.3729 27.4654 93.78 24.1438C91.2834 18.9219 86.5934 15.3014 80.9356 14.2208C75.5839 13.1918 67.7214 13.9647 62.0723 14.7899C35.3923 18.6875 29.1784 27.5803 26.8141 33.9458C26.7793 34.0376 23.3666 43.4458 20.591 53.5894C19.116 58.987 17.2852 65.708 17.2013 71.9908C17.0274 84.7788 24.3213 89.6081 28.6886 91.3492C30.9289 92.2452 33.8296 93.1122 39.98 93.0806C36.4764 111.296 36.121 120.797 42.454 127.819C46.3266 132.108 52.0414 134.172 57.7565 133.337C59.8973 133.024 61.9614 132.318 63.9044 131.245C66.3546 129.885 72.8494 126.278 92.0002 96.4233C96.8717 88.8247 101.2 81.527 104.169 75.8727C108.81 67.0266 112.352 59.0345 108.564 50.707L108.563 50.6977Z" fill="#1B1919"/>
          <path d="M99.3108 43.8138C96.7753 38.2604 92.2551 34.6152 85.5976 32.8234C87.3265 25.0096 86.1209 20.5814 84.528 17.2599C82.0314 12.038 77.3414 8.41754 71.6836 7.33691C66.3319 6.30787 58.4694 7.0809 52.8203 7.90615C26.1404 11.8037 19.9264 20.6964 17.5621 27.0619C17.5274 27.1537 14.1146 36.562 11.339 46.7056C9.864 52.1032 8.03325 58.8241 7.94933 65.1069C7.77545 77.8949 15.0693 82.7242 19.4366 84.4653C21.6769 85.3613 24.5777 86.2283 30.728 86.1967C27.2245 104.412 26.869 113.914 33.202 120.935C37.0746 125.224 42.7894 127.288 48.5045 126.453C50.6453 126.14 52.7094 125.434 54.6524 124.361C57.1026 123.001 63.5975 119.394 82.7482 89.5394C87.6198 81.9408 91.9477 74.6431 94.9167 68.9887C99.5578 60.1427 103.1 52.1507 99.3121 43.8232L99.3108 43.8138Z" fill="white"/>
          <path d="M32.8728 32.6946C32.1618 34.619 20.6182 67.3593 25.4781 69.3078C30.338 71.2563 51.5599 67.6456 51.5599 67.6456C51.5599 67.6456 39.8287 113.937 46.742 110.095C53.6459 106.255 86.6986 55.452 84.474 50.5756C82.2494 45.6993 61.5451 48.8973 61.5451 48.8973C61.5451 48.8973 74.4872 24.477 68.6095 23.3418C62.7223 22.2079 35.4081 25.8514 32.8728 32.6946Z" fill="#FFC547"/>
        </svg>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white rounded-[34px] p-8 shadow-2xl max-w-4xl w-full mx-auto mt-12 mb-12">
          <div className="text-center space-y-6">
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-stock4u-pop-red text-4xl font-bold">
                איזה כיף!
              </h1>
              <h2 className="text-stock4u-pop-red text-6xl font-bold">
                קיבלת מתנה!
              </h2>
            </div>

            {/* Sender Info */}
            <div className="text-stock4u-happy-blue text-2xl font-normal">
              ממי המתנה? United כמובן!
            </div>

            {/* Logo Section */}
            <div className="flex justify-center py-6">
              <div className="bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-sm">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/378ddfe0d1afad1c8baf4e915e3a1587e200b3b8?width=1105" 
                  alt="United Logo" 
                  className="h-24 object-contain"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center">
              <button className="bg-stock4u-happy-blue text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-blue-600 transition-colors">
                לצפייה במתנה
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-gray-100 bg-opacity-40 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-stock4u-dark-grey text-5xl font-bold mb-2">24+</div>
            <div className="text-stock4u-grey text-lg">מדינות שבהם אנו עובדים</div>
          </div>
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-stock4u-dark-grey text-5xl font-bold mb-2">17M</div>
            <div className="text-stock4u-grey text-lg">אנשים שהאמינו בנו</div>
          </div>
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-stock4u-dark-grey text-5xl font-bold mb-2">+95%</div>
            <div className="text-stock4u-grey text-lg">לקוחות מרוצים</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-stock4u-light-blue py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Social Media */}
            <div className="text-right">
              <h3 className="text-stock4u-happy-blue text-2xl font-bold mb-5">אנחנו ברשתות</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-end gap-3">
                  <span className="text-stock4u-happy-blue">טיקטוק</span>
                  <svg className="w-8 h-8 text-stock4u-happy-blue" viewBox="0 0 32 35" fill="none">
                    <path d="M20.7486 10.903C20.0652 10.1225 19.6885 9.12041 19.6886 8.08301H16.5986V20.483C16.5753 21.1542 16.2921 21.7901 15.8089 22.2565C15.3257 22.7229 14.6802 22.9834 14.0086 22.983C12.5886 22.983 11.4086 21.823 11.4086 20.383C11.4086 18.663 13.0686 17.373 14.7786 17.903V14.743C11.3286 14.283 8.30859 16.963 8.30859 20.383C8.30859 23.713 11.0686 26.083 13.9986 26.083C17.1386 26.083 19.6886 23.533 19.6886 20.383V14.093C20.9416 14.9929 22.446 15.4757 23.9886 15.473V12.383C23.9886 12.383 22.1086 12.473 20.7486 10.903Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-stock4u-happy-blue">אינסטגרם</span>
                  <svg className="w-8 h-8 text-stock4u-happy-blue" viewBox="0 0 33 34" fill="none">
                    <path d="M17.5108 8.74902C18.4483 8.75152 18.9241 8.75652 19.335 8.76819L19.4966 8.77402C19.6833 8.78069 19.8675 8.78902 20.09 8.79902C20.9766 8.84069 21.5816 8.98069 22.1125 9.18652C22.6625 9.39819 23.1258 9.68486 23.5891 10.1474C24.013 10.5638 24.3409 11.0678 24.55 11.624C24.7558 12.1549 24.8958 12.7599 24.9375 13.6474C24.9475 13.869 24.9558 14.0532 24.9625 14.2407L24.9675 14.4024C24.98 14.8124 24.985 15.2882 24.9866 16.2257L24.9875 16.8474V17.939C24.9895 18.5469 24.9831 19.1547 24.9683 19.7624L24.9633 19.924C24.9566 20.1115 24.9483 20.2957 24.9383 20.5174C24.8966 21.4049 24.755 22.009 24.55 22.5407C24.3409 23.097 24.013 23.6009 23.5891 24.0174C23.1727 24.4413 22.6687 24.7692 22.1125 24.9782C21.5816 25.184 20.9766 25.324 20.09 25.3657L19.4966 25.3907L19.335 25.3957C18.9241 25.4074 18.4483 25.4132 17.5108 25.4149L16.8891 25.4157H15.7983C15.1902 25.4178 14.5821 25.4114 13.9741 25.3965L13.8125 25.3915C13.6146 25.384 13.4168 25.3754 13.2191 25.3657C12.3325 25.324 11.7275 25.184 11.1958 24.9782C10.6398 24.7691 10.1362 24.4412 9.71995 24.0174C9.29574 23.601 8.96754 23.097 8.75829 22.5407C8.55245 22.0099 8.41245 21.4049 8.37079 20.5174L8.34579 19.924L8.34162 19.7624C8.32626 19.1547 8.31931 18.5469 8.32079 17.939V16.2257C8.31848 15.6179 8.32459 15.01 8.33912 14.4024L8.34495 14.2407C8.35162 14.0532 8.35995 13.869 8.36995 13.6474C8.41162 12.7599 8.55162 12.1557 8.75745 11.624C8.9672 11.0675 9.29597 10.5636 9.72079 10.1474C10.1367 9.72365 10.6401 9.39575 11.1958 9.18652C11.7275 8.98069 12.3316 8.84069 13.2191 8.79902C13.4408 8.78902 13.6258 8.78069 13.8125 8.77402L13.9741 8.76902C14.5818 8.75422 15.1896 8.74783 15.7975 8.74986L17.5108 8.74902ZM16.6541 12.9157C15.5491 12.9157 14.4892 13.3547 13.7078 14.1361C12.9264 14.9175 12.4875 15.9773 12.4875 17.0824C12.4875 18.1874 12.9264 19.2472 13.7078 20.0286C14.4892 20.81 15.5491 21.249 16.6541 21.249C17.7592 21.249 18.819 20.81 19.6004 20.0286C20.3818 19.2472 20.8208 18.1874 20.8208 17.0824C20.8208 15.9773 20.3818 14.9175 19.6004 14.1361C18.819 13.3547 17.7592 12.9157 16.6541 12.9157ZM16.6541 14.5824C16.9824 14.5823 17.3075 14.6469 17.6109 14.7725C17.9142 14.8981 18.1898 15.0822 18.422 15.3143C18.6542 15.5464 18.8384 15.822 18.9641 16.1253C19.0898 16.4286 19.1545 16.7536 19.1545 17.0819C19.1546 17.4102 19.09 17.7353 18.9644 18.0387C18.8388 18.342 18.6547 18.6176 18.4226 18.8498C18.1905 19.082 17.9149 19.2662 17.6116 19.3919C17.3083 19.5176 16.9833 19.5823 16.655 19.5824C15.9919 19.5824 15.356 19.319 14.8872 18.8501C14.4183 18.3813 14.155 17.7454 14.155 17.0824C14.155 16.4193 14.4183 15.7834 14.8872 15.3146C15.356 14.8457 15.9919 14.5824 16.655 14.5824M21.03 11.6657C20.7537 11.6657 20.4887 11.7754 20.2934 11.9708C20.098 12.1661 19.9883 12.4311 19.9883 12.7074C19.9883 12.9836 20.098 13.2486 20.2934 13.4439C20.4887 13.6393 20.7537 13.749 21.03 13.749C21.3062 13.749 21.5712 13.6393 21.7665 13.4439C21.9619 13.2486 22.0716 12.9836 22.0716 12.7074C22.0716 12.4311 21.9619 12.1661 21.7665 11.9708C21.5712 11.7754 21.3062 11.6657 21.03 11.6657Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-stock4u-happy-blue">פייסבוק</span>
                  <svg className="w-8 h-8 text-stock4u-happy-blue" viewBox="0 0 18 18" fill="none">
                    <path d="M15.7918 1.5H3.18346C2.97682 1.5 2.77863 1.58209 2.63251 1.72821C2.48639 1.87433 2.4043 2.07252 2.4043 2.27917V14.8875C2.4043 15.0941 2.48639 15.2923 2.63251 15.4385C2.77863 15.5846 2.97682 15.6667 3.18346 15.6667H9.9693V10.1771H8.12763V8.05208H9.9693V6.45833C9.93115 6.08416 9.97532 5.70617 10.0987 5.35088C10.2221 4.99559 10.4218 4.67159 10.6836 4.40162C10.9455 4.13165 11.2633 3.92225 11.6146 3.78809C11.966 3.65392 12.3425 3.59826 12.7176 3.625C13.269 3.62119 13.82 3.64958 14.368 3.71V5.6225H13.2418C12.3493 5.6225 12.1793 6.0475 12.1793 6.66375V8.03083H14.3043L14.028 10.1558H12.1793V15.6667H15.7918C15.8941 15.6667 15.9954 15.6465 16.09 15.6074C16.1845 15.5682 16.2704 15.5108 16.3428 15.4385C16.4151 15.3661 16.4725 15.2802 16.5117 15.1857C16.5508 15.0911 16.571 14.9898 16.571 14.8875V2.27917C16.571 2.17685 16.5508 2.07553 16.5117 1.98099C16.4725 1.88646 16.4151 1.80057 16.3428 1.72821C16.2704 1.65586 16.1845 1.59847 16.09 1.55931C15.9954 1.52015 15.8941 1.5 15.7918 1.5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-right">
              <h3 className="text-stock4u-happy-blue text-2xl font-bold mb-5">צרו קשר</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-end gap-3">
                  <span className="text-stock4u-happy-blue">support@stock4u.co.il</span>
                  <svg className="w-8 h-8 text-stock4u-happy-blue" viewBox="0 0 35 33" fill="none">
                    <path d="M27.9883 11.6182V21.0832C27.9883 21.8484 27.696 22.5847 27.171 23.1414C26.646 23.6982 25.9282 24.0333 25.1643 24.0782L24.9883 24.0832H10.9883C10.2231 24.0832 9.48677 23.7908 8.93002 23.2659C8.37327 22.7409 8.03817 22.0231 7.99328 21.2592L7.98828 21.0832V11.6182L17.4333 17.9152L17.5493 17.9812C17.686 18.048 17.8361 18.0827 17.9883 18.0827C18.1404 18.0827 18.2906 18.048 18.4273 17.9812L18.5433 17.9152L27.9883 11.6182Z" fill="currentColor"/>
                    <path d="M24.9886 8.08301C26.0686 8.08301 27.0156 8.65301 27.5436 9.51001L17.9886 15.88L8.43359 9.51001C8.68439 9.10283 9.02888 8.76151 9.43837 8.5145C9.84785 8.26749 10.3104 8.12195 10.7876 8.09001L10.9886 8.08301H24.9886Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-stock4u-happy-blue">03-12345678</span>
                  <svg className="w-8 h-8 text-stock4u-happy-blue" viewBox="0 0 34 31" fill="none">
                    <path d="M10.2383 6.95801C10.2383 6.22866 10.528 5.52919 11.0437 5.01346C11.5595 4.49774 12.2589 4.20801 12.9883 4.20801H21.2383C21.9676 4.20801 22.6671 4.49774 23.1828 5.01346C23.6985 5.52919 23.9883 6.22866 23.9883 6.95801V23.458C23.9883 24.1874 23.6985 24.8868 23.1828 25.4026C22.6671 25.9183 21.9676 26.208 21.2383 26.208H12.9883C12.2589 26.208 11.5595 25.9183 11.0437 25.4026C10.528 24.8868 10.2383 24.1874 10.2383 23.458V6.95801ZM18.4883 22.083C18.4883 21.7183 18.3434 21.3686 18.0856 21.1107C17.8277 20.8529 17.478 20.708 17.1133 20.708C16.7486 20.708 16.3989 20.8529 16.141 21.1107C15.8831 21.3686 15.7383 21.7183 15.7383 22.083C15.7383 22.4477 15.8831 22.7974 16.141 23.0553C16.3989 23.3131 16.7486 23.458 17.1133 23.458C17.478 23.458 17.8277 23.3131 18.0856 23.0553C18.3434 22.7974 18.4883 22.4477 18.4883 22.083Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-stock4u-happy-blue">כניסת בתי עסק - שותפים</span>
                  <svg className="w-9 h-9 text-stock4u-happy-blue" viewBox="0 0 37 38" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0403 8.33301H18.9363C18.0373 8.33301 17.2883 8.33301 16.6943 8.41301C16.0663 8.49701 15.4993 8.68301 15.0443 9.13801C14.5883 9.59401 14.4023 10.161 14.3183 10.788C14.2383 11.383 14.2383 12.133 14.2383 13.031V13.109C12.2173 13.175 11.0033 13.411 10.1603 14.255C8.98828 15.426 8.98828 17.312 8.98828 21.083C8.98828 24.854 8.98828 26.74 10.1603 27.911C11.3323 29.082 13.2173 29.083 16.9883 29.083H20.9883C24.7593 29.083 26.6453 29.083 27.8163 27.911C28.9873 26.739 28.9883 24.854 28.9883 21.083C28.9883 17.312 28.9883 15.426 27.8163 14.255C26.9733 13.411 25.7593 13.175 23.7383 13.109V13.031C23.7383 12.133 23.7383 11.383 23.6583 10.789C23.5743 10.161 23.3883 9.59401 22.9323 9.13901C22.4773 8.68301 21.9103 8.49701 21.2823 8.41301C20.6883 8.33301 19.9383 8.33301 19.0403 8.33301ZM22.2383 13.085V13.083C22.2383 12.119 22.2363 11.471 22.1723 10.988C22.1093 10.527 22.0023 10.329 21.8723 10.199C21.7423 10.069 21.5443 9.96201 21.0823 9.89901C20.6003 9.83501 19.9523 9.83301 18.9883 9.83301C18.0243 9.83301 17.3763 9.83501 16.8933 9.90001C16.4323 9.96201 16.2343 10.069 16.1043 10.2C15.9743 10.331 15.8673 10.527 15.8043 10.988C15.7413 11.471 15.7383 12.119 15.7383 13.083V13.085C16.1296 13.0837 16.5463 13.083 16.9883 13.083H20.9883C21.4296 13.083 21.8463 13.0837 22.2383 13.085ZM23.9883 16.083C23.9883 16.3482 23.8829 16.6026 23.6954 16.7901C23.5079 16.9777 23.2535 17.083 22.9883 17.083C22.7231 17.083 22.4687 16.9777 22.2812 16.7901C22.0936 16.6026 21.9883 16.3482 21.9883 16.083C21.9883 15.8178 22.0936 15.5634 22.2812 15.3759C22.4687 15.1884 22.7231 15.083 22.9883 15.083C23.2535 15.083 23.5079 15.1884 23.6954 15.3759C23.8829 15.5634 23.9883 15.8178 23.9883 16.083ZM14.9883 17.083C15.2535 17.083 15.5079 16.9777 15.6954 16.7901C15.8829 16.6026 15.9883 16.3482 15.9883 16.083C15.9883 15.8178 15.8829 15.5634 15.6954 15.3759C15.5079 15.1884 15.2535 15.083 14.9883 15.083C14.7231 15.083 14.4687 15.1884 14.2812 15.3759C14.0936 15.5634 13.9883 15.8178 13.9883 16.083C13.9883 16.3482 14.0936 16.6026 14.2812 16.7901C14.4687 16.9777 14.7231 17.083 14.9883 17.083Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="text-right">
              <h3 className="text-stock4u-happy-blue text-2xl font-bold mb-5">מידע משפטי</h3>
              <div className="space-y-4">
                <div className="text-stock4u-happy-blue">תנאי שימוש</div>
                <div className="text-stock4u-happy-blue">מדיניות פרטיות</div>
                <div className="text-stock4u-happy-blue">מדיניות החזרים</div>
              </div>
            </div>

            {/* Additional Pages */}
            <div className="text-right">
              <h3 className="text-stock4u-happy-blue text-2xl font-bold mb-5">עמודים נוספים</h3>
              <div className="space-y-4">
                <div className="text-stock4u-happy-blue">אודות</div>
                <div className="text-stock4u-happy-blue">קריירה</div>
                <div className="text-stock4u-happy-blue">שאלות תשובות</div>
              </div>
            </div>
          </div>

          {/* Stock4U Logo */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="text-stock4u-happy-blue text-4xl font-bold">STOCK4U</div>
              <div className="w-32 h-40 relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c6f4ef138fe2fcff4c861a628f2808355b08ca4e?width=247" 
                  alt="Stock4U Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Navigation Logo */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b4b3197717142c54d34f612cc618c552d7d121d6?width=562" 
          alt="Stock4U Navigation" 
          className="h-16 object-contain"
        />
      </div>
    </div>
  );
}
