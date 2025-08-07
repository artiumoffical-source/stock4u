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
      
      {/* Hero Section - Original Figma Image with Enhanced Decoratives */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "559px",
        overflow: "hidden"
      }}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2F8c9a393b58e7435185a9ad4e46455777?format=webp&width=1920"
          alt="הרכישה בוצעה בהצלחה!"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />

        {/* Exact Figma Decorative Elements */}

        {/* Currency Symbol - Yen (¥) - Top Left */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2Fcf41d50460fa4d5abef4d783293d5985?format=webp&width=800"
          alt="¥"
          style={{
            position: "absolute",
            left: "66px",
            top: "69px",
            width: "57px",
            height: "59px",
            transform: "rotate(-13.296deg)",
            filter: "drop-shadow(5.158px 5.158px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 3s ease-in-out infinite"
          }}
        />

        {/* Currency Symbol - Euro (€) - Far Right */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2Fe4de351966e0476a9dbda9855662701f?format=webp&width=800"
          alt="€"
          style={{
            position: "absolute",
            right: "66px",
            top: "167px",
            width: "57px",
            height: "59px",
            transform: "rotate(-13.296deg)",
            filter: "drop-shadow(5.158px 5.158px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 2.8s ease-in-out infinite 1s"
          }}
        />

        {/* Currency Symbol - Euro (€) - Bottom Right */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2Fcd0d284168b249d3bfab6d5cbb6d27ce?format=webp&width=800"
          alt="€"
          style={{
            position: "absolute",
            right: "149px",
            bottom: "90px",
            width: "57px",
            height: "71px",
            transform: "rotate(-33.253deg)",
            filter: "drop-shadow(5.659px 5.659px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 2.9s ease-in-out infinite 0.3s"
          }}
        />

        {/* Currency Symbol - Euro (€) - Bottom Left */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2F51b30b9931e8425eb0f863d3d2936e76?format=webp&width=800"
          alt="€"
          style={{
            position: "absolute",
            left: "149px",
            bottom: "169px",
            width: "57px",
            height: "64px",
            transform: "rotate(21.992deg)",
            filter: "drop-shadow(5.158px 5.158px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 3.1s ease-in-out infinite 2s"
          }}
        />

        {/* Shekel Symbol (₪) - Top Center */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2F2620f3bd3023436ea84d67da35b3eda8?format=webp&width=800"
          alt="₪"
          style={{
            position: "absolute",
            left: "697px",
            top: "-19px",
            width: "56px",
            height: "50px",
            transform: "rotate(12.955deg)",
            filter: "drop-shadow(5.158px 5.158px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 2.5s ease-in-out infinite 0.5s"
          }}
        />

        {/* Shekel Symbol (₪) - Top Right */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fbd35a0518e78474da4e3ec381caabfa5%2F50aaacf5757046b4960b9eb8ed98226e?format=webp&width=800"
          alt="₪"
          style={{
            position: "absolute",
            right: "183px",
            top: "91px",
            width: "41px",
            height: "67px",
            transform: "rotate(19.423deg)",
            filter: "drop-shadow(6.059px 6.059px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 3.2s ease-in-out infinite 1.5s"
          }}
        />

        {/* Star Element - Top Right */}
        <svg
          style={{
            position: "absolute",
            right: "426px",
            top: "-22px",
            width: "46px",
            height: "56px",
            fill: "#E96036",
            strokeWidth: "9px",
            stroke: "#FFF",
            filter: "drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 2.8s ease-in-out infinite 1s"
          }}
          width="111" height="73" viewBox="0 0 111 73" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M46.8821 -1.46424L53.3949 -21.9242L58.7205 -2.98501L74.7142 -8.32757L62.8419 6.48456L73.8153 19.8042L58.7205 15.9542L52.2246 34.311L46.2885 15.3605L33.2741 21.2798L42.4667 8.25976L28.8418 -8.59894L46.8821 -1.46424Z" fill="#E96036"/>
          <path d="M57.7266 -23.142L61.7734 -8.75037L73.2881 -12.5961L87.7832 -17.4379L78.2256 -5.51306L68.6396 6.44592L77.2881 16.943L86.041 27.566L72.7031 24.1647L61.5908 21.3297L56.4668 35.8121L51.9648 48.5348L47.9307 35.6559L43.5156 21.5641L35.1367 25.3756L20.0186 32.2526L29.5977 18.6842L36.8281 8.44299L25.3418 -5.7699L14.5898 -19.0746L30.4971 -12.7836L44.0547 -7.42224L49.1064 -23.2894L53.6621 -37.599L57.7266 -23.142Z" stroke="white" strokeWidth="9"/>
        </svg>

        {/* Star Element - Bottom Left */}
        <svg
          style={{
            position: "absolute",
            left: "0px",
            bottom: "280px",
            width: "46px",
            height: "56px",
            fill: "#E96036",
            strokeWidth: "9px",
            stroke: "#FFF",
            filter: "drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 2.7s ease-in-out infinite 0.8s"
          }}
          width="82" height="127" viewBox="0 0 82 127" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.9368 51.96L24.4496 31.5L29.7752 50.4392L45.7689 45.0966L33.8966 59.9088L44.87 73.2284L29.7752 69.3783L23.2793 87.7352L17.3431 68.7847L4.32882 74.704L13.5214 61.684L-0.103516 44.8253L17.9368 51.96Z" fill="#E96036"/>
          <path d="M28.7812 30.2822L32.8281 44.6738L44.3428 40.8281L58.8379 35.9863L49.2803 47.9111L39.6943 59.8701L48.3428 70.3672L57.0957 80.9902L43.7578 77.5889L32.6455 74.7539L27.5215 89.2363L23.0195 101.959L18.9854 89.0801L14.5703 74.9883L6.19141 78.7998L-8.92676 85.6768L0.652344 72.1084L7.88281 61.8672L-3.60352 47.6543L-14.3555 34.3496L1.55176 40.6406L15.1094 46.002L20.1611 30.1348L24.7168 15.8252L28.7812 30.2822Z" stroke="white" strokeWidth="9"/>
        </svg>

        {/* Yellow Star - Top Left */}
        <svg
          style={{
            position: "absolute",
            left: "486px",
            top: "80px",
            width: "49px",
            height: "51px",
            fill: "#FFEB77",
            strokeWidth: "9px",
            stroke: "#FFF",
            filter: "drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 2.5s ease-in-out infinite 0.5s"
          }}
          width="78" height="80" viewBox="0 0 78 80" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34.0802 9.52891C33.9671 9.16144 33.4357 9.18405 33.3679 9.56283C32.4859 14.2383 29.727 28.4624 28.9412 28.4624C28.0027 28.4624 7.94414 35.354 9.82675 35.6706C11.7094 35.9816 28.9412 38.8027 28.9412 38.8027C28.9412 38.8027 35.5218 61.3657 34.8943 60.4273L39.909 40.0577L58.5146 34.1668C58.8595 34.0537 58.8481 33.5619 58.4976 33.4601L40.2199 27.8349L34.0802 9.52891Z" fill="#FFEB77"/>
          <path d="M28.9463 8.72852C29.9347 3.4098 36.8829 3.70551 38.3447 8.09863L38.3467 8.09766L43.751 24.2129L59.8213 29.1592L59.8203 29.1602C64.2301 30.505 64.5676 36.9171 59.917 38.4424L59.8945 38.4502L59.873 38.457L43.6738 43.585L39.4102 60.9062C39.3751 61.2242 39.2962 61.6456 39.1211 62.0918C38.9406 62.5517 38.3529 63.8262 36.8203 64.5371C35.0887 65.3402 33.538 64.8158 32.8086 64.4287C32.1309 64.0689 31.7143 63.6233 31.5605 63.4521C31.3656 63.2351 31.2291 63.0421 31.1533 62.9287L30.0508 61.2783L30.3037 60.2471C30.1988 59.8233 30.0586 59.2703 29.8809 58.6035C29.3619 56.6568 28.6065 53.9531 27.8242 51.1953C27.0436 48.4434 26.2427 45.6592 25.6367 43.5625C25.5582 43.2909 25.4826 43.031 25.4111 42.7842C23.7749 42.5163 21.5969 42.16 19.3623 41.7939C14.8221 41.0503 10.0396 40.2666 9.09375 40.1104L9.08008 40.1084C8.89687 40.0777 7.29655 39.8554 6.15137 38.3721C5.4306 37.4382 5.11733 36.2877 5.22168 35.167C5.31323 34.1842 5.69888 33.4725 5.93848 33.1006C6.39046 32.3991 6.93388 31.9785 7.10742 31.8457C7.36008 31.6524 7.60178 31.5004 7.7793 31.3955C8.43279 31.0093 9.31277 30.6145 10.1318 30.2676C11.8796 29.5273 14.334 28.6021 16.8018 27.7139C19.2872 26.8192 21.8646 25.9337 23.8906 25.2686C24.4951 25.0701 25.0597 24.8895 25.5635 24.7314C25.901 23.4605 26.3039 21.733 26.7207 19.8115C27.6057 15.7318 28.5075 11.0547 28.9463 8.72852Z" stroke="white" strokeWidth="9"/>
        </svg>

        {/* Yellow Star - Top Right */}
        <svg
          style={{
            position: "absolute",
            right: "81px",
            top: "47px",
            width: "49px",
            height: "51px",
            fill: "#FFEB77",
            strokeWidth: "9px",
            stroke: "#FFF",
            filter: "drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 3.2s ease-in-out infinite 1.5s"
          }}
          width="78" height="80" viewBox="0 0 78 80" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M33.5226 9.24571C33.4095 8.87823 32.8781 8.90085 32.8103 9.27963C31.9283 13.9551 29.1694 28.1792 28.3836 28.1792C27.4451 28.1792 7.38652 35.0708 9.26914 35.3874C11.1517 35.6984 28.3836 38.5195 28.3836 38.5195C28.3836 38.5195 34.9642 61.0825 34.3367 60.1441L39.3513 39.7745L57.957 33.8836C58.3018 33.7705 58.2905 33.2787 57.94 33.1769L39.6623 27.5517L33.5226 9.24571Z" fill="#FFEB77"/>
          <path d="M28.3887 8.44531C29.3771 3.12659 36.3253 3.42231 37.7871 7.81543L37.7891 7.81445L43.1934 23.9297L59.2637 28.876L59.2627 28.877C63.6725 30.2218 64.01 36.6339 59.3594 38.1592L59.3369 38.167L59.3154 38.1738L43.1162 43.3018L38.8525 60.623C38.8175 60.941 38.7386 61.3624 38.5635 61.8086C38.383 62.2684 37.7953 63.543 36.2627 64.2539C34.5311 65.057 32.9804 64.5326 32.251 64.1455C31.5733 63.7857 31.1567 63.3401 31.0029 63.1689C30.808 62.9519 30.6715 62.7589 30.5957 62.6455L29.4932 60.9951L29.7461 59.9639C29.6411 59.5401 29.501 58.9871 29.3232 58.3203C28.8043 56.3736 28.0488 53.6699 27.2666 50.9121C26.486 48.1602 25.6851 45.376 25.0791 43.2793C25.0006 43.0077 24.925 42.7478 24.8535 42.501C23.2173 42.2331 21.0393 41.8767 18.8047 41.5107C14.2645 40.7671 9.48197 39.9834 8.53613 39.8271L8.52246 39.8252C8.33925 39.7944 6.73893 39.5722 5.59375 38.0889C4.87298 37.155 4.55972 36.0045 4.66406 34.8838C4.75561 33.901 5.14127 33.1893 5.38086 32.8174C5.83284 32.1159 6.37626 31.6953 6.5498 31.5625C6.80247 31.3692 7.04416 31.2172 7.22168 31.1123C7.87518 30.7261 8.75515 30.3313 9.57422 29.9844C11.322 29.2441 13.7764 28.3189 16.2441 27.4307C18.7296 26.536 21.307 25.6505 23.333 24.9854C23.9375 24.7869 24.502 24.6063 25.0059 24.4482C25.3434 23.1773 25.7463 21.4498 26.1631 19.5283C27.0481 15.4486 27.9499 10.7715 28.3887 8.44531Z" stroke="white" strokeWidth="9"/>
        </svg>

        {/* Yellow Star - Bottom Right */}
        <svg
          style={{
            position: "absolute",
            right: "81px",
            bottom: "101px",
            width: "49px",
            height: "51px",
            fill: "#FFEB77",
            strokeWidth: "9px",
            stroke: "#FFF",
            filter: "drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.10))",
            animation: "float 3.3s ease-in-out infinite 1.2s"
          }}
          width="78" height="80" viewBox="0 0 78 80" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34.0548 9.84825C33.9418 9.48077 33.4103 9.50339 33.3425 9.88217C32.4605 14.5576 29.7016 28.7818 28.9158 28.7818C27.9773 28.7818 7.91875 35.6734 9.80136 35.99C11.684 36.3009 28.9158 39.122 28.9158 39.122C28.9158 39.122 35.4965 61.6851 34.8689 60.7466L39.8836 40.3771L58.4892 34.4861C58.8341 34.3731 58.8227 33.8812 58.4722 33.7795L40.1945 28.1542L34.0548 9.84825Z" fill="#FFEB77"/>
          <path d="M28.9209 9.04785C29.9093 3.72913 36.8575 4.02485 38.3193 8.41797L38.3213 8.41699L43.7256 24.5322L59.7959 29.4785L59.7949 29.4795C64.2047 30.8244 64.5422 37.2364 59.8916 38.7617L59.8691 38.7695L59.8477 38.7764L43.6484 43.9043L39.3848 61.2256C39.3497 61.5435 39.2708 61.965 39.0957 62.4111C38.9152 62.871 38.3275 64.1455 36.7949 64.8564C35.0634 65.6595 33.5126 65.1352 32.7832 64.748C32.1055 64.3883 31.6889 63.9426 31.5352 63.7715C31.3402 63.5545 31.2037 63.3614 31.1279 63.248L30.0254 61.5977L30.2783 60.5664C30.1734 60.1426 30.0332 59.5896 29.8555 58.9229C29.3365 56.9761 28.5811 54.2724 27.7988 51.5146C27.0183 48.7628 26.2173 45.9786 25.6113 43.8818C25.5328 43.6103 25.4572 43.3504 25.3857 43.1035C23.7496 42.8356 21.5715 42.4793 19.3369 42.1133C14.7967 41.3696 10.0142 40.5859 9.06836 40.4297L9.05469 40.4277C8.87148 40.397 7.27116 40.1747 6.12598 38.6914C5.40521 37.7576 5.09194 36.6071 5.19629 35.4863C5.28784 34.5035 5.67349 33.7918 5.91309 33.4199C6.36507 32.7184 6.90849 32.2978 7.08203 32.165C7.33469 31.9717 7.57639 31.8198 7.75391 31.7148C8.4074 31.3286 9.28738 30.9339 10.1064 30.5869C11.8542 29.8466 14.3086 28.9214 16.7764 28.0332C19.2619 27.1386 21.8392 26.253 23.8652 25.5879C24.4697 25.3894 25.0343 25.2089 25.5381 25.0508C25.8756 23.7798 26.2785 22.0523 26.6953 20.1309C27.5803 16.0512 28.4821 11.3741 28.9209 9.04785Z" stroke="white" strokeWidth="9"/>
        </svg>
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
          חברות פופולאריות להש��עה
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
