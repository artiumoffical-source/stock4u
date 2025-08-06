import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function SMSVerification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-white hebrew-font" dir="rtl">
      {/* Header */}
      <header className="w-full bg-white px-8 py-4 h-[100px] flex items-center border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between w-full">
          {/* Left side - Cart and Login */}
          <div className="flex items-center gap-5">
            {/* Shopping Cart */}
            <div className="relative">
              <div className="w-12 h-12 bg-stock4u-happy-blue rounded-full flex items-center justify-center shadow-lg">
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
            </div>

            {/* Login Button */}
            <div className="bg-stock4u-pop-yellow rounded-full px-6 py-3">
              <span className="text-stock4u-pop-red font-bold hebrew-font">
                כניסה
              </span>
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 opacity-30">
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
            <Link to="/" className="text-stock4u-happy-blue text-lg hebrew-font hover:text-stock4u-royal-blue transition-colors">
              בית
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-stock4u-light-blue min-h-[746px] flex items-center justify-center py-20">
        <div className="bg-white rounded-[50px] shadow-[10px_10px_0_rgba(0,0,0,0.1)] p-10 w-[754px] max-w-full mx-4">
          <div className="flex flex-col items-center gap-10">
            {/* Title */}
            <h1 className="text-stock4u-dark-grey text-[30px] font-extrabold text-center">
              כניסה לאיזור האישי
            </h1>

            {/* Form Section */}
            <div className="flex flex-col items-center gap-16 w-full">
              {/* Code Input Section */}
              <div className="flex flex-col items-end gap-6 w-full max-w-[372px]">
                <div className="text-stock4u-black text-xl text-right">
                  הכניסו את הקוד שנשלח אליכם
                </div>

                {/* Code Input Field */}
                <div className="w-full">
                  <div className="flex justify-center items-center gap-4 bg-stock4u-light-blue border border-stock4u-happy-blue rounded-lg p-6 h-16">
                    {code.map((digit, index) => (
                      <input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        value={digit}
                        onChange={(e) =>
                          handleCodeChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-8 h-8 text-center text-2xl font-light bg-transparent border-none outline-none text-stock4u-nostalgic-blue"
                        maxLength={1}
                      />
                    ))}
                  </div>
                </div>

                {/* Problem Link */}
                <div className="text-right">
                  <span className="text-stock4u-black text-xl">יש בעיה? </span>
                  <Link
                    to="/login"
                    className="text-stock4u-happy-blue text-xl underline"
                  >
                    לחצו כאן &gt;
                  </Link>
                </div>
              </div>

              {/* Social Login Section */}
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-stock4u-dark-grey text-xl font-extrabold">
                  כניסה באמצעות:
                </h2>

                {/* Social Icons */}
                <div className="flex justify-center items-center gap-5">
                  {/* Google */}
                  <button className="w-[60px] h-[58px] border-2 border-stock4u-light-blue bg-white rounded-lg flex items-center justify-center p-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.3931 16.3545C31.3931 15.2702 31.3059 14.1858 31.1314 13.1235H16.3203V19.2536H24.8056C24.4566 21.2232 23.3223 22.9936 21.6645 24.1001V28.0835H26.7251C29.6917 25.3172 31.3931 21.2232 31.3931 16.3545Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M16.3168 31.9342C20.5486 31.9342 24.1259 30.5179 26.7217 28.0835L21.661 24.1001C20.2432 25.0738 18.4327 25.6271 16.3168 25.6271C12.216 25.6271 8.74768 22.8166 7.50434 19.0544H2.29102V23.1706C4.95221 28.5483 10.3837 31.9342 16.3168 31.9342Z"
                        fill="#34A853"
                      />
                      <path
                        d="M7.50495 19.0551C6.85045 17.0856 6.85045 14.9389 7.50495 12.9472V8.85315H2.2908C0.0436927 13.3456 0.0436927 18.6568 2.2908 23.1492L7.50495 19.0551Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M16.3168 6.37397C18.5636 6.32971 20.7231 7.19279 22.3372 8.76403L26.8307 4.20522C23.9732 1.50534 20.2214 0.0226208 16.3168 0.0668811C10.3837 0.0668811 4.95221 3.47492 2.29102 8.85255L7.50434 12.9688C8.74768 9.1845 12.216 6.37397 16.3168 6.37397Z"
                        fill="#EA4335"
                      />
                    </svg>
                  </button>

                  {/* Apple */}
                  <button className="w-[60px] h-[58px] border-2 border-stock4u-light-blue bg-white rounded-lg flex items-center justify-center p-4">
                    <svg
                      width="26"
                      height="32"
                      viewBox="0 0 28 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9236 8.2411C15.7471 8.39492 17.5706 7.31817 18.7103 5.95301C19.831 4.54939 20.5718 2.66508 20.3818 0.74231C18.7673 0.81922 16.7728 1.81906 15.6332 3.22268C14.5885 4.43402 13.6957 6.39524 13.9236 8.2411ZM16.1017 9.56573C17.2857 9.09511 18.7515 8.51246 20.358 8.60606C21.3837 8.68297 24.3469 8.99061 26.2463 11.8363C26.2376 11.8429 26.2183 11.8556 26.1897 11.8744C25.7198 12.1838 22.7345 14.149 22.7703 18.0276C22.806 22.6486 26.5246 24.3718 27.0111 24.5973C27.0428 24.612 27.0608 24.6203 27.0631 24.6227C27.0611 24.6289 27.0573 24.6413 27.0517 24.6595C26.9547 24.9774 26.3151 27.0719 24.8597 29.2181C23.5111 31.2178 22.1245 33.179 19.9211 33.2174C18.8842 33.2362 18.1857 32.9306 17.4584 32.6124C16.6935 32.2778 15.8966 31.9292 14.6406 31.9292C13.3394 31.9292 12.5061 32.2871 11.704 32.6317C11.0072 32.931 10.3339 33.2201 9.39801 33.2559C7.2706 33.3328 5.65605 31.1409 4.30742 29.1412C1.55319 25.1034 -0.55523 17.7584 2.29398 12.7977C3.6806 10.3173 6.20689 8.75988 8.92314 8.72142C10.1082 8.69961 11.2382 9.15404 12.2266 9.55152C12.981 9.85487 13.6528 10.125 14.2037 10.125C14.6945 10.125 15.3398 9.86858 16.1017 9.56573Z"
                        fill="#1B1919"
                      />
                    </svg>
                  </button>

                  {/* Facebook */}
                  <button className="w-[60px] h-[58px] border-2 border-stock4u-light-blue bg-white rounded-lg flex items-center justify-center p-4">
                    <svg
                      width="36"
                      height="37"
                      viewBox="0 0 36 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.45534 35.1399C7.62723 34.9231 5.92454 34.076 4.62493 32.737C3.32532 31.3979 2.50546 29.6458 2.29905 27.7664C2.00591 24.9253 1.75391 22.0076 1.75391 19.0344C1.75391 16.0611 2.00333 13.1408 2.29905 10.3024C2.50546 8.42294 3.32532 6.67083 4.62493 5.33176C5.92454 3.99269 7.62723 3.14566 9.45534 2.92879C12.235 2.61165 15.0893 2.33679 18.0002 2.33679C20.911 2.33679 23.7653 2.60901 26.545 2.92879C28.3732 3.14566 30.0758 3.99269 31.3755 5.33176C32.6751 6.67083 33.4949 8.42294 33.7013 10.3024C33.997 13.1434 34.2465 16.0611 34.2465 19.0344C34.2465 22.0076 33.997 24.9253 33.7013 27.7664C33.4949 29.6458 32.6751 31.3979 31.3755 32.737C30.0758 34.076 28.3732 34.9231 26.545 35.1399C25.465 35.2633 24.3739 35.3752 23.2716 35.4756C23.0963 35.4906 22.9198 35.468 22.7534 35.4091C22.5871 35.3502 22.4345 35.2564 22.3053 35.1336C22.1761 35.0108 22.0733 34.8617 22.0032 34.6958C21.9332 34.5299 21.8975 34.3508 21.8985 34.17V27.0475H25.8122C26.1532 27.0475 26.4802 26.9083 26.7213 26.6605C26.9624 26.4127 27.0979 26.0765 27.0979 25.7261V21.6904C27.0979 21.34 26.9624 21.0039 26.7213 20.756C26.4802 20.5082 26.1532 20.369 25.8122 20.369H21.8985V17.6997C21.8981 17.3487 21.9652 17.0011 22.0957 16.6768C22.2262 16.3525 22.4177 16.0578 22.6592 15.8096C22.9006 15.5614 23.1874 15.3646 23.5029 15.2305C23.8185 15.0963 24.1567 15.0274 24.4982 15.0278H25.8122C26.1532 15.0278 26.4802 14.8886 26.7213 14.6408C26.9624 14.3929 27.0979 14.0568 27.0979 13.7064V11.0186C27.0979 10.3106 26.8243 9.6317 26.3372 9.13111C25.8502 8.63052 25.1896 8.34929 24.5008 8.34929H23.1996C21.1316 8.34929 19.1483 9.19345 17.6857 10.6961C16.2232 12.1988 15.4012 14.237 15.4005 16.3624V20.369H11.4868C11.1458 20.369 10.8187 20.5082 10.5776 20.756C10.3365 21.0039 10.201 21.34 10.201 21.6904V25.7261C10.201 26.0765 10.3365 26.4127 10.5776 26.6605C10.8187 26.9083 11.1458 27.0475 11.4868 27.0475H15.403V34.2757C15.4049 34.4545 15.3707 34.6317 15.3026 34.7963C15.2345 34.9608 15.134 35.1091 15.0074 35.2317C14.8809 35.3543 14.7309 35.4487 14.5671 35.5089C14.4033 35.5691 14.2292 35.5937 14.0556 35.5813C12.5202 35.4679 10.9847 35.3207 9.45534 35.1399Z"
                        fill="#3B7ED1"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button className="bg-stock4u-happy-blue text-white px-6 py-3 rounded-full text-lg font-bold shadow-[10px_10px_0_rgba(0,0,0,0.1)] w-[281px]">
                אישור
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Statistics Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-stock4u-dark-grey mb-8 hebrew-font">
          אוקיי אני רוצה לשלוח מתנה, מה עכשיו?
        </h2>

        <div className="flex justify-center mb-16">
          <Link to="/stock-selection" className="inline-block bg-stock4u-happy-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg">
            מתחילים בבחירת מתנה &gt;
          </Link>
        </div>

        <p className="text-center text-stock4u-dark-grey mb-8">
          חברות פופולאריות להשקעה
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Company Logos Ticker */}
        <div className="flex items-center gap-12 opacity-30 animate-pulse overflow-hidden">
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

      <Footer />
    </div>
  );
}
