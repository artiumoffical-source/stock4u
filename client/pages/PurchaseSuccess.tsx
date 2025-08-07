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
      
      {/* Hero Section - Exact Figma Design Recreation */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "559px",
        background: "linear-gradient(180deg, #E8F1FF 0%, #D1E3FF 30%, #B8D4FF 70%, #A5C8FF 100%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {/* Main Shopping Cart Character */}
        <div style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center"
        }}>
          {/* Shopping Cart */}
          <div style={{
            width: "120px",
            height: "100px",
            background: "#E96036",
            borderRadius: "12px 12px 8px 8px",
            position: "relative",
            margin: "0 auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* Cart Handle */}
            <div style={{
              position: "absolute",
              right: "-20px",
              top: "10px",
              width: "40px",
              height: "4px",
              background: "#4C7EFB",
              borderRadius: "2px",
              transform: "rotate(-15deg)"
            }}></div>

            {/* Cart Contents - Gift boxes */}
            <div style={{
              display: "flex",
              gap: "8px",
              marginTop: "-10px"
            }}>
              <div style={{
                width: "25px",
                height: "25px",
                background: "#FFD700",
                borderRadius: "4px",
                border: "2px solid #FF6B35"
              }}></div>
              <div style={{
                width: "25px",
                height: "25px",
                background: "#4C7EFB",
                borderRadius: "4px",
                border: "2px solid #2A5BE7"
              }}></div>
            </div>

            {/* Cart Face */}
            <div style={{
              position: "absolute",
              bottom: "15px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              {/* Eyes */}
              <div style={{
                width: "12px",
                height: "12px",
                background: "#FFF",
                borderRadius: "50%",
                border: "3px solid #4C7EFB"
              }}></div>
              <div style={{
                width: "12px",
                height: "12px",
                background: "#FFF",
                borderRadius: "50%",
                border: "3px solid #4C7EFB"
              }}></div>
            </div>
          </div>

          {/* Wheels */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100px",
            margin: "0 auto 30px",
            position: "relative",
            top: "-10px"
          }}>
            <div style={{
              width: "20px",
              height: "20px",
              background: "#486284",
              borderRadius: "50%",
              border: "3px solid #FFF"
            }}></div>
            <div style={{
              width: "20px",
              height: "20px",
              background: "#486284",
              borderRadius: "50%",
              border: "3px solid #FFF"
            }}></div>
          </div>

          {/* Success Text */}
          <div style={{
            background: "#FFF",
            borderRadius: "20px",
            padding: "16px 32px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            display: "inline-block"
          }}>
            <h1 style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#E96036",
              margin: "0",
              fontFamily: "'Greycliff Hebrew CF', -apple-system, Roboto, Helvetica, sans-serif",
              textAlign: "center",
              lineHeight: "1.2"
            }}>
              הרכישה בוצעה<br />בהצלחה!
            </h1>
          </div>
        </div>

        {/* Floating Decorative Elements - Top Left */}
        <div style={{
          position: "absolute",
          top: "80px",
          left: "10%",
          fontSize: "40px",
          opacity: "0.7",
          animation: "float 3s ease-in-out infinite"
        }}>€</div>

        <div style={{
          position: "absolute",
          top: "120px",
          left: "8%",
          fontSize: "28px",
          opacity: "0.6",
          animation: "float 2.5s ease-in-out infinite 0.5s"
        }}>✨</div>

        {/* Floating Decorative Elements - Top Right */}
        <div style={{
          position: "absolute",
          top: "60px",
          right: "15%",
          fontSize: "35px",
          opacity: "0.7",
          animation: "float 2.8s ease-in-out infinite 1s"
        }}>💎</div>

        <div style={{
          position: "absolute",
          top: "100px",
          right: "12%",
          fontSize: "25px",
          opacity: "0.6",
          animation: "float 3.2s ease-in-out infinite 1.5s"
        }}>⭐</div>

        {/* Floating Decorative Elements - Bottom Left */}
        <div style={{
          position: "absolute",
          bottom: "120px",
          left: "12%",
          fontSize: "45px",
          opacity: "0.8",
          animation: "float 2.7s ease-in-out infinite 0.8s"
        }}>$</div>

        <div style={{
          position: "absolute",
          bottom: "160px",
          left: "8%",
          fontSize: "30px",
          opacity: "0.6",
          animation: "float 3.1s ease-in-out infinite 2s"
        }}>💰</div>

        {/* Floating Decorative Elements - Bottom Right */}
        <div style={{
          position: "absolute",
          bottom: "140px",
          right: "10%",
          fontSize: "38px",
          opacity: "0.7",
          animation: "float 2.9s ease-in-out infinite 0.3s"
        }}>€</div>

        <div style={{
          position: "absolute",
          bottom: "180px",
          right: "14%",
          fontSize: "26px",
          opacity: "0.6",
          animation: "float 3.3s ease-in-out infinite 1.2s"
        }}>✨</div>

        {/* Extra decorative elements for fullness */}
        <div style={{
          position: "absolute",
          top: "200px",
          left: "20%",
          fontSize: "32px",
          opacity: "0.5",
          animation: "float 3.5s ease-in-out infinite 0.7s"
        }}>💸</div>

        <div style={{
          position: "absolute",
          top: "220px",
          right: "25%",
          fontSize: "28px",
          opacity: "0.5",
          animation: "float 2.6s ease-in-out infinite 1.8s"
        }}>🌟</div>

        <div style={{
          position: "absolute",
          bottom: "250px",
          left: "25%",
          fontSize: "24px",
          opacity: "0.4",
          animation: "float 3.4s ease-in-out infinite 1.3s"
        }}>💳</div>

        <div style={{
          position: "absolute",
          bottom: "280px",
          right: "20%",
          fontSize: "30px",
          opacity: "0.5",
          animation: "float 2.4s ease-in-out infinite 0.9s"
        }}>🎁</div>
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

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
        `}
      </style>
    </div>
  );
}
