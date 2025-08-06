import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGift } from "../contexts/GiftContext";

export default function PurchaseSuccess() {
  const { giftData } = useGift();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#FFF",
        direction: "rtl",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Hero Image with Success Message - Full screen */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2Fc2a16aedf92b4360a0f37dab4b509da2?format=webp&width=800"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        alt="הרכישה בוצעה בהצלחה!"
      />

      {/* Return to Home Button */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex",
            padding: "14px 28px",
            borderRadius: "50px",
            background: "#4C7EFB",
            color: "#FFF",
            fontSize: "18px",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "10px 10px 0 0 rgba(0, 0, 0, 0.10)",
          }}
        >
          חזור לעמוד הבית
        </Link>
      </div>
    </div>
  );
}
