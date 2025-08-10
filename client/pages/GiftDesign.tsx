import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { StepHero } from "../components/StepHero";
import { useGift } from "../contexts/GiftContext";

export default function GiftDesign() {
  const navigate = useNavigate();
  const { giftData, updateGiftData } = useGift();
  const [selectedCard, setSelectedCard] = useState<string | null>(
    giftData.selectedCard,
  );

  // Load selected card from context and scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    if (giftData.selectedCard) {
      setSelectedCard(giftData.selectedCard);
    }
  }, [giftData.selectedCard]);

  // Red Card Component - Different color scheme
  const RedCard = () => (
    <div
      onClick={() => setSelectedCard("red")}
      style={{
        display: "flex",
        width: "462px",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        height: "427px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform:
          selectedCard === "red" ? "translateY(-10px)" : "translateY(0)",
        border:
          selectedCard === "red"
            ? "4px solid #4C7EFB"
            : "4px solid transparent",
        borderRadius: "16px",
        padding: "20px",
        position: "relative",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={(e) => {
        if (selectedCard !== "red") {
          e.currentTarget.style.transform = "translateY(-5px)";
        }
      }}
      onMouseLeave={(e) => {
        if (selectedCard !== "red") {
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {/* Main Card Container */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          alignContent: "flex-end",
          alignSelf: "stretch",
          flexWrap: "wrap",
          borderRadius: "16px",
          position: "relative",
        }}
      >
        {/* Top Section with Red Background */}
        <div
          style={{
            display: "flex",
            width: "460px",
            height: "188px",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #FFF",
            background: "#E96036",
            position: "relative",
            borderRadius: "16px 16px 0 0",
          }}
        >
          {/* Simple decorative elements for red theme */}
          <div
            style={{
              position: "absolute",
              left: "30px",
              top: "30px",
              color: "#FFF",
              fontSize: "24px",
            }}
          >
            ★
          </div>
          <div
            style={{
              position: "absolute",
              right: "30px",
              top: "30px",
              color: "#FFC547",
              fontSize: "20px",
            }}
          >
            ✦
          </div>
          <div
            style={{
              position: "absolute",
              left: "50px",
              bottom: "30px",
              color: "#FFF",
              fontSize: "18px",
            }}
          >
            ★
          </div>
          <div
            style={{
              position: "absolute",
              right: "50px",
              bottom: "30px",
              color: "#FFC547",
              fontSize: "22px",
            }}
          >
            ✦
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              color: "#FFF",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            🎁
          </div>
        </div>

        {/* Bottom Left Section */}
        <div
          style={{
            width: "230px",
            height: "94px",
            background: "#FF6B6B",
            borderRadius: "0 0 0 16px",
            position: "relative",
          }}
        ></div>

        {/* Bottom Right Section */}
        <div
          style={{
            width: "230px",
            height: "94px",
            background: "#FFB6B6",
            borderRadius: "0 0 16px 0",
            position: "relative",
          }}
        ></div>
      </div>

      {/* Card Title and Eye Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            color: "#486284",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "normal",
            position: "relative",
          }}
        >
          <span
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: "700",
              fontSize: "30px",
              color: "rgba(72,98,132,1)",
            }}
          >
            שייר פור יו - אדום
          </span>
        </div>

        <svg
          style={{
            width: "61px",
            height: "61px",
            aspectRatio: "1/1",
            position: "relative",
          }}
          width="61"
          height="62"
          viewBox="0 0 61 62"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.32461 39.0195C6.16419 36.2135 5.08398 34.808 5.08398 30.6422C5.08398 26.4738 6.16419 25.0734 8.32461 22.2648C12.6378 16.663 19.8714 10.3088 30.5006 10.3088C41.1299 10.3088 48.3635 16.663 52.6767 22.2648C54.8371 25.0759 55.9173 26.4764 55.9173 30.6422C55.9173 34.8105 54.8371 36.211 52.6767 39.0195C48.3635 44.6213 41.1299 50.9755 30.5006 50.9755C19.8714 50.9755 12.6378 44.6213 8.32461 39.0195Z"
            stroke="#486284"
            strokeWidth="4"
          />
          <path
            d="M38.125 30.6421C38.125 32.6644 37.3217 34.6038 35.8917 36.0338C34.4617 37.4637 32.5223 38.2671 30.5 38.2671C28.4777 38.2671 26.5383 37.4637 25.1083 36.0338C23.6783 34.6038 22.875 32.6644 22.875 30.6421C22.875 28.6198 23.6783 26.6804 25.1083 25.2504C26.5383 23.8204 28.4777 23.0171 30.5 23.0171C32.5223 23.0171 34.4617 23.8204 35.8917 25.2504C37.3217 26.6804 38.125 28.6198 38.125 30.6421Z"
            stroke="#486284"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Selection Checkmark */}
      {selectedCard === "red" && (
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#4C7EFB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(76, 126, 251, 0.4)",
            zIndex: 10,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );

  // Turquoise Card Component - EXACT Figma Design Implementation
  const TurquoiseCard = () => (
    <div
      onClick={() => setSelectedCard("turquoise")}
      style={{
        display: "flex",
        width: "462px",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        height: "427px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform:
          selectedCard === "turquoise" ? "translateY(-10px)" : "translateY(0)",
        border:
          selectedCard === "turquoise"
            ? "4px solid #4C7EFB"
            : "4px solid transparent",
        borderRadius: "16px",
        padding: "20px",
        position: "relative",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={(e) => {
        if (selectedCard !== "turquoise") {
          e.currentTarget.style.transform = "translateY(-5px)";
        }
      }}
      onMouseLeave={(e) => {
        if (selectedCard !== "turquoise") {
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {/* Main Card Container - Exact Figma Design */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          alignContent: "flex-end",
          alignSelf: "stretch",
          flexWrap: "wrap",
          borderRadius: "16px",
          position: "relative",
        }}
      >
        {/* Top Turquoise Section - EXACT Figma Implementation */}
        <div
          style={{
            width: "460px",
            height: "188px",
            flexShrink: 0,
            background: "#DBE3F3",
            position: "relative",
            borderRadius: "16px 16px 0 0",
          }}
        >
          {/* Background Pattern Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a3080e7faa91956b38e2710d4a9eea43ee07502f?width=1020"
            style={{
              width: "510px",
              height: "322px",
              flexShrink: 0,
              position: "absolute",
              left: "-28px",
              top: "-63px",
            }}
            alt="Background Pattern"
          />

          {/* Decorative Currency Elements */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/322137aed798f9f74d9cba85b27071b0a236f7d0?width=42"
            style={{
              width: "21px",
              height: "34px",
              transform: "rotate(19.423deg)",
              flexShrink: 0,
              filter: "drop-shadow(3.081px 3.081px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "344px",
              top: "14px",
            }}
            alt="Group 108307"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f75cd35a5095a03cb1fa8a9e84fbbcf1d0ef8843?width=42"
            style={{
              width: "21px",
              height: "34px",
              transform: "rotate(-0.058deg)",
              flexShrink: 0,
              filter: "drop-shadow(3.081px 3.081px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "70px",
              top: "147px",
            }}
            alt="Group 108376"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f0dc58bff506bf85a93d8b5476c4f4c8106df9c6?width=57"
            style={{
              width: "28px",
              height: "25px",
              transform: "rotate(12.955deg)",
              flexShrink: 0,
              filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "23px",
              top: "13px",
            }}
            alt="Group 108295"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bcf082230cc4e172d70ed93108b2b835f261b67?width=58"
            style={{
              width: "29px",
              height: "32px",
              transform: "rotate(21.992deg)",
              flexShrink: 0,
              filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "267px",
              top: "24px",
            }}
            alt="Group 108298"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/16498605232f149e60c60f3a44614c4dff59bf02?width=58"
            style={{
              width: "29px",
              height: "32px",
              transform: "rotate(48.846deg)",
              flexShrink: 0,
              filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "430px",
              top: "7px",
            }}
            alt="Group 108375"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/14da2baef3177151b18dd969ed516d42cebcca08?width=58"
            style={{
              width: "29px",
              height: "30px",
              transform: "rotate(-13.296deg)",
              flexShrink: 0,
              filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "7px",
              top: "87px",
            }}
            alt="Group 108301"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b0f18e7efaab981c6e1d566a2ac0851eb5c1778f?width=58"
            style={{
              width: "29px",
              height: "30px",
              transform: "rotate(-13.296deg)",
              flexShrink: 0,
              filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "423px",
              top: "134px",
            }}
            alt="Group 108374"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/377822d9d4fb8049e2bd88b7b485631497aca97a?width=58"
            style={{
              width: "29px",
              height: "36px",
              transform: "rotate(-33.253deg)",
              flexShrink: 0,
              filter: "drop-shadow(2.878px 2.878px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "397px",
              top: "64px",
            }}
            alt="Group 108292"
          />

          {/* Star SVGs - Exact from Figma */}
          <svg
            style={{
              width: "11px",
              height: "13px",
              flexShrink: 0,
              fill: "#E96036",
              strokeWidth: "2.156px",
              stroke: "#FFF",
              filter: "drop-shadow(2.395px 2.395px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "393px",
              top: "26px",
            }}
            width="28"
            height="32"
            viewBox="0 0 28 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_224_73147)">
              <path
                d="M12.0792 13.255L13.6392 8.354L14.9149 12.8907L18.746 11.6109L15.9021 15.159L18.5307 18.3496L14.9149 17.4273L13.3589 21.8245L11.937 17.2851L8.81953 18.703L11.0215 15.5842L7.75781 11.5459L12.0792 13.255Z"
                fill="#E96036"
              />
              <path
                d="M14.6768 8.06201L15.6455 11.5093L18.4043 10.5884L21.877 9.4292L19.5869 12.2847L17.291 15.1489L19.3623 17.6646L21.459 20.2085L18.2646 19.394L15.6016 18.7144L14.375 22.1841L13.2969 25.2319L12.3301 22.147L11.2725 18.771L9.26562 19.6841L5.64453 21.3315L7.93848 18.0815L9.6709 15.6274L6.91992 12.2231L4.34375 9.03662L8.1543 10.5435L11.4014 11.8276L12.6123 8.02686L13.7031 4.59912L14.6768 8.06201Z"
                stroke="white"
                strokeWidth="2.15585"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_224_73147"
                x="0.929688"
                y="0.844727"
                width="26.4735"
                height="30.1896"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2.39539" dy="2.39539" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_224_73147"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_224_73147"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            style={{
              width: "11px",
              height: "13px",
              flexShrink: 0,
              fill: "#E96036",
              strokeWidth: "2.156px",
              stroke: "#FFF",
              filter: "drop-shadow(2.395px 2.395px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "24px",
              top: "147px",
            }}
            width="27"
            height="31"
            viewBox="0 0 27 31"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_224_73148)">
              <path
                d="M11.378 12.4017L12.9381 7.50073L14.2137 12.0374L18.0448 10.7576L15.201 14.3057L17.8295 17.4963L14.2137 16.5741L12.6577 20.9712L11.2358 16.4319L8.11836 17.8497L10.3203 14.731L7.05664 10.6926L11.378 12.4017Z"
                fill="#E96036"
              />
              <path
                d="M13.9756 7.20874L14.9443 10.656L17.7031 9.73511L21.1758 8.57593L18.8857 11.4314L16.5898 14.2957L18.6611 16.8113L20.7578 19.3552L17.5635 18.5408L14.9004 17.8611L13.6738 21.3308L12.5957 24.3787L11.6289 21.2937L10.5713 17.9177L8.56445 18.8308L4.94336 20.4783L7.2373 17.2283L8.96973 14.7742L6.21875 11.3699L3.64258 8.18335L7.45312 9.69019L10.7002 10.9744L11.9111 7.17358L13.002 3.74585L13.9756 7.20874Z"
                stroke="white"
                strokeWidth="2.15585"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_224_73148"
                x="0.228516"
                y="-0.00854492"
                width="26.4735"
                height="30.1896"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2.39539" dy="2.39539" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_224_73148"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_224_73148"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            style={{
              width: "26px",
              height: "32px",
              flexShrink: 0,
              fill: "#E96036",
              strokeWidth: "2.156px",
              stroke: "#FFF",
              filter: "drop-shadow(2.395px 2.395px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "357px",
              top: "144px",
            }}
            width="43"
            height="50"
            viewBox="0 0 43 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_224_73149)">
              <path
                d="M17.8097 19.274L21.5571 7.50171L24.6213 18.399L33.8238 15.325L26.9927 23.8476L33.3066 31.5115L24.6213 29.2962L20.8837 39.8585L17.4682 28.9547L9.97997 32.3605L15.2692 24.869L7.42969 15.1688L17.8097 19.274Z"
                fill="#E96036"
              />
              <path
                d="M22.5947 7.20972L25.3525 17.0183L33.4824 14.3025L36.9541 13.1423L34.665 15.9988L28.3809 23.8386L34.1387 30.8259L36.2354 33.3708L33.04 32.5564L25.3086 30.5837L21.9004 40.2185L20.8213 43.2654L19.8555 40.1804L16.8037 30.4402L10.4258 33.3416L6.80469 34.989L9.09961 31.739L13.918 24.9128L6.5918 15.8464L4.01562 12.6599L7.82617 14.1667L17.1318 17.8464L20.5303 7.17456L21.6211 3.74683L22.5947 7.20972Z"
                stroke="white"
                strokeWidth="2.15585"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_224_73149"
                x="0.601562"
                y="-0.00756836"
                width="41.8778"
                height="49.0758"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2.39539" dy="2.39539" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_224_73149"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_224_73149"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          {/* Yellow Star SVGs */}
          <svg
            style={{
              width: "15px",
              height: "16px",
              flexShrink: 0,
              fill: "#FFC547",
              strokeWidth: "2.8px",
              stroke: "#FFF",
              filter: "drop-shadow(3.111px 3.111px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "394px",
              top: "126px",
            }}
            width="25"
            height="26"
            viewBox="0 0 25 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_224_73150)">
              <path
                d="M10.7992 3.69544C10.764 3.58111 10.5987 3.58815 10.5776 3.70599C10.3032 5.16059 9.44488 9.58594 9.2004 9.58594C8.90842 9.58594 2.6679 11.73 3.25361 11.8285C3.83932 11.9253 9.2004 12.8029 9.2004 12.8029C9.2004 12.8029 11.2477 19.8227 11.0525 19.5307L12.6126 13.1934L18.4011 11.3607C18.5084 11.3255 18.5049 11.1725 18.3958 11.1408L12.7094 9.39071L10.7992 3.69544Z"
                fill="#FFC547"
              />
              <path
                d="M9.20215 3.44653C9.50965 1.79155 11.6705 1.88406 12.125 3.25122L12.127 3.25024L13.8086 8.26392L18.7852 9.79614H18.7861C18.7884 9.7968 18.7907 9.79743 18.793 9.7981L18.8076 9.80298H18.8066C20.1793 10.221 20.2842 12.2162 18.8369 12.6907L18.8301 12.6936L18.8232 12.6956L13.7832 14.2913L12.4561 19.6848C12.4449 19.783 12.4206 19.9118 12.3672 20.0481C12.3111 20.1911 12.1283 20.5886 11.6514 20.8098C11.1128 21.0594 10.6302 20.896 10.4033 20.7756C10.1929 20.6639 10.0636 20.5253 10.0156 20.4719C9.95497 20.4044 9.91225 20.3441 9.88867 20.3088L9.5459 19.7952L9.62305 19.4778C9.59033 19.3456 9.54884 19.172 9.49316 18.9631C9.3317 18.3574 9.09592 17.5165 8.85254 16.6584C8.60973 15.8024 8.3604 14.9367 8.17188 14.2844C8.14739 14.1997 8.12385 14.1183 8.10156 14.0413C7.59268 13.9579 6.91552 13.8474 6.2207 13.7336C4.80801 13.5023 3.31946 13.2588 3.02539 13.2102L3.02148 13.2092C2.96506 13.1997 2.46687 13.1308 2.11035 12.6692C1.88616 12.3787 1.7889 12.0207 1.82129 11.6721C1.84977 11.3663 1.96941 11.1443 2.04395 11.0286C2.18458 10.8104 2.35332 10.6792 2.40723 10.6379C2.48584 10.5778 2.56196 10.5309 2.61719 10.4983C2.82046 10.3782 3.094 10.2556 3.34863 10.1477C3.89242 9.91737 4.65605 9.62914 5.42383 9.35278C6.19705 9.07447 6.99862 8.79897 7.62891 8.59204C7.81604 8.53061 7.9913 8.47602 8.14746 8.427C8.25258 8.0314 8.37985 7.49366 8.50977 6.89478C8.78511 5.62549 9.06563 4.17028 9.20215 3.44653ZM18.0059 12.4856L17.9951 12.4817L17.9902 12.4797L18.0059 12.4856Z"
                stroke="white"
                strokeWidth="2.80004"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_224_73150"
                x="0.414062"
                y="0.816162"
                width="23.9783"
                height="24.6361"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="3.11115" dy="3.11115" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_224_73150"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_224_73150"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            style={{
              width: "34px",
              height: "35px",
              flexShrink: 0,
              fill: "#FFC547",
              strokeWidth: "2.8px",
              stroke: "#FFF",
              filter: "drop-shadow(3.111px 3.111px 0 rgba(0, 0, 0, 0.10))",
              position: "absolute",
              left: "65px",
              top: "83px",
            }}
            width="43"
            height="45"
            viewBox="0 0 43 45"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_224_73151)">
              <path
                d="M19.9918 3.38116C19.9146 3.12995 19.5512 3.1454 19.5049 3.40435C18.9019 6.60064 17.0159 16.3248 16.4786 16.3248C15.8371 16.3248 2.12434 21.0361 3.41136 21.2525C4.69837 21.4651 16.4786 23.3937 16.4786 23.3937C16.4786 23.3937 20.9774 38.8186 20.5484 38.177L23.9766 24.2517L36.696 20.2245C36.9318 20.1472 36.924 19.8109 36.6844 19.7414L24.1891 15.8958L19.9918 3.38116Z"
                fill="#FFC547"
              />
              <path
                d="M18.1289 3.14551C18.4613 1.34867 20.8206 1.43302 21.3174 2.93652L21.3193 2.93555L25.2881 14.7686L37.0742 18.3965C37.0766 18.3972 37.0797 18.3977 37.082 18.3984L37.0967 18.4033H37.0957C38.5985 18.8594 38.7075 21.0381 37.1318 21.5547L37.125 21.5566L37.1182 21.5596L25.1475 25.3496L21.9727 38.248C21.9669 38.3522 21.9489 38.5212 21.8779 38.7021C21.8212 38.8466 21.637 39.2442 21.1592 39.4658C20.6197 39.7159 20.1363 39.5527 19.9082 39.4316C19.6964 39.3191 19.5649 39.1799 19.5156 39.125C19.4535 39.0559 19.4102 38.9931 19.3848 38.9551L19.041 38.4424L19.1357 38.0557C19.1343 38.0494 19.1333 38.0427 19.1318 38.0361C19.056 37.7028 18.9205 37.1741 18.7402 36.498C18.3818 35.1536 17.8623 33.2948 17.3271 31.4082C16.7925 29.5233 16.2448 27.6175 15.8301 26.1826C15.6518 25.5658 15.498 25.0362 15.3809 24.6328C15.1038 24.5874 14.7696 24.5326 14.3916 24.4707C13.2671 24.2866 11.7542 24.0385 10.2012 23.7842C7.09666 23.2757 3.82916 22.7404 3.18359 22.6338L3.17871 22.6328C3.09868 22.6194 2.58774 22.5442 2.22559 22.0752C1.99812 21.7805 1.89965 21.4174 1.93262 21.0635C1.96161 20.7525 2.08351 20.5253 2.16211 20.4033C2.31095 20.1723 2.49562 20.0266 2.57129 19.9688C2.67148 19.8921 2.7747 19.8264 2.86426 19.7734C3.20537 19.5718 3.71511 19.339 4.27344 19.1025C5.42458 18.6149 7.06822 17.9953 8.74805 17.3906C10.4333 16.784 12.1798 16.1838 13.5488 15.7344C14.2322 15.51 14.8288 15.32 15.2803 15.1855C15.3659 15.16 15.4487 15.1385 15.5264 15.1162C15.588 14.9252 15.6619 14.6828 15.7422 14.3877C15.9941 13.4625 16.2929 12.1761 16.5986 10.7666C17.2086 7.95492 17.8281 4.73912 18.1289 3.14453V3.14551Z"
                stroke="white"
                strokeWidth="2.80004"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_224_73151"
                x="0.525391"
                y="0.404053"
                width="42.2557"
                height="43.7051"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="3.11115" dy="3.11115" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_224_73151"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_224_73151"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          {/* Lightning Bolt */}
          <svg
            style={{
              width: "25px",
              height: "30px",
              transform: "rotate(-8.311deg)",
              flexShrink: 0,
              position: "absolute",
              left: "154px",
              top: "23px",
            }}
            width="29"
            height="34"
            viewBox="0 0 29 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M26.1531 12.8031C25.5457 11.4728 24.4629 10.5996 22.8682 10.1704C23.2824 8.2987 22.9936 7.23803 22.612 6.44239C22.014 5.19153 20.8905 4.3243 19.5353 4.06545C18.2533 3.81895 16.37 4.0041 15.0168 4.20178C8.62593 5.13539 7.13744 7.26557 6.5711 8.79035C6.56278 8.81233 5.74529 11.066 5.08043 13.4957C4.7271 14.7887 4.28857 16.3986 4.26847 17.9036C4.22682 20.9668 5.97398 22.1236 7.02011 22.5407C7.55676 22.7553 8.25159 22.963 9.72483 22.9554C8.88561 27.3188 8.80046 29.5946 10.3175 31.2765C11.2451 32.3039 12.614 32.7984 13.983 32.5984C14.4958 32.5235 14.9902 32.3543 15.4557 32.0972C16.0426 31.7715 17.5983 30.9074 22.1857 23.7561C23.3526 21.936 24.3893 20.1879 25.1005 18.8334C26.2122 16.7145 27.0608 14.8 26.1534 12.8053L26.1531 12.8031Z"
              fill="#1B1919"
            />
            <path
              d="M23.9363 11.1541C23.3289 9.82387 22.2462 8.9507 20.6514 8.52148C21.0656 6.64978 20.7768 5.58907 20.3952 4.79343C19.7972 3.54258 18.6737 2.67535 17.3185 2.41649C16.0365 2.17 14.1532 2.35517 12.8 2.55285C6.40913 3.48647 4.92064 5.61662 4.3543 7.14139C4.34598 7.16338 3.52849 9.41704 2.86363 11.8468C2.5103 13.1397 2.07177 14.7497 2.05167 16.2546C2.01002 19.3179 3.75718 20.4747 4.80331 20.8917C5.33996 21.1064 6.03479 21.314 7.50803 21.3065C6.6688 25.6698 6.58366 27.9457 8.10066 29.6276C9.02829 30.6549 10.3972 31.1494 11.7662 30.9494C12.279 30.8745 12.7734 30.7054 13.2389 30.4482C13.8258 30.1225 15.3815 29.2584 19.9689 22.1072C21.1358 20.287 22.1725 18.5389 22.8837 17.1845C23.9954 15.0655 24.844 13.1511 23.9366 11.1564L23.9363 11.1541Z"
              fill="white"
            />
            <path
              d="M8.0215 8.49059C7.85119 8.95154 5.08606 16.7941 6.2502 17.2609C7.41433 17.7276 12.4978 16.8627 12.4978 16.8627C12.4978 16.8627 9.68772 27.9512 11.3437 27.031C12.9975 26.1111 20.9149 13.9419 20.382 12.7738C19.8491 11.6057 14.8896 12.3718 14.8896 12.3718C14.8896 12.3718 17.9898 6.52215 16.5818 6.25022C15.1716 5.97863 8.6288 6.85138 8.0215 8.49059Z"
              fill="#FFC547"
            />
            <g style={{ mixBlendMode: "overlay" }} opacity="0.5">
              <path
                d="M9.19809 9.84144C8.72688 11.0224 8.25598 12.2056 7.78478 13.3865C7.31869 14.5552 9.14577 15.2481 9.61378 14.0769C10.085 12.8959 10.5559 11.7127 11.0271 10.5318C11.4932 9.36312 9.6661 8.6702 9.19809 9.84144Z"
                fill="white"
              />
            </g>
          </svg>

          {/* Coin Images */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1be2e3867d6fb46450fc86b7896af58c2354745f?width=80"
            style={{
              width: "40px",
              height: "40px",
              transform: "rotate(21.656deg)",
              flexShrink: 0,
              position: "absolute",
              left: "325px",
              top: "68px",
            }}
            alt="Group 108385"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/22dddd11cc9d3b24eebf151f9a8ae34d9e6362ee?width=81"
            style={{
              width: "41px",
              height: "40px",
              transform: "rotate(-176.855deg)",
              flexShrink: 0,
              position: "absolute",
              left: "123px",
              top: "95px",
            }}
            alt="Group 108407"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f131832b0454c049c758f6576cfcd51494813b79?width=82"
            style={{
              width: "41px",
              height: "41px",
              flexShrink: 0,
              position: "absolute",
              left: "88px",
              top: "22px",
            }}
            alt="Group 108408"
          />

          {/* Central Robot Character */}
          <div
            style={{
              width: "53px",
              height: "83px",
              flexShrink: 0,
              position: "absolute",
              left: "203px",
              top: "25px",
            }}
          >
            <svg
              style={{
                width: "46px",
                height: "50px",
                flexShrink: 0,
                fill: "#FFF",
                position: "absolute",
                left: "1px",
                top: "9px",
              }}
              width="47"
              height="51"
              viewBox="0 0 47 51"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.494203 38.4141L0.494205 16.7778L28.1356 0.0646973L46.3486 15.4922L42.9464 41.5353L23.6841 50.18L0.494203 38.4141Z"
                fill="white"
              />
            </svg>

            <div
              style={{
                width: "53px",
                height: "83px",
                flexShrink: 0,
                filter: "drop-shadow(1.206px 1.206px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            >
              <div
                style={{
                  width: "53px",
                  height: "83px",
                  flexShrink: 0,
                  filter: "drop-shadow(2.62px 2.038px 0 rgba(0, 0, 0, 0.15))",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/316a64ea027b19ff89fe79dee42116bf51b081d2?width=104"
                  style={{
                    width: "52px",
                    height: "41px",
                    flexShrink: 0,
                    fill: "#FFF",
                    strokeWidth: "2.395px",
                    stroke: "#FFF",
                    position: "absolute",
                    left: "1px",
                    top: "43px",
                  }}
                  alt="Vector"
                />

                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ccc819a976b5fe21dab95be112e37a5197cc6916?width=84"
                  style={{
                    width: "42px",
                    height: "59px",
                    flexShrink: 0,
                    fill: "#FFF",
                    strokeWidth: "6.032px",
                    stroke: "#FFF",
                    position: "absolute",
                    left: "3px",
                    top: "0px",
                  }}
                  alt="Union"
                />

                <div
                  style={{
                    width: "8px",
                    height: "3px",
                    flexShrink: 0,
                    background: "#FFF",
                    position: "absolute",
                    left: "20px",
                    top: "57px",
                  }}
                ></div>

                <div
                  style={{
                    width: "8px",
                    height: "7px",
                    flexShrink: 0,
                    background: "#FFF",
                    position: "absolute",
                    left: "37px",
                    top: "25px",
                  }}
                ></div>

                <div
                  style={{
                    width: "8px",
                    height: "6px",
                    flexShrink: 0,
                    background: "#FFF",
                    position: "absolute",
                    left: "0px",
                    top: "24px",
                  }}
                ></div>

                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6a395efba28db59f3de61ed78aca23e663aeb987?width=104"
                  style={{
                    width: "52px",
                    height: "41px",
                    flexShrink: 0,
                    position: "absolute",
                    left: "1px",
                    top: "43px",
                  }}
                  alt="Group 108277"
                />
              </div>

              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f0dbebb5b898f3be2147657170bb57f6f119a597?width=82"
                style={{
                  width: "41px",
                  height: "57px",
                  flexShrink: 0,
                  position: "absolute",
                  left: "3px",
                  top: "0px",
                }}
                alt="Group 108355"
              />
            </div>
          </div>

          {/* Additional transparency overlays from Figma */}
          <svg
            style={{
              width: "33px",
              height: "48px",
              transform: "rotate(11.66deg)",
              flexShrink: 0,
              fill: "#FFF",
              opacity: "0.2",
              position: "absolute",
              left: "352px",
              top: "133px",
            }}
            width="34"
            height="49"
            viewBox="0 0 34 49"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M28.0314 23.7087C26.3465 22.3974 24.2074 21.3756 20.8413 20.2921C17.5521 19.264 15.6691 18.6124 15.1923 18.3375C13.9899 17.6104 13.8815 16.9343 13.9412 16.3718C14.0795 14.9915 15.6909 14.1463 17.7537 14.3634C20.9059 14.6814 21.6289 15.9295 21.7842 17.9621C21.8371 18.5252 22.3192 18.9741 22.8789 18.9656L32.2591 18.9233C32.5698 18.9198 32.8737 18.7853 33.0808 18.5462C33.2868 18.3126 33.3774 18.0101 33.3458 17.6992C33.0022 14.9403 32.5491 13.4492 31.5536 11.8012C31.0481 10.9192 30.4252 10.1144 29.6838 9.39228C28.8845 8.59617 27.9514 7.90208 26.8964 7.30682C26.0119 6.81435 25.048 6.37876 23.998 6.03248L24.3245 2.89337C24.3801 2.29623 23.9494 1.76215 23.3468 1.70543L16.5786 0.996303L15.392 0.875412C15.0988 0.848728 14.82 0.94336 14.5993 1.11195C14.3828 1.28706 14.2329 1.54916 14.204 1.85314L14.0132 3.67905L13.8663 5.0463C13.5359 5.09083 13.2066 5.12995 12.8956 5.18975C7.60337 6.14893 4.02308 9.29849 2.95876 13.9647C2.83341 14.4629 2.75019 14.9754 2.69605 15.5109C2.67383 15.7824 2.65161 16.054 2.63908 16.3332C2.4963 19.8652 3.83213 23.0318 6.45397 25.2916C8.12064 26.7457 9.5905 27.4603 13.5852 28.7749C17.8604 30.2319 18.9553 30.6608 19.7651 31.1603C20.4802 31.5728 20.8583 32.4172 20.7529 33.3647C20.538 35.4167 18.5743 35.8117 17.126 35.8115C16.7591 35.8147 16.4204 35.7899 16.1597 35.7699C15.3203 35.6868 14.5617 35.4852 13.9249 35.1848C13.7424 35.1133 13.5698 35.0213 13.4156 34.9219C12.8407 34.5947 12.3919 34.1753 12.0776 33.7047C11.9211 33.4526 11.7928 33.2007 11.7024 32.9285C11.5171 32.4338 11.4341 31.8531 11.4323 30.906C11.4185 30.3171 10.955 29.8326 10.3478 29.8257L1.16093 29.7501C0.863302 29.7451 0.574683 29.8602 0.361221 30.0754C0.157454 30.2982 0.0474617 30.5854 0.0574988 30.8918C0.162075 33.0886 0.299433 34.1708 0.628199 35.2811C1.35145 38.0846 2.88007 40.3442 5.19613 41.983C6.42473 42.8564 8.00363 43.6162 9.81204 44.1922L9.57008 46.5937C9.50367 47.1886 9.93445 47.7227 10.537 47.7794L15.8265 48.3355L18.2928 48.5909L18.4973 48.6105C19.0944 48.6661 19.6285 48.2353 19.6852 47.6328L19.9205 45.4272C20.0461 45.4193 20.1686 45.3995 20.2964 45.3808C21.088 45.3131 21.8573 45.1901 22.5803 45.0181C24.6537 44.5555 26.4501 43.7428 27.9368 42.5732C30.3764 40.6365 31.8599 37.7079 32.238 34.1005C32.6921 29.7423 31.2728 26.2429 28.0314 23.7087ZM26.5932 40.8645C25.2152 41.9439 23.5103 42.6685 21.4862 43.0284C20.7461 43.1744 19.9727 43.2628 19.1445 43.2891C19.0644 43.2951 18.9842 43.3011 18.8987 43.306C18.3499 43.3167 17.909 43.7329 17.8526 44.2792L17.6377 46.3312L17.3229 46.3L14.8133 46.0357L11.8463 45.7222L12.073 43.5036C12.1249 42.9789 11.7913 42.493 11.2791 42.3535C9.33837 41.8178 7.6771 41.0749 6.45931 40.2037C4.57 38.8728 3.31704 37.025 2.72188 34.6932C2.50251 33.9266 2.37819 33.1909 2.2972 31.9175L9.29877 31.9873C9.40018 33.1071 9.67549 33.9303 10.2306 34.8451C10.5158 35.2928 10.8662 35.6976 11.2786 36.0475C11.9233 36.637 12.7259 37.09 13.6396 37.4138C14.3308 37.6692 15.0961 37.8384 15.9139 37.9169C16.8582 38.0104 17.7166 38.0015 18.4848 37.8839C21.0417 37.4817 22.6702 35.9525 22.912 33.5792C23.1038 31.776 22.3172 30.126 20.8904 29.2849C19.9155 28.6837 18.8033 28.2569 14.2733 26.6966C10.3412 25.4062 9.1858 24.779 7.86463 23.6441C5.56367 21.6591 4.53259 18.9273 4.85948 15.7319C4.87064 15.6779 4.87098 15.6216 4.88213 15.5675C4.99753 14.5713 5.24343 13.6528 5.61759 12.8227C6.62999 10.4563 8.58984 8.74186 11.3176 7.83955C12.2276 7.5258 13.2247 7.30891 14.3035 7.18777C14.5191 7.15337 14.7357 7.1417 14.9479 7.12351C15.4688 7.08448 15.8859 6.67463 15.9378 6.14999L16.0112 5.46636L16.2581 3.15047L16.6724 3.19088L22.0506 3.75407L21.7886 6.25279L21.7415 6.69953C21.6873 7.23499 22.021 7.72085 22.5332 7.86036C23.9509 8.25434 25.1935 8.78688 26.2589 9.44066C27.7329 10.3534 28.8873 11.5046 29.6862 12.9036C30.3699 14.0421 30.737 15.0758 31.0114 16.7498L23.8318 16.7785C23.2882 13.9783 21.4405 12.5545 17.9812 12.1957C14.6669 11.8443 12.0591 13.5039 11.7843 16.1465C11.6215 17.8092 12.3816 19.1776 14.091 20.2066C14.7194 20.5654 16.7499 21.285 20.1825 22.3652C23.285 23.3605 25.2267 24.2739 26.6906 25.427C29.3407 27.4953 30.456 30.2558 30.0757 33.874C29.764 36.8866 28.5565 39.2973 26.5943 40.8591L26.5932 40.8645Z"
              fill="white"
            />
          </svg>

          <svg
            style={{
              width: "33px",
              height: "48px",
              transform: "rotate(11.66deg)",
              flexShrink: 0,
              fill: "#FFF",
              opacity: "0.2",
              position: "absolute",
              left: "386px",
              top: "140px",
            }}
            width="34"
            height="47"
            viewBox="0 0 34 47"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M28.2149 23.344C26.5301 22.0327 24.391 21.0108 21.0249 19.9274C17.7357 18.8992 15.8527 18.2477 15.3759 17.9727C14.1735 17.2456 14.0651 16.5696 14.1248 16.0071C14.2631 14.6268 15.8745 13.7815 17.9373 13.9987C21.0894 14.3167 21.8124 15.5647 21.9678 17.5973C22.0207 18.1605 22.5028 18.6094 23.0625 18.6009L32.4427 18.5585C32.7534 18.555 33.0573 18.4205 33.2644 18.1815C33.4704 17.9479 33.561 17.6453 33.5294 17.3345C33.1858 14.5756 32.7327 13.0845 31.7372 11.4364C31.2317 10.5545 30.6088 9.74968 29.8674 9.02753C29.0681 8.23143 28.135 7.53733 27.08 6.94208C26.1955 6.4496 25.2315 6.01401 24.1816 5.66773L24.5081 2.52863C24.5637 1.93148 24.1329 1.3974 23.5304 1.34069L16.7622 0.631557L15.5756 0.510666C15.2824 0.483982 15.0036 0.578613 14.7829 0.747202C14.5664 0.922311 14.4165 1.18442 14.3876 1.48839L14.1968 3.3143L14.0499 4.68155C13.7195 4.72608 13.3902 4.7652 13.0792 4.825C7.78696 5.78418 4.20668 8.93374 3.14236 13.5999C3.01701 14.0981 2.93379 14.6107 2.87965 15.1461C2.85742 15.4177 2.8352 15.6892 2.82267 15.9684C2.67989 19.5005 4.01573 22.667 6.63756 24.9268C8.30423 26.3809 9.77409 27.0956 13.7688 28.4102C18.044 29.8672 19.1389 30.296 19.9487 30.7956C20.6638 31.208 21.0418 32.0524 20.9365 33C20.7216 35.052 18.7579 35.4469 17.3096 35.4468C16.9427 35.4499 16.604 35.4251 16.3433 35.4052C15.5039 35.3221 14.7453 35.1205 14.1085 34.82C13.926 34.7485 13.7534 34.6566 13.5992 34.5571C13.0243 34.23 12.5755 33.8105 12.2612 33.3399C12.1047 33.0879 11.9764 32.836 11.886 32.5637C11.7007 32.069 11.6177 31.4884 11.6159 30.5413C11.6021 29.9524 11.1386 29.4679 10.5314 29.4609L1.34452 29.3854C1.0469 29.3803 0.758276 29.4954 0.544815 29.7106C0.341048 29.9334 0.231055 30.2207 0.241093 30.5271C0.345669 32.7239 0.483027 33.806 0.811793 34.9164C1.53504 37.7199 3.06366 39.9795 5.37972 41.6183C6.60832 42.4917 8.18722 43.2514 9.99563 43.8275L9.75367 46.2289C9.68727 46.8238 10.118 47.3579 10.7206 47.4146L16.0101 47.9708L18.4764 48.2261L18.6808 48.2458C19.278 48.3014 19.8121 47.8706 19.8688 47.268L20.1041 45.0625C20.2297 45.0546 20.3522 45.0348 20.48 45.0161C21.2716 44.9484 22.0409 44.8253 22.7639 44.6533C24.8373 44.1908 26.6336 43.3781 28.1204 42.2084C30.56 40.2717 32.0435 37.3432 32.4216 33.7357C32.8757 29.3775 31.4564 25.8782 28.2149 23.344ZM26.7768 40.4998C25.3988 41.5792 23.6939 42.3037 21.6698 42.6637C20.9297 42.8096 20.1563 42.898 19.3281 42.9243C19.248 42.9304 19.1678 42.9364 19.0823 42.9412C18.5335 42.952 18.0926 43.3682 18.0362 43.9144L17.8213 45.9664L17.5065 45.9353L14.9969 45.671L12.0298 45.3574L12.2566 43.1388C12.3085 42.6142 11.9749 42.1283 11.4627 41.9888C9.52196 41.4531 7.86069 40.7102 6.6429 39.839C4.75359 38.508 3.50064 36.6603 2.90548 34.3284C2.6861 33.5619 2.56178 32.8262 2.4808 31.5528L9.48236 31.6225C9.58377 32.7424 9.85908 33.5656 10.4142 34.4803C10.6994 34.928 11.0498 35.3328 11.4622 35.6828C12.1069 36.2723 12.9095 36.7253 13.8232 37.0491C14.5144 37.3044 15.2797 37.4736 16.0975 37.5522C17.0418 37.6456 17.9002 37.6368 18.6684 37.5192C21.2253 37.117 22.8538 35.5878 23.0956 33.2145C23.2874 31.4113 22.5008 29.7613 21.0739 28.9202C20.0991 28.3189 18.9869 27.8922 14.4568 26.3319C10.5248 25.0415 9.3694 24.4142 8.04823 23.2794C5.74727 21.2943 4.71618 18.5626 5.04308 15.3672C5.05423 15.3131 5.05457 15.2568 5.06573 15.2028C5.18113 14.2066 5.42702 13.2881 5.80118 12.458C6.81359 10.0916 8.77344 8.37711 11.5012 7.47481C12.4112 7.16105 13.4083 6.94416 14.4871 6.82303C14.7027 6.78862 14.9193 6.77696 15.1315 6.75877C15.6524 6.71973 16.0695 6.30988 16.1214 5.78524L16.1948 5.10162L16.4417 2.78573L16.856 2.82614L22.2342 3.38932L21.9722 5.88805L21.925 6.33479C21.8709 6.87024 22.2046 7.35611 22.7168 7.49561C24.1345 7.8896 25.377 8.42214 26.4425 9.07591C27.9165 9.9887 29.0709 11.1398 29.8698 12.5388C30.5535 13.6773 30.9206 14.7111 31.195 16.3851L24.0153 16.4138C23.4718 13.6136 21.6241 12.1898 18.1648 11.831C14.8505 11.4795 12.2427 13.1392 11.9679 15.7818C11.8051 17.4444 12.5652 18.8129 14.2746 19.8418C14.903 20.2007 16.9335 20.9202 20.3661 22.0005C23.4686 22.9957 25.4103 23.9092 26.8742 25.0622C29.5243 27.1306 30.6396 29.891 30.2593 33.5093C29.9476 36.5218 28.74 38.9325 26.7779 40.4944L26.7768 40.4998Z"
              fill="white"
            />
          </svg>

          <svg
            style={{
              width: "33px",
              height: "48px",
              transform: "rotate(11.66deg)",
              flexShrink: 0,
              fill: "#FFF",
              opacity: "0.2",
              position: "absolute",
              left: "419px",
              top: "153px",
            }}
            width="34"
            height="34"
            viewBox="0 0 34 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M28.5685 23.7615C26.8836 22.4501 24.7445 21.4283 21.3784 20.3449C18.0892 19.3167 16.2062 18.6652 15.7294 18.3902C14.527 17.6631 14.4186 16.987 14.4783 16.4246C14.6166 15.0443 16.228 14.199 18.2908 14.4162C21.443 14.7341 22.166 15.9822 22.3213 18.0148C22.3742 18.578 22.8564 19.0269 23.416 19.0184L32.7963 18.976C33.1069 18.9725 33.4108 18.838 33.6179 18.599C33.8239 18.3653 33.9145 18.0628 33.8829 17.752C33.5393 14.993 33.0862 13.502 32.0907 11.8539C31.5852 10.9719 30.9623 10.1672 30.221 9.44501C29.4216 8.64891 28.4885 7.95481 27.4335 7.35956C26.549 6.86708 25.5851 6.43149 24.5351 6.08521L24.8616 2.94611C24.9172 2.34896 24.4865 1.81488 23.8839 1.75817L17.1157 1.04904L15.9291 0.928146C15.6359 0.901462 15.3572 0.996094 15.1364 1.16468C14.9199 1.33979 14.7701 1.6019 14.7411 1.90587L14.5503 3.73178L14.4034 5.09903C14.073 5.14356 13.7437 5.18268 13.4327 5.24248C8.14048 6.20166 4.56019 9.35122 3.49587 14.0174C3.37052 14.5156 3.2873 15.0282 3.23316 15.5636C3.21094 15.8352 3.18871 16.1067 3.17619 16.3859C3.03341 19.918 4.36924 23.0845 6.99108 25.3443C8.65775 26.7984 10.1276 27.5131 14.1223 28.8277C18.3975 30.2847 19.4924 30.7135 20.3022 31.2131C21.0174 31.6255 21.3954 32.4699 21.29 33.4174C21.0751 35.4694 19.1114 35.8644 17.6631 35.8643C17.2962 35.8674 16.9575 35.8426 16.6968 35.8226C15.8574 35.7396 15.0988 35.538 14.462 35.2375C14.2795 35.166 14.1069 35.0741 13.9527 34.9746C13.3778 34.6475 12.929 34.228 12.6147 33.7574C12.4582 33.5054 12.3299 33.2535 12.2395 32.9812C12.0542 32.4865 11.9712 31.9058 11.9694 30.9587C11.9557 30.3698 11.4921 29.8854 10.8849 29.8784L1.69804 29.8029C1.40041 29.7978 1.11179 29.9129 0.89833 30.1281C0.694563 30.3509 0.584571 30.6382 0.594608 30.9445C0.699184 33.1414 0.836543 34.2235 1.16531 35.3339C1.88856 38.1374 3.41718 40.397 5.73324 42.0358C6.96184 42.9092 8.54074 43.6689 10.3491 44.245L10.1072 46.6464C10.0408 47.2413 10.4716 47.7754 11.0741 47.8321L16.3636 48.3883L18.8299 48.6436L19.0344 48.6632C19.6315 48.7188 20.1656 48.2881 20.2223 47.6855L20.4576 45.4799C20.5833 45.4721 20.7057 45.4522 20.8335 45.4335C21.6252 45.3658 22.3944 45.2428 23.1174 45.0708C25.1908 44.6083 26.9872 43.7955 28.4739 42.6259C30.9135 40.6892 32.397 37.7607 32.7751 34.1532C33.2292 29.795 31.8099 26.2956 28.5685 23.7615ZM27.1303 40.9173C25.7523 41.9966 24.0475 42.7212 22.0233 43.0812C21.2832 43.2271 20.5098 43.3155 19.6816 43.3418C19.6015 43.3478 19.5214 43.3538 19.4358 43.3587C18.887 43.3694 18.4461 43.7856 18.3897 44.3319L18.1748 46.3839L17.86 46.3527L15.3505 46.0885L12.3834 45.7749L12.6101 43.5563C12.662 43.0316 12.3284 42.5458 11.8162 42.4063C9.87548 41.8706 8.21421 41.1276 6.99642 40.2565C5.10711 38.9255 3.85415 37.0778 3.25899 34.7459C3.03962 33.9793 2.9153 33.2436 2.83431 31.9703L9.83588 32.04C9.93728 33.1598 10.2126 33.9831 10.7677 34.8978C11.0529 35.3455 11.4033 35.7503 11.8157 36.1003C12.4604 36.6898 13.263 37.1428 14.1767 37.4666C14.8679 37.7219 15.6332 37.8911 16.451 37.9697C17.3953 38.0631 18.2537 38.0543 19.0219 37.9367C21.5788 37.5345 23.2074 36.0052 23.4491 33.6319C23.6409 31.8288 22.8543 30.1787 21.4275 29.3377C20.4527 28.7364 19.3404 28.3096 14.8104 26.7493C10.8783 25.459 9.72291 24.8317 8.40174 23.6969C6.10078 21.7118 5.0697 18.98 5.39659 15.7846C5.40775 15.7306 5.40809 15.6743 5.41924 15.6203C5.53464 14.6241 5.78054 13.7056 6.1547 12.8755C7.1671 10.509 9.12695 8.79459 11.8547 7.89229C12.7647 7.57853 13.7618 7.36165 14.8406 7.24051C15.0562 7.2061 15.2728 7.19444 15.4851 7.17625C16.0059 7.13721 16.423 6.72736 16.4749 6.20272L16.5483 5.5191L16.7952 3.20321L17.2095 3.24362L22.5877 3.8068L22.3257 6.30553L22.2786 6.75227C22.2244 7.28772 22.5581 7.77359 23.0703 7.91309C24.488 8.30708 25.7306 8.83962 26.796 9.49339C28.27 10.4062 29.4244 11.5573 30.2233 12.9563C30.907 14.0948 31.2741 15.1286 31.5485 16.8026L24.3689 16.8313C23.8253 14.031 21.9777 12.6073 18.5184 12.2484C15.204 11.897 12.5962 13.5566 12.3214 16.1992C12.1586 17.8619 12.9188 19.2303 14.6281 20.2593C15.2566 20.6182 17.2871 21.3377 20.7196 22.4179C23.8221 23.4132 25.7638 24.3267 27.2277 25.4797C29.8778 27.5481 30.9931 30.3085 30.6128 33.9268C30.3011 36.9393 29.0936 39.35 27.1314 40.9118L27.1303 40.9173Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Bottom sections - SIMPLE clean design */}
        <div
          style={{
            width: "230px",
            height: "94px",
            background: "#DBE3F3",
            borderRadius: "0 0 0 16px",
            position: "relative",
          }}
        ></div>

        <div
          style={{
            width: "230px",
            height: "94px",
            background: "#DBE3F3",
            borderRadius: "0 0 16px 0",
            position: "relative",
          }}
        ></div>
      </div>

      {/* Card Title and Eye Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            color: "#486284",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "normal",
            position: "relative",
          }}
        >
          <span
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: "700",
              fontSize: "30px",
              color: "rgba(72,98,132,1)",
            }}
          >
            שייר פור יו - תכלת
          </span>
        </div>

        <svg
          style={{
            width: "61px",
            height: "61px",
            aspectRatio: "1/1",
            position: "relative",
          }}
          width="61"
          height="62"
          viewBox="0 0 61 62"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.32461 39.0195C6.16419 36.2135 5.08398 34.808 5.08398 30.6422C5.08398 26.4738 6.16419 25.0734 8.32461 22.2648C12.6378 16.663 19.8714 10.3088 30.5006 10.3088C41.1299 10.3088 48.3635 16.663 52.6767 22.2648C54.8371 25.0759 55.9173 26.4764 55.9173 30.6422C55.9173 34.8105 54.8371 36.211 52.6767 39.0195C48.3635 44.6213 41.1299 50.9755 30.5006 50.9755C19.8714 50.9755 12.6378 44.6213 8.32461 39.0195Z"
            stroke="#486284"
            strokeWidth="4"
          />
          <path
            d="M38.125 30.6421C38.125 32.6644 37.3217 34.6038 35.8917 36.0338C34.4617 37.4637 32.5223 38.2671 30.5 38.2671C28.4777 38.2671 26.5383 37.4637 25.1083 36.0338C23.6783 34.6038 22.875 32.6644 22.875 30.6421C22.875 28.6198 23.6783 26.6804 25.1083 25.2504C26.5383 23.8204 28.4777 23.0171 30.5 23.0171C32.5223 23.0171 34.4617 23.8204 35.8917 25.2504C37.3217 26.6804 38.125 28.6198 38.125 30.6421Z"
            stroke="#486284"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Selection Checkmark */}
      {selectedCard === "turquoise" && (
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#4C7EFB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(76, 126, 251, 0.4)",
            zIndex: 10,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );

  // Yellow Card Component - Different color scheme
  const YellowCard = () => (
    <div
      onClick={() => setSelectedCard("yellow")}
      style={{
        width: "462px",
        height: "427px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform:
          selectedCard === "yellow" ? "translateY(-10px)" : "translateY(0)",
        border:
          selectedCard === "yellow"
            ? "4px solid #4C7EFB"
            : "4px solid transparent",
        borderRadius: "16px",
        padding: "20px",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        if (selectedCard !== "yellow") {
          e.currentTarget.style.transform = "translateY(-5px)";
        }
      }}
      onMouseLeave={(e) => {
        if (selectedCard !== "yellow") {
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {/* Main Card Design */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          alignContent: "flex-end",
          width: "100%",
          flexWrap: "wrap",
          borderRadius: "16px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "460px",
            height: "188px",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #FFF",
            background: "#FFC547",
            position: "relative",
            borderRadius: "16px 16px 0 0",
            overflow: "hidden",
          }}
        >
          {/* Simple decorative elements for yellow theme */}
          <div
            style={{
              position: "absolute",
              left: "30px",
              top: "30px",
              color: "#E96036",
              fontSize: "24px",
            }}
          >
            ★
          </div>
          <div
            style={{
              position: "absolute",
              right: "30px",
              top: "30px",
              color: "#E96036",
              fontSize: "20px",
            }}
          >
            ✦
          </div>
          <div
            style={{
              position: "absolute",
              left: "50px",
              bottom: "30px",
              color: "#E96036",
              fontSize: "18px",
            }}
          >
            ★
          </div>
          <div
            style={{
              position: "absolute",
              right: "50px",
              bottom: "30px",
              color: "#E96036",
              fontSize: "22px",
            }}
          >
            ✦
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              color: "#E96036",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            🎁
          </div>
        </div>

        {/* Bottom sections for yellow card */}
        <div
          style={{
            width: "230px",
            height: "94px",
            background: "#FFD700",
            borderRadius: "0 0 0 16px",
            position: "relative",
          }}
        ></div>

        <div
          style={{
            width: "230px",
            height: "94px",
            background: "#FFF2B3",
            borderRadius: "0 0 16px 0",
            position: "relative",
          }}
        ></div>
      </div>

      {/* Card Title and Eye Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            color: "#486284",
            textAlign: "center",
            fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
            fontSize: "30px",
            fontWeight: "800",
            lineHeight: "normal",
          }}
        >
          שייר פור יו - צהוב
        </div>
        <svg
          width="61"
          height="62"
          viewBox="0 0 61 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.32461 39.0195C6.16419 36.2135 5.08398 34.808 5.08398 30.6422C5.08398 26.4738 6.16419 25.0734 8.32461 22.2648C12.6378 16.663 19.8714 10.3088 30.5006 10.3088C41.1299 10.3088 48.3635 16.663 52.6767 22.2648C54.8371 25.0759 55.9173 26.4764 55.9173 30.6422C55.9173 34.8105 54.8371 36.211 52.6767 39.0195C48.3635 44.6213 41.1299 50.9755 30.5006 50.9755C19.8714 50.9755 12.6378 44.6213 8.32461 39.0195Z"
            stroke="#486284"
            strokeWidth="4"
          />
          <path
            d="M38.125 30.6421C38.125 32.6644 37.3217 34.6038 35.8917 36.0338C34.4617 37.4637 32.5223 38.2671 30.5 38.2671C28.4777 38.2671 26.5383 37.4637 25.1083 36.0338C23.6783 34.6038 22.875 32.6644 22.875 30.6421C22.875 28.6198 23.6783 26.6804 25.1083 25.2504C26.5383 23.8204 28.4777 23.0171 30.5 23.0171C32.5223 23.0171 34.4617 23.8204 35.8917 25.2504C37.3217 26.6804 38.125 28.6198 38.125 30.6421Z"
            stroke="#486284"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Selection Checkmark */}
      {selectedCard === "yellow" && (
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#4C7EFB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(76, 126, 251, 0.4)",
            zIndex: 10,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
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
      <Header />

      {/* Hero Section with Steps */}
      <StepHero currentStep={2} />

      {/* Greeting Cards Section */}
      <div
        style={{
          width: "100%",
          background: "#F8F9FF",
          padding: "80px 40px",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Section Title */}
          <h2
            style={{
              color: "#486284",
              fontSize: "48px",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "20px",
              fontFamily:
                "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            בחרו את כרטיס הברכה המושלם
          </h2>

          <p
            style={{
              color: "#6B7280",
              fontSize: "20px",
              textAlign: "center",
              marginBottom: "60px",
              fontFamily:
                "Greycliff Hebrew CF, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            כרטיסי ברכה מעוצבים במיוחד שיישלחו יחד עם המתנה הדיגיטלית
          </p>

          {/* Cards Grid - Exactly 3 cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
              marginBottom: "60px",
              justifyItems: "center",
              maxWidth: "1400px",
              margin: "0 auto 60px auto",
            }}
          >
            <RedCard />
            <TurquoiseCard />
            <YellowCard />
          </div>

          {/* Continue Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "60px",
            }}
          >
            <button
              onClick={() => {
                console.log("Selected card:", selectedCard);
                updateGiftData({ selectedCard });
                // Scroll to top before navigation
                window.scrollTo(0, 0);
                navigate("/order-summary");
              }}
              disabled={!selectedCard}
              style={{
                padding: "20px 40px",
                borderRadius: "50px",
                background: selectedCard ? "#4C7EFB" : "#ccc",
                color: "#FFF",
                fontSize: "20px",
                fontWeight: "700",
                border: "none",
                cursor: selectedCard ? "pointer" : "not-allowed",
                transition: "all 0.3s ease",
                boxShadow: selectedCard
                  ? "0 10px 20px rgba(76, 126, 251, 0.3)"
                  : "none",
              }}
            >
              המשך לסיכום הזמנה
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
