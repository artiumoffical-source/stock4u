import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSendCode = () => {
    if (phoneNumber.trim()) {
      // Here you would typically validate the phone number and send SMS
      navigate("/sms-verification");
    }
  };

  return (
    <div className="min-h-screen bg-white hebrew-font" dir="rtl">
      {/* Header */}
      <header className="w-full bg-white px-8 py-4 h-[75px] flex items-center border-b border-gray-200">
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

            {/* Login Button - Active */}
            <div className="bg-stock4u-pop-yellow rounded-full px-6 py-3">
              <span className="text-stock4u-pop-red font-bold hebrew-font">
                כניסה
              </span>
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
              <span className="text-stock4u-happy-blue text-lg hebrew-font opacity-30">
                ________________
              </span>
              <span className="text-stock4u-happy-blue text-lg hebrew-font">
                חיפוש
              </span>
            </div>
            <Link to="/" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              קריירה
            </Link>
            <Link to="/stock-selection" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              רשימת מתנות
            </Link>
            <Link to="/" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              אודות
            </Link>
            <Link
              to="/"
              className="text-stock4u-happy-blue text-lg hebrew-font hover:text-blue-600"
            >
              בית
            </Link>
          </div>
        </div>
      </header>

      {/* Login Section */}
      <section className="w-full h-[746px] bg-stock4u-light-blue flex items-center justify-center">
        <div className="w-[754px] h-[527px] bg-white rounded-[50px] shadow-[10px_10px_0_rgba(0,0,0,0.1)] p-10 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-10 w-full">
            {/* Title */}
            <h1 className="text-3xl font-bold text-stock4u-dark-grey text-center">
              כניסה לאיזור האישי
            </h1>

            {/* Phone Input Section */}
            <div className="flex flex-col items-center gap-16 w-full">
              <div className="flex flex-col items-end gap-2 w-full max-w-[372px]">
                <div className="flex justify-end items-start gap-3 w-full">
                  <label className="text-xl text-black text-right">
                    מספר נייד
                  </label>
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="הכניסו מספר נייד"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full h-16 px-7 py-5 bg-[#F5F7FC] border border-stock4u-happy-blue rounded-lg text-right text-xl text-[#3C4382] placeholder:text-[#3C4382] focus:outline-none focus:ring-2 focus:ring-stock4u-happy-blue focus:border-transparent"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Social Login Section */}
              <div className="flex flex-col items-center gap-8">
                <h3 className="text-xl font-bold text-stock4u-dark-grey">
                  כניסה באמצעות:
                </h3>

                <div className="flex items-center gap-5">
                  {/* Google */}
                  <button className="w-[60px] h-[58px] flex items-center justify-center border-2 border-stock4u-light-blue bg-white rounded-[10px] hover:bg-gray-50 transition-colors">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.3931 16.837C31.3931 15.7526 31.3059 14.6682 31.1314 13.606H16.3203V19.736H24.8056C24.4566 21.7056 23.3223 23.476 21.6645 24.5825V28.5659H26.7251C29.6917 25.7997 31.3931 21.7056 31.3931 16.837Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M16.3168 32.4166C20.5486 32.4166 24.1259 31.0003 26.7217 28.566L21.661 24.5825C20.2432 25.5563 18.4327 26.1095 16.3168 26.1095C12.216 26.1095 8.74768 23.299 7.50434 19.5369H2.29102V23.6531C4.95221 29.0307 10.3837 32.4166 16.3168 32.4166Z"
                        fill="#34A853"
                      />
                      <path
                        d="M7.50495 19.5377C6.85045 17.5681 6.85045 15.4215 7.50495 13.4298V9.33569H2.2908C0.0436927 13.8281 0.0436927 19.1393 2.2908 23.6318L7.50495 19.5377Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M16.3168 6.85639C18.5636 6.81213 20.7231 7.67521 22.3372 9.24645L26.8307 4.68764C23.9732 1.98776 20.2214 0.505043 16.3168 0.549303C10.3837 0.549303 4.95221 3.95735 2.29102 9.33497L7.50434 13.4512C8.74768 9.66692 12.216 6.85639 16.3168 6.85639Z"
                        fill="#EA4335"
                      />
                    </svg>
                  </button>

                  {/* Apple */}
                  <button className="w-[60px] h-[58px] flex items-center justify-center border-2 border-stock4u-light-blue bg-white rounded-[10px] hover:bg-gray-50 transition-colors">
                    <svg
                      width="28"
                      height="33"
                      viewBox="0 0 28 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9236 7.7234C15.7471 7.87722 17.5706 6.80047 18.7103 5.43531C19.831 4.03169 20.5718 2.14738 20.3818 0.224609C18.7673 0.30152 16.7728 1.30136 15.6332 2.70498C14.5885 3.91632 13.6957 5.87754 13.9236 7.7234ZM16.1017 9.04803C17.2857 8.57741 18.7515 7.99476 20.358 8.08836C21.3837 8.16527 24.3469 8.47291 26.2463 11.3186C26.2376 11.3252 26.2183 11.3379 26.1897 11.3567C25.7198 11.6661 22.7345 13.6313 22.7703 17.5099C22.806 22.1309 26.5246 23.8541 27.0111 24.0796C27.0428 24.0943 27.0608 24.1026 27.0631 24.105C27.0611 24.1112 27.0573 24.1236 27.0517 24.1418C26.9547 24.4597 26.3151 26.5542 24.8597 28.7004C23.5111 30.7001 22.1245 32.6613 19.9211 32.6997C18.8842 32.7185 18.1857 32.4129 17.4584 32.0947C16.6935 31.7601 15.8966 31.4115 14.6406 31.4115C13.3394 31.4115 12.5061 31.7694 11.704 32.114C11.0072 32.4133 10.3339 32.7024 9.39801 32.7382C7.2706 32.8151 5.65605 30.6232 4.30742 28.6235C1.55319 24.5857 -0.55523 17.2407 2.29398 12.28C3.6806 9.79962 6.20689 8.24218 8.92314 8.20372C10.1082 8.18191 11.2382 8.63634 12.2266 9.03382C12.981 9.33717 13.6528 9.60734 14.2037 9.60734C14.6945 9.60734 15.3398 9.35088 16.1017 9.04803Z"
                        fill="#1B1919"
                      />
                    </svg>
                  </button>

                  {/* Facebook */}
                  <button className="w-[60px] h-[58px] flex items-center justify-center border-2 border-stock4u-light-blue bg-white rounded-[10px] hover:bg-gray-50 transition-colors">
                    <svg
                      width="36"
                      height="38"
                      viewBox="0 0 36 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.45534 35.6222C7.62723 35.4054 5.92454 34.5583 4.62493 33.2193C3.32532 31.8802 2.50546 30.1281 2.29905 28.2487C2.00591 25.4076 1.75391 22.4899 1.75391 19.5167C1.75391 16.5434 2.00333 13.6231 2.29905 10.7847C2.50546 8.90524 3.32532 7.15313 4.62493 5.81406C5.92454 4.47499 7.62723 3.62796 9.45534 3.41109C12.235 3.09395 15.0893 2.81909 18.0002 2.81909C20.911 2.81909 23.7653 3.09131 26.545 3.41109C28.3732 3.62796 30.0758 4.47499 31.3755 5.81406C32.6751 7.15313 33.4949 8.90524 33.7013 10.7847C33.997 13.6257 34.2465 16.5434 34.2465 19.5167C34.2465 22.4899 33.997 25.4076 33.7013 28.2487C33.4949 30.1281 32.6751 31.8802 31.3755 33.2193C30.0758 34.5583 28.3732 35.4054 26.545 35.6222C25.465 35.7456 24.3739 35.8575 23.2716 35.9579C23.0963 35.9729 22.9198 35.9503 22.7534 35.8914C22.5871 35.8325 22.4345 35.7387 22.3053 35.6159C22.1761 35.4931 22.0733 35.344 22.0032 35.1781C21.9332 35.0122 21.8975 34.8331 21.8985 34.6523V27.5298H25.8122C26.1532 27.5298 26.4802 27.3906 26.7213 27.1428C26.9624 26.895 27.0979 26.5588 27.0979 26.2084V22.1727C27.0979 21.8223 26.9624 21.4862 26.7213 21.2383C26.4802 20.9905 26.1532 20.8513 25.8122 20.8513H21.8985V18.182C21.8981 17.831 21.9652 17.4834 22.0957 17.1591C22.2262 16.8348 22.4177 16.5401 22.6592 16.2919C22.9006 16.0437 23.1874 15.8469 23.5029 15.7128C23.8185 15.5786 24.1567 15.5097 24.4982 15.5101H25.8122C26.1532 15.5101 26.4802 15.3709 26.7213 15.1231C26.9624 14.8752 27.0979 14.5391 27.0979 14.1887V11.5009C27.0979 10.7929 26.8243 10.114 26.3372 9.61341C25.8502 9.11282 25.1896 8.83159 24.5008 8.83159H23.1996C21.1316 8.83159 19.1483 9.67575 17.6857 11.1784C16.2232 12.6811 15.4012 14.7193 15.4005 16.8447V20.8513H11.4868C11.1458 20.8513 10.8187 20.9905 10.5776 21.2383C10.3365 21.4862 10.201 21.8223 10.201 22.1727V26.2084C10.201 26.5588 10.3365 26.895 10.5776 27.1428C10.8187 27.3906 11.1458 27.5298 11.4868 27.5298H15.403V34.758C15.4049 34.9368 15.3707 35.114 15.3026 35.2786C15.2345 35.4431 15.134 35.5914 15.0074 35.714C14.8809 35.8366 14.7309 35.931 14.5671 35.9912C14.4033 36.0514 14.2292 36.076 14.0556 36.0636C12.5202 35.9502 10.9847 35.803 9.45534 35.6222Z"
                        fill="#3B7ED1"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSendCode}
            className="w-[281px] h-[50px] bg-stock4u-happy-blue text-white text-lg font-bold rounded-full shadow-[10px_10px_0_rgba(0,0,0,0.1)] hover:bg-blue-600 transition-colors"
          >
            שלחו לי קוד לנייד
          </button>
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
          אוקיי אני רוצה לשלוח מתנה, מה עכשיו?
        </h2>
        <Link to="/stock-selection" className="inline-block bg-stock4u-happy-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg">
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

      {/* Footer - Using the clean Footer component */}

      <Footer />
    </div>
  );
}
