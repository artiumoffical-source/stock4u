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
    <div className="w-full bg-white" dir="rtl" style={{ width: '800px', minHeight: '800px' }}>
      {/* Yellow Background Section with Decorative Elements */}
      <div className="relative w-full bg-[#FFC547] overflow-hidden" style={{ width: '800px', height: '480px' }}>
        
        {/* Background decorative pattern */}
        <svg className="absolute inset-0 w-full h-full" style={{ width: '800px', height: '480px' }}>
          {/* Currency symbols and decorative elements positioned like in Figma */}
          
          {/* Top left shekel */}
          <image href="https://api.builder.io/api/v1/image/assets/TEMP/d9447e75e5d16d7acc5746e890a7a72b4bd81d99?width=237" 
                 x="40" y="20" width="60" height="53" transform="rotate(12.955 70 46.5)" style={{ filter: 'drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.10))' }} />
          
          {/* Top right elements */}
          <image href="https://api.builder.io/api/v1/image/assets/TEMP/dc30876d4e45ff347666118bde718b5cf5c9ffb0?width=175" 
                 x="600" y="30" width="44" height="72" transform="rotate(19.423 622 66)" style={{ filter: 'drop-shadow(6px 6px 0 rgba(0, 0, 0, 0.10))' }} />
          
          {/* Middle right currency */}
          <image href="https://api.builder.io/api/v1/image/assets/TEMP/2efe6eb9b70a58fa7373e5a9fb7b68f2d1d1d874?width=242" 
                 x="465" y="50" width="61" height="68" transform="rotate(21.992 495.5 84)" style={{ filter: 'drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.10))' }} />
          
          {/* Top far right */}
          <image href="https://api.builder.io/api/v1/image/assets/TEMP/ffca60c468d25941ee9b92bce5e31209e962f31a?width=242" 
                 x="750" y="15" width="61" height="68" transform="rotate(48.846 780.5 49)" style={{ filter: 'drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.10))' }} />
          
          {/* Left middle */}
          <image href="https://api.builder.io/api/v1/image/assets/TEMP/c836a7e3297767a1a2a077583f0ba0aabec15ba7?width=241" 
                 x="15" y="150" width="60" height="62" transform="rotate(-13.296 45 181)" style={{ filter: 'drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.10))' }} />
          
          {/* Bottom left */}
          <image href="https://api.builder.io/api/v1/image/assets/TEMP/a70d9027dcb8137595aae5c3f6f8bb37597cbfdd?width=175" 
                 x="120" y="250" width="44" height="72" transform="rotate(-0.058 142 286)" style={{ filter: 'drop-shadow(6px 6px 0 rgba(0, 0, 0, 0.10))' }} />
          
          {/* Bottom right */}
          <image href="https://api.builder.io/api/v1/image/assets/TEMP/8f94da977ef118a23bf574ec64cc893002c31558?width=241" 
                 x="738" y="230" width="60" height="62" transform="rotate(-13.296 768 261)" style={{ filter: 'drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.10))' }} />
          
          {/* Middle right decorative */}
          <image href="https://api.builder.io/api/v1/image/assets/TEMP/4449bd5e283a9206d15ddfce91fa026cc5b793b6?width=243" 
                 x="690" y="110" width="61" height="76" transform="rotate(-33.253 720.5 148)" style={{ filter: 'drop-shadow(6px 6px 0 rgba(0, 0, 0, 0.10))' }} />
          
          {/* Stars scattered around */}
          <g fill="#E96036" style={{ filter: 'drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.10))' }}>
            {/* Top right star */}
            <path d="M685 65L690 45L695 63L715 58L703 78L718 92L695 88L688 108L681 89L665 95L677 82L660 65L685 65Z" 
                  stroke="white" strokeWidth="4"/>
            
            {/* Bottom left star */}
            <path d="M42 280L47 260L52 278L72 273L60 293L75 307L52 303L45 323L38 304L22 310L34 297L17 280L42 280Z" 
                  stroke="white" strokeWidth="4"/>
            
            {/* Large bottom right star */}
            <path d="M622 295L635 250L648 292L693 280L665 320L690 355L648 347L635 385L622 347L577 355L605 320L577 280L622 295Z" 
                  stroke="white" strokeWidth="4"/>
          </g>
          
          {/* Yellow stars */}
          <g fill="#FFC547" style={{ filter: 'drop-shadow(6px 6px 0 rgba(0, 0, 0, 0.10))' }}>
            <path d="M695 220L700 200L705 218L725 213L713 233L728 247L705 243L698 263L691 244L675 250L687 237L670 220L695 220Z" 
                  stroke="white" strokeWidth="6"/>
            
            <path d="M115 140L123 115L131 138L156 133L144 158L159 179L131 174L123 199L115 174L90 179L105 158L90 133L115 140Z" 
                  stroke="white" strokeWidth="6"/>
          </g>
          
          {/* Robot character positioned like in Figma */}
          <g transform="translate(265, 45) rotate(-8.311)">
            <circle cx="52" cy="75" r="70" fill="rgba(27, 25, 25, 0.2)"/>
            <circle cx="52" cy="75" r="65" fill="white"/>
            <path d="M34 30C34 28 36 26 42 25C46 24 56 24 60 25C66 26 68 28 68 30C68 32 66 34 60 35C56 36 46 36 42 35C36 34 34 32 34 30Z" fill="#FFC547"/>
            
            {/* Robot face */}
            <circle cx="44" cy="55" r="4" fill="#333"/>
            <circle cx="60" cy="55" r="4" fill="#333"/>
            <path d="M46 65C46 67 50 69 52 69C54 69 58 67 58 65" stroke="#333" strokeWidth="2" fill="none"/>
            
            {/* Robot body details */}
            <rect x="40" y="75" width="24" height="30" rx="3" fill="#4C7EFB"/>
            <circle cx="52" cy="85" r="3" fill="white"/>
            <rect x="45" y="95" width="14" height="3" rx="1" fill="white"/>
            
            {/* Arms */}
            <rect x="25" y="80" width="12" height="8" rx="4" fill="#FFC547"/>
            <rect x="67" y="80" width="12" height="8" rx="4" fill="#FFC547"/>
            
            {/* Legs */}
            <rect x="42" y="105" width="8" height="15" rx="4" fill="#4C7EFB"/>
            <rect x="54" y="105" width="8" height="15" rx="4" fill="#4C7EFB"/>
          </g>
          
          {/* Currency symbols scattered */}
          <g fill="#4C7EFB" fontSize="20" fontWeight="bold">
            <text x="185" y="180" transform="rotate(15 185 180)">₪</text>
            <text x="550" y="180" transform="rotate(-20 550 180)">€</text>
            <text x="320" y="90" transform="rotate(25 320 90)">$</text>
            <text x="620" y="350" transform="rotate(-15 620 350)">€</text>
            <text x="180" y="350" transform="rotate(30 180 350)">£</text>
          </g>
          
          {/* Additional decorative circles */}
          <g fill="#E96036">
            <circle cx="150" cy="120" r="20" stroke="white" strokeWidth="3" style={{ filter: 'drop-shadow(4px 4px 0 rgba(0, 0, 0, 0.10))' }}/>
            <text x="150" y="128" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">₪</text>
            
            <circle cx="580" cy="280" r="18" stroke="white" strokeWidth="3" style={{ filter: 'drop-shadow(4px 4px 0 rgba(0, 0, 0, 0.10))' }}/>
            <text x="580" y="287" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$</text>
          </g>
          
        </svg>

        {/* Main Gift Card */}
        <div className="absolute" style={{ 
          left: '153px', 
          top: '260px', 
          width: '494px', 
          height: '250px'
        }}>
          <div className="w-full h-full bg-white rounded-[18px] p-6 flex flex-col items-center justify-center gap-4"
               style={{ boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.25)' }}>
            
            {/* Main headings */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-[#E96036] text-[18px] font-[800] leading-normal"
                   style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}>
                איזה כיף!
              </div>
              <div className="text-[#E96036] text-[34px] font-[800] leading-normal"
                   style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}>
                קיבלת מתנה!
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-[#4C7EFB] text-[12px] font-[400] leading-normal text-center"
                 style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
              ממי המתנה? United כמובן!
            </div>

            {/* United Logo */}
            <div className="w-[230px] h-[44px] rounded-[8px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/378ddfe0d1afad1c8baf4e915e3a1587e200b3b8?width=1105" 
                alt="United Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Button */}
            <div className="mt-2">
              <div className="flex items-center justify-center px-6 py-3 rounded-[28px] bg-[#4C7EFB]"
                   style={{ boxShadow: '5px 5px 0 0 rgba(0, 0, 0, 0.10)' }}>
                <span className="text-white text-[9px] font-[700] leading-normal"
                      style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  לצפייה במתנה
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex justify-center gap-6 px-8 py-8 bg-white" style={{ width: '800px' }}>
        <div className="flex flex-col items-center gap-4 flex-1 bg-[rgba(239,242,246,0.40)] rounded-[12px] p-6">
          <div className="text-[#486284] text-[30px] font-[700] leading-[38px] tracking-[0.25px]"
               style={{ fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
            24+
          </div>
          <div className="text-[#8CA2C0] text-[10px] font-[400] leading-[16px] tracking-[0.25px] text-center"
               style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
            מדינות שבהם אנו עובדים
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 flex-1 bg-[rgba(239,242,246,0.40)] rounded-[12px] p-6">
          <div className="text-[#486284] text-[30px] font-[700] leading-[38px] tracking-[0.25px]"
               style={{ fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
            17M
          </div>
          <div className="text-[#8CA2C0] text-[10px] font-[400] leading-[16px] tracking-[0.25px] text-center"
               style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
            אנשים שהאמינו בנו
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 flex-1 bg-[rgba(239,242,246,0.40)] rounded-[12px] p-6">
          <div className="text-[#486284] text-[30px] font-[700] leading-[38px] tracking-[0.25px]"
               style={{ fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
            +95%
          </div>
          <div className="text-[#8CA2C0] text-[10px] font-[400] leading-[16px] tracking-[0.25px] text-center"
               style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
            לקוחות מרוצים
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-[#DBE3F3] px-8 py-6" style={{ width: '800px' }}>
        <div className="flex items-center justify-between">
          {/* Left side - Stock4U logo and robot */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-3">
              {/* Small robot icon */}
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#4C7EFB] rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-[#4C7EFB] text-[16px] font-[400] uppercase tracking-wider"
                   style={{ fontFamily: 'Holtwood One SC, -apple-system, Roboto, Helvetica, sans-serif' }}>
                STOCK4U
              </div>
            </div>
          </div>

          {/* Right side - Contact info in columns */}
          <div className="flex gap-8 text-right">
            <div className="flex flex-col gap-2">
              <div className="text-[#4C7EFB] text-[12px] font-[800]"
                   style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}>
                צרו קשר
              </div>
              <div className="text-[#4C7EFB] text-[9px] font-[400]"
                   style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
                support@stock4u.co.il
              </div>
              <div className="text-[#4C7EFB] text-[9px] font-[400]"
                   style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
                03-12345678
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="text-[#4C7EFB] text-[12px] font-[800]"
                   style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}>
                מידע משפטי
              </div>
              <div className="text-[#4C7EFB] text-[9px] font-[400]"
                   style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
                תנאי שימוש
              </div>
              <div className="text-[#4C7EFB] text-[9px] font-[400]"
                   style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
                מדיניות פרטיות
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="text-[#4C7EFB] text-[12px] font-[800]"
                   style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}>
                עמודים נוספים
              </div>
              <div className="text-[#4C7EFB] text-[9px] font-[400]"
                   style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
                אודות
              </div>
              <div className="text-[#4C7EFB] text-[9px] font-[400]"
                   style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}>
                קריירה
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
