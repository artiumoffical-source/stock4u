import { useState } from 'react';

export default function EmailEditor() {
  const [senderName, setSenderName] = useState('United');
  const [recipientName, setRecipientName] = useState('');
  const [giftAmount, setGiftAmount] = useState('');
  const [showLogo, setShowLogo] = useState(true);

  const processTemplate = (template: string) => {
    return template
      .replace(/{{senderName}}/g, senderName || 'השולח')
      .replace(/{{recipientName}}/g, recipientName || 'הנמען')
      .replace(/{{giftAmount}}/g, giftAmount || 'הסכום');
  };

  const EmailTemplate = () => (
    <div 
      className="relative w-full bg-[#FFC547] overflow-hidden" 
      style={{ minHeight: '800px' }}
      dir="rtl"
    >
      {/* Background Icons */}
      <div className="absolute inset-0">
        {/* Currency and financial icons scattered across background */}
        <div className="absolute top-12 left-24 w-16 h-16 bg-[#E96036] rounded-full flex items-center justify-center text-white text-2xl font-bold transform rotate-12 shadow-lg">₪</div>
        <div className="absolute top-32 right-32 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold transform -rotate-6 shadow-lg">$</div>
        <div className="absolute top-48 left-48 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform rotate-45 shadow-lg">€</div>
        <div className="absolute bottom-32 right-48 w-18 h-18 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold transform -rotate-12 shadow-lg">£</div>
        
        {/* Star decorations */}
        <div className="absolute top-20 right-80">
          <svg width="46" height="56" viewBox="0 0 112 127" fill="none" className="text-[#E96036] drop-shadow-lg">
            <path d="M47.1692 51.8867L53.682 31.4268L59.0076 50.3659L75.0013 45.0234L63.129 59.8355L74.1024 73.1551L59.0076 69.3051L52.5117 87.662L46.5756 68.7115L33.5612 74.6307L42.7538 61.6107L29.1289 44.752L47.1692 51.8867Z" fill="currentColor" stroke="white" strokeWidth="9"/>
          </svg>
        </div>
        
        <div className="absolute bottom-16 left-16">
          <svg width="46" height="56" viewBox="0 0 111 127" fill="none" className="text-[#E96036] drop-shadow-lg">
            <path d="M46.9524 52.6367L53.4652 32.1768L58.7908 51.1159L74.7845 45.7734L62.9122 60.5855L73.8856 73.9051L58.7908 70.0551L52.2949 88.412L46.3588 69.4615L33.3444 75.3807L42.537 62.3607L28.9121 45.502L46.9524 52.6367Z" fill="currentColor" stroke="white" strokeWidth="9"/>
          </svg>
        </div>

        {/* Gift box icon */}
        <div className="absolute top-24 right-1/4 w-16 h-20 bg-orange-400 rounded-lg shadow-lg transform rotate-12 relative">
          <div className="absolute top-0 left-1/2 w-2 h-20 bg-red-500 transform -translate-x-1/2"></div>
          <div className="absolute top-4 left-0 w-16 h-2 bg-red-500"></div>
          <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-yellow-300 rounded-full"></div>
        </div>

        {/* Stock4U Mascot */}
        <div className="absolute bottom-20 left-20">
          <div className="w-24 h-32 bg-white rounded-lg shadow-xl transform rotate-3 relative">
            <div className="absolute top-2 left-2 right-2 h-20 bg-blue-600 rounded-t-lg"></div>
            <div className="absolute top-6 left-1/2 w-8 h-8 bg-yellow-400 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute bottom-8 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 flex items-center justify-center min-h-[800px] px-4">
        <div className="bg-white rounded-[34px] p-8 shadow-2xl max-w-4xl w-full mx-auto">
          <div className="text-center space-y-6">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-[#E96036] text-4xl font-bold">
                איזה כיף!
              </h1>
              <h2 className="text-[#E96036] text-6xl font-bold">
                קיבלת מתנה!
              </h2>
            </div>

            {/* Sender Info */}
            <div className="text-[#4C7EFB] text-2xl">
              ממי המתנה? {{senderName}} כמובן!
            </div>

            {/* Logo Section */}
            {showLogo && (
              <div className="flex justify-center py-6">
                <div className="bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-sm">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/378ddfe0d1afad1c8baf4e915e3a1587e200b3b8?width=1105" 
                    alt="{{senderName}} Logo" 
                    className="h-20 object-contain"
                  />
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="flex justify-center">
              <button className="bg-[#4C7EFB] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-blue-600 transition-colors">
                לצפייה במתנה
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-100 bg-opacity-40 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-[#486284] text-5xl font-bold mb-2">24+</div>
            <div className="text-[#8CA2C0] text-lg">מדינות שבהם אנו עובדים</div>
          </div>
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-[#486284] text-5xl font-bold mb-2">17M</div>
            <div className="text-[#8CA2C0] text-lg">אנשים שהאמינו בנו</div>
          </div>
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-[#486284] text-5xl font-bold mb-2">+95%</div>
            <div className="text-[#8CA2C0] text-lg">לקוחות מרוצים</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Editor Controls */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">עורך מיילים</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                שם השולח
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="United"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                שם הנמען
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="שם הלקוח"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                סכום המתנה
              </label>
              <input
                type="text"
                value={giftAmount}
                onChange={(e) => setGiftAmount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="���100"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                הצגת לוגו
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showLogo}
                  onChange={(e) => setShowLogo(e.target.checked)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="mr-2">הצג לוגו החברה</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">תצוגה מקדימה:</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <div dangerouslySetInnerHTML={{ 
              __html: processTemplate(document.querySelector('.email-template')?.outerHTML || '') 
            }} />
            <div className="email-template" style={{ display: 'none' }}>
              <EmailTemplate />
            </div>
            <EmailTemplate />
          </div>
        </div>
      </div>
    </div>
  );
}
