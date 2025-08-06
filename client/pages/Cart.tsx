import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { StepHero } from "../components/StepHero";
import { useGift } from "../contexts/GiftContext";

export default function Cart() {
  const { giftData, updateGiftData } = useGift();
  const [selectedDeliveryMethods, setSelectedDeliveryMethods] = useState<
    string[]
  >(["mobile"]);
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [sendingMethod, setSendingMethod] = useState("later");
  const [selectedDate, setSelectedDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [selectedTime, setSelectedTime] = useState({ hour: "", minute: "" });
  const [greetingText, setGreetingText] = useState("");
  const [showGreetingModal, setShowGreetingModal] = useState(false);

  // Pool of general greetings suitable for both genders
  const greetingPool = [
    "מזל טוב! מאחלים לך שמחה והצלחה בכל צעד שתעשה!",
    "ברכות חמות ומילות טובות לקראת העתיד המזהיר שלך!",
    "מאחלים לך יום מופלא מלא בהפתעות נעימות ושמחה!",
    "שתמיד תהיה מוקף/ת באהבה, שמחה והצלחה בכל דרכיך!",
    "מתנה קטנה עם אהבה גדולה - מאחלים לך כל טוב!",
    "ברכה חמה ומיוחדת עבורך - שתמיד תזכה לשמחה ולהצלחה!",
    "מאחלים לך שנה מופלאה מלאה בהגשמת חלומות ורג��י שמחה!",
    "בברכה חמה ואהבה - שכל משאלותיך יתגשמו בקרוב!",
    "מתנה מהלב עם כל הברכות הטובות לעתיד מזהיר ומלא הצלחות!",
    "ברכות והמון אהבה - שתמיד תהיה מוקף/ת בטוב ובשמחה!",
  ];

  const selectRandomGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetingPool.length);
    setGreetingText(greetingPool[randomIndex]);
    setShowGreetingModal(false);
  };
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Phone validation
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^0\d{2}-\d{7}$|^0\d{9}$/;
    return phoneRegex.test(phone);
  };

  const showPhoneError =
    recipientPhone.length > 0 && !isValidPhone(recipientPhone);

  const toggleDeliveryMethod = (method: string) => {
    setSelectedDeliveryMethods((prev) =>
      prev.includes(method)
        ? prev.filter((m) => m !== method)
        : [...prev, method],
    );
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const [recipients, setRecipients] = useState([
    { name: "", phone: "", email: "" },
  ]);

  const addRecipient = () => {
    setRecipients((prev) => [...prev, { name: "", phone: "", email: "" }]);
  };

  const updateRecipient = (index: number, field: string, value: string) => {
    setRecipients((prev) =>
      prev.map((recipient, i) =>
        i === index ? { ...recipient, [field]: value } : recipient,
      ),
    );
  };

  const removeRecipient = (index: number) => {
    if (recipients.length > 1) {
      setRecipients((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
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
  const years = Array.from({ length: 10 }, (_, i) =>
    (new Date().getFullYear() + i).toString(),
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF",
        direction: "rtl",
        fontFamily:
          "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          height: "100px",
          background: "#FFF",
          borderBottom: "1px solid #DDD",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 34px",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "17px",
          }}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/273a893a02986cbf4bb3024588c444f7935068c3?width=562"
            style={{ height: "66px", width: "auto" }}
            alt="STOCK4U Logo"
          />
        </div>

        {/* Right Side - User Menu */}
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
              כניסה
            </div>
          </Link>
        </div>

        {/* Left Side - Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <Link
            to="/stock-selection"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#4C7EFB",
              opacity: 0.7,
              textDecoration: "none"
            }}
          >
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
            <span>חיפוש</span>
          </Link>

          <Link to="/careers" style={{ color: "#4C7EFB", fontSize: "20px", textDecoration: "none" }}>קריירה</Link>
          <Link to="/stock-selection" style={{ color: "#4C7EFB", fontSize: "20px", textDecoration: "none" }}>
            רשימת מתנות
          </Link>
          <Link to="/about" style={{ color: "#4C7EFB", fontSize: "20px", textDecoration: "none" }}>אודות</Link>

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
        </div>
      </div>

      {/* Hero Section with Steps */}
      <StepHero currentStep={1} />

      {/* Main Form Section */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "80px auto",
          padding: "0 20px",
        }}
      >
        {/* Section Title */}
        <h2
          style={{
            color: "#486284",
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "80px",
            fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          פרטים:
        </h2>

        {/* Form Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}
        >
          {/* First Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {/* Image Upload */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "#1B1919",
                  fontSize: "20px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                העלאת תמונה/לוגו
              </span>

              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />

                <div
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "15px 25px",
                    borderRadius: "10px",
                    background: "#F5F7FC",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  <span
                    style={{
                      color: "#4C7EFB",
                      fontSize: "16px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    העלאה
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3203 9.07031C19.4953 9.08231 20.6733 9.17931 21.4413 9.94731C22.3203 10.8263 22.3203 12.2403 22.3203 15.0683V16.0683C22.3203 18.8973 22.3203 20.3113 21.4413 21.1903C20.5633 22.0683 19.1483 22.0683 16.3203 22.0683H8.32031C5.49231 22.0683 4.07731 22.0683 3.19931 21.1903C2.32031 20.3103 2.32031 18.8973 2.32031 16.0683V15.0683C2.32031 12.2403 2.32031 10.8263 3.19931 9.94731C3.96731 9.17931 5.14531 9.08231 7.32031 9.07031"
                      stroke="#4C7EFB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.3203 15.0684V2.06836M12.3203 2.06836L15.3203 5.56836M12.3203 2.06836L9.32031 5.56836"
                      stroke="#4C7EFB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {uploadedImage && (
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Delivery Methods */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "#1B1919",
                  fontSize: "20px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                אמצעי העברה{" "}
                <span style={{ color: "#486284" }}>(אפשר לבחור יותר מאחד)</span>
              </span>

              <div style={{ display: "flex", gap: "15px" }}>
                <div
                  onClick={() => toggleDeliveryMethod("mobile")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "15px 20px",
                    borderRadius: "10px",
                    background: "#F5F7FC",
                    border: selectedDeliveryMethods.includes("mobile")
                      ? "2px solid #4C7EFB"
                      : "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      color: "#4C7EFB",
                      fontSize: "16px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    הודעה לנייד
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0918 5.03026C10.0909 4.46692 10.3136 3.92626 10.7112 3.52712C11.1087 3.12798 11.6485 2.90303 12.2118 2.90172L23.5261 2.8833C23.8051 2.88284 24.0815 2.93734 24.3395 3.0437C24.5975 3.15007 24.832 3.3062 25.0297 3.5032C25.2273 3.70019 25.3843 3.93419 25.4915 4.19183C25.5987 4.44947 25.6541 4.7257 25.6546 5.00476L25.6936 29.0789C25.6943 29.6421 25.4714 30.1826 25.0739 30.5816C24.6764 30.9806 24.1367 31.2054 23.5735 31.2067L12.26 31.2251C11.9809 31.2256 11.7045 31.1711 11.4465 31.0647C11.1885 30.9584 10.954 30.8022 10.7564 30.6052C10.5587 30.4082 10.4018 30.1743 10.2946 29.9166C10.1874 29.659 10.1319 29.3827 10.1315 29.1037L10.0918 5.03026ZM11.5078 5.73647C11.5074 5.55043 11.5437 5.36614 11.6145 5.19412C11.6854 5.0221 11.7894 4.86572 11.9207 4.73391C12.052 4.60209 12.2079 4.49743 12.3797 4.42589C12.5514 4.35435 12.7356 4.31734 12.9216 4.31697L22.8227 4.30139C23.1983 4.30082 23.5587 4.44944 23.8248 4.71457C24.0908 4.97969 24.2407 5.33962 24.2415 5.71522L24.2726 24.8331C24.2729 25.0192 24.2365 25.2034 24.1656 25.3754C24.0947 25.5474 23.9906 25.7037 23.8592 25.8355C23.7279 25.9672 23.5718 26.0718 23.4001 26.1433C23.2283 26.2147 23.0441 26.2516 22.8581 26.2519L12.9577 26.2682C12.5821 26.2688 12.2217 26.1202 11.9556 25.855C11.6896 25.5899 11.5397 25.23 11.5389 24.8544L11.5078 5.73647ZM17.9139 29.8007C18.0998 29.8003 18.2838 29.7633 18.4554 29.6918C18.627 29.6204 18.7829 29.5158 18.9141 29.3841C19.0453 29.2523 19.1492 29.0961 19.22 28.9242C19.2908 28.7523 19.3271 28.5681 19.3267 28.3822C19.3263 28.1963 19.2893 28.0123 19.2179 27.8407C19.1464 27.6691 19.0418 27.5133 18.9101 27.3821C18.7784 27.2509 18.6221 27.1469 18.4502 27.0761C18.2783 27.0053 18.0942 26.9691 17.9083 26.9695C17.5329 26.9702 17.1732 27.12 16.9084 27.386C16.6435 27.6519 16.4951 28.0122 16.4958 28.3876C16.4966 28.7629 16.6464 29.1226 16.9124 29.3875C17.1783 29.6523 17.5386 29.8014 17.9139 29.8007Z"
                      fill="#4C7EFB"
                    />
                    <path
                      d="M17.3353 19.5759C16.2098 18.6437 15.2847 17.8773 14.6394 17.1562C13.9948 16.4373 13.6406 15.775 13.6406 15.0546C13.6392 13.8816 14.645 12.9601 15.9271 12.9586C16.6525 12.9586 17.3509 13.2675 17.8063 13.7555L17.8892 13.8448L17.9721 13.7555C18.4268 13.2668 19.1245 12.9565 19.8506 12.9558C21.1327 12.9544 22.1392 13.8745 22.1406 15.0475C22.1406 15.7686 21.7886 16.4309 21.1454 17.1513C20.503 17.8716 19.5828 18.6374 18.4644 19.5688L18.453 19.5787L17.8949 20.0406L17.3353 19.5759Z"
                      fill="#4C7EFB"
                    />
                  </svg>
                </div>

                <div
                  onClick={() => toggleDeliveryMethod("email")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "15px 20px",
                    borderRadius: "10px",
                    background: "#F5F7FC",
                    border: selectedDeliveryMethods.includes("email")
                      ? "2px solid #4C7EFB"
                      : "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      color: "#4C7EFB",
                      fontSize: "16px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    דואר אלקטרוני
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_314_28743)">
                      <path
                        d="M13.0547 11.6934C11.6797 11.6934 10.5547 12.8817 10.5547 14.3413C10.5547 15.0775 10.8297 15.7234 11.2922 16.2142L15.5547 20.735L19.8297 16.2142C20.2797 15.7363 20.5547 15.0646 20.5547 14.3413C20.5547 12.8817 19.4297 11.6934 18.0547 11.6934C17.3797 11.6934 16.7422 11.9904 16.2922 12.4684L15.5547 13.2434L14.8297 12.4813C14.5992 12.2348 14.3236 12.0383 14.0188 11.903C13.7141 11.7677 13.3863 11.6965 13.0547 11.6934ZM15.5547 0.89502L26.8422 8.19294C27.5672 8.64502 28.0547 9.45877 28.0547 10.4017V23.3184C28.0547 24.7392 26.9297 25.9017 25.5547 25.9017H5.55469C4.17969 25.9017 3.05469 24.7392 3.05469 23.3184V10.4017C3.05469 9.45877 3.54219 8.64502 4.26719 8.19294L15.5547 0.89502ZM5.55469 12.985V23.3184H25.5547V12.985L23.0547 14.5996V14.3413C23.0547 13.6309 22.9047 12.9204 22.6422 12.2746L25.5547 10.4017L15.5547 3.94335L5.55469 10.4017L8.46719 12.2746C8.20469 12.9204 8.05469 13.6309 8.05469 14.3413V14.5996L5.55469 12.985Z"
                        fill="#4C7EFB"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Sender Name */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "#1B1919",
                  fontSize: "20px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                ממי המתנה?{" "}
                <span style={{ color: "#486284" }}>(רשמו את השם שלכם)</span>
              </span>

              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="שדה נבחר עם טקסט"
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #4C7EFB",
                  background: "#F5F7FC",
                  color: "#1B1919",
                  fontSize: "20px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  textAlign: "right",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Horizontal Divider */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#4C7EFB",
              opacity: 0.2,
            }}
          ></div>

          {/* Second Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {/* When to Send */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "#1B1919",
                  fontSize: "20px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                מתי לשלוח את המתנה?
              </span>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      color: "#1B1919",
                      fontSize: "20px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    ברגע שנסיים כאן
                  </span>
                  <div
                    onClick={() => setSendingMethod("immediately")}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: "1px solid #4C7EFB",
                      background:
                        sendingMethod === "immediately"
                          ? "#4C7EFB"
                          : "transparent",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {sendingMethod === "immediately" && (
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#FFF",
                        }}
                      ></div>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      color: "#1B1919",
                      fontSize: "20px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    שליחה במועד אחר
                  </span>
                  <div
                    onClick={() => setSendingMethod("later")}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: "1px solid #4C7EFB",
                      background:
                        sendingMethod === "later" ? "#4C7EFB" : "transparent",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {sendingMethod === "later" && (
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#FFF",
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Date Selection */}
            {sendingMethod === "later" && (
              <div
                style={{
                  flex: "1",
                  minWidth: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    color: "#486284",
                    fontSize: "20px",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  בחרו תאריך עתידי:
                </span>

                <div style={{ display: "flex", gap: "15px" }}>
                  <select
                    value={selectedDate.year}
                    onChange={(e) =>
                      setSelectedDate((prev) => ({
                        ...prev,
                        year: e.target.value,
                      }))
                    }
                    style={{
                      padding: "20px",
                      borderRadius: "10px",
                      border: "1px solid #8CA2C0",
                      background: "#F8F8F8",
                      color: "#8CA2C0",
                      fontSize: "20px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      outline: "none",
                    }}
                  >
                    <option value="">שנה</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedDate.month}
                    onChange={(e) =>
                      setSelectedDate((prev) => ({
                        ...prev,
                        month: e.target.value,
                      }))
                    }
                    style={{
                      padding: "20px",
                      borderRadius: "10px",
                      border: "1px solid #8CA2C0",
                      background: "#F8F8F8",
                      color: "#8CA2C0",
                      fontSize: "20px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      outline: "none",
                    }}
                  >
                    <option value="">חודש</option>
                    {months.map((month, index) => (
                      <option key={month} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedDate.day}
                    onChange={(e) =>
                      setSelectedDate((prev) => ({
                        ...prev,
                        day: e.target.value,
                      }))
                    }
                    style={{
                      padding: "20px",
                      borderRadius: "10px",
                      border: "1px solid #8CA2C0",
                      background: "#F8F8F8",
                      color: "#8CA2C0",
                      fontSize: "20px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      outline: "none",
                    }}
                  >
                    <option value="">יום</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Time Selection */}
            {sendingMethod === "later" && (
              <div
                style={{
                  flex: "1",
                  minWidth: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    color: "#486284",
                    fontSize: "20px",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  בחרו שעת שליחה:
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "20px",
                    borderRadius: "10px",
                    border: "1px solid #8CA2C0",
                    background: "#F8F8F8",
                  }}
                >
                  <select
                    value={selectedTime.minute}
                    onChange={(e) =>
                      setSelectedTime((prev) => ({
                        ...prev,
                        minute: e.target.value,
                      }))
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#8CA2C0",
                      fontSize: "20px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      outline: "none",
                    }}
                  >
                    <option value="">דקות</option>
                    {minutes.map((minute) => (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    ))}
                  </select>

                  <span
                    style={{
                      color: "#8CA2C0",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    :
                  </span>

                  <select
                    value={selectedTime.hour}
                    onChange={(e) =>
                      setSelectedTime((prev) => ({
                        ...prev,
                        hour: e.target.value,
                      }))
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#8CA2C0",
                      fontSize: "20px",
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      outline: "none",
                    }}
                  >
                    <option value="">שעה</option>
                    {hours.map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Third Row - Recipients */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {recipients.map((recipient, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "30px",
                  borderRadius: "15px",
                  border: "1px solid #DBE3F3",
                  background: "#FAFBFC",
                }}
              >
                {index > 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        color: "#4C7EFB",
                        fontSize: "24px",
                        fontWeight: "700",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      נמען {index + 1}
                    </span>
                    <div
                      onClick={() => removeRecipient(index)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "8px",
                        background: "#E96036",
                        color: "#FFF",
                        fontSize: "14px",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                        cursor: "pointer",
                        border: "none",
                      }}
                    >
                      הסר נמען
                    </div>
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "40px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Recipient Name */}
                  <div
                    style={{
                      flex: "1",
                      minWidth: "300px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "20px",
                    }}
                  >
                    <span
                      style={{
                        color: "#1B1919",
                        fontSize: "20px",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      למי המתנה?
                    </span>

                    <input
                      type="text"
                      value={recipient.name}
                      onChange={(e) =>
                        updateRecipient(index, "name", e.target.value)
                      }
                      placeholder="הכניסו שם כאן"
                      style={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid #4C7EFB",
                        background: "#F5F7FC",
                        color: "#1B1919",
                        fontSize: "20px",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                        textAlign: "right",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Recipient Email */}
                  <div
                    style={{
                      flex: "1",
                      minWidth: "300px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "20px",
                    }}
                  >
                    <span
                      style={{
                        color: "#1B1919",
                        fontSize: "20px",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      דואר אלקטרוני של מקבל המתנה
                    </span>

                    <input
                      type="email"
                      value={recipient.email}
                      onChange={(e) =>
                        updateRecipient(index, "email", e.target.value)
                      }
                      placeholder="שדה נבחר עם טקסט"
                      style={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid #4C7EFB",
                        background: "#F5F7FC",
                        color: "#1B1919",
                        fontSize: "20px",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                        textAlign: "right",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Recipient Phone */}
                  <div
                    style={{
                      flex: "1",
                      minWidth: "300px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "20px",
                    }}
                  >
                    <span
                      style={{
                        color: "#1B1919",
                        fontSize: "20px",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      מספר נייד של מקבל המתנה
                    </span>

                    <input
                      type="text"
                      value={recipient.phone}
                      onChange={(e) =>
                        updateRecipient(index, "phone", e.target.value)
                      }
                      placeholder="055-555-555"
                      style={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: "10px",
                        border:
                          recipient.phone.length > 0 &&
                          !isValidPhone(recipient.phone)
                            ? "1px solid #E96036"
                            : "1px solid #4C7EFB",
                        background:
                          recipient.phone.length > 0 &&
                          !isValidPhone(recipient.phone)
                            ? "#FFE1D8"
                            : "#F5F7FC",
                        color: "#1B1919",
                        fontSize: "20px",
                        fontFamily:
                          "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                        textAlign: "right",
                        outline: "none",
                      }}
                    />

                    {recipient.phone.length > 0 &&
                      !isValidPhone(recipient.phone) && (
                        <span
                          style={{
                            color: "#E96036",
                            fontSize: "16px",
                            fontFamily:
                              "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          *מספר נייד לא תקין
                        </span>
                      )}
                  </div>
                </div>
              </div>
            ))}

            {/* Add Recipient Button */}
            <div
              onClick={addRecipient}
              style={{
                alignSelf: "flex-end",
                padding: "20px 40px",
                borderRadius: "10px",
                background: "#4C7EFB",
                color: "#FFF",
                fontSize: "22px",
                fontFamily:
                  "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                cursor: "pointer",
                border: "none",
              }}
            >
              <span style={{ fontWeight: "700" }}>+ הוסף עוד נמען </span>
              <span>(שכפול הזמנה)</span>
            </div>
          </div>

          {/* Greeting Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "#1B1919",
                  fontSize: "20px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                מה תרצו להוסיף?{" "}
                <span style={{ color: "#486284" }}>
                  (לקבל ברכה תמיד מעלה חיוך)
                </span>
              </span>

              <textarea
                value={greetingText}
                onChange={(e) => setGreetingText(e.target.value)}
                placeholder="כיתבו כאן את הברכה"
                maxLength={250}
                style={{
                  width: "100%",
                  height: "150px",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #4C7EFB",
                  background: "#F8F8F8",
                  color: "#1B1919",
                  fontSize: "20px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  textAlign: "right",
                  outline: "none",
                  resize: "none",
                  opacity: 0.5,
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#4C7EFB",
                  fontSize: "20px",
                  fontFamily:
                    "Assistant, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                {greetingText.length}/250
              </span>

              <div
                onClick={() => setShowGreetingModal(true)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 20px",
                  borderRadius: "16px",
                  background: "#F8F8F8",
                  cursor: "pointer",
                  border: "1px solid #4C7EFB",
                }}
              >
                <span
                  style={{
                    color: "#1B1919",
                    fontSize: "20px",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  תיעזרו בAI לכתוב את הברכה המושלמת!
                </span>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3799 8.98169C16.2287 6.56137 19.6802 6.47994 20.6895 8.75903L20.7754 8.98267V8.98364L22.0869 12.72C22.4068 13.632 22.9237 14.4656 23.6016 15.1653C24.2794 15.8649 25.1028 16.4143 26.0156 16.7766L26.0264 16.7805L26.3789 16.9094L26.3896 16.9124L30.2246 18.1887C32.7126 19.0173 32.7884 22.3531 30.459 23.3362L30.2246 23.4231L26.3896 24.7004C25.4567 25.0107 24.602 25.5128 23.8838 26.1731C23.1656 26.8334 22.6009 27.6369 22.2275 28.5295H22.2266L22.2227 28.5403L22.0908 28.8821L22.0869 28.8938L20.7773 32.6321C19.9546 34.9771 16.6891 35.1257 15.5703 33.0618L15.4688 32.8557L15.374 32.6165L14.0703 28.8948C13.7507 27.9826 13.2344 27.1484 12.5566 26.4485C11.8788 25.7485 11.0546 25.1987 10.1416 24.8362L10.1318 24.8323L9.78027 24.7043L9.76953 24.7004L5.93457 23.4241C3.44351 22.5951 3.36838 19.2554 5.70215 18.2756L5.94922 18.1838L9.76953 16.9124C10.7021 16.6019 11.5566 16.1 12.2744 15.4397C12.9922 14.7795 13.5576 13.9766 13.9307 13.0842L13.9346 13.0735L14.0664 12.7317L14.0703 12.72L15.3799 8.98169Z"
                      fill="#4C7EFB"
                      stroke="white"
                      strokeWidth="0.8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Greeting Modal */}
        {showGreetingModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "#FFF",
                padding: "40px",
                borderRadius: "20px",
                maxWidth: "500px",
                width: "90%",
                textAlign: "center",
                direction: "rtl",
              }}
            >
              <h3
                style={{
                  color: "#4C7EFB",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                בחירת ברכה מהAI
              </h3>
              <p
                style={{
                  color: "#486284",
                  fontSize: "18px",
                  marginBottom: "30px",
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                לחץ כדי לקבל ברכה אישית ומתאימה לכל מקרה
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={selectRandomGreeting}
                  style={{
                    padding: "15px 30px",
                    borderRadius: "10px",
                    background: "#4C7EFB",
                    color: "#FFF",
                    fontSize: "18px",
                    fontWeight: "700",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  קבל ברכה
                </button>
                <button
                  onClick={() => setShowGreetingModal(false)}
                  style={{
                    padding: "15px 30px",
                    borderRadius: "10px",
                    background: "#F5F7FC",
                    color: "#4C7EFB",
                    fontSize: "18px",
                    fontWeight: "700",
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    border: "1px solid #4C7EFB",
                    cursor: "pointer",
                  }}
                >
                  ביטול
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <button
            onClick={() => {
              // Save data to context before navigation
              updateGiftData({
                greetingMessage: greetingText,
                recipientDetails: {
                  name: recipientName,
                  email: recipientEmail,
                  deliveryDate: `${selectedDate.day} ${selectedDate.month}, ${selectedTime.hour}:${selectedTime.minute}`,
                },
                senderName: senderName,
              });
              navigate("/order-summary");
            }}
            style={{
              padding: "15px 40px",
              borderRadius: "56px",
              background: "#4C7EFB",
              boxShadow: "10px 10px 0 0 rgba(0, 0, 0, 0.10)",
              color: "#FFF",
              fontSize: "18px",
              fontWeight: "700",
              fontFamily:
                "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
              border: "none",
              cursor: "pointer",
            }}
          >
            לשלב הבא - עיצוב מתנה
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
