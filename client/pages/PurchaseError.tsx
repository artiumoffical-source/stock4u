import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGift } from "../contexts/GiftContext";
import Footer from "../components/Footer";

export default function PurchaseError() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRetry = () => {
    // Scroll to top before navigation
    window.scrollTo(0, 0);
    navigate("/checkout");
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#FFF",
        direction: "rtl",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          height: "100px",
          padding: "0 35px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #DDD",
          background: "#FFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#4C7EFB",
              fontSize: "20px",
            }}
          >
            בית
          </Link>
          <span style={{ color: "#4C7EFB", fontSize: "20px" }}>אודות</span>
          <span style={{ color: "#4C7EFB", fontSize: "20px" }}>
            רשימת מתנות
          </span>
          <span style={{ color: "#4C7EFB", fontSize: "20px" }}>קריירה</span>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6147 18.2616L15.1993 14.0468C16.4584 12.6646 17.1061 10.8698 17.0059 9.0406C16.9057 7.21143 16.0654 5.49085 14.6621 4.24155C13.2588 2.99224 11.4022 2.31183 9.48358 2.34372C7.56497 2.37562 5.73429 3.11734 4.37743 4.41253C3.02056 5.70772 2.24352 7.45519 2.21011 9.28658C2.17669 11.118 2.88951 12.8902 4.1983 14.2297C5.50709 15.5692 7.30961 16.3713 9.22589 16.467C11.1422 16.5626 13.0225 15.9444 14.4705 14.7425L18.886 18.9572C18.9837 19.0442 19.113 19.0915 19.2466 19.0892C19.3802 19.087 19.5076 19.0353 19.6021 18.9452C19.6966 18.855 19.7507 18.7333 19.753 18.6058C19.7554 18.4783 19.7058 18.3549 19.6147 18.2616ZM3.26598 9.42191C3.26598 8.22132 3.63895 7.04768 4.33772 6.04942C5.0365 5.05117 6.0297 4.27312 7.19172 3.81367C8.35375 3.35422 9.6324 3.23401 10.866 3.46824C12.0996 3.70246 13.2327 4.2806 14.1221 5.12955C15.0115 5.9785 15.6172 7.06013 15.8625 8.23765C16.1079 9.41518 15.982 10.6357 15.5006 11.7449C15.0193 12.8541 14.2042 13.8022 13.1584 14.4692C12.1126 15.1362 10.8831 15.4922 9.62535 15.4922C7.93937 15.4903 6.32302 14.8501 5.13085 13.7121C3.93868 12.5741 3.26802 11.0313 3.26598 9.42191Z"
                fill="#4C7EFB"
              />
            </svg>
            <span
              style={{
                color: "#4C7EFB",
                fontSize: "20px",
                opacity: 0.3,
                letterSpacing: "-2.34px",
              }}
            >
              ________________
            </span>
            <span style={{ color: "#4C7EFB", fontSize: "20px" }}>חיפוש</span>
          </div>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/273a893a02986cbf4bb3024588c444f7935068c3?width=562"
          style={{
            height: "66px",
            width: "auto",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          alt="Logo"
        />

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "48px",
              height: "47px",
              borderRadius: "56px",
              background: "#4C7EFB",
              boxShadow: "10px 10px 0 0 rgba(0, 0, 0, 0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9491 10.3117H5.35309C5.0577 10.3121 4.76621 10.3791 4.50041 10.508C4.2346 10.6368 4.00135 10.8241 3.81809 11.0557C3.63559 11.2867 3.50807 11.5563 3.44517 11.8439C3.38228 12.1315 3.38567 12.4296 3.45509 12.7157L5.02009 19.1237C5.24668 19.9493 5.73865 20.6775 6.42009 21.1957C7.10209 21.7147 7.93709 21.9957 8.79609 21.9957H16.5041C17.3631 21.9957 18.1981 21.7147 18.8801 21.1957C19.5615 20.6775 20.0535 19.9493 20.2801 19.1237L21.8451 12.7167C21.9504 12.2848 21.9042 11.8298 21.7142 11.4278C21.5241 11.0259 21.2018 10.7014 20.8011 10.5087C20.5345 10.3807 20.2428 10.3134 19.9471 10.3117M8.73809 14.2057V18.1007M12.6511 14.2057V18.1007M16.5641 14.2057V18.1007M19.4991 10.3117C19.4987 9.41577 19.3213 8.52872 18.9771 7.70154C18.6328 6.87437 18.1285 6.12338 17.4931 5.49173C16.2066 4.21223 14.4655 3.49453 12.6511 3.49573C10.8366 3.49453 9.09561 4.21223 7.80909 5.49173C7.17385 6.12346 6.66971 6.87449 6.32562 7.70166C5.98154 8.52883 5.8043 9.41584 5.80409 10.3117"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "14px",
                borderRadius: "50px",
                background: "#DBE3F3",
                color: "#4C7EFB",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              יציאה
            </div>
          </Link>

          <div
            style={{
              width: "178px",
              height: "47px",
              borderRadius: "56px",
              background: "#4C7EFB",
              boxShadow: "10px 10px 0 0 rgba(0, 0, 0, 0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to="/stock-selection"
              style={{
                color: "#FFF",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              לקניית מתנות!
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image with Error Message */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2F1043983b4d934ea2bea7b921f6194829?format=webp&width=800"
        style={{ width: "100%", height: "559px", objectFit: "cover" }}
        alt="אופס! היתה בעיה..."
      />

      {/* Progress Line */}
      <svg
        style={{
          width: "0px",
          height: "342px",
          strokeWidth: "33px",
          stroke: "#4C7EFB",
          position: "absolute",
          right: "0px",
          top: "847px",
        }}
        width="17"
        height="376"
        viewBox="0 0 17 376"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7227 17.0681L16.7227 359.386"
          stroke="#4C7EFB"
          strokeWidth="33"
          strokeLinecap="round"
        />
      </svg>

      {/* Error Message and Retry Button */}
      <div
        style={{
          display: "flex",
          width: "378px",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "730px",
          height: "146px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "302.781px",
            flexDirection: "column",
            alignItems: "center",
            gap: "28.26px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#486284",
              textAlign: "center",
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "26.914px",
              fontWeight: "700",
              lineHeight: "54.484px",
            }}
          >
            נדמה שיש בעיה...
          </div>
        </div>

        <div
          style={{
            width: "378.269px",
            height: "67.285px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "378px",
              height: "67px",
              padding: "14.803px 34.988px",
              justifyContent: "center",
              alignItems: "center",
              gap: "13.457px",
              borderRadius: "75.359px",
              background: "#4C7EFB",
              boxShadow: "13.457px 13.457px 0 0 rgba(0, 0, 0, 0.10)",
              position: "absolute",
              left: "0px",
              top: "0px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onClick={handleRetry}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "16px 16px 0 0 rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "13.457px 13.457px 0 0 rgba(0, 0, 0, 0.10)";
            }}
          >
            <div
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily:
                  "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "24.222px",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              נסה שוב
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1216px",
          alignItems: "flex-start",
          gap: "24px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "1018px",
          height: "188px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "32px",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            flex: "1 0 0",
            borderRadius: "24px",
            background: "rgba(239, 242, 246, 0.40)",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#486284",
              textAlign: "center",
              fontFamily:
                "DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "76px",
              letterSpacing: "0.5px",
            }}
          >
            24+
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "#8CA2C0",
              textAlign: "center",
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "0.5px",
            }}
          >
            מדינות שבהם אנו עובדים
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: "32px",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            flex: "1 0 0",
            borderRadius: "24px",
            background: "rgba(239, 242, 246, 0.40)",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#486284",
              textAlign: "center",
              fontFamily:
                "DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "76px",
              letterSpacing: "0.5px",
            }}
          >
            17M
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "#8CA2C0",
              textAlign: "center",
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "0.5px",
            }}
          >
            אנשים שהאמינו בנו
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: "32px",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            flex: "1 0 0",
            borderRadius: "24px",
            background: "rgba(239, 242, 246, 0.40)",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#486284",
              textAlign: "center",
              fontFamily:
                "DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "76px",
              letterSpacing: "0.5px",
            }}
          >
            +95%
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "#8CA2C0",
              textAlign: "center",
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "0.5px",
            }}
          >
            לקוחות מרוצים
          </div>
        </div>
      </div>

      {/* Companies Title */}
      <div
        style={{
          width: "281px",
          color: "#486284",
          textAlign: "center",
          fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "normal",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "1257px",
          height: "30px",
        }}
      >
        חברות פופולאריות להשקעה
      </div>

      {/* Companies Ticker */}
      <div
        style={{
          width: "100%",
          height: "269px",
          position: "absolute",
          top: "1206px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            padding: "10px",
            alignItems: "flex-start",
            gap: "44px",
            opacity: "0.3",
            position: "absolute",
            left: "0px",
            top: "84px",
            width: "200%",
            height: "94px",
          }}
        >
          {[
            "GOOG",
            "AMZN",
            "NASDAQ",
            "AAPL",
            "AAN",
            "NVDA",
            "MSFT",
            "META",
            "SONY",
            "CRM",
            "ORCL",
            "JNJ",
            "TSLA",
          ].map((symbol, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  color: "#486284",
                  textAlign: "center",
                  fontFamily:
                    "Hanken Grotesk, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "51.885px",
                  fontWeight: "700",
                  lineHeight: "53.614px",
                }}
              >
                {symbol}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "573px",
            height: "269px",
            background:
              "linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
            position: "absolute",
            right: "0px",
            top: "0px",
          }}
        />
        <div
          style={{
            width: "573px",
            height: "269px",
            background:
              "linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
      </div>

      <Footer />
    </div>
  );
}
