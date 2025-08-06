import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGift } from "../contexts/GiftContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { StepHero } from "../components/StepHero";

export default function OrderSummary() {
  const navigate = useNavigate();
  const { giftData, updateGiftData, addStock, removeStock, updateStockAmount } =
    useGift();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Debug log to see what data we have
  console.log("OrderSummary - giftData:", giftData);

  // Utility function to format numbers with commas
  const formatNumber = (num: number | string): string => {
    const number = typeof num === "string" ? parseFloat(num) : num;
    return number.toLocaleString("en-US");
  };

  // Calculate total from selected stocks or use default
  const selectedStocks = giftData?.selectedStocks || [];
  const currentTotal = selectedStocks.reduce(
    (sum, stock) => sum + stock.amount,
    0,
  );

  // Available stocks list for selection
  const [availableStocks] = useState([
    { symbol: "NVDA", name: "NVIDIA Corporation" },
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "MSFT", name: "Microsoft Corporation" },
    { symbol: "GOOGL", name: "Alphabet Inc." },
    { symbol: "TSLA", name: "Tesla Inc." },
    { symbol: "AMZN", name: "Amazon.com Inc." },
    { symbol: "META", name: "Meta Platforms Inc." },
    { symbol: "NFLX", name: "Netflix Inc." },
  ]);

  const [showStockSelector, setShowStockSelector] = useState(false);

  // Add new stock to basket
  const handleAddStock = (stock: { symbol: string; name: string }) => {
    // Check if stock is already selected
    if (selectedStocks.some((s) => s.symbol === stock.symbol)) {
      return;
    }

    addStock({
      symbol: stock.symbol,
      name: stock.name,
      amount: 75, // Default amount in USD (300 ILS)
    });
    setShowStockSelector(false);
  };

  // Update individual stock amount
  const handleStockAmountChange = (symbol: string, newAmountILS: string) => {
    const newUSDAmount = parseFloat(newAmountILS) / 4 || 0;
    updateStockAmount(symbol, newUSDAmount);
  };

  // Remove stock from basket
  const handleRemoveStock = (symbol: string) => {
    removeStock(symbol);
  };

  // Get unselected stocks for dropdown
  const unselectedStocks = availableStocks.filter(
    (stock) =>
      !selectedStocks.some((selected) => selected.symbol === stock.symbol),
  );

  // Function to format delivery time based on sending method
  const formatDeliveryTime = () => {
    if (giftData?.sendingMethod === "immediately") {
      return "מיד לאחר השלמת ההזמנה";
    } else if (
      giftData?.selectedDate?.day &&
      giftData?.selectedDate?.month &&
      giftData?.selectedTime?.hour &&
      giftData?.selectedTime?.minute
    ) {
      const months = [
        "",
        "ינואר",
        "פברואר",
        "מרץ",
        "אפריל",
        "מאי",
        "יוני",
        "יולי",
        "אוגוסט",
        "ספטמבר",
        "אוקטובר",
        "נובמבר",
        "דצמבר",
      ];
      return `${giftData.selectedDate.day} ל${months[parseInt(giftData.selectedDate.month)]}, ${giftData.selectedTime.hour}:${giftData.selectedTime.minute}`;
    } else {
      return "מיד לאחר השלמת ההזמנה";
    }
  };

  // Get greeting message or empty if not provided
  const greetingMessage =
    giftData?.greetingMessage && giftData.greetingMessage.trim() !== ""
      ? giftData.greetingMessage
      : "";

  // Calculate lines count for dynamic height
  const estimatedLines = Math.ceil(greetingMessage.length / 80); // Rough estimate of characters per line
  const dynamicHeight = Math.max(200, estimatedLines * 50 + 100); // Minimum 200px, add 50px per line

  const handleContinueToPayment = () => {
    // Scroll to top before navigation
    window.scrollTo(0, 0);
    navigate("/checkout");
  };

  const handleEditGiftDetails = () => {
    navigate("/order-details");
  };

  const handleEditGreeting = () => {
    navigate("/gift-design");
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
      <Header />

      {/* Hero Section */}
      <StepHero currentStep={3} />

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 40px",
          background: "#fff",
        }}
      >
        {/* Summary Title */}
        <div
          style={{
            color: "#486284",
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
            fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            width: "266px",
            height: "45px",
          }}
        >
          סיכום ואישור הזמנה
        </div>

        {/* Gift Details Section */}
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1275px",
            height: "140px",
            padding: "33px 46px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            borderRadius: "30px",
            background: "#F5F7FC",
            direction: "rtl",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              direction: "rtl",
            }}
          >
            <div
              style={{
                color: "#486284",
                textAlign: "right",
                fontFamily:
                  "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "normal",
                position: "relative",
                direction: "rtl",
                flex: 1,
                paddingRight: "20px",
                unicodeBidi: "plaintext",
              }}
            >
              {giftData?.senderName && (
                <>
                  <span style={{ color: "#486284" }}>המתנה מ- </span>
                  <span style={{ color: "#E96036" }}>
                    {giftData.senderName}
                  </span>
                </>
              )}
              {giftData?.senderName &&
                (giftData?.recipientDetails?.name ||
                  giftData?.recipients?.[0]?.name) && (
                  <span style={{ color: "#486284" }}> ונשלחת אל - </span>
                )}
              {(giftData?.recipientDetails?.name ||
                giftData?.recipients?.[0]?.name) && (
                <span style={{ color: "#E96036" }}>
                  {giftData?.recipientDetails?.name ||
                    giftData?.recipients?.[0]?.name}
                </span>
              )}
              {(giftData?.senderName ||
                giftData?.recipientDetails?.name ||
                giftData?.recipients?.[0]?.name) && (
                <>
                  <span style={{ color: "#486284" }}> ב-</span>
                  <span style={{ color: "#E96036" }}>
                    {formatDeliveryTime()}
                  </span>
                </>
              )}
            </div>
            <div
              onClick={handleEditGiftDetails}
              style={{
                display: "flex",
                width: "64.33px",
                height: "64.31px",
                padding: "12px 13px",
                alignItems: "center",
                gap: "10px",
                borderRadius: "10px",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(76, 126, 251, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg
                width="38"
                height="39"
                viewBox="0 0 38 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "37px",
                  height: "38px",
                  flexShrink: "0",
                  position: "relative",
                }}
              >
                <path
                  d="M23.442 9.40653L28.5568 14.5214M20.0321 33.2759H33.6717M6.39245 26.4561L4.6875 33.2759L11.5073 31.5709L31.2609 11.8173C31.9002 11.1779 32.2593 10.3107 32.2593 9.40653C32.2593 8.50235 31.9002 7.63518 31.2609 6.99573L30.9676 6.70248C30.3282 6.06322 29.461 5.7041 28.5568 5.7041C27.6527 5.7041 26.7855 6.06322 26.146 6.70248L6.39245 26.4561Z"
                  stroke="#4C7EFB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Greeting Content Section */}
        {greetingMessage && (
          <div
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "1275px",
              minHeight: `${dynamicHeight}px`,
              padding: "33px 46px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "30px",
              background: "#F5F7FC",
              direction: "rtl",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "relative",
                direction: "rtl",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "8px",
                  position: "relative",
                  flex: 1,
                  paddingRight: "20px",
                }}
              >
                <div
                  style={{
                    color: "#486284",
                    textAlign: "right",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "30px",
                    fontWeight: "700",
                    lineHeight: "normal",
                    position: "relative",
                    direction: "rtl",
                    width: "100%",
                  }}
                >
                  תוכן הברכה המצורפת:
                </div>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "905.73px",
                    color: "#1B1919",
                    textAlign: "right",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "30.842px",
                    fontWeight: "400",
                    lineHeight: "150%",
                    opacity: "0.5",
                    position: "relative",
                    direction: "rtl",
                    unicodeBidi: "plaintext",
                    wordWrap: "break-word",
                    overflow: "hidden",
                  }}
                >
                  {greetingMessage}
                </div>
              </div>
              <div
                onClick={handleEditGreeting}
                style={{
                  display: "flex",
                  width: "64.33px",
                  height: "64.31px",
                  padding: "12px 13px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "10px",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(76, 126, 251, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "37px",
                    height: "38px",
                    flexShrink: "0",
                    position: "relative",
                  }}
                >
                  <path
                    d="M23.442 9.40653L28.5568 14.5214M20.0321 33.2759H33.6717M6.39245 26.4561L4.6875 33.2759L11.5073 31.5709L31.2609 11.8173C31.9002 11.1779 32.2593 10.3107 32.2593 9.40653C32.2593 8.50235 31.9002 7.63518 31.2609 6.99573L30.9676 6.70248C30.3282 6.06322 29.461 5.7041 28.5568 5.7041C27.6527 5.7041 26.7855 6.06322 26.146 6.70248L6.39245 26.4561Z"
                    stroke="#4C7EFB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Investment Basket Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <div
            style={{
              color: "#486284",
              fontSize: "24px",
              fontWeight: "700",
              textAlign: "center",
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            סל המניות להשקעה
          </div>

          {/* Selected Stocks List */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {selectedStocks.length > 0 ? (
              selectedStocks.map((stock, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 30px",
                    borderRadius: "15px",
                    border: "2px solid #DBE3F3",
                    background: "#F8F9FA",
                    direction: "rtl",
                    position: "relative",
                  }}
                >
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveStock(stock.symbol)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "#FF4444",
                      border: "none",
                      color: "white",
                      fontSize: "14px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ×
                  </button>

                  {/* Amount Input */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        color: "#486284",
                        fontSize: "18px",
                        fontWeight: "700",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      ₪
                    </span>
                    <input
                      type="number"
                      value={(stock.amount * 4).toFixed(0)}
                      onChange={(e) =>
                        handleStockAmountChange(stock.symbol, e.target.value)
                      }
                      style={{
                        width: "100px",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "2px solid #4C7EFB",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#486284",
                        textAlign: "center",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Stock Info */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        color: "#486284",
                        fontSize: "18px",
                        fontWeight: "700",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      {stock.symbol}
                    </div>
                    <div
                      style={{
                        color: "#8CA2C0",
                        fontSize: "14px",
                        fontWeight: "400",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      {stock.name}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  padding: "40px",
                  borderRadius: "15px",
                  border: "2px dashed #DBE3F3",
                  background: "#F8F9FA",
                }}
              >
                <div
                  style={{
                    color: "#8CA2C0",
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  לא נבחרו ��ניות עדיין
                </div>
                <div
                  style={{
                    color: "#8CA2C0",
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    textAlign: "center",
                  }}
                >
                  הוסף מניות לסל ההשקעה שלך
                </div>
              </div>
            )}
          </div>

          {/* Add Stock Button */}
          {unselectedStocks.length > 0 && (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowStockSelector(!showStockSelector)}
                style={{
                  width: "100%",
                  height: "60px",
                  borderRadius: "15px",
                  border: "2px dashed #4C7EFB",
                  background: showStockSelector ? "#4C7EFB" : "#F0F4FF",
                  color: showStockSelector ? "#FFF" : "#4C7EFB",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                }}
              >
                <span style={{ fontSize: "24px" }}>+</span>
                הוסף מניה לסל
              </button>

              {/* Stock Selector Dropdown */}
              {showStockSelector && (
                <div
                  style={{
                    position: "absolute",
                    top: "70px",
                    left: "0",
                    right: "0",
                    background: "#FFF",
                    border: "2px solid #DBE3F3",
                    borderRadius: "15px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    zIndex: 100,
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  {unselectedStocks.map((stock, index) => (
                    <div
                      key={index}
                      onClick={() => handleAddStock(stock)}
                      style={{
                        padding: "15px 20px",
                        borderBottom:
                          index < unselectedStocks.length - 1
                            ? "1px solid #F0F0F0"
                            : "none",
                        cursor: "pointer",
                        transition: "background 0.2s ease",
                        direction: "rtl",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#F5F7FC";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            color: "#8CA2C0",
                            fontSize: "14px",
                            fontWeight: "400",
                            fontFamily:
                              "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          {stock.name}
                        </div>
                        <div
                          style={{
                            color: "#486284",
                            fontSize: "16px",
                            fontWeight: "700",
                            fontFamily:
                              "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          {stock.symbol}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pricing Summary */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            maxWidth: "400px",
            padding: "30px",
            borderRadius: "20px",
            border: "2px solid #4C7EFB",
            background: "linear-gradient(135deg, #F0F4FF 0%, #E8F0FF 100%)",
          }}
        >
          <div
            style={{
              color: "#486284",
              fontSize: "18px",
              fontWeight: "400",
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            סה"כ סכום ההשקעה:
          </div>

          <div
            style={{
              color: "#4C7EFB",
              fontSize: "48px",
              fontWeight: "700",
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            ₪{formatNumber((currentTotal * 4).toFixed(0))}
          </div>

          {selectedStocks.length > 1 && (
            <div
              style={{
                color: "#8CA2C0",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily:
                  "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                textAlign: "center",
              }}
            >
              מחולק בין {selectedStocks.length} מניות שונות
            </div>
          )}
        </div>

        {/* Continue Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <button
            onClick={handleContinueToPayment}
            style={{
              width: "281px",
              height: "50px",
              borderRadius: "56px",
              background: "#4C7EFB",
              boxShadow: "10px 10px 0 0 rgba(0, 0, 0, 0.10)",
              color: "#FFF",
              fontSize: "18px",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            המשך לתשלום
          </button>
        </div>

        {/* Statistics Section */}
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1216px",
            alignItems: "flex-start",
            gap: "24px",
            marginTop: "80px",
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
      </div>

      <Footer />
    </div>
  );
}
