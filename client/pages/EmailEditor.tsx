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
      className="relative w-full bg-stock4u-pop-yellow overflow-hidden hebrew-font"
      style={{ minHeight: '800px' }}
      dir="rtl"
    >
      {/* Background Icons */}
      <div className="absolute inset-0">
        {/* Currency symbols scattered across background */}
        <div className="absolute top-12 left-24 w-16 h-16 bg-stock4u-pop-red rounded-full flex items-center justify-center text-white text-2xl font-bold transform rotate-12 shadow-lg">₪</div>
        <div className="absolute top-32 right-32 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold transform -rotate-6 shadow-lg">$</div>
        <div className="absolute top-48 left-48 w-14 h-14 bg-stock4u-happy-blue rounded-full flex items-center justify-center text-white text-xl font-bold transform rotate-45 shadow-lg">€</div>
        <div className="absolute bottom-32 right-48 w-18 h-18 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold transform -rotate-12 shadow-lg">£</div>
        <div className="absolute top-64 right-64 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold transform rotate-24 shadow-lg">¥</div>
        <div className="absolute top-80 left-96 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform -rotate-15 shadow-lg">₿</div>
        <div className="absolute bottom-48 left-32 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold transform rotate-30 shadow-lg">₽</div>

        {/* Star decorations */}
        <div className="absolute top-20 right-80">
          <svg width="46" height="56" viewBox="0 0 112 127" fill="none" className="text-stock4u-pop-red drop-shadow-lg">
            <path d="M47.1692 51.8867L53.682 31.4268L59.0076 50.3659L75.0013 45.0234L63.129 59.8355L74.1024 73.1551L59.0076 69.3051L52.5117 87.662L46.5756 68.7115L33.5612 74.6307L42.7538 61.6107L29.1289 44.752L47.1692 51.8867Z" fill="currentColor" stroke="white" strokeWidth="9"/>
          </svg>
        </div>

        <div className="absolute bottom-16 left-16">
          <svg width="46" height="56" viewBox="0 0 111 127" fill="none" className="text-stock4u-pop-red drop-shadow-lg">
            <path d="M46.9524 52.6367L53.4652 32.1768L58.7908 51.1159L74.7845 45.7734L62.9122 60.5855L73.8856 73.9051L58.7908 70.0551L52.2949 88.412L46.3588 69.4615L33.3444 75.3807L42.537 62.3607L28.9121 45.502L46.9524 52.6367Z" fill="currentColor" stroke="white" strokeWidth="9"/>
          </svg>
        </div>

        <div className="absolute top-16 right-40">
          <svg width="64" height="66" viewBox="0 0 101 104" fill="none" className="text-stock4u-pop-yellow drop-shadow-lg">
            <path d="M43.8715 12.3215C43.7246 11.8442 43.0344 11.8735 42.9463 12.3655C41.8008 18.438 38.2175 36.9125 37.1968 36.9125C35.9779 36.9125 9.92567 45.8634 12.3708 46.2746C14.816 46.6784 37.1968 50.3425 37.1968 50.3425C37.1968 50.3425 45.7439 79.6476 44.9288 78.4287L51.4419 51.9726L75.6071 44.3214C76.055 44.1745 76.0403 43.5357 75.585 43.4035L51.8457 36.0975L43.8715 12.3215Z" fill="currentColor" stroke="white" strokeWidth="11.689"/>
          </svg>
        </div>

        <div className="absolute bottom-40 right-20">
          <svg width="110" height="135" viewBox="0 0 175 206" fill="none" className="text-stock4u-pop-red drop-shadow-lg">
            <path d="M71.9742 80.8029L87.6182 31.6572L100.411 77.15L138.828 64.3169L110.31 99.8963L136.669 131.891L100.411 122.643L84.8072 166.737L70.5483 121.217L39.2873 135.435L61.3682 104.16L28.6406 63.6651L71.9742 80.8029Z" fill="currentColor" stroke="white" strokeWidth="9"/>
          </svg>
        </div>

        {/* Gift boxes */}
        <div className="absolute top-24 right-1/4 w-16 h-20 bg-orange-400 rounded-lg shadow-lg transform rotate-12 relative">
          <div className="absolute top-0 left-1/2 w-2 h-20 bg-stock4u-pop-red transform -translate-x-1/2"></div>
          <div className="absolute top-4 left-0 w-16 h-2 bg-stock4u-pop-red"></div>
          <div className="absolute top-2 left-2 w-3 h-3 bg-stock4u-pop-yellow rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-stock4u-pop-yellow rounded-full"></div>
        </div>

        <div className="absolute bottom-24 right-32 w-12 h-16 bg-pink-400 rounded-lg shadow-lg transform -rotate-18 relative">
          <div className="absolute top-0 left-1/2 w-1 h-16 bg-purple-600 transform -translate-x-1/2"></div>
          <div className="absolute top-3 left-0 w-12 h-1 bg-purple-600"></div>
        </div>

        {/* Stock4U Mascot */}
        <div className="absolute bottom-20 left-20">
          <div className="w-24 h-32 bg-white rounded-lg shadow-xl transform rotate-3 relative border-4 border-white">
            <div className="absolute top-2 left-2 right-2 h-20 bg-stock4u-happy-blue rounded-t-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-stock4u-pop-yellow rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-stock4u-pop-red rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-stock4u-happy-blue font-bold text-xs">STOCK4U</div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-40 left-32 w-8 h-8 bg-white rounded-full shadow-lg transform rotate-45"></div>
        <div className="absolute top-72 right-96 w-6 h-6 bg-white rounded-full shadow-lg transform -rotate-12"></div>
        <div className="absolute bottom-64 left-64 w-10 h-10 bg-white rounded-full shadow-lg transform rotate-60"></div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 flex items-center justify-center min-h-[800px] px-4">
        <div className="bg-white rounded-[34px] p-8 shadow-2xl max-w-4xl w-full mx-auto">
          <div className="text-center space-y-6">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-stock4u-pop-red text-4xl font-bold">
                איזה כיף!
              </h1>
              <h2 className="text-stock4u-pop-red text-6xl font-bold">
                קיבלת מתנה!
              </h2>
            </div>

            {/* Sender Info */}
            <div className="text-stock4u-happy-blue text-2xl english-font">
              ממי המתנה? {senderName} כמובן!
            </div>

            {/* Logo Section */}
            {showLogo && (
              <div className="flex justify-center py-6">
                <div className="bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-sm">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/378ddfe0d1afad1c8baf4e915e3a1587e200b3b8?width=1105"
                    alt={`${senderName} Logo`}
                    className="h-20 object-contain"
                  />
                </div>
              </div>
            )}

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
      <div className="absolute bottom-0 left-0 right-0 bg-gray-100 bg-opacity-40 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-stock4u-dark-grey text-5xl font-bold mb-2">24+</div>
            <div className="text-stock4u-grey text-lg english-font">מדינות שבהם אנו עובדים</div>
          </div>
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-stock4u-dark-grey text-5xl font-bold mb-2">17M</div>
            <div className="text-stock4u-grey text-lg english-font">אנשים שהאמינו בנו</div>
          </div>
          <div className="text-center bg-gray-100 bg-opacity-60 rounded-3xl p-8">
            <div className="text-stock4u-dark-grey text-5xl font-bold mb-2">+95%</div>
            <div className="text-stock4u-grey text-lg english-font">לקוחות מרוצים</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 hebrew-font" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-stock4u-light-blue p-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stock4u-dark-grey">עורך מיילים</h1>
            <div className="text-sm text-stock4u-grey">
              עמוד מוסתר לעריכת תבניות מיילים
            </div>
          </div>
        </div>
      </div>

      {/* Editor Controls */}
      <div className="bg-white border-b border-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-stock4u-dark-grey mb-4">הגדרות התבנית</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-stock4u-dark-grey mb-2">
                שם השולח
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full p-3 border border-stock4u-light-blue rounded-lg focus:ring-2 focus:ring-stock4u-happy-blue focus:border-stock4u-happy-blue transition-colors"
                placeholder="United"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stock4u-dark-grey mb-2">
                שם הנמען
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full p-3 border border-stock4u-light-blue rounded-lg focus:ring-2 focus:ring-stock4u-happy-blue focus:border-stock4u-happy-blue transition-colors"
                placeholder="שם הלקוח"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stock4u-dark-grey mb-2">
                סכום המתנה
              </label>
              <input
                type="text"
                value={giftAmount}
                onChange={(e) => setGiftAmount(e.target.value)}
                className="w-full p-3 border border-stock4u-light-blue rounded-lg focus:ring-2 focus:ring-stock4u-happy-blue focus:border-stock4u-happy-blue transition-colors"
                placeholder="₪100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stock4u-dark-grey mb-2">
                הצגת לוגו
              </label>
              <label className="flex items-center mt-3">
                <input
                  type="checkbox"
                  checked={showLogo}
                  onChange={(e) => setShowLogo(e.target.checked)}
                  className="w-5 h-5 text-stock4u-happy-blue border-stock4u-light-blue rounded focus:ring-stock4u-happy-blue"
                />
                <span className="mr-3 text-stock4u-dark-grey">הצג לוגו החברה</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-stock4u-happy-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm">
              שמור תבנית
            </button>
            <button className="bg-stock4u-pop-yellow text-stock4u-dark-grey px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors shadow-sm">
              ייצא HTML
            </button>
            <button className="bg-gray-100 text-stock4u-dark-grey px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              שלח מייל ניסוי
            </button>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-stock4u-dark-grey">תצוגה מקדימה</h2>
            <div className="text-sm text-stock4u-grey">
              כך המייל יראה ללקוחות
            </div>
          </div>
          <div className="border border-stock4u-light-blue rounded-xl overflow-hidden shadow-lg bg-white">
            <EmailTemplate />
          </div>
        </div>
      </div>
    </div>
  );
}
