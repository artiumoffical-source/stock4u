// EmailEditor component optimized for email viewing - without header/footer
interface GiftData {
  senderName: string;
  senderMessage?: string;
  companyLogo?: string;
  hasLogo: boolean;
}

// This would normally come from props/API, but for demo purposes:
const giftData: GiftData = {
  senderName: "United",
  senderMessage: "",
  companyLogo: "https://api.builder.io/api/v1/image/assets/TEMP/378ddfe0d1afad1c8baf4e915e3a1587e200b3b8?width=1105",
  hasLogo: true
};

export default function EmailEditor() {
  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white hebrew-font" dir="rtl" style={{ width: '800px', minHeight: '600px' }}>
      {/* Main Yellow Background Section - Optimized for Email */}
      <main className="relative w-full bg-[#FFC547] overflow-hidden" style={{ width: '800px', height: '350px' }}>
        {/* Background Pattern - Scaled for email */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Cpath d='M20 20 L25 15 L20 10 L15 15 Z'/%3E%3Cpath d='M40 40 L45 35 L40 30 L35 35 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Decorative Elements - Simplified for email */}
        <div className="absolute top-4 left-4 text-white text-xl opacity-60">★</div>
        <div className="absolute top-6 right-6 text-white text-lg opacity-60">✦</div>
        <div className="absolute bottom-6 left-8 text-white text-lg opacity-60">★</div>
        <div className="absolute bottom-4 right-4 text-white text-xl opacity-60">✦</div>
        
        {/* Central Gift Icon */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white text-6xl">🎁</div>
        </div>

        {/* Coins in corners */}
        <div className="absolute top-8 right-16 w-8 h-8 bg-[#E96036] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">₪</div>
        <div className="absolute bottom-8 left-16 w-8 h-8 bg-[#E96036] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">₪</div>
      </main>

      {/* Main Content Card - Optimized for Email */}
      <div className="relative bg-white p-8 mx-4 -mt-8 rounded-2xl shadow-lg z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Heading Section */}
          <div className="flex flex-col items-center gap-2">
            <div className="hebrew-font font-bold text-[#E96036] text-2xl">
              איזה כיף!
            </div>
            <div className="hebrew-font font-bold text-[#E96036] text-4xl">
              קיבלת מתנה!
            </div>
          </div>

          {/* Sender Info */}
          <div className="text-[#4C7EFB] text-xl font-normal">
            ממי המתנה? {giftData.senderName} כמובן!
          </div>

          {/* Logo - Only show if hasLogo is true */}
          {giftData.hasLogo && giftData.companyLogo && (
            <div className="w-full max-w-sm">
              <img 
                src={giftData.companyLogo} 
                alt={`${giftData.senderName} Logo`} 
                className="w-full h-auto rounded-lg object-contain"
                style={{ maxHeight: '80px' }}
              />
            </div>
          )}

          {/* Action Button */}
          <div className="mt-4">
            <div className="flex items-center justify-center px-8 py-4 rounded-full bg-[#4C7EFB] shadow-lg hover:shadow-xl transition-shadow">
              <span className="hebrew-font font-bold text-white text-lg">לצפייה במתנה</span>
            </div>
          </div>

          {/* Message Section */}
          {giftData.senderMessage && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-[#486284] text-base">
                "{giftData.senderMessage}"
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Compact Statistics Section for Email */}
      <div className="flex justify-center gap-4 p-6 bg-gray-50 mx-4 mt-4 rounded-lg">
        <div className="flex flex-col items-center gap-1 flex-1">
          <div className="text-[#486284] text-lg font-bold">24+</div>
          <div className="text-[#8CA2C0] text-xs text-center">מדינות</div>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1">
          <div className="text-[#486284] text-lg font-bold">17M</div>
          <div className="text-[#8CA2C0] text-xs text-center">לקוחות</div>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1">
          <div className="text-[#486284] text-lg font-bold">+95%</div>
          <div className="text-[#8CA2C0] text-xs text-center">מרוצים</div>
        </div>
      </div>

      {/* Simple Footer for Email */}
      <div className="bg-[#DBE3F3] p-4 mx-4 mt-4 rounded-lg text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="text-[#4C7EFB] text-lg font-bold hebrew-font">STOCK4U</div>
        </div>
        <div className="text-[#4C7EFB] text-sm">
          support@stock4u.co.il | 03-12345678
        </div>
        <div className="text-[#8CA2C0] text-xs mt-2">
          © 2024 Stock4U. כל הזכויות שמורות.
        </div>
      </div>
    </div>
  );
}
