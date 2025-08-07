import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGift } from "../contexts/GiftContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PurchaseSuccess() {
  const { giftData } = useGift();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format delivery date and time
  const formatDeliveryDateTime = () => {
    if (giftData.sendingMethod === "immediately") {
      return "מיד";
    }
    
    if (giftData.selectedDate && giftData.selectedTime) {
      const { day, month, year } = giftData.selectedDate;
      const { hour, minute } = giftData.selectedTime;
      
      if (day && month && year && hour && minute) {
        return `${day} ${month} ${year}, ${hour}:${minute}`;
      }
    }
    
    return giftData.recipientDetails.deliveryDate || "תאריך לא צוין";
  };

  // Get sender name or fallback
  const senderName = giftData.senderName || "השולח";
  
  // Get recipient name or fallback
  const recipientName = giftData.recipientDetails.name || "הנמען";
  
  // Get recipient email or fallback
  const recipientEmail = giftData.recipientDetails.email || "לא צוין";

  // Get selected stocks for display
  const stocksList = giftData.selectedStocks.length > 0 
    ? giftData.selectedStocks.map(stock => stock.symbol).join(", ")
    : "מניות נבחרות";

  return (
    <div style={{ direction: "rtl", minHeight: "100vh", background: "#FFF" }}>
      <Header />
      
      {/* Hero Section with Success Message */}
      <div 
        style={{
          width: "100%",
          height: "559px",
          background: "linear-gradient(135deg, #E8F1FF 0%, #D1E3FF 50%, #B8D4FF 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        {/* Success Icon and Message */}
        <div style={{ textAlign: "center", zIndex: 2 }}>
          <div style={{
            width: "120px",
            height: "120px",
            background: "#4C7EFB",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            boxShadow: "10px 10px 0 0 rgba(0, 0, 0, 0.10)"
          }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1 style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#486284",
            margin: "0 0 16px",
            fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif"
          }}>
            הרכישה בוצעה בהצלחה!
          </h1>
          
          <p style={{
            fontSize: "24px",
            color: "#8CA2C0",
            margin: "0",
            fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
          }}>
            תודה שבחרתם בנו להענקת המתנה המושלמת
          </p>
        </div>

        {/* Decorative Elements */}
        <div style={{
          position: "absolute",
          top: "20px",
          right: "50px",
          fontSize: "40px",
          opacity: "0.3"
        }}>💎</div>
        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "80px",
          fontSize: "30px",
          opacity: "0.3"
        }}>✨</div>
        <div style={{
          position: "absolute",
          top: "60px",
          left: "120px",
          fontSize: "35px",
          opacity: "0.3"
        }}>🎁</div>
        <div style={{
          position: "absolute",
          bottom: "80px",
          right: "100px",
          fontSize: "45px",
          opacity: "0.3"
        }}>💰</div>
      </div>

      {/* Gift Details Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "60px 20px",
        background: "#F5F7FC"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "1275px",
          background: "#FFF",
          borderRadius: "30px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
        }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#486284",
            textAlign: "center",
            margin: "0 0 40px",
            fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif"
          }}>
            פרטי המתנה
          </h2>

          {/* Main Gift Info */}
          <div style={{
            background: "linear-gradient(135deg, #F5F7FC 0%, #E8F1FF 100%)",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "30px",
            textAlign: "center"
          }}>
            <p style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#486284",
              margin: "0",
              lineHeight: "1.4",
              fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              המתנה מ- <span style={{ color: "#E96036" }}>{senderName}</span> תישלח אל{" "}
              <span style={{ color: "#E96036" }}>{recipientName}</span> ב-{" "}
              <span style={{ color: "#E96036" }}>{formatDeliveryDateTime()}</span>
            </p>
          </div>

          {/* Gift Details Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "30px"
          }}>
            <div style={{
              background: "rgba(239, 242, 246, 0.6)",
              borderRadius: "16px",
              padding: "24px",
              textAlign: "center"
            }}>
              <h3 style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#4C7EFB",
                margin: "0 0 12px",
                fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif"
              }}>
                מניות נבחרות
              </h3>
              <p style={{
                fontSize: "16px",
                color: "#486284",
                margin: "0",
                fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
              }}>
                {stocksList}
              </p>
            </div>

            <div style={{
              background: "rgba(239, 242, 246, 0.6)",
              borderRadius: "16px",
              padding: "24px",
              textAlign: "center"
            }}>
              <h3 style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#4C7EFB",
                margin: "0 0 12px",
                fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif"
              }}>
                שיטת שליחה
              </h3>
              <p style={{
                fontSize: "16px",
                color: "#486284",
                margin: "0",
                fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
              }}>
                {giftData.sendingMethod === "immediately" ? "שליחה מיידית" : "שליחה מתוזמנת"}
              </p>
            </div>

            {giftData.greetingMessage && (
              <div style={{
                background: "rgba(239, 242, 246, 0.6)",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                gridColumn: "1 / -1"
              }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#4C7EFB",
                  margin: "0 0 12px",
                  fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif"
                }}>
                  הודעת ברכה
                </h3>
                <p style={{
                  fontSize: "16px",
                  color: "#486284",
                  margin: "0",
                  fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  fontStyle: "italic"
                }}>
                  "{giftData.greetingMessage}"
                </p>
              </div>
            )}
          </div>

          {/* Receipt Confirmation */}
          <div style={{
            background: "rgba(76, 126, 251, 0.1)",
            borderRadius: "16px",
            padding: "24px",
            textAlign: "center",
            border: "2px solid rgba(76, 126, 251, 0.2)"
          }}>
            <h3 style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#4C7EFB",
              margin: "0 0 8px",
              fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              קבלה נשלחה
            </h3>
            <p style={{
              fontSize: "18px",
              color: "#486284",
              margin: "0",
              fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              קבלה נשלחה אל: {recipientEmail}
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "60px 20px",
        background: "#FFF"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          width: "100%",
          maxWidth: "1200px"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px",
            borderRadius: "24px",
            background: "rgba(239, 242, 246, 0.40)"
          }}>
            <div style={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#486284",
              margin: "0 0 16px",
              fontFamily: "'DM Sans', -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              24+
            </div>
            <div style={{
              fontSize: "20px",
              color: "#8CA2C0",
              textAlign: "center",
              fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              מדינות שבהם אנו עובדים
            </div>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px",
            borderRadius: "24px",
            background: "rgba(239, 242, 246, 0.40)"
          }}>
            <div style={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#486284",
              margin: "0 0 16px",
              fontFamily: "'DM Sans', -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              17M
            </div>
            <div style={{
              fontSize: "20px",
              color: "#8CA2C0",
              textAlign: "center",
              fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              אנשים שהאמינו בנו
            </div>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px",
            borderRadius: "24px",
            background: "rgba(239, 242, 246, 0.40)"
          }}>
            <div style={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#486284",
              margin: "0 0 16px",
              fontFamily: "'DM Sans', -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              +95%
            </div>
            <div style={{
              fontSize: "20px",
              color: "#8CA2C0",
              textAlign: "center",
              fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              לקוחות מרוצים
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos Ticker */}
      <div style={{
        padding: "40px 0",
        background: "#F9FAFC",
        overflow: "hidden"
      }}>
        <h3 style={{
          fontSize: "20px",
          color: "#486284",
          textAlign: "center",
          margin: "0 0 40px",
          fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif"
        }}>
          חברות פופולאריות להשקעה
        </h3>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "44px",
          opacity: "0.6",
          animation: "scroll 30s linear infinite",
          whiteSpace: "nowrap"
        }}>
          {["GOOG", "AMZN", "NASDAQ", "AAPL", "AAN", "NVDA", "MSFT", "META", "SONY", "CRM"].map((symbol) => (
            <div key={symbol} style={{
              fontSize: "52px",
              fontWeight: "700",
              color: "#486284",
              fontFamily: "'Hanken Grotesk', -apple-system, Roboto, Helvetica, sans-serif"
            }}>
              {symbol}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        padding: "60px 20px",
        background: "#FFF"
      }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            padding: "16px 32px",
            borderRadius: "50px",
            background: "#4C7EFB",
            color: "#FFF",
            fontSize: "18px",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "10px 10px 0 0 rgba(0, 0, 0, 0.10)",
            fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif"
          }}
        >
          חזור לעמוד הבית
        </Link>
        
        <Link
          to="/gift-list"
          style={{
            display: "inline-flex",
            padding: "16px 32px",
            borderRadius: "50px",
            background: "#DBE3F3",
            color: "#4C7EFB",
            fontSize: "18px",
            fontWeight: "700",
            textDecoration: "none",
            fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif"
          }}
        >
          שלח מתנה נוספת
        </Link>
      </div>

      <Footer />

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}
