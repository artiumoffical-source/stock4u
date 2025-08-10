// EmailEditor component with dynamic gift information
interface GiftData {
  senderName: string;
  senderMessage?: string;
  companyLogo?: string;
  hasLogo: boolean;
}

// This would normally come from props/API, but for demo purposes:
const giftData: GiftData = {
  senderName: "חברת הייטק גלובל",
  senderMessage: "תודה על העבודה המצוינת השנה! אנו מעריכים את מחויבותכם ומקצועיותכם.",
  companyLogo: "https://api.builder.io/api/v1/image/assets/TEMP/378ddfe0d1afad1c8baf4e915e3a1587e200b3b8?width=1105",
  hasLogo: true
};

export default function EmailEditor() {
  return (
    <div className="relative w-full bg-white hebrew-font" dir="rtl">
      {/* Header Section - 100px height exactly */}
      <header className="relative z-20 w-full h-[100px] bg-white border-b border-[#DDD] shadow-sm">
        <div className="flex items-center justify-between h-full px-8 max-w-[1920px] mx-auto">
          {/* Left side - Cart & Exit */}
          <div className="flex items-center gap-5">
            {/* Cart Icon */}
            <div className="relative w-12 h-12">
              <div className="w-12 h-12 bg-stock4u-happy-blue rounded-full shadow-[10px_10px_0_0_rgba(0,0,0,0.10)] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 25 25" fill="none">
                  <path d="M19.9003 10.3121H5.30426C5.00888 10.3124 4.71739 10.3795 4.45158 10.5083C4.18577 10.6372 3.95252 10.8244 3.76926 11.0561C3.58676 11.2871 3.45924 11.5566 3.39635 11.8442C3.33345 12.1318 3.33684 12.43 3.40626 12.7161L4.97126 19.1241C5.19785 19.9497 5.68982 20.6778 6.37126 21.1961C7.05326 21.7151 7.88826 21.9961 8.74726 21.9961H16.4553C17.3143 21.9961 18.1493 21.7151 18.8313 21.1961C19.5127 20.6778 20.0047 19.9497 20.2313 19.1241L21.7963 12.7171C21.9016 12.2851 21.8554 11.8301 21.6653 11.4282C21.4753 11.0262 21.1529 10.7018 20.7523 10.5091C20.4857 10.3811 20.194 10.3138 19.8983 10.3121M8.68926 14.2061V18.1011M12.6023 14.2061V18.1011M16.5153 14.2061V18.1011M19.4503 10.3121C19.4499 9.41614 19.2725 8.52909 18.9283 7.70191C18.584 6.87473 18.0797 6.12374 17.4443 5.4921C16.1577 4.21259 14.4167 3.4949 12.6023 3.4961C10.7878 3.4949 9.04678 4.21259 7.76026 5.4921C7.12502 6.12383 6.62088 6.87485 6.2768 7.70203C5.93271 8.5292 5.75547 9.41621 5.75526 10.3121" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            {/* Exit Button */}
            <div className="flex items-center justify-center px-4 py-3 bg-stock4u-light-blue rounded-full">
              <span className="text-stock4u-happy-blue font-bold text-lg">יציאה</span>
            </div>
          </div>

          {/* Center - Stock4U Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b4b3197717142c54d34f612cc618c552d7d121d6?width=562" 
              alt="Stock4U Logo" 
              className="h-16 object-contain"
            />
          </div>

          {/* Right side - Navigation */}
          <nav className="flex items-center gap-6 text-stock4u-happy-blue text-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 23 22" fill="none">
                <path d="M20.5659 18.2617L16.1504 14.047C17.4096 12.6648 18.0573 10.8699 17.9571 9.04073C17.8569 7.21155 17.0166 5.49097 15.6133 4.24167C14.21 2.99237 12.3534 2.31195 10.4347 2.34385C8.51614 2.37574 6.68546 3.11746 5.3286 4.41265C3.97173 5.70784 3.1947 7.45531 3.16128 9.2867C3.12786 11.1181 3.84068 12.8903 5.14947 14.2298C6.45827 15.5693 8.26078 16.3715 10.1771 16.4671C12.0933 16.5628 13.9737 15.9445 15.4217 14.7426L19.8371 18.9573C19.9349 19.0443 20.0642 19.0916 20.1978 19.0894C20.3313 19.0871 20.4588 19.0355 20.5533 18.9453C20.6477 18.8551 20.7018 18.7334 20.7042 18.6059C20.7066 18.4784 20.657 18.355 20.5659 18.2617ZM4.21715 9.42203C4.21715 8.22144 4.59012 7.0478 5.28889 6.04955C5.98767 5.05129 6.98087 4.27324 8.14289 3.81379C9.30492 3.35435 10.5836 3.23413 11.8172 3.46836C13.0508 3.70258 14.1839 4.28072 15.0733 5.12967C15.9627 5.97862 16.5683 7.06025 16.8137 8.23777C17.0591 9.4153 16.9331 10.6358 16.4518 11.745C15.9705 12.8542 15.1554 13.8023 14.1096 14.4693C13.0638 15.1363 11.8343 15.4923 10.5765 15.4923C8.89054 15.4904 7.2742 14.8502 6.08203 13.7122C4.88985 12.5743 4.21919 11.0314 4.21715 9.42203Z" fill="currentColor"/>
              </svg>
              <span>חיפוש</span>
            </div>
            <span className="hover:opacity-75 cursor-pointer">קריירה</span>
            <span className="hover:opacity-75 cursor-pointer">רשימת מתנות</span>
            <span className="hover:opacity-75 cursor-pointer">אודות</span>
            <span className="hover:opacity-75 cursor-pointer">בית</span>
          </nav>
        </div>
      </header>

      {/* Main Yellow Background Section */}
      <main className="relative w-full bg-[#FFC547] overflow-hidden" style={{ minHeight: '900px' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7a0ce1897b9a92990f9d99cb40666973ee6b2c50?width=4258" 
            alt="Background Pattern" 
            className="absolute -left-24 -top-64 w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Decorative Currency Icons - Positioned exactly like Figma */}
        <div className="absolute inset-0">
          {/* Currency Icons בדיוק לפי הפיגמה */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d9447e75e5d16d7acc5746e890a7a72b4bd81d99?width=237"
            alt="Currency"
            className="absolute left-24 top-12 w-28 h-24 transform rotate-12 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2efe6eb9b70a58fa7373e5a9fb7b68f2d1d1d874?width=242"
            alt="Currency"
            className="absolute right-1/4 top-24 w-28 h-32 transform rotate-22 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ffca60c468d25941ee9b92bce5e31209e962f31a?width=242"
            alt="Currency"
            className="absolute right-12 top-8 w-28 h-32 transform rotate-45 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c836a7e3297767a1a2a077583f0ba0aabec15ba7?width=241"
            alt="Currency"
            className="absolute left-8 bottom-40 w-28 h-28 transform -rotate-12 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8f94da977ef118a23bf574ec64cc893002c31558?width=241"
            alt="Currency"
            className="absolute right-12 bottom-24 w-28 h-28 transform -rotate-12 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a70d9027dcb8137595aae5c3f6f8bb37597cbfdd?width=175"
            alt="Currency"
            className="absolute left-72 bottom-16 w-20 h-32 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dc30876d4e45ff347666118bde718b5cf5c9ffb0?width=175"
            alt="Currency"
            className="absolute right-1/3 top-16 w-20 h-32 transform rotate-19 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4449bd5e283a9206d15ddfce91fa026cc5b793b6?width=243"
            alt="Currency"
            className="absolute right-80 top-64 w-28 h-36 transform -rotate-33 drop-shadow-lg"
          />

          {/* כוכבים דקורטיביים */}
          <div className="absolute right-96 top-20 w-12 h-14 bg-stock4u-pop-red rounded-full opacity-80 drop-shadow-lg"></div>
          <div className="absolute left-32 bottom-52 w-12 h-14 bg-stock4u-pop-red rounded-full opacity-80 drop-shadow-lg"></div>
          <div className="absolute right-48 bottom-40 w-20 h-24 bg-stock4u-pop-red rounded-full opacity-80 drop-shadow-lg"></div>
          <div className="absolute right-2/3 bottom-64 w-16 h-16 bg-stock4u-pop-yellow rounded-full opacity-80 drop-shadow-lg"></div>
          <div className="absolute left-64 top-80 w-32 h-32 bg-stock4u-pop-yellow rounded-full opacity-80 drop-shadow-lg"></div>

          {/* אלמנטים גיאומטריים */}
          <div className="absolute right-24 top-96 w-8 h-8 bg-white rounded-full opacity-90 drop-shadow-lg"></div>
          <div className="absolute left-96 bottom-80 w-6 h-6 bg-white rounded-full opacity-90 drop-shadow-lg"></div>
          <div className="absolute right-1/2 top-32 w-10 h-10 bg-white rounded-full opacity-90 drop-shadow-lg"></div>

          {/* 3D Currency Symbols */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a7304a2766381e931e35d83124bab474727fa9f3?width=335"
            alt="3D Currency"
            className="absolute right-64 top-64 w-40 h-40 transform rotate-21 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/650efdca367c7620a9484f97f351d434be96470b?width=340"
            alt="3D Currency"
            className="absolute left-1/3 bottom-32 w-40 h-40 transform -rotate-12 drop-shadow-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/637edfefd1c11e22f05f22ca05071c44e431aa66?width=341"
            alt="3D Currency"
            className="absolute left-96 top-20 w-40 h-40 drop-shadow-lg"
          />
        </div>

        {/* Stock4U Mascot */}
        <div className="absolute left-20 top-24 z-10">
          <div className="relative w-48 h-64 drop-shadow-xl">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/bc95305a408a0a10cdd090884c0f2965277b826e?width=340" 
              alt="Stock4U Mascot" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="relative z-20 flex justify-center items-center min-h-[600px] px-4 mt-16">
          <div className="bg-white rounded-[35px] p-8 shadow-2xl max-w-4xl w-full mx-auto">
            <div className="text-center space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-stock4u-pop-red text-4xl font-bold leading-tight">
                  איזה כיף!
                </h1>
                <h2 className="text-stock4u-pop-red text-6xl font-bold leading-tight">
                  קיבלת מתנה!
                </h2>
              </div>

              {/* Sender Info */}
              <div className="text-stock4u-happy-blue text-2xl font-normal">
                ממי המתנה? {giftData.senderName}!
              </div>

              {/* Personal Message */}
              {giftData.senderMessage && (
                <div className="text-stock4u-happy-blue text-lg font-normal text-center px-4">
                  {giftData.senderMessage}
                </div>
              )}

              {/* Logo - Only show if hasLogo is true */}
              {giftData.hasLogo && giftData.companyLogo && (
                <div className="flex justify-center py-6">
                  <img 
                    src={giftData.companyLogo} 
                    alt={`${giftData.senderName} Logo`} 
                    className="h-24 object-contain rounded-2xl bg-white px-8 py-4 shadow-sm"
                  />
                </div>
              )}

              {/* Action Button */}
              <div className="flex justify-center">
                <button className="bg-stock4u-happy-blue text-white px-8 py-4 rounded-full text-lg font-bold shadow-[10px_10px_0_0_rgba(0,0,0,0.10)] hover:bg-blue-600 transition-colors">
                  לצפייה במתנה
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Statistics Section */}
      <section className="bg-gray-100 bg-opacity-40 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
              <div className="text-stock4u-dark-grey text-5xl font-bold mb-4">24+</div>
              <div className="text-stock4u-grey text-lg">מדינות שבהם אנו עובדים</div>
            </div>
            <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
              <div className="text-stock4u-dark-grey text-5xl font-bold mb-4">17M</div>
              <div className="text-stock4u-grey text-lg">אנשים שהאמינו בנו</div>
            </div>
            <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
              <div className="text-stock4u-dark-grey text-5xl font-bold mb-4">+95%</div>
              <div className="text-stock4u-grey text-lg">לקוחות מרוצים</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Exact Figma Design */}
      <footer className="relative w-full bg-[#DBE3F3] overflow-hidden" style={{ height: '308px' }}>
        <div className="relative w-full h-full max-w-[1920px] mx-auto">
          {/* Main Footer Content */}
          <div className="absolute left-[550px] top-[76px] flex items-center gap-[3px]" style={{ width: '1228px', height: '152px' }}>
            {/* Four Columns Container */}
            <div className="flex items-center gap-6">
              {/* Social Media Column */}
              <div className="flex flex-col items-end gap-5" style={{ width: '281px' }}>
                <h3 className="text-[#4C7EFB] text-right font-bold text-2xl hebrew-font">
                  אנחנו ברשתות
                </h3>
                <div className="flex flex-col justify-between items-end gap-4" style={{ height: '105px' }}>
                  {/* TikTok */}
                  <div className="flex items-center justify-end gap-3 w-full">
                    <span className="text-[#4C7EFB] text-lg font-normal">טיקטוק</span>
                    <div className="flex items-center justify-center p-2">
                      <svg width="16" height="19" viewBox="0 0 32 35" fill="none">
                        <path d="M20.7486 10.903C20.0652 10.1225 19.6885 9.12041 19.6886 8.08301H16.5986V20.483C16.5753 21.1542 16.2921 21.7901 15.8089 22.2565C15.3257 22.7229 14.6802 22.9834 14.0086 22.983C12.5886 22.983 11.4086 21.823 11.4086 20.383C11.4086 18.663 13.0686 17.373 14.7786 17.903V14.743C11.3286 14.283 8.30859 16.963 8.30859 20.383C8.30859 23.713 11.0686 26.083 13.9986 26.083C17.1386 26.083 19.6886 23.533 19.6886 20.383V14.093C20.9416 14.9929 22.446 15.4757 23.9886 15.473V12.383C23.9886 12.383 22.1086 12.473 20.7486 10.903Z" fill="#4C7EFB"/>
                      </svg>
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="flex items-center justify-end gap-3 w-full">
                    <span className="text-[#4C7EFB] text-lg font-normal">אינסטגרם</span>
                    <div className="flex items-center justify-center p-2">
                      <svg width="17" height="18" viewBox="0 0 33 34" fill="none">
                        <path d="M17.5108 8.74902C18.4483 8.75152 18.9241 8.75652 19.335 8.76819L19.4966 8.77402C19.6833 8.78069 19.8675 8.78902 20.09 8.79902C20.9766 8.84069 21.5816 8.98069 22.1125 9.18652C22.6625 9.39819 23.1258 9.68486 23.5891 10.1474C24.013 10.5638 24.3409 11.0678 24.55 11.624C24.7558 12.1549 24.8958 12.7599 24.9375 13.6474C24.9475 13.869 24.9558 14.0532 24.9625 14.2407L24.9675 14.4024C24.98 14.8124 24.985 15.2882 24.9866 16.2257L24.9875 16.8474V17.939C24.9895 18.5469 24.9831 19.1547 24.9683 19.7624L24.9633 19.924C24.9566 20.1115 24.9483 20.2957 24.9383 20.5174C24.8966 21.4049 24.755 22.009 24.55 22.5407C24.3409 23.097 24.013 23.6009 23.5891 24.0174C23.1727 24.4413 22.6687 24.7692 22.1125 24.9782C21.5816 25.184 20.9766 25.324 20.09 25.3657L19.4966 25.3907L19.335 25.3957C18.9241 25.4074 18.4483 25.4132 17.5108 25.4149L16.8891 25.4157H15.7983C15.1902 25.4178 14.5821 25.4114 13.9741 25.3965L13.8125 25.3915C13.6146 25.384 13.4168 25.3754 13.2191 25.3657C12.3325 25.324 11.7275 25.184 11.1958 24.9782C10.6398 24.7691 10.1362 24.4412 9.71995 24.0174C9.29574 23.601 8.96754 23.097 8.75829 22.5407C8.55245 22.0099 8.41245 21.4049 8.37079 20.5174L8.34579 19.924L8.34162 19.7624C8.32626 19.1547 8.31931 18.5469 8.32079 17.939V16.2257C8.31848 15.6179 8.32459 15.01 8.33912 14.4024L8.34495 14.2407C8.35162 14.0532 8.35995 13.869 8.36995 13.6474C8.41162 12.7599 8.55162 12.1557 8.75745 11.624C8.9672 11.0675 9.29597 10.5636 9.72079 10.1474C10.1367 9.72365 10.6401 9.39575 11.1958 9.18652C11.7275 8.98069 12.3316 8.84069 13.2191 8.79902C13.4408 8.78902 13.6258 8.78069 13.8125 8.77402L13.9741 8.76902C14.5818 8.75422 15.1896 8.74783 15.7975 8.74986L17.5108 8.74902ZM16.6541 12.9157C15.5491 12.9157 14.4892 13.3547 13.7078 14.1361C12.9264 14.9175 12.4875 15.9773 12.4875 17.0824C12.4875 18.1874 12.9264 19.2472 13.7078 20.0286C14.4892 20.81 15.5491 21.249 16.6541 21.249C17.7592 21.249 18.819 20.81 19.6004 20.0286C20.3818 19.2472 20.8208 18.1874 20.8208 17.0824C20.8208 15.9773 20.3818 14.9175 19.6004 14.1361C18.819 13.3547 17.7592 12.9157 16.6541 12.9157ZM16.6541 14.5824C16.9824 14.5823 17.3075 14.6469 17.6109 14.7725C17.9142 14.8981 18.1898 15.0822 18.422 15.3143C18.6542 15.5464 18.8384 15.822 18.9641 16.1253C19.0898 16.4286 19.1545 16.7536 19.1545 17.0819C19.1546 17.4102 19.09 17.7353 18.9644 18.0387C18.8388 18.342 18.6547 18.6176 18.4226 18.8498C18.1905 19.082 17.9149 19.2662 17.6116 19.3919C17.3083 19.5176 16.9833 19.5823 16.655 19.5824C15.9919 19.5824 15.356 19.319 14.8872 18.8501C14.4183 18.3813 14.155 17.7454 14.155 17.0824C14.155 16.4193 14.4183 15.7834 14.8872 15.3146C15.356 14.8457 15.9919 14.5824 16.655 14.5824M21.03 11.6657C20.7537 11.6657 20.4887 11.7754 20.2934 11.9708C20.098 12.1661 19.9883 12.4311 19.9883 12.7074C19.9883 12.9836 20.098 13.2486 20.2934 13.4439C20.4887 13.6393 20.7537 13.749 21.03 13.749C21.3062 13.749 21.5712 13.6393 21.7665 13.4439C21.9619 13.2486 22.0716 12.9836 22.0716 12.7074C22.0716 12.4311 21.9619 12.1661 21.7665 11.9708C21.5712 11.7754 21.3062 11.6657 21.03 11.6657Z" fill="#4C7EFB"/>
                      </svg>
                    </div>
                  </div>
                  {/* Facebook */}
                  <div className="flex items-center justify-end gap-3 w-full">
                    <span className="text-[#4C7EFB] text-lg font-normal">פייסבוק</span>
                    <div className="flex items-center justify-center p-2">
                      <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
                        <path d="M15.7918 1.5H3.18346C2.97682 1.5 2.77863 1.58209 2.63251 1.72821C2.48639 1.87433 2.4043 2.07252 2.4043 2.27917V14.8875C2.4043 15.0941 2.48639 15.2923 2.63251 15.4385C2.77863 15.5846 2.97682 15.6667 3.18346 15.6667H9.9693V10.1771H8.12763V8.05208H9.9693V6.45833C9.93115 6.08416 9.97532 5.70617 10.0987 5.35088C10.2221 4.99559 10.4218 4.67159 10.6836 4.40162C10.9455 4.13165 11.2633 3.92225 11.6146 3.78809C11.966 3.65392 12.3425 3.59826 12.7176 3.625C13.269 3.62119 13.82 3.64958 14.368 3.71V5.6225H13.2418C12.3493 5.6225 12.1793 6.0475 12.1793 6.66375V8.03083H14.3043L14.028 10.1558H12.1793V15.6667H15.7918C15.8941 15.6667 15.9954 15.6465 16.09 15.6074C16.1845 15.5682 16.2704 15.5108 16.3428 15.4385C16.4151 15.3661 16.4725 15.2802 16.5117 15.1857C16.5508 15.0911 16.571 14.9898 16.571 14.8875V2.27917C16.571 2.17685 16.5508 2.07553 16.5117 1.98099C16.4725 1.88646 16.4151 1.80057 16.3428 1.72821C16.2704 1.65586 16.1845 1.59847 16.09 1.55931C15.9954 1.52015 15.8941 1.5 15.7918 1.5Z" fill="#4C7EFB"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vertical Divider 1 */}
              <div className="w-px h-[152px] bg-[#4C7EFB]"></div>
              
              {/* Contact Column */}
              <div className="flex flex-col items-end gap-5" style={{ width: '281px' }}>
                <h3 className="text-[#4C7EFB] text-right font-bold text-2xl hebrew-font">
                  צרו קשר
                </h3>
                <div className="flex flex-col justify-between items-end gap-4" style={{ height: '105px' }}>
                  {/* Email */}
                  <div className="flex items-center justify-end gap-3 w-full">
                    <span className="text-[#4C7EFB] text-lg font-normal">support@stock4u.co.il</span>
                    <div className="flex items-center justify-center p-2">
                      <svg width="19" height="17" viewBox="0 0 35 33" fill="none">
                        <path d="M27.9883 11.6182V21.0832C27.9883 21.8484 27.696 22.5847 27.171 23.1414C26.646 23.6982 25.9282 24.0333 25.1643 24.0782L24.9883 24.0832H10.9883C10.2231 24.0832 9.48677 23.7908 8.93002 23.2659C8.37327 22.7409 8.03817 22.0231 7.99328 21.2592L7.98828 21.0832V11.6182L17.4333 17.9152L17.5493 17.9812C17.686 18.048 17.8361 18.0827 17.9883 18.0827C18.1404 18.0827 18.2906 18.048 18.4273 17.9812L18.5433 17.9152L27.9883 11.6182Z" fill="#4C7EFB"/>
                        <path d="M24.9886 8.08301C26.0686 8.08301 27.0156 8.65301 27.5436 9.51001L17.9886 15.88L8.43359 9.51001C8.68439 9.10283 9.02888 8.76151 9.43837 8.5145C9.84785 8.26749 10.3104 8.12195 10.7876 8.09001L10.9886 8.08301H24.9886Z" fill="#4C7EFB"/>
                      </svg>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center justify-end gap-1 w-full">
                    <span className="text-[#4C7EFB] text-lg font-normal">03-12345678</span>
                    <div className="flex items-center justify-center p-1">
                      <svg width="14" height="15" viewBox="0 0 34 31" fill="none">
                        <path d="M10.2383 6.95801C10.2383 6.22866 10.528 5.52919 11.0437 5.01346C11.5595 4.49774 12.2589 4.20801 12.9883 4.20801H21.2383C21.9676 4.20801 22.6671 4.49774 23.1828 5.01346C23.6985 5.52919 23.9883 6.22866 23.9883 6.95801V23.458C23.9883 24.1874 23.6985 24.8868 23.1828 25.4026C22.6671 25.9183 21.9676 26.208 21.2383 26.208H12.9883C12.2589 26.208 11.5595 25.9183 11.0437 25.4026C10.528 24.8868 10.2383 24.1874 10.2383 23.458V6.95801ZM18.4883 22.083C18.4883 21.7183 18.3434 21.3686 18.0856 21.1107C17.8277 20.8529 17.478 20.708 17.1133 20.708C16.7486 20.708 16.3989 20.8529 16.141 21.1107C15.8831 21.3686 15.7383 21.7183 15.7383 22.083C15.7383 22.4477 15.8831 22.7974 16.141 23.0553C16.3989 23.3131 16.7486 23.458 17.1133 23.458C17.478 23.458 17.8277 23.3131 18.0856 23.0553C18.3434 22.7974 18.4883 22.4477 18.4883 22.083Z" fill="#4C7EFB"/>
                      </svg>
                    </div>
                  </div>
                  {/* Business */}
                  <div className="flex items-center justify-end gap-3 w-full">
                    <span className="text-[#4C7EFB] text-lg font-normal">כניסת בתי עסק - שותפים</span>
                    <div className="flex items-center justify-center p-2">
                      <svg width="21" height="22" viewBox="0 0 37 38" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.0403 8.33301H18.9363C18.0373 8.33301 17.2883 8.33301 16.6943 8.41301C16.0663 8.49701 15.4993 8.68301 15.0443 9.13801C14.5883 9.59401 14.4023 10.161 14.3183 10.788C14.2383 11.383 14.2383 12.133 14.2383 13.031V13.109C12.2173 13.175 11.0033 13.411 10.1603 14.255C8.98828 15.426 8.98828 17.312 8.98828 21.083C8.98828 24.854 8.98828 26.74 10.1603 27.911C11.3323 29.082 13.2173 29.083 16.9883 29.083H20.9883C24.7593 29.083 26.6453 29.083 27.8163 27.911C28.9873 26.739 28.9883 24.854 28.9883 21.083C28.9883 17.312 28.9883 15.426 27.8163 14.255C26.9733 13.411 25.7593 13.175 23.7383 13.109V13.031C23.7383 12.133 23.7383 11.383 23.6583 10.789C23.5743 10.161 23.3883 9.59401 22.9323 9.13901C22.4773 8.68301 21.9103 8.49701 21.2823 8.41301C20.6883 8.33301 19.9383 8.33301 19.0403 8.33301ZM22.2383 13.085V13.083C22.2383 12.119 22.2363 11.471 22.1723 10.988C22.1093 10.527 22.0023 10.329 21.8723 10.199C21.7423 10.069 21.5443 9.96201 21.0823 9.89901C20.6003 9.83501 19.9523 9.83301 18.9883 9.83301C18.0243 9.83301 17.3763 9.83501 16.8933 9.90001C16.4323 9.96201 16.2343 10.069 16.1043 10.2C15.9743 10.331 15.8673 10.527 15.8043 10.988C15.7413 11.471 15.7383 12.119 15.7383 13.083V13.085C16.1296 13.0837 16.5463 13.083 16.9883 13.083H20.9883C21.4296 13.083 21.8463 13.0837 22.2383 13.085ZM23.9883 16.083C23.9883 16.3482 23.8829 16.6026 23.6954 16.7901C23.5079 16.9777 23.2535 17.083 22.9883 17.083C22.7231 17.083 22.4687 16.9777 22.2812 16.7901C22.0936 16.6026 21.9883 16.3482 21.9883 16.083C21.9883 15.8178 22.0936 15.5634 22.2812 15.3759C22.4687 15.1884 22.7231 15.083 22.9883 15.083C23.2535 15.083 23.5079 15.1884 23.6954 15.3759C23.8829 15.5634 23.9883 15.8178 23.9883 16.083ZM14.9883 17.083C15.2535 17.083 15.5079 16.9777 15.6954 16.7901C15.8829 16.6026 15.9883 16.3482 15.9883 16.083C15.9883 15.8178 15.8829 15.5634 15.6954 15.3759C15.5079 15.1884 15.2535 15.083 14.9883 15.083C14.7231 15.083 14.4687 15.1884 14.2812 15.3759C14.0936 15.5634 13.9883 15.8178 13.9883 16.083C13.9883 16.3482 14.0936 16.6026 14.2812 16.7901C14.4687 16.9777 14.7231 17.083 14.9883 17.083Z" fill="#4C7EFB"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vertical Divider 2 */}
              <div className="w-px h-[152px] bg-[#4C7EFB]"></div>
              
              {/* Legal Column */}
              <div className="flex flex-col items-end gap-5" style={{ width: '280.512px' }}>
                <h3 className="text-[#4C7EFB] text-right font-bold text-2xl hebrew-font">
                  מידע משפטי
                </h3>
                <div className="flex flex-col justify-between items-end gap-4" style={{ height: '105px' }}>
                  <div className="text-[#4C7EFB] text-lg font-normal text-right w-full">תנאי שימוש</div>
                  <div className="text-[#4C7EFB] text-lg font-normal text-right w-full">מדיניות פרטיות</div>
                  <div className="text-[#4C7EFB] text-lg font-normal text-right w-full">מדיניות החזרים</div>
                </div>
              </div>
              
              {/* Vertical Divider 3 */}
              <div className="w-px h-[152px] bg-[#4C7EFB]"></div>
              
              {/* Additional Pages Column */}
              <div className="flex flex-col items-end gap-5" style={{ width: '280.512px' }}>
                <h3 className="text-[#4C7EFB] text-right font-bold text-2xl hebrew-font">
                  עמודים נוספ��ם
                </h3>
                <div className="flex flex-col justify-between items-end gap-4" style={{ height: '105px' }}>
                  <div className="text-[#4C7EFB] text-lg font-normal text-right w-full">אודות</div>
                  <div className="text-[#4C7EFB] text-lg font-normal text-right w-full">קריירה</div>
                  <div className="text-[#4C7EFB] text-lg font-normal text-right w-full">שאלות תשובות</div>
                </div>
              </div>
              
              {/* Vertical Divider 4 */}
              <div className="w-px h-[152px] bg-[#4C7EFB]"></div>
            </div>
          </div>
          
          {/* Stock4U Logo and Mascot - Bottom Left */}
          <div className="absolute left-[78px] top-[-92px]" style={{ width: '207px', height: '338px' }}>
            {/* Stock4U Text */}
            <div className="absolute left-0 top-[282px] w-[207px] h-[56px]">
              <span className="text-[#4C7EFB] text-[33px] font-normal uppercase" style={{ fontFamily: 'Holtwood One SC' }}>
                Stock4U
              </span>
            </div>
            
            {/* Mascot */}
            <div className="absolute left-[24px] top-0" style={{ width: '160px', height: '253px' }}>
              {/* White background shape */}
              <svg className="absolute left-[2px] top-[29px] w-[139px] h-[152px]" viewBox="0 0 140 153" fill="none">
                <path d="M0.877141 116.931L0.877148 51.329L84.6864 0.654297L139.909 47.4309L129.593 126.394L71.1894 152.605L0.877141 116.931Z" fill="white"/>
              </svg>
              
              {/* Mascot Character */}
              <div className="absolute left-0 top-0" style={{ width: '160px', height: '253px', filter: 'drop-shadow(3.658px 3.658px 0 rgba(0, 0, 0, 0.10))' }}>
                <div style={{ width: '160px', height: '253px', filter: 'drop-shadow(7.945px 6.179px 0 rgba(0, 0, 0, 0.15))' }}>
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/223db13298bda3b663ae4f9e2ea1a5c6f9c437f6?width=315" 
                    className="absolute left-[2px] top-[129px] w-[158px] h-[123px]" 
                    style={{ strokeWidth: '7.263px', stroke: '#FFF' }}
                    alt="Vector" 
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/59db7a18eb7b39c2e75ee6fd94da12eaa837cd53?width=255" 
                    className="absolute left-[8px] top-0 w-[127px] h-[178px]" 
                    style={{ strokeWidth: '18.289px', stroke: '#FFF' }}
                    alt="Union" 
                  />
                  <div className="absolute left-[62px] top-[173px] w-6 h-[10px] bg-white"></div>
                  <div className="absolute left-[113px] top-[77px] w-6 h-[22px] bg-white"></div>
                  <div className="absolute left-0 top-[73px] w-6 h-[18px] bg-white"></div>
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/685d5572691242b8942ab0b9027b073df03ded46?width=315" 
                    className="absolute left-[2px] top-[129px] w-[158px] h-[123px]" 
                    alt="Group 108277" 
                  />
                </div>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c6f4ef138fe2fcff4c861a628f2808355b08ca4e?width=247" 
                  className="absolute left-[9px] top-0 w-[124px] h-[173px]" 
                  alt="Group 108355" 
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
