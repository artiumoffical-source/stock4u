import { useNavigate } from "react-router-dom";
import { useGift } from "../contexts/GiftContext";
import { useEffect } from "react";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const { resetGiftData } = useGift();

  useEffect(() => {
    // Auto redirect to home after 10 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleBackToHome = () => {
    resetGiftData();
    navigate("/");
  };

  const handleNewGift = () => {
    resetGiftData();
    navigate("/stock-selection");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF",
        direction: "rtl",
        fontFamily:
          "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Logo at top */}
      <div style={{ marginBottom: "60px" }}>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6a254d0c0b2c8be2045444c5ac5758e3c1096f1a?width=562"
          style={{ height: "66px", width: "auto" }}
          alt="STOCK4U Logo"
        />
      </div>

      {/* Success Icon */}
      <div style={{ marginBottom: "40px" }}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#4C7EFB" />
          <circle cx="50" cy="50" r="35" fill="#FFF" />
          <path
            d="M35 50L45 60L65 40"
            stroke="#4C7EFB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Success Message */}
      <h1
        style={{
          color: "#4C7EFB",
          fontSize: "48px",
          fontWeight: "700",
          textAlign: "center",
          fontFamily:
            "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
          margin: "0 0 30px 0",
        }}
      >
        תשלום בוצע בהצלחה!
      </h1>

      <p
        style={{
          color: "#486284",
          fontSize: "18px",
          fontWeight: "400",
          textAlign: "center",
          fontFamily: "Assistant, -apple-system, Roboto, Helvetica, sans-serif",
          margin: "0 0 50px 0",
          maxWidth: "500px",
          lineHeight: "1.6",
        }}
      >
        שלכם נשלחת לנמען ותגיע במועד שנבחר. תקבלו אישור במייל בקרוב. בקרוב.ייל בקרוב. אישור במייל בקרוב.וב.
      </p>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={handleNewGift}
          style={{
            display: "flex",
            padding: "15px 30px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            background: "#FFC547",
            boxShadow: "0 4px 15px rgba(255, 197, 71, 0.4)",
            border: "none",
            cursor: "pointer",
            color: "#E96036",
            fontFamily:
              "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
            fontSize: "16px",
            fontWeight: "700",
            minWidth: "180px",
          }}
        >
          שלח מתנה נוספת
        </button>

        <button
          onClick={handleBackToHome}
          style={{
            display: "flex",
            padding: "15px 30px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            background: "#4C7EFB",
            boxShadow: "0 4px 15px rgba(76, 126, 251, 0.4)",
            border: "none",
            cursor: "pointer",
            color: "#FFF",
            fontFamily:
              "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
            fontSize: "16px",
            fontWeight: "700",
            minWidth: "180px",
          }}
        >
          חזרה לעמוד הבית
        </button>
      </div>

      {/* Auto redirect notice */}
      <p
        style={{
          color: "#8CA2C0",
          fontSize: "14px",
          fontWeight: "400",
          textAlign: "center",
          fontFamily: "Assistant, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        מועבר אוטומטית לעמוד הבית תוך 10 שניות...
      </p>
    </div>
  );
}
