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
    <div className="w-full bg-white" dir="rtl" style={{ width: '800px', minHeight: '600px' }}>
      {/* Yellow Background Section with All Decorative Elements */}
      <div className="relative w-full bg-[#FFC547] overflow-hidden" style={{ width: '800px', height: '520px' }}>
        
        {/* Large background pattern */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7a0ce1897b9a92990f9d99cb40666973ee6b2c50?width=4258" 
          alt="Background Pattern"
          className="absolute"
          style={{
            width: '1400px',
            height: '880px',
            left: '-100px',
            top: '-180px'
          }}
        />

        {/* Decorative currency and element images positioned exactly like Figma */}
        
        {/* Top right rotated element */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/dc30876d4e45ff347666118bde718b5cf5c9ffb0?width=175" 
          alt="Decorative"
          className="absolute"
          style={{
            width: '58px',
            height: '94px',
            left: '600px',
            top: '38px',
            transform: 'rotate(19.423deg)',
            filter: 'drop-shadow(8px 8px 0 rgba(0, 0, 0, 0.10))'
          }}
        />

        {/* Bottom left element */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a70d9027dcb8137595aae5c3f6f8bb37597cbfdd?width=175" 
          alt="Decorative"
          className="absolute"
          style={{
            width: '58px',
            height: '94px',
            left: '120px',
            top: '400px',
            transform: 'rotate(-0.058deg)',
            filter: 'drop-shadow(8px 8px 0 rgba(0, 0, 0, 0.10))'
          }}
        />

        {/* Top left shekel */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d9447e75e5d16d7acc5746e890a7a72b4bd81d99?width=237" 
          alt="Shekel"
          className="absolute"
          style={{
            width: '78px',
            height: '70px',
            left: '40px',
            top: '35px',
            transform: 'rotate(12.955deg)',
            filter: 'drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.10))'
          }}
        />

        {/* Middle right currency */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/2efe6eb9b70a58fa7373e5a9fb7b68f2d1d1d874?width=242" 
          alt="Currency"
          className="absolute"
          style={{
            width: '80px',
            height: '89px',
            left: '465px',
            top: '65px',
            transform: 'rotate(21.992deg)',
            filter: 'drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.10))'
          }}
        />

        {/* Top far right */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/ffca60c468d25941ee9b92bce5e31209e962f31a?width=242" 
          alt="Currency"
          className="absolute"
          style={{
            width: '80px',
            height: '89px',
            left: '750px',
            top: '20px',
            transform: 'rotate(48.846deg)',
            filter: 'drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.10))'
          }}
        />

        {/* Left middle */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c836a7e3297767a1a2a077583f0ba0aabec15ba7?width=241" 
          alt="Currency"
          className="absolute"
          style={{
            width: '79px',
            height: '81px',
            left: '12px',
            top: '240px',
            transform: 'rotate(-13.296deg)',
            filter: 'drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.10))'
          }}
        />

        {/* Bottom right */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/8f94da977ef118a23bf574ec64cc893002c31558?width=241" 
          alt="Currency"
          className="absolute"
          style={{
            width: '79px',
            height: '81px',
            left: '735px',
            top: '368px',
            transform: 'rotate(-13.296deg)',
            filter: 'drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.10))'
          }}
        />

        {/* Middle right decorative */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/4449bd5e283a9206d15ddfce91fa026cc5b793b6?width=243" 
          alt="Decorative"
          className="absolute"
          style={{
            width: '80px',
            height: '99px',
            left: '690px',
            top: '175px',
            transform: 'rotate(-33.253deg)',
            filter: 'drop-shadow(8px 8px 0 rgba(0, 0, 0, 0.10))'
          }}
        />

        {/* Stars SVGs positioned exactly like Figma */}
        <svg 
          className="absolute"
          style={{
            width: '30px',
            height: '37px',
            left: '682px',
            top: '72px',
            filter: 'drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.10))'
          }}
          viewBox="0 0 112 127" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M47.1692 51.8867L53.682 31.4268L59.0076 50.3659L75.0013 45.0234L63.129 59.8355L74.1024 73.1551L59.0076 69.3051L52.5117 87.662L46.5756 68.7115L33.5612 74.6307L42.7538 61.6107L29.1289 44.752L47.1692 51.8867Z" fill="#E96036"/>
          <path d="M58.0137 30.209L62.0605 44.6006L73.5752 40.7549L88.0703 35.9131L78.5127 47.8379L68.9268 59.7969L77.5752 70.2939L86.3281 80.917L72.9902 77.5156L61.8779 74.6807L56.7539 89.1631L52.252 101.886L48.2178 89.0068L43.8027 74.915L35.4238 78.7266L20.3057 85.6035L29.8848 72.0352L37.1152 61.7939L25.6289 47.5811L14.877 34.2764L30.7842 40.5674L44.3418 45.9287L49.3936 30.0615L53.9492 15.752L58.0137 30.209Z" stroke="white" strokeWidth="6"/>
        </svg>

        <svg 
          className="absolute"
          style={{
            width: '30px',
            height: '37px',
            left: '42px',
            top: '405px',
            filter: 'drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.10))'
          }}
          viewBox="0 0 111 127" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M46.9524 52.6367L53.4652 32.1768L58.7908 51.1159L74.7845 45.7734L62.9122 60.5855L73.8856 73.9051L58.7908 70.0551L52.2949 88.412L46.3588 69.4615L33.3444 75.3807L42.537 62.3607L28.9121 45.502L46.9524 52.6367Z" fill="#E96036"/>
          <path d="M57.7969 30.959L61.8438 45.3506L73.3584 41.5049L87.8535 36.6631L78.2959 48.5879L68.71 60.5469L77.3584 71.0439L86.1113 81.667L72.7734 78.2656L61.6611 75.4307L56.5371 89.9131L52.0352 102.636L48.001 89.7568L43.5859 75.665L35.207 79.4766L20.0889 86.3535L29.668 72.7852L36.8984 62.5439L25.4121 48.3311L14.6602 35.0264L30.5674 41.3174L44.125 46.6787L49.1768 30.8115L53.7324 16.502L57.7969 30.959Z" stroke="white" strokeWidth="6"/>
        </svg>

        <svg 
          className="absolute"
          style={{
            width: '72px',
            height: '89px',
            left: '620px',
            top: '396px',
            filter: 'drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.10))'
          }}
          viewBox="0 0 175 206" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M71.9742 80.8029L87.6182 31.6572L100.411 77.15L138.828 64.3169L110.31 99.8963L136.669 131.891L100.411 122.643L84.8072 166.737L70.5483 121.217L39.2873 135.435L61.3682 104.16L28.6406 63.6651L71.9742 80.8029Z" fill="#E96036"/>
          <path d="M91.9502 30.4395L103.463 71.3848L137.402 60.0488L151.897 55.207L142.34 67.1309L116.108 99.8574L140.142 129.029L148.895 139.653L135.557 136.251L103.28 128.019L89.0498 168.238L84.5469 180.961L80.5127 168.082L67.7754 127.421L41.1504 139.531L26.0322 146.407L35.6113 132.84L55.7305 104.344L25.1406 66.4932L14.3887 53.1895L30.2959 59.4805L69.1475 74.8457L83.3301 30.292L87.8848 15.9824L91.9502 30.4395Z" stroke="white" strokeWidth="6"/>
        </svg>

        {/* Yellow stars */}
        <svg 
          className="absolute"
          style={{
            width: '42px',
            height: '43px',
            left: '686px',
            top: '347px',
            filter: 'drop-shadow(8px 8px 0 rgba(0, 0, 0, 0.10))'
          }}
          viewBox="0 0 101 104" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M43.8715 12.3215C43.7246 11.8442 43.0344 11.8735 42.9463 12.3655C41.8008 18.438 38.2175 36.9125 37.1968 36.9125C35.9779 36.9125 9.92567 45.8634 12.3708 46.2746C14.816 46.6784 37.1968 50.3425 37.1968 50.3425C37.1968 50.3425 45.7439 79.6476 44.9288 78.4287L51.4419 51.9726L75.6071 44.3214C76.055 44.1745 76.0403 43.5357 75.585 43.4035L51.8457 36.0975L43.8715 12.3215Z" fill="#FFC547"/>
          <path d="M37.2031 11.2832C38.486 4.37365 47.5126 4.75739 49.4111 10.4639L49.4131 10.4629L56.4326 31.3936L77.3047 37.8174L77.3037 37.8184C83.0308 39.5656 83.4685 47.8944 77.4277 49.875L77.3994 49.8848L77.3711 49.8936L56.333 56.5547L50.792 79.0635C50.7458 79.4749 50.644 80.0173 50.4189 80.5908C50.1845 81.1882 49.4205 82.8433 47.4297 83.7666C45.1808 84.8096 43.167 84.1288 42.2197 83.626C41.3395 83.1587 40.7983 82.5796 40.5986 82.3574C40.3456 82.0757 40.1688 81.825 40.0703 81.6777L38.6377 79.5342L38.9668 78.1943C38.8305 77.6439 38.6478 76.9255 38.417 76.0596C37.7429 73.531 36.7621 70.0194 35.7461 66.4375C34.7323 62.8633 33.6914 59.2487 32.9043 56.5254C32.8023 56.1724 32.7042 55.8345 32.6113 55.5137C30.4863 55.1657 27.6579 54.7029 24.7559 54.2275C18.8584 53.2616 12.6456 52.2438 11.418 52.041L11.4102 52.04L11.4014 52.0381C11.1647 51.9983 9.08466 51.7101 7.59668 49.7822C6.66063 48.5693 6.25406 47.0757 6.38965 45.6201C6.50855 44.3438 7.00913 43.4195 7.32031 42.9365C7.90735 42.0254 8.61347 41.4791 8.83887 41.3066C9.16701 41.0556 9.48135 40.8589 9.71191 40.7227C10.5608 40.221 11.7037 39.7075 12.7676 39.2568C15.0377 38.2953 18.2255 37.0941 21.4307 35.9404C24.6588 34.7785 28.0053 33.6285 30.6367 32.7646C31.4224 32.5067 32.1558 32.2709 32.8105 32.0654C33.2488 30.4148 33.7713 28.1717 34.3125 25.6768C35.462 20.378 36.6332 14.3036 37.2031 11.2822V11.2832Z" stroke="white" strokeWidth="8"/>
        </svg>

        <svg 
          className="absolute"
          style={{
            width: '92px',
            height: '96px',
            left: '113px',
            top: '228px',
            filter: 'drop-shadow(8px 8px 0 rgba(0, 0, 0, 0.10))'
          }}
          viewBox="0 0 177 183" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M81.7772 12.4975C81.4545 11.4487 79.9378 11.5133 79.7442 12.5943C77.2272 25.9378 69.3534 66.5331 67.1106 66.5331C64.4322 66.5331 7.18584 86.2014 12.5587 87.105C17.9316 87.9924 67.1106 96.0437 67.1106 96.0437C67.1106 96.0437 85.8916 160.438 84.1006 157.759L98.4122 99.6256L151.512 82.8131C152.496 82.4904 152.464 81.0867 151.464 80.7963L99.2996 64.7421L81.7772 12.4975Z" fill="#FFC547"/>
          <path d="M74.001 11.5117C75.39 4.01257 85.2427 4.3634 87.3164 10.6396L87.3184 10.6387L103.886 60.0381L153.183 75.21L153.182 75.2109C159.454 77.1158 159.911 86.2106 153.333 88.3672L153.276 88.3848L103.304 104.207L90.0596 157.999C90.0401 158.428 89.9604 159.163 89.6504 159.953C89.4137 160.556 88.6468 162.215 86.6523 163.141C84.3998 164.185 82.382 163.504 81.4297 162.999C80.5442 162.529 79.997 161.945 79.791 161.716C79.5316 161.427 79.3482 161.166 79.2422 161.008L77.8096 158.865L78.2041 157.261C78.1977 157.232 78.1924 157.203 78.1855 157.173C77.8691 155.781 77.3063 153.575 76.5537 150.752C75.0575 145.139 72.8886 137.378 70.6543 129.501C68.4223 121.632 66.1336 113.677 64.4023 107.687C63.658 105.111 63.0163 102.9 62.5273 101.216C61.3709 101.026 59.9762 100.798 58.3984 100.54C53.704 99.7714 47.3884 98.7367 40.9053 97.6748C27.9423 95.5516 14.2981 93.3157 11.6064 92.8711L11.5977 92.8701L11.5898 92.8691C11.2628 92.8141 9.12359 92.5008 7.6084 90.5381C6.65886 89.3078 6.24719 87.794 6.38477 86.3164C6.50572 85.0179 7.01557 84.0689 7.34375 83.5596C7.96505 82.5953 8.73484 81.9878 9.05078 81.7461C9.46981 81.4255 9.90193 81.151 10.2764 80.9297C11.7008 80.0879 13.8276 79.1155 16.1592 78.1279C20.9649 76.0923 27.8232 73.5046 34.8359 70.9805C41.8715 68.4481 49.1626 65.9437 54.8779 64.0674C57.7311 63.1307 60.2236 62.3398 62.1084 61.7783C62.4712 61.6702 62.8189 61.5696 63.1475 61.4756C63.4035 60.6805 63.7037 59.6708 64.0371 58.4463C65.0887 54.5838 66.3357 49.2128 67.6123 43.3281C70.1586 31.5903 72.7453 18.1676 74.001 11.5107V11.5117Z" stroke="white" strokeWidth="8"/>
        </svg>

        {/* Robot character positioned like in Figma */}
        <div 
          className="absolute"
          style={{
            left: '268px',
            top: '50px',
            width: '68px',
            height: '82px',
            transform: 'rotate(-8.311deg)'
          }}
        >
          <svg width="121" height="140" viewBox="0 0 121 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M108.563 50.6977C106.027 45.1443 101.507 41.499 94.8496 39.7071C96.5785 31.8934 95.3729 27.4654 93.78 24.1438C91.2834 18.9219 86.5934 15.3014 80.9356 14.2208C75.5839 13.1918 67.7214 13.9647 62.0723 14.7899C35.3923 18.6875 29.1784 27.5803 26.8141 33.9458C26.7793 34.0376 23.3666 43.4458 20.591 53.5894C19.116 58.987 17.2852 65.708 17.2013 71.9908C17.0274 84.7788 24.3213 89.6081 28.6886 91.3492C30.9289 92.2452 33.8296 93.1122 39.98 93.0806C36.4764 111.296 36.121 120.797 42.454 127.819C46.3266 132.108 52.0414 134.172 57.7565 133.337C59.8973 133.024 61.9614 132.318 63.9044 131.245C66.3546 129.885 72.8494 126.278 92.0002 96.4233C96.8717 88.8247 101.2 81.527 104.169 75.8727C108.81 67.0266 112.352 59.0345 108.564 50.707L108.563 50.6977Z" fill="#1B1919"/>
            <path d="M99.3108 43.8138C96.7753 38.2604 92.2551 34.6152 85.5976 32.8234C87.3265 25.0096 86.1209 20.5814 84.528 17.2599C82.0314 12.038 77.3414 8.41754 71.6836 7.33691C66.3319 6.30787 58.4694 7.0809 52.8203 7.90615C26.1404 11.8037 19.9264 20.6964 17.5621 27.0619C17.5274 27.1537 14.1146 36.562 11.339 46.7056C9.864 52.1032 8.03325 58.8241 7.94933 65.1069C7.77545 77.8949 15.0693 82.7242 19.4366 84.4653C21.6769 85.3613 24.5777 86.2283 30.728 86.1967C27.2245 104.412 26.869 113.914 33.202 120.935C37.0746 125.224 42.7894 127.288 48.5045 126.453C50.6453 126.14 52.7094 125.434 54.6524 124.361C57.1026 123.001 63.5975 119.394 82.7482 89.5394C87.6198 81.9408 91.9477 74.6431 94.9167 68.9887C99.5578 60.1427 103.1 52.1507 99.3121 43.8232L99.3108 43.8138Z" fill="white"/>
            <path d="M32.8728 32.6946C32.1618 34.619 20.6182 67.3593 25.4781 69.3078C30.338 71.2563 51.5599 67.6456 51.5599 67.6456C51.5599 67.6456 39.8287 113.937 46.742 110.095C53.6459 106.255 86.6986 55.452 84.474 50.5756C82.2494 45.6993 61.5451 48.8973 61.5451 48.8973C61.5451 48.8973 74.4872 24.477 68.6095 23.3418C62.7223 22.2079 35.4081 25.8514 32.8728 32.6946Z" fill="#FFC547"/>
            <g style={{mixBlendMode:'overlay'}} opacity="0.5">
              <path d="M37.7816 38.3331C35.8145 43.2632 33.8487 48.2027 31.8815 53.1327C29.9357 58.0115 37.5632 60.9042 39.517 56.0146C41.4842 51.0846 43.45 46.1451 45.4171 41.215C47.3629 36.3363 39.7355 33.4435 37.7816 38.3331Z" fill="white"/>
            </g>
          </svg>
        </div>

        {/* Additional decorative elements */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a7304a2766381e931e35d83124bab474727fa9f3?width=335" 
          alt="Decorative"
          className="absolute"
          style={{
            width: '110px',
            height: '109px',
            left: '566px',
            top: '186px',
            transform: 'rotate(21.656deg)'
          }}
        />

        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/650efdca367c7620a9484f97f351d434be96470b?width=340" 
          alt="Decorative"
          className="absolute"
          style={{
            width: '112px',
            height: '111px',
            left: '213px',
            top: '260px',
            transform: 'rotate(-176.855deg)'
          }}
        />

        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/637edfefd1c11e22f05f22ca05071c44e431aa66?width=341" 
          alt="Decorative"
          className="absolute"
          style={{
            width: '113px',
            height: '111px',
            left: '153px',
            top: '59px'
          }}
        />

        {/* Main Gift Card - positioned exactly like Figma */}
        <div 
          className="absolute flex items-center justify-center"
          style={{ 
            left: '122px', 
            top: '313px', 
            width: '554px', 
            height: '320px'
          }}
        >
          <div 
            className="w-full h-full bg-white rounded-[22px] px-8 py-6 flex flex-col items-center justify-center gap-6"
            style={{ 
              boxShadow: '0 3px 26px 0 rgba(0, 0, 0, 0.25)',
              width: '492px',
              height: '250px'
            }}
          >
            
            {/* Main headings */}
            <div className="flex flex-col items-center gap-3">
              <div 
                className="text-[#E96036] text-[22px] font-[800] leading-normal text-center"
                style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                איזה כיף!
              </div>
              <div 
                className="text-[#E96036] text-[42px] font-[800] leading-normal text-center"
                style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                קיבלת מתנה!
              </div>
            </div>

            {/* Subtitle */}
            <div 
              className="text-[#4C7EFB] text-[16px] font-[400] leading-normal text-center"
              style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              ממי המתנה? United כמובן!
            </div>

            {/* United Logo */}
            <div className="w-[290px] h-[55px] rounded-[10px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/378ddfe0d1afad1c8baf4e915e3a1587e200b3b8?width=1105" 
                alt="United Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Button */}
            <div className="mt-1">
              <div 
                className="flex items-center justify-center px-8 py-4 rounded-[35px] bg-[#4C7EFB]"
                style={{ boxShadow: '7px 7px 0 0 rgba(0, 0, 0, 0.10)' }}
              >
                <span 
                  className="text-white text-[12px] font-[700] leading-normal"
                  style={{ fontFamily: 'Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif' }}
                >
                  לצפייה במתנה
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
