// EmailEditor component with dynamic gift information
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
    <div className="relative w-full bg-white hebrew-font" dir="rtl" style={{ width: '1920px', height: '1919px' }}>
      {/* Header Section - 100px height exactly */}
      <header className="relative z-20 w-full h-[100px] bg-white border border-[#DDD]">
        <div className="flex justify-between items-center h-full" style={{ width: '1868px', position: 'absolute', left: '33px', top: '13px', height: '61px' }}>
          {/* Left side - Cart & Exit */}
          <div className="flex items-center gap-5">
            {/* Cart Icon */}
            <div className="relative" style={{ width: '47.832px', height: '46.549px' }}>
              <div className="w-12 h-12 bg-[#4C7EFB] rounded-full shadow-[10px_10px_0_0_rgba(0,0,0,0.10)] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 25 25" fill="none">
                  <path d="M19.9003 10.3121H5.30426C5.00888 10.3124 4.71739 10.3795 4.45158 10.5083C4.18577 10.6372 3.95252 10.8244 3.76926 11.0561C3.58676 11.2871 3.45924 11.5566 3.39635 11.8442C3.33345 12.1318 3.33684 12.43 3.40626 12.7161L4.97126 19.1241C5.19785 19.9497 5.68982 20.6778 6.37126 21.1961C7.05326 21.7151 7.88826 21.9961 8.74726 21.9961H16.4553C17.3143 21.9961 18.1493 21.7151 18.8313 21.1961C19.5127 20.6778 20.0047 19.9497 20.2313 19.1241L21.7963 12.7171C21.9016 12.2851 21.8554 11.8301 21.6653 11.4282C21.4753 11.0262 21.1529 10.7018 20.7523 10.5091C20.4857 10.3811 20.194 10.3138 19.8983 10.3121M8.68926 14.2061V18.1011M12.6023 14.2061V18.1011M16.5153 14.2061V18.1011M19.4503 10.3121C19.4499 9.41614 19.2725 8.52909 18.9283 7.70191C18.584 6.87473 18.0797 6.12374 17.4443 5.4921C16.1577 4.21259 14.4167 3.4949 12.6023 3.4961C10.7878 3.4949 9.04678 4.21259 7.76026 5.4921C7.12502 6.12383 6.62088 6.87485 6.2768 7.70203C5.93271 8.5292 5.75547 9.41621 5.75526 10.3121" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            {/* Exit Button */}
            <div className="flex items-center justify-center px-4 py-3 bg-[#DBE3F3] rounded-full" style={{ width: '119px', height: '47px' }}>
              <span className="text-[#4C7EFB] font-bold text-lg hebrew-font">יציאה</span>
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-6 text-[#4C7EFB] text-lg hebrew-font">
            <div className="flex items-center gap-2 p-2">
              <svg className="w-5 h-5" viewBox="0 0 23 22" fill="none">
                <path d="M20.5659 18.2617L16.1504 14.047C17.4096 12.6648 18.0573 10.8699 17.9571 9.04073C17.8569 7.21155 17.0166 5.49097 15.6133 4.24167C14.21 2.99237 12.3534 2.31195 10.4347 2.34385C8.51614 2.37574 6.68546 3.11746 5.3286 4.41265C3.97173 5.70784 3.1947 7.45531 3.16128 9.2867C3.12786 11.1181 3.84068 12.8903 5.14947 14.2298C6.45827 15.5693 8.26078 16.3715 10.1771 16.4671C12.0933 16.5628 13.9737 15.9445 15.4217 14.7426L19.8371 18.9573C19.9349 19.0443 20.0642 19.0916 20.1978 19.0894C20.3313 19.0871 20.4588 19.0355 20.5533 18.9453C20.6477 18.8551 20.7018 18.7334 20.7042 18.6059C20.7066 18.4784 20.657 18.355 20.5659 18.2617ZM4.21715 9.42203C4.21715 8.22144 4.59012 7.0478 5.28889 6.04955C5.98767 5.05129 6.98087 4.27324 8.14289 3.81379C9.30492 3.35435 10.5836 3.23413 11.8172 3.46836C13.0508 3.70258 14.1839 4.28072 15.0733 5.12967C15.9627 5.97862 16.5683 7.06025 16.8137 8.23777C17.0591 9.4153 16.9331 10.6358 16.4518 11.745C15.9705 12.8542 15.1554 13.8023 14.1096 14.4693C13.0638 15.1363 11.8343 15.4923 10.5765 15.4923C8.89054 15.4904 7.2742 14.8502 6.08203 13.7122C4.88985 12.5743 4.21919 11.0314 4.21715 9.42203Z" fill="currentColor"/>
              </svg>
              <span className="opacity-30 text-[#4C7EFB] tracking-[-2.34px]">________________</span>
              <span>חיפוש</span>
            </div>
            <div className="p-2">
              <span>קריירה</span>
            </div>
            <div className="p-2">
              <span>רשימת מתנות</span>
            </div>
            <div className="p-2">
              <span>אודות</span>
            </div>
            <div className="p-2">
              <span>בית</span>
            </div>
          </div>
        </div>

        {/* Stock4U Logo - Center */}
        <div className="absolute" style={{ width: '281px', height: '66px', left: '820px', top: '14px' }}>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b4b3197717142c54d34f612cc618c552d7d121d6?width=562" 
            alt="Stock4U Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      {/* Main Yellow Background Section */}
      <main className="relative w-full bg-[#FFC547] overflow-hidden" style={{ width: '1920px', height: '785px', position: 'absolute', left: '0px', top: '100px' }}>
        {/* Background Pattern */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7a0ce1897b9a92990f9d99cb40666973ee6b2c50?width=4258" 
          alt="Background Pattern" 
          className="absolute"
          style={{ width: '2129px', height: '1344px', left: '-118px', top: '-261px' }}
        />

        {/* Decorative Currency Icons - Exact Figma positioning */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/dc30876d4e45ff347666118bde718b5cf5c9ffb0?width=175"
          alt="Currency"
          className="absolute"
          style={{ 
            width: '88px', 
            height: '143px', 
            transform: 'rotate(19.423deg)', 
            filter: 'drop-shadow(12.862px 12.862px 0 rgba(0, 0, 0, 0.10))',
            left: '1438px',
            top: '58px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a70d9027dcb8137595aae5c3f6f8bb37597cbfdd?width=175"
          alt="Currency"
          className="absolute"
          style={{ 
            width: '88px', 
            height: '143px', 
            transform: 'rotate(-0.058deg)', 
            filter: 'drop-shadow(12.862px 12.862px 0 rgba(0, 0, 0, 0.10))',
            left: '291px',
            top: '612px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d9447e75e5d16d7acc5746e890a7a72b4bd81d99?width=237"
          alt="Currency"
          className="absolute"
          style={{ 
            width: '119px', 
            height: '106px', 
            transform: 'rotate(12.955deg)', 
            filter: 'drop-shadow(10.951px 10.951px 0 rgba(0, 0, 0, 0.10))',
            left: '97px',
            top: '53px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2efe6eb9b70a58fa7373e5a9fb7b68f2d1d1d874?width=242"
          alt="Currency"
          className="absolute"
          style={{ 
            width: '121px', 
            height: '135px', 
            transform: 'rotate(21.992deg)', 
            filter: 'drop-shadow(10.951px 10.951px 0 rgba(0, 0, 0, 0.10))',
            left: '1115px',
            top: '100px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ffca60c468d25941ee9b92bce5e31209e962f31a?width=242"
          alt="Currency"
          className="absolute"
          style={{ 
            width: '121px', 
            height: '135px', 
            transform: 'rotate(48.846deg)', 
            filter: 'drop-shadow(10.951px 10.951px 0 rgba(0, 0, 0, 0.10))',
            left: '1795px',
            top: '31px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c836a7e3297767a1a2a077583f0ba0aabec15ba7?width=241"
          alt="Currency"
          className="absolute"
          style={{ 
            width: '120px', 
            height: '124px', 
            transform: 'rotate(-13.296deg)', 
            filter: 'drop-shadow(10.951px 10.951px 0 rgba(0, 0, 0, 0.10))',
            left: '31px',
            top: '364px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8f94da977ef118a23bf574ec64cc893002c31558?width=241"
          alt="Currency"
          className="absolute"
          style={{ 
            width: '120px', 
            height: '124px', 
            transform: 'rotate(-13.296deg)', 
            filter: 'drop-shadow(10.951px 10.951px 0 rgba(0, 0, 0, 0.10))',
            left: '1767px',
            top: '560px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4449bd5e283a9206d15ddfce91fa026cc5b793b6?width=243"
          alt="Currency"
          className="absolute"
          style={{ 
            width: '122px', 
            height: '151px', 
            transform: 'rotate(-33.253deg)', 
            filter: 'drop-shadow(12.014px 12.014px 0 rgba(0, 0, 0, 0.10))',
            left: '1657px',
            top: '266px'
          }}
        />

        {/* Decorative Stars - Red */}
        <svg className="absolute" style={{ width: '46px', height: '56px', fill: '#E96036', filter: 'drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.10))', left: '1639px', top: '109px' }} width="112" height="127" viewBox="0 0 112 127" fill="none">
          <g filter="url(#filter0_d_224_82040)">
            <path d="M47.1692 51.8867L53.682 31.4268L59.0076 50.3659L75.0013 45.0234L63.129 59.8355L74.1024 73.1551L59.0076 69.3051L52.5117 87.662L46.5756 68.7115L33.5612 74.6307L42.7538 61.6107L29.1289 44.752L47.1692 51.8867Z" fill="#E96036"/>
            <path d="M58.0137 30.209L62.0605 44.6006L73.5752 40.7549L88.0703 35.9131L78.5127 47.8379L68.9268 59.7969L77.5752 70.2939L86.3281 80.917L72.9902 77.5156L61.8779 74.6807L56.7539 89.1631L52.252 101.886L48.2178 89.0068L43.8027 74.915L35.4238 78.7266L20.3057 85.6035L29.8848 72.0352L37.1152 61.7939L25.6289 47.5811L14.877 34.2764L30.7842 40.5674L44.3418 45.9287L49.3936 30.0615L53.9492 15.752L58.0137 30.209Z" stroke="white" strokeWidth="9"/>
          </g>
          <defs>
            <filter id="filter0_d_224_82040" x="0.625" y="0.078125" width="110.514" height="126.032" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="10" dy="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_82040"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_82040" result="shape"/>
            </filter>
          </defs>
        </svg>

        <svg className="absolute" style={{ width: '46px', height: '56px', fill: '#E96036', filter: 'drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.10))', left: '100px', top: '615px' }} width="111" height="127" viewBox="0 0 111 127" fill="none">
          <g filter="url(#filter0_d_224_82041)">
            <path d="M46.9524 52.6367L53.4652 32.1768L58.7908 51.1159L74.7845 45.7734L62.9122 60.5855L73.8856 73.9051L58.7908 70.0551L52.2949 88.412L46.3588 69.4615L33.3444 75.3807L42.537 62.3607L28.9121 45.502L46.9524 52.6367Z" fill="#E96036"/>
            <path d="M57.7969 30.959L61.8438 45.3506L73.3584 41.5049L87.8535 36.6631L78.2959 48.5879L68.71 60.5469L77.3584 71.0439L86.1113 81.667L72.7734 78.2656L61.6611 75.4307L56.5371 89.9131L52.0352 102.636L48.001 89.7568L43.5859 75.665L35.207 79.4766L20.0889 86.3535L29.668 72.7852L36.8984 62.5439L25.4121 48.3311L14.6602 35.0264L30.5674 41.3174L44.125 46.6787L49.1768 30.8115L53.7324 16.502L57.7969 30.959Z" stroke="white" strokeWidth="9"/>
          </g>
          <defs>
            <filter id="filter0_d_224_82041" x="0.408203" y="0.828125" width="110.514" height="126.032" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="10" dy="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_82041"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_82041" result="shape"/>
            </filter>
          </defs>
        </svg>

        <svg className="absolute" style={{ width: '110px', height: '135px', fill: '#E96036', filter: 'drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.10))', left: '1492px', top: '603px' }} width="175" height="206" viewBox="0 0 175 206" fill="none">
          <g filter="url(#filter0_d_224_82042)">
            <path d="M71.9742 80.8029L87.6182 31.6572L100.411 77.15L138.828 64.3169L110.31 99.8963L136.669 131.891L100.411 122.643L84.8072 166.737L70.5483 121.217L39.2873 135.435L61.3682 104.16L28.6406 63.6651L71.9742 80.8029Z" fill="#E96036"/>
            <path d="M91.9502 30.4395L103.463 71.3848L137.402 60.0488L151.897 55.207L142.34 67.1309L116.108 99.8574L140.142 129.029L148.895 139.653L135.557 136.251L103.28 128.019L89.0498 168.238L84.5469 180.961L80.5127 168.082L67.7754 127.421L41.1504 139.531L26.0322 146.407L35.6113 132.84L55.7305 104.344L25.1406 66.4932L14.3887 53.1895L30.2959 59.4805L69.1475 74.8457L83.3301 30.292L87.8848 15.9824L91.9502 30.4395Z" stroke="white" strokeWidth="9"/>
          </g>
          <defs>
            <filter id="filter0_d_224_82042" x="0.136719" y="0.308594" width="174.83" height="204.876" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="10" dy="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_82042"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_82042" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Yellow Stars */}
        <svg className="absolute" style={{ width: '64px', height: '66px', fill: '#FFC547', filter: 'drop-shadow(12.988px 12.988px 0 rgba(0, 0, 0, 0.10))', left: '1645px', top: '528px' }} width="101" height="104" viewBox="0 0 101 104" fill="none">
          <g filter="url(#filter0_d_224_82043)">
            <path d="M43.8715 12.3215C43.7246 11.8442 43.0344 11.8735 42.9463 12.3655C41.8008 18.438 38.2175 36.9125 37.1968 36.9125C35.9779 36.9125 9.92567 45.8634 12.3708 46.2746C14.816 46.6784 37.1968 50.3425 37.1968 50.3425C37.1968 50.3425 45.7439 79.6476 44.9288 78.4287L51.4419 51.9726L75.6071 44.3214C76.055 44.1745 76.0403 43.5357 75.585 43.4035L51.8457 36.0975L43.8715 12.3215Z" fill="#FFC547"/>
            <path d="M37.2031 11.2832C38.486 4.37365 47.5126 4.75739 49.4111 10.4639L49.4131 10.4629L56.4326 31.3936L77.3047 37.8174L77.3037 37.8184C83.0308 39.5656 83.4685 47.8944 77.4277 49.875L77.3994 49.8848L77.3711 49.8936L56.333 56.5547L50.792 79.0635C50.7458 79.4749 50.644 80.0173 50.4189 80.5908C50.1845 81.1882 49.4205 82.8433 47.4297 83.7666C45.1808 84.8096 43.167 84.1288 42.2197 83.626C41.3395 83.1587 40.7983 82.5796 40.5986 82.3574C40.3456 82.0757 40.1688 81.825 40.0703 81.6777L38.6377 79.5342L38.9668 78.1943C38.8305 77.6439 38.6478 76.9255 38.417 76.0596C37.7429 73.531 36.7621 70.0194 35.7461 66.4375C34.7323 62.8633 33.6914 59.2487 32.9043 56.5254C32.8023 56.1724 32.7042 55.8345 32.6113 55.5137C30.4863 55.1657 27.6579 54.7029 24.7559 54.2275C18.8584 53.2616 12.6456 52.2438 11.418 52.041L11.4102 52.04L11.4014 52.0381C11.1647 51.9983 9.08466 51.7101 7.59668 49.7822C6.66063 48.5693 6.25406 47.0757 6.38965 45.6201C6.50855 44.3438 7.00913 43.4195 7.32031 42.9365C7.90735 42.0254 8.61347 41.4791 8.83887 41.3066C9.16701 41.0556 9.48135 40.8589 9.71191 40.7227C10.5608 40.221 11.7037 39.7075 12.7676 39.2568C15.0377 38.2953 18.2255 37.0941 21.4307 35.9404C24.6588 34.7785 28.0053 33.6285 30.6367 32.7646C31.4224 32.5067 32.1558 32.2709 32.8105 32.0654C33.2488 30.4148 33.7713 28.1717 34.3125 25.6768C35.462 20.378 36.6332 14.3036 37.2031 11.2822V11.2832Z" stroke="white" strokeWidth="11.6893"/>
          </g>
          <defs>
            <filter id="filter0_d_224_82043" x="0.519531" y="0.301758" width="100.097" height="102.848" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="12.9881" dy="12.9881"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_82043"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_82043" result="shape"/>
            </filter>
          </defs>
        </svg>

        <svg className="absolute" style={{ width: '140px', height: '146px', fill: '#FFC547', filter: 'drop-shadow(12.988px 12.988px 0 rgba(0, 0, 0, 0.10))', left: '272px', top: '347px' }} width="177" height="183" viewBox="0 0 177 183" fill="none">
          <g filter="url(#filter0_d_224_82044)">
            <path d="M81.7772 12.4975C81.4545 11.4487 79.9378 11.5133 79.7442 12.5943C77.2272 25.9378 69.3534 66.5331 67.1106 66.5331C64.4322 66.5331 7.18584 86.2014 12.5587 87.105C17.9316 87.9924 67.1106 96.0437 67.1106 96.0437C67.1106 96.0437 85.8916 160.438 84.1006 157.759L98.4122 99.6256L151.512 82.8131C152.496 82.4904 152.464 81.0867 151.464 80.7963L99.2996 64.7421L81.7772 12.4975Z" fill="#FFC547"/>
            <path d="M74.001 11.5117C75.39 4.01257 85.2427 4.3634 87.3164 10.6396L87.3184 10.6387L103.886 60.0381L153.183 75.21L153.182 75.2109C159.454 77.1158 159.911 86.2106 153.333 88.3672L153.276 88.3848L103.304 104.207L90.0596 157.999C90.0401 158.428 89.9604 159.163 89.6504 159.953C89.4137 160.556 88.6468 162.215 86.6523 163.141C84.3998 164.185 82.382 163.504 81.4297 162.999C80.5442 162.529 79.997 161.945 79.791 161.716C79.5316 161.427 79.3482 161.166 79.2422 161.008L77.8096 158.865L78.2041 157.261C78.1977 157.232 78.1924 157.203 78.1855 157.173C77.8691 155.781 77.3063 153.575 76.5537 150.752C75.0575 145.139 72.8886 137.378 70.6543 129.501C68.4223 121.632 66.1336 113.677 64.4023 107.687C63.658 105.111 63.0163 102.9 62.5273 101.216C61.3709 101.026 59.9762 100.798 58.3984 100.54C53.704 99.7714 47.3884 98.7367 40.9053 97.6748C27.9423 95.5516 14.2981 93.3157 11.6064 92.8711L11.5977 92.8701L11.5898 92.8691C11.2628 92.8141 9.12359 92.5008 7.6084 90.5381C6.65886 89.3078 6.24719 87.794 6.38477 86.3164C6.50572 85.0179 7.01557 84.0689 7.34375 83.5596C7.96505 82.5953 8.73484 81.9878 9.05078 81.7461C9.46981 81.4255 9.90193 81.151 10.2764 80.9297C11.7008 80.0879 13.8276 79.1155 16.1592 78.1279C20.9649 76.0923 27.8232 73.5046 34.8359 70.9805C41.8715 68.4481 49.1626 65.9437 54.8779 64.0674C57.7311 63.1307 60.2236 62.3398 62.1084 61.7783C62.4712 61.6702 62.8189 61.5696 63.1475 61.4756C63.4035 60.6805 63.7037 59.6708 64.0371 58.4463C65.0887 54.5838 66.3357 49.2128 67.6123 43.3281C70.1586 31.5903 72.7453 18.1676 74.001 11.5107V11.5117Z" stroke="white" strokeWidth="11.6893"/>
          </g>
          <defs>
            <filter id="filter0_d_224_82044" x="0.513672" y="0.0683594" width="176.4" height="182.457" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="12.9881" dy="12.9881"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_82044"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_82044" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Rotated Star Element */}
        <svg className="absolute" style={{ width: '103px', height: '125px', transform: 'rotate(-8.311deg)', left: '643px', top: '95px' }} width="121" height="140" viewBox="0 0 121 140" fill="none">
          <path opacity="0.2" d="M108.563 50.6977C106.027 45.1443 101.507 41.499 94.8496 39.7071C96.5785 31.8934 95.3729 27.4654 93.78 24.1438C91.2834 18.9219 86.5934 15.3014 80.9356 14.2208C75.5839 13.1918 67.7214 13.9647 62.0723 14.7899C35.3923 18.6875 29.1784 27.5803 26.8141 33.9458C26.7793 34.0376 23.3666 43.4458 20.591 53.5894C19.116 58.987 17.2852 65.708 17.2013 71.9908C17.0274 84.7788 24.3213 89.6081 28.6886 91.3492C30.9289 92.2452 33.8296 93.1122 39.98 93.0806C36.4764 111.296 36.121 120.797 42.454 127.819C46.3266 132.108 52.0414 134.172 57.7565 133.337C59.8973 133.024 61.9614 132.318 63.9044 131.245C66.3546 129.885 72.8494 126.278 92.0002 96.4233C96.8717 88.8247 101.2 81.527 104.169 75.8727C108.81 67.0266 112.352 59.0345 108.564 50.707L108.563 50.6977Z" fill="#1B1919"/>
          <path d="M99.3108 43.8138C96.7753 38.2604 92.2551 34.6152 85.5976 32.8234C87.3265 25.0096 86.1209 20.5814 84.528 17.2599C82.0314 12.038 77.3414 8.41754 71.6836 7.33691C66.3319 6.30787 58.4694 7.0809 52.8203 7.90615C26.1404 11.8037 19.9264 20.6964 17.5621 27.0619C17.5274 27.1537 14.1146 36.562 11.339 46.7056C9.864 52.1032 8.03325 58.8241 7.94933 65.1069C7.77545 77.8949 15.0693 82.7242 19.4366 84.4653C21.6769 85.3613 24.5777 86.2283 30.728 86.1967C27.2245 104.412 26.869 113.914 33.202 120.935C37.0746 125.224 42.7894 127.288 48.5045 126.453C50.6453 126.14 52.7094 125.434 54.6524 124.361C57.1026 123.001 63.5975 119.394 82.7482 89.5394C87.6198 81.9408 91.9477 74.6431 94.9167 68.9887C99.5578 60.1427 103.1 52.1507 99.3121 43.8232L99.3108 43.8138Z" fill="white"/>
          <path d="M32.8728 32.6946C32.1618 34.619 20.6182 67.3593 25.4781 69.3078C30.338 71.2563 51.5599 67.6456 51.5599 67.6456C51.5599 67.6456 39.8287 113.937 46.742 110.095C53.6459 106.255 86.6986 55.452 84.474 50.5756C82.2494 45.6993 61.5451 48.8973 61.5451 48.8973C61.5451 48.8973 74.4872 24.477 68.6095 23.3418C62.7223 22.2079 35.4081 25.8514 32.8728 32.6946Z" fill="#FFC547"/>
          <g style={{ mixBlendMode: 'overlay' }} opacity="0.5">
            <path d="M37.7816 38.3331C35.8145 43.2632 33.8487 48.2027 31.8815 53.1327C29.9357 58.0115 37.5632 60.9042 39.517 56.0146C41.4842 51.0846 43.45 46.1451 45.4171 41.215C47.3629 36.3363 39.7355 33.4435 37.7816 38.3331Z" fill="white"/>
          </g>
        </svg>

        {/* 3D Currency Symbols */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a7304a2766381e931e35d83124bab474727fa9f3?width=335"
          alt="3D Currency"
          className="absolute"
          style={{ 
            width: '168px', 
            height: '166px', 
            transform: 'rotate(21.656deg)', 
            left: '1357px',
            top: '283px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/650efdca367c7620a9484f97f351d434be96470b?width=340"
          alt="3D Currency"
          className="absolute"
          style={{ 
            width: '170px', 
            height: '169px', 
            transform: 'rotate(-176.855deg)', 
            left: '512px',
            top: '395px'
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/637edfefd1c11e22f05f22ca05071c44e431aa66?width=341"
          alt="3D Currency"
          className="absolute"
          style={{ 
            width: '171px', 
            height: '169px', 
            left: '368px',
            top: '90px'
          }}
        />

        {/* Stock4U Mascot */}
        <div className="absolute" style={{ width: '220px', height: '348px', left: '846px', top: '106px' }}>
          {/* White background shape */}
          <svg className="absolute" style={{ width: '191px', height: '209px', fill: '#FFF', left: '3px', top: '39px' }} width="192" height="210" viewBox="0 0 192 210" fill="none">
            <path d="M0.0119779 160.888L0.0119874 70.5633L115.406 0.791016L191.44 65.1961L177.237 173.918L96.8226 210.007L0.0119779 160.888Z" fill="white"/>
          </svg>
          
          {/* Mascot Character */}
          <div className="absolute left-0 top-0" style={{ width: '220px', height: '348px', filter: 'drop-shadow(5.036px 5.036px 0 rgba(0, 0, 0, 0.10))' }}>
            <div style={{ width: '220px', height: '348px', filter: 'drop-shadow(10.939px 8.508px 0 rgba(0, 0, 0, 0.15))' }}>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/1e0545a47a34fcc8241c785c8ca54af1ef8130e1?width=434" 
                className="absolute" 
                style={{ width: '217px', height: '170px', strokeWidth: '10px', stroke: '#FFF', left: '3px', top: '178px' }}
                alt="Vector" 
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e303d7b87531d68f67aaa5e745cd58d670c05c69?width=351" 
                className="absolute" 
                style={{ width: '175px', height: '246px', strokeWidth: '25.182px', stroke: '#FFF', left: '11px', top: '0px' }}
                alt="Union" 
              />
              <div className="absolute bg-white" style={{ width: '34px', height: '13px', left: '85px', top: '238px' }}></div>
              <div className="absolute bg-white" style={{ width: '34px', height: '31px', left: '155px', top: '106px' }}></div>
              <div className="absolute bg-white" style={{ width: '34px', height: '25px', left: '0px', top: '101px' }}></div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/988f9f10d61d5bc113bb788429b166aa50308073?width=434" 
                className="absolute" 
                style={{ width: '217px', height: '170px', left: '3px', top: '178px' }}
                alt="Group 108277" 
              />
            </div>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/bc95305a408a0a10cdd090884c0f2965277b826e?width=340" 
              className="absolute" 
              style={{ width: '170px', height: '238px', left: '12px', top: '0px' }}
              alt="Group 108355" 
            />
          </div>
        </div>
      </main>

      {/* Main Content Card - Exact Figma positioning */}
      <div className="absolute flex items-center justify-center" style={{ 
        width: '1184px', 
        height: '599px', 
        left: '368px', 
        top: '628px',
        padding: '21px 19px',
        borderRadius: '34.431px',
        background: '#FFF',
        boxShadow: '0 4px 39.1px 0 rgba(0, 0, 0, 0.25)'
      }}>
        <div className="flex flex-col items-center gap-10" style={{ width: '1084px' }}>
          {/* Heading Section */}
          <div className="flex flex-col items-center gap-3" style={{ width: '762.805px' }}>
            <div className="hebrew-font font-bold text-[#E96036] text-center text-[34px]" style={{ width: '468.08px' }}>
              איזה כיף!
            </div>
            <div className="hebrew-font font-bold text-[#E96036] text-center text-[64px]" style={{ width: '468.08px' }}>
              קיבלת מתנה!
            </div>
          </div>

          {/* Sender Info */}
          <div className="text-[#4C7EFB] text-center text-2xl font-normal" style={{ width: '338.879px' }}>
            ממי המתנה? {giftData.senderName} כמובן!
          </div>

          {/* Logo - Only show if hasLogo is true */}
          {giftData.hasLogo && giftData.companyLogo && (
            <img 
              src={giftData.companyLogo} 
              alt={`${giftData.senderName} Logo`} 
              className="rounded-[15.421px]"
              style={{ width: '552.254px', height: '105.149px' }}
            />
          )}

          {/* Action Button */}
          <div className="relative" style={{ width: '270px', height: '70px' }}>
            <div className="absolute left-0 top-0 flex flex-col items-start gap-2 p-2" style={{ width: '270px', height: '70px' }}>
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#4C7EFB] shadow-[10px_10px_0_0_rgba(0,0,0,0.10)] w-full h-[50px]">
                <span className="hebrew-font font-bold text-white text-lg">לצפייה במתנה</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="absolute flex items-start gap-6" style={{ width: '1216px', left: '352px', top: '1358px', height: '188px' }}>
        <div className="flex flex-col items-center gap-4 flex-1 p-8 rounded-3xl bg-[rgba(239,242,246,0.40)]">
          <div className="text-[#486284] text-center text-[60px] font-bold leading-[76px] tracking-[0.5px]" style={{ fontFamily: 'DM Sans' }}>
            24+
          </div>
          <div className="text-[#8CA2C0] text-center text-xl font-normal leading-8 tracking-[0.5px]">
            מדינות שבהם אנו עובדים
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 flex-1 p-8 rounded-3xl bg-[rgba(239,242,246,0.40)]">
          <div className="text-[#486284] text-center text-[60px] font-bold leading-[76px] tracking-[0.5px]" style={{ fontFamily: 'DM Sans' }}>
            17M
          </div>
          <div className="text-[#8CA2C0] text-center text-xl font-normal leading-8 tracking-[0.5px]">
            אנשים שהאמינו בנו
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 flex-1 p-8 rounded-3xl bg-[rgba(239,242,246,0.40)]">
          <div className="text-[#486284] text-center text-[60px] font-bold leading-[76px] tracking-[0.5px]" style={{ fontFamily: 'DM Sans' }}>
            +95%
          </div>
          <div className="text-[#8CA2C0] text-center text-xl font-normal leading-8 tracking-[0.5px]">
            לקוחות מרוצים
          </div>
        </div>
      </div>

      {/* Footer - Compact for Email Card */}
      <footer className="relative w-full bg-[#DBE3F3] py-8" style={{ position: 'absolute', left: '0px', top: '1611px', width: '1920px' }}>
        <div className="relative w-full">
          {/* Simplified Footer Content */}
          <div className="flex justify-center">
            <div className="flex items-center gap-12 max-w-4xl">

              {/* Stock4U Logo and Mascot - Center Left */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-20">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c6f4ef138fe2fcff4c861a628f2808355b08ca4e?width=247"
                    className="w-full h-full object-contain"
                    alt="Stock4U Mascot"
                  />
                </div>
                <div className="text-[#4C7EFB] text-xl font-bold hebrew-font">
                  STOCK4U
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col items-end gap-2">
                <h3 className="text-[#4C7EFB] text-lg font-bold hebrew-font">צרו קשר</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#4C7EFB] text-sm">support@stock4u.co.il</span>
                  <svg className="w-4 h-4 text-[#4C7EFB]" viewBox="0 0 35 33" fill="none">
                    <path d="M27.9883 11.6182V21.0832C27.9883 21.8484 27.696 22.5847 27.171 23.1414C26.646 23.6982 25.9282 24.0333 25.1643 24.0782L24.9883 24.0832H10.9883C10.2231 24.0832 9.48677 23.7908 8.93002 23.2659C8.37327 22.7409 8.03817 22.0231 7.99328 21.2592L7.98828 21.0832V11.6182L17.4333 17.9152L17.5493 17.9812C17.686 18.048 17.8361 18.0827 17.9883 18.0827C18.1404 18.0827 18.2906 18.048 18.4273 17.9812L18.5433 17.9152L27.9883 11.6182Z" fill="currentColor"/>
                    <path d="M24.9886 8.08301C26.0686 8.08301 27.0156 8.65301 27.5436 9.51001L17.9886 15.88L8.43359 9.51001C8.68439 9.10283 9.02888 8.76151 9.43837 8.5145C9.84785 8.26749 10.3104 8.12195 10.7876 8.09001L10.9886 8.08301H24.9886Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4C7EFB] text-sm">03-12345678</span>
                  <svg className="w-4 h-4 text-[#4C7EFB]" viewBox="0 0 34 31" fill="none">
                    <path d="M10.2383 6.95801C10.2383 6.22866 10.528 5.52919 11.0437 5.01346C11.5595 4.49774 12.2589 4.20801 12.9883 4.20801H21.2383C21.9676 4.20801 22.6671 4.49774 23.1828 5.01346C23.6985 5.52919 23.9883 6.22866 23.9883 6.95801V23.458C23.9883 24.1874 23.6985 24.8868 23.1828 25.4026C22.6671 25.9183 21.9676 26.208 21.2383 26.208H12.9883C12.2589 26.208 11.5595 25.9183 11.0437 25.4026C10.528 24.8868 10.2383 24.1874 10.2383 23.458V6.95801ZM18.4883 22.083C18.4883 21.7183 18.3434 21.3686 18.0856 21.1107C17.8277 20.8529 17.478 20.708 17.1133 20.708C16.7486 20.708 16.3989 20.8529 16.141 21.1107C15.8831 21.3686 15.7383 21.7183 15.7383 22.083C15.7383 22.4477 15.8831 22.7974 16.141 23.0553C16.3989 23.3131 16.7486 23.458 17.1133 23.458C17.478 23.458 17.8277 23.3131 18.0856 23.0553C18.3434 22.7974 18.4883 22.4477 18.4883 22.083Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col items-end gap-2">
                <h3 className="text-[#4C7EFB] text-lg font-bold hebrew-font">עקבו אחרינו</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-[#4C7EFB] text-sm">פייסבוק</span>
                    <svg className="w-4 h-4 text-[#4C7EFB]" viewBox="0 0 18 18" fill="none">
                      <path d="M15.7918 1.5H3.18346C2.97682 1.5 2.77863 1.58209 2.63251 1.72821C2.48639 1.87433 2.4043 2.07252 2.4043 2.27917V14.8875C2.4043 15.0941 2.48639 15.2923 2.63251 15.4385C2.77863 15.5846 2.97682 15.6667 3.18346 15.6667H9.9693V10.1771H8.12763V8.05208H9.9693V6.45833C9.93115 6.08416 9.97532 5.70617 10.0987 5.35088C10.2221 4.99559 10.4218 4.67159 10.6836 4.40162C10.9455 4.13165 11.2633 3.92225 11.6146 3.78809C11.966 3.65392 12.3425 3.59826 12.7176 3.625C13.269 3.62119 13.82 3.64958 14.368 3.71V5.6225H13.2418C12.3493 5.6225 12.1793 6.0475 12.1793 6.66375V8.03083H14.3043L14.028 10.1558H12.1793V15.6667H15.7918C15.8941 15.6667 15.9954 15.6465 16.09 15.6074C16.1845 15.5682 16.2704 15.5108 16.3428 15.4385C16.4151 15.3661 16.4725 15.2802 16.5117 15.1857C16.5508 15.0911 16.571 14.9898 16.571 14.8875V2.27917C16.571 2.17685 16.5508 2.07553 16.5117 1.98099C16.4725 1.88646 16.4151 1.80057 16.3428 1.72821C16.2704 1.65586 16.1845 1.59847 16.09 1.55931C15.9954 1.52015 15.8941 1.5 15.7918 1.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#4C7EFB] text-sm">אינסטגרם</span>
                    <svg className="w-4 h-4 text-[#4C7EFB]" viewBox="0 0 33 34" fill="none">
                      <path d="M17.5108 8.74902C18.4483 8.75152 18.9241 8.75652 19.335 8.76819L19.4966 8.77402C19.6833 8.78069 19.8675 8.78902 20.09 8.79902C20.9766 8.84069 21.5816 8.98069 22.1125 9.18652C22.6625 9.39819 23.1258 9.68486 23.5891 10.1474C24.013 10.5638 24.3409 11.0678 24.55 11.624C24.7558 12.1549 24.8958 12.7599 24.9375 13.6474C24.9475 13.869 24.9558 14.0532 24.9625 14.2407L24.9675 14.4024C24.98 14.8124 24.985 15.2882 24.9866 16.2257L24.9875 16.8474V17.939C24.9895 18.5469 24.9831 19.1547 24.9683 19.7624L24.9633 19.924C24.9566 20.1115 24.9483 20.2957 24.9383 20.5174C24.8966 21.4049 24.755 22.009 24.55 22.5407C24.3409 23.097 24.013 23.6009 23.5891 24.0174C23.1727 24.4413 22.6687 24.7692 22.1125 24.9782C21.5816 25.184 20.9766 25.324 20.09 25.3657L19.4966 25.3907L19.335 25.3957C18.9241 25.4074 18.4483 25.4132 17.5108 25.4149L16.8891 25.4157H15.7983C15.1902 25.4178 14.5821 25.4114 13.9741 25.3965L13.8125 25.3915C13.6146 25.384 13.4168 25.3754 13.2191 25.3657C12.3325 25.324 11.7275 25.184 11.1958 24.9782C10.6398 24.7691 10.1362 24.4412 9.71995 24.0174C9.29574 23.601 8.96754 23.097 8.75829 22.5407C8.55245 22.0099 8.41245 21.4049 8.37079 20.5174L8.34579 19.924L8.34162 19.7624C8.32626 19.1547 8.31931 18.5469 8.32079 17.939V16.2257C8.31848 15.6179 8.32459 15.01 8.33912 14.4024L8.34495 14.2407C8.35162 14.0532 8.35995 13.869 8.36995 13.6474C8.41162 12.7599 8.55162 12.1557 8.75745 11.624C8.9672 11.0675 9.29597 10.5636 9.72079 10.1474C10.1367 9.72365 10.6401 9.39575 11.1958 9.18652C11.7275 8.98069 12.3316 8.84069 13.2191 8.79902C13.4408 8.78902 13.6258 8.78069 13.8125 8.77402L13.9741 8.76902C14.5818 8.75422 15.1896 8.74783 15.7975 8.74986L17.5108 8.74902ZM16.6541 12.9157C15.5491 12.9157 14.4892 13.3547 13.7078 14.1361C12.9264 14.9175 12.4875 15.9773 12.4875 17.0824C12.4875 18.1874 12.9264 19.2472 13.7078 20.0286C14.4892 20.81 15.5491 21.249 16.6541 21.249C17.7592 21.249 18.819 20.81 19.6004 20.0286C20.3818 19.2472 20.8208 18.1874 20.8208 17.0824C20.8208 15.9773 20.3818 14.9175 19.6004 14.1361C18.819 13.3547 17.7592 12.9157 16.6541 12.9157ZM16.6541 14.5824C16.9824 14.5823 17.3075 14.6469 17.6109 14.7725C17.9142 14.8981 18.1898 15.0822 18.422 15.3143C18.6542 15.5464 18.8384 15.822 18.9641 16.1253C19.0898 16.4286 19.1545 16.7536 19.1545 17.0819C19.1546 17.4102 19.09 17.7353 18.9644 18.0387C18.8388 18.342 18.6547 18.6176 18.4226 18.8498C18.1905 19.082 17.9149 19.2662 17.6116 19.3919C17.3083 19.5176 16.9833 19.5823 16.655 19.5824C15.9919 19.5824 15.356 19.319 14.8872 18.8501C14.4183 18.3813 14.155 17.7454 14.155 17.0824C14.155 16.4193 14.4183 15.7834 14.8872 15.3146C15.356 14.8457 15.9919 14.5824 16.655 14.5824M21.03 11.6657C20.7537 11.6657 20.4887 11.7754 20.2934 11.9708C20.098 12.1661 19.9883 12.4311 19.9883 12.7074C19.9883 12.9836 20.098 13.2486 20.2934 13.4439C20.4887 13.6393 20.7537 13.749 21.03 13.749C21.3062 13.749 21.5712 13.6393 21.7665 13.4439C21.9619 13.2486 22.0716 12.9836 22.0716 12.7074C22.0716 12.4311 21.9619 12.1661 21.7665 11.9708C21.5712 11.7754 21.3062 11.6657 21.03 11.6657Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col items-end gap-2">
                <h3 className="text-[#4C7EFB] text-lg font-bold hebrew-font">קישורים</h3>
                <div className="flex gap-4 text-sm">
                  <span className="text-[#4C7EFB]">אודות</span>
                  <span className="text-[#4C7EFB]">מדיניות פרטיות</span>
                  <span className="text-[#4C7EFB]">תנאי שימוש</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
