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

  // Red Card Component - Exact Figma Design Implementation
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
      {/* Main Card Container - Exact Figma Structure */}
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
        {/* Top Orange Section with Decorative Elements */}
        <div
          style={{
            display: "flex",
            width: "460px",
            height: "188px",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #FFF",
            background: "#FFF",
            position: "relative",
          }}
        >
          {/* Orange Background with All Decorative Elements */}
          <div
            style={{
              width: "460px",
              height: "188px",
              flexShrink: 0,
              background: "#E96036",
              position: "absolute",
              left: "0px",
              top: "0px",
            }}
          >
            {/* Background Pattern Image */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1328bf78fc6e7aba44c208538b784491b4fdf711?width=1020"
              style={{
                width: "510px",
                height: "322px",
                position: "absolute",
                left: "-28px",
                top: "-63px",
              }}
              alt="Background Pattern"
            />

            {/* Decorative Elements - Dollar Signs */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/322137aed798f9f74d9cba85b27071b0a236f7d0?width=42"
              style={{
                width: "21px",
                height: "34px",
                transform: "rotate(19.423deg)",
                filter: "drop-shadow(3.081px 3.081px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "344px",
                top: "14px",
              }}
              alt="Dollar Sign"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f75cd35a5095a03cb1fa8a9e84fbbcf1d0ef8843?width=42"
              style={{
                width: "21px",
                height: "34px",
                transform: "rotate(-0.058deg)",
                filter: "drop-shadow(3.081px 3.081px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "70px",
                top: "147px",
              }}
              alt="Dollar Sign"
            />

            {/* Currency Symbols */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9f7b625a5c623b28fb9f089ea28896c0eb9e5550?width=57"
              style={{
                width: "28px",
                height: "25px",
                transform: "rotate(12.955deg)",
                filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "23px",
                top: "13px",
              }}
              alt="Currency Symbol"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9bcf082230cc4e172d70ed93108b2b835f261b67?width=58"
              style={{
                width: "29px",
                height: "32px",
                transform: "rotate(21.992deg)",
                filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "267px",
                top: "24px",
              }}
              alt="Currency Symbol"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/16498605232f149e60c60f3a44614c4dff59bf02?width=58"
              style={{
                width: "29px",
                height: "32px",
                transform: "rotate(48.846deg)",
                filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "430px",
                top: "7px",
              }}
              alt="Currency Symbol"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/14da2baef3177151b18dd969ed516d42cebcca08?width=58"
              style={{
                width: "29px",
                height: "30px",
                transform: "rotate(-13.296deg)",
                filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "7px",
                top: "87px",
              }}
              alt="Currency Symbol"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b0f18e7efaab981c6e1d566a2ac0851eb5c1778f?width=58"
              style={{
                width: "29px",
                height: "30px",
                transform: "rotate(-13.296deg)",
                filter: "drop-shadow(2.623px 2.623px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "423px",
                top: "134px",
              }}
              alt="Currency Symbol"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/377822d9d4fb8049e2bd88b7b485631497aca97a?width=58"
              style={{
                width: "29px",
                height: "36px",
                transform: "rotate(-33.253deg)",
                filter: "drop-shadow(2.878px 2.878px 0 rgba(0, 0, 0, 0.10))",
                position: "absolute",
                left: "397px",
                top: "64px",
              }}
              alt="Currency Symbol"
            />

            {/* Star SVGs */}
            <svg
              style={{
                width: "11px",
                height: "13px",
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
              <g filter="url(#filter0_d_red1)">
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
                  id="filter0_d_red1"
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
                    result="effect1_dropShadow_red1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_red1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <svg
              style={{
                width: "11px",
                height: "13px",
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
              <g filter="url(#filter0_d_red2)">
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
                  id="filter0_d_red2"
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
                    result="effect1_dropShadow_red2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_red2"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <svg
              style={{
                width: "26px",
                height: "32px",
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
              <g filter="url(#filter0_d_red3)">
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
                  id="filter0_d_red3"
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
                    result="effect1_dropShadow_red3"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_red3"
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
              <g filter="url(#filter0_d_yellow1)">
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
                  id="filter0_d_yellow1"
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
                    result="effect1_dropShadow_yellow1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_yellow1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <svg
              style={{
                width: "34px",
                height: "35px",
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
              <g filter="url(#filter0_d_yellow2)">
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
                  id="filter0_d_yellow2"
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
                    result="effect1_dropShadow_yellow2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_yellow2"
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

            {/* Additional Coin Images */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1be2e3867d6fb46450fc86b7896af58c2354745f?width=80"
              style={{
                width: "40px",
                height: "40px",
                transform: "rotate(21.656deg)",
                position: "absolute",
                left: "325px",
                top: "68px",
              }}
              alt="Coin"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/22dddd11cc9d3b24eebf151f9a8ae34d9e6362ee?width=81"
              style={{
                width: "41px",
                height: "40px",
                transform: "rotate(-176.855deg)",
                position: "absolute",
                left: "123px",
                top: "95px",
              }}
              alt="Coin"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f131832b0454c049c758f6576cfcd51494813b79?width=82"
              style={{
                width: "41px",
                height: "41px",
                position: "absolute",
                left: "88px",
                top: "22px",
              }}
              alt="Coin"
            />

            {/* Central Robot Character */}
            <div
              style={{
                width: "53px",
                height: "83px",
                position: "absolute",
                left: "203px",
                top: "25px",
              }}
            >
              <svg
                style={{
                  width: "46px",
                  height: "50px",
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
                      fill: "#FFF",
                      strokeWidth: "2.395px",
                      stroke: "#FFF",
                      position: "absolute",
                      left: "1px",
                      top: "43px",
                    }}
                    alt="Robot Base"
                  />

                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/86d1bafbbdd68fbac74943d558071598af07ef18?width=84"
                    style={{
                      width: "42px",
                      height: "59px",
                      fill: "#FFF",
                      strokeWidth: "6.032px",
                      stroke: "#FFF",
                      position: "absolute",
                      left: "3px",
                      top: "0px",
                    }}
                    alt="Robot Body"
                  />

                  <div
                    style={{
                      width: "8px",
                      height: "3px",
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
                      position: "absolute",
                      left: "1px",
                      top: "43px",
                    }}
                    alt="Robot Details"
                  />
                </div>

                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f0dbebb5b898f3be2147657170bb57f6f119a597?width=82"
                  style={{
                    width: "41px",
                    height: "57px",
                    position: "absolute",
                    left: "3px",
                    top: "0px",
                  }}
                  alt="Robot Top"
                />
              </div>
            </div>

            {/* Dollar Sign SVGs */}
            <svg
              style={{
                width: "33px",
                height: "48px",
                transform: "rotate(11.66deg)",
                fill: "#FFF",
                opacity: "0.2",
                position: "absolute",
                left: "352px",
                top: "130px",
              }}
              width="34"
              height="48"
              viewBox="0 0 34 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M28.2521 22.9289C26.5672 21.6176 24.4281 20.5958 21.062 19.5123C17.7728 18.4842 15.8898 17.8327 15.413 17.5577C14.2106 16.8306 14.1022 16.1545 14.1619 15.592C14.3002 14.2117 15.9116 13.3665 17.9744 13.5836C21.1266 13.9016 21.8496 15.1497 22.0049 17.1823C22.0578 17.7455 22.5399 18.1943 23.0996 18.1859L32.4799 18.1435C32.7905 18.14 33.0944 18.0055 33.3015 17.7664C33.5075 17.5328 33.5981 17.2303 33.5665 16.9195C33.2229 14.1605 32.7698 12.6695 31.7743 11.0214C31.2688 10.1394 30.6459 9.33464 29.9046 8.61249C29.1052 7.81639 28.1721 7.12229 27.1171 6.52704C26.2326 6.03456 25.2687 5.59897 24.2187 5.25269L24.5452 2.11359C24.6008 1.51645 24.1701 0.982363 23.5675 0.925649L16.7993 0.216518L15.6127 0.0956267C15.3195 0.0689429 15.0407 0.163574 14.82 0.332163C14.6035 0.507272 14.4536 0.769378 14.4247 1.07335L14.2339 2.89926L14.087 4.26651C13.7566 4.31104 13.4273 4.35016 13.1163 4.40996C7.82407 5.36914 4.24379 8.5187 3.17947 13.1849C3.05411 13.6831 2.97089 14.1957 2.91675 14.7311C2.89453 15.0026 2.87231 15.2742 2.85978 15.5534C2.717 19.0854 4.05284 22.252 6.67467 24.5118C8.34134 25.9659 9.8112 26.6806 13.8059 27.9951C18.0811 29.4522 19.176 29.881 19.9858 30.3806C20.7009 30.793 21.079 31.6374 20.9736 32.5849C20.7587 34.6369 18.795 35.0319 17.3467 35.0317C16.9798 35.0349 16.6411 35.0101 16.3804 34.9901C15.541 34.9071 14.7824 34.7054 14.1456 34.405C13.9631 34.3335 13.7905 34.2415 13.6363 34.1421C13.0614 33.815 12.6126 33.3955 12.2983 32.9249C12.1418 32.6728 12.0135 32.4209 11.9231 32.1487C11.7378 31.654 11.6548 31.0733 11.653 30.1262C11.6392 29.5373 11.1757 29.0528 10.5685 29.0459L1.38163 28.9703C1.08401 28.9653 0.795386 29.0804 0.581924 29.2956C0.378157 29.5184 0.268165 29.8057 0.278202 30.112C0.382778 32.3088 0.520137 33.391 0.848902 34.5014C1.57215 37.3048 3.10077 39.5645 5.41683 41.2033C6.64543 42.0767 8.22433 42.8364 10.0327 43.4124L9.79078 45.8139C9.72438 46.4088 10.1552 46.9429 10.7577 46.9996L16.0472 47.5557L18.5135 47.8111L18.718 47.8307C19.3151 47.8863 19.8492 47.4555 19.9059 46.8529L20.141 44.6473C20.2666 44.6395 20.3892 44.6197 20.5169 44.601C21.3086 44.5333 22.0778 44.4102 22.8008 44.2382C24.8743 43.7757 26.6706 42.963 28.1573 41.7934C30.5969 39.8567 32.0805 36.9282 32.4586 33.3207C32.9127 28.9625 31.4933 25.4631 28.2519 22.9289H28.2521Z"
                fill="white"
              />
            </svg>

            <svg
              style={{
                width: "33px",
                height: "48px",
                transform: "rotate(11.66deg)",
                fill: "#FFF",
                opacity: "0.2",
                position: "absolute",
                left: "385px",
                top: "137px",
              }}
              width="34"
              height="49"
              viewBox="0 0 34 49"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M28.4357 23.5642C26.7508 22.2529 24.6117 21.231 21.2456 20.1476C17.9564 19.1195 16.0734 18.4679 15.5966 18.193C14.3942 17.4658 14.2858 16.7898 14.3455 16.2273C14.4838 14.847 16.0952 14.0017 18.158 14.2189C21.3101 14.5369 22.0331 15.7849 22.1885 17.8175C22.2414 18.3807 22.7235 18.8296 23.2832 18.8211L32.6634 18.7788C32.9741 18.7752 33.278 18.6407 33.4851 18.4017C33.6911 18.1681 33.7817 17.8656 33.7501 17.5547C33.4065 14.7958 32.9534 13.3047 31.9579 11.6567C31.4524 10.7747 30.8295 9.9699 30.0881 9.24775C29.2888 8.45164 28.3557 7.75755 27.3007 7.16229C26.4162 6.66982 25.4522 6.23423 24.4023 5.88795L24.7288 2.74884C24.7844 2.1517 24.3536 1.61762 23.7511 1.5609L16.9829 0.851772L15.7963 0.730881C15.5031 0.704197 15.2243 0.798828 15.0036 0.967417C14.7871 1.14253 14.6372 1.40463 14.6083 1.70861L14.4175 3.53452L14.2706 4.90177C13.9402 4.94629 13.6109 4.98542 13.2999 5.04522C8.00767 6.00439 4.42738 9.15395 3.36306 13.8201C3.23771 14.3184 3.15449 14.8309 3.10035 15.3664C3.07813 15.6379 3.0559 15.9095 3.04337 16.1886C2.9006 19.7207 4.23643 22.8873 6.85827 25.147C8.52494 26.6011 9.99479 27.3158 13.9895 28.6304C18.2647 30.0874 19.3596 30.5162 20.1694 31.0158C20.8845 31.4282 21.2625 32.2726 21.1572 33.2202C20.9423 35.2722 18.9786 35.6672 17.5303 35.667C17.1634 35.6702 16.8247 35.6454 16.564 35.6254C15.7246 35.5423 14.966 35.3407 14.3292 35.0402C14.1467 34.9688 13.9741 34.8768 13.8199 34.7774C13.245 34.4502 12.7962 34.0307 12.4819 33.5602C12.3254 33.3081 12.1971 33.0562 12.1067 32.784C11.9214 32.2893 11.8384 31.7086 11.8366 30.7615C11.8228 30.1726 11.3593 29.6881 10.7521 29.6811L1.56523 29.6056C1.2676 29.6005 0.978979 29.7157 0.765518 29.9308C0.561751 30.1537 0.451759 30.4409 0.461796 30.7473C0.566372 32.9441 0.70373 34.0262 1.0325 35.1366C1.75575 37.9401 3.28437 40.1997 5.60043 41.8385C6.82902 42.7119 8.40793 43.4717 10.2163 44.0477L9.97438 46.4491C9.90797 47.044 10.3387 47.5781 10.9413 47.6348L16.2308 48.191L18.6971 48.4463L18.9015 48.466C19.4987 48.5216 20.0328 48.0908 20.0895 47.4882L20.3246 45.2826C20.4503 45.2748 20.5728 45.255 20.7005 45.2363C21.4923 45.1686 22.2615 45.0456 22.9845 44.8735C25.058 44.411 26.8543 43.5983 28.3409 42.4287C30.7806 40.492 32.2641 37.5635 32.6422 29.9602C33.0962 25.602 31.6769 22.1026 28.4355 19.5684L28.4357 23.5642Z"
                fill="white"
              />
            </svg>

            <svg
              style={{
                width: "33px",
                height: "48px",
                transform: "rotate(11.66deg)",
                fill: "#FFF",
                opacity: "0.2",
                position: "absolute",
                left: "418px",
                top: "150px",
              }}
              width="35"
              height="36"
              viewBox="0 0 35 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M28.7892 22.9817C27.1043 21.6704 24.9652 20.6485 21.5991 19.5651C18.3099 18.5369 16.4269 17.8854 15.9501 17.6104C14.7477 16.8833 14.6393 16.2072 14.699 15.6448C14.8373 14.2645 16.4487 13.4192 18.5115 13.6364C21.6637 13.9544 22.3867 15.2024 22.542 17.235C22.5949 17.7982 23.0771 18.2471 23.6367 18.2386L33.017 18.1962C33.3276 18.1927 33.6315 18.0582 33.8386 17.8192C34.0446 17.5856 34.1352 17.283 34.1036 16.9722C33.76 14.2132 33.3069 12.7222 32.3114 11.0741C31.8059 10.1921 31.183 9.38738 30.4417 8.66523C29.6423 7.86912 28.7092 7.17503 27.6542 6.57977C26.7697 6.0873 25.8058 5.65171 24.7558 5.30543L25.0823 2.16632C25.1379 1.56918 24.7072 1.0351 24.1046 0.978383L17.3364 0.269252L16.1498 0.148361C15.8566 0.121677 15.5779 0.216309 15.3571 0.384897C15.1406 0.560006 14.9908 0.822112 14.9618 1.12609L14.771 2.952L14.6241 4.31925C14.2937 4.36377 13.9644 4.4029 13.6534 4.4627C8.36118 5.42188 4.78089 8.57143 3.71657 13.2376C3.59122 13.7358 3.508 14.2484 3.45386 14.7838C3.43164 15.0554 3.40942 15.3269 3.39689 15.6061C3.25411 19.1382 4.58995 22.3047 7.21178 24.5645C8.87845 26.0186 10.3483 26.7333 14.343 28.0479C18.6182 29.5049 19.7131 29.9337 20.5229 30.4333C21.2381 30.8457 21.6161 31.6901 21.5107 32.6377C21.2958 34.6896 19.3321 35.0846 17.8838 35.0845C17.5169 35.0876 17.1782 35.0628 16.9175 35.0429C16.0781 34.9598 15.3195 34.7582 14.6827 34.4577C14.5002 34.3862 14.3276 34.2943 14.1734 34.1948C13.5985 33.8677 13.1497 33.4482 12.8354 32.9776C12.6789 32.7256 12.5506 32.4737 12.4602 32.2014C12.2749 31.7067 12.1919 31.1261 12.1901 30.179C12.1764 29.5901 11.7128 29.1056 11.1056 29.0986L1.91874 29.0231C1.62111 29.018 1.3325 29.1331 1.11903 29.3483C0.915266 29.5711 0.805274 29.8584 0.815311 30.1648C0.919888 32.3616 1.05725 33.4437 1.38601 34.5541C2.10926 37.3576 3.63788 39.6172 5.95394 41.256C7.18254 42.1294 8.76144 42.8891 10.5698 43.4652L10.3279 45.8666C10.2615 46.4615 10.6923 46.9956 11.2948 47.0523L16.5843 47.6085L19.0506 47.8638L19.2551 47.8835C19.8522 47.939 20.3863 47.5082 20.443 46.9056L20.6781 44.7L20.6781 44.7C20.804 44.6921 20.9267 44.6723 21.0545 44.6536C21.8462 44.5859 22.6155 44.4629 23.3385 44.2908C25.412 43.8283 27.2083 43.0156 28.6949 41.846C31.1346 39.9093 32.6181 36.9808 32.9962 33.3734C33.4503 29.0152 32.0309 25.5158 28.7895 22.9816L28.7892 22.9817Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Left Section - Orange with decorations */}
        <div
          style={{
            width: "230px",
            height: "94px",
            background: "#E96036",
            borderRadius: "0 0 0 16px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements for left section */}
          <div
            style={{
              position: "absolute",
              left: "10px",
              top: "10px",
              color: "#FFF",
              fontSize: "16px",
            }}
          >
            ₪
          </div>
          <div
            style={{
              position: "absolute",
              left: "30px",
              top: "25px",
              color: "#FFC547",
              fontSize: "14px",
            }}
          >
            ★
          </div>
          <div
            style={{
              position: "absolute",
              left: "50px",
              top: "40px",
              color: "#FFF",
              fontSize: "18px",
            }}
          >
            $
          </div>
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "15px",
              color: "#FFC547",
              fontSize: "12px",
            }}
          >
            ✦
          </div>
          <div
            style={{
              position: "absolute",
              right: "30px",
              bottom: "15px",
              color: "#FFF",
              fontSize: "14px",
            }}
          >
            ★
          </div>
        </div>

        {/* Bottom Right Section - Light Coral/Pink */}
        <div
          style={{
            width: "230px",
            height: "94px",
            background: "linear-gradient(135deg, #FFB6B6 0%, #FFA8A8 100%)",
            borderRadius: "0 0 16px 0",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {/* Three coins in the center */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#FFC547",
              border: "2px solid #FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#E96036",
            }}
          >
            ₪
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#FFC547",
              border: "2px solid #FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#E96036",
            }}
          >
            ₪
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#FFC547",
              border: "2px solid #FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#E96036",
            }}
          >
            ₪
          </div>
        </div>
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

  // Turquoise Card Component - Exact Figma Design Implementation
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
      {/* Main Card Container - Exact Figma Structure */}
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
        {/* Top Turquoise Section with Decorative Elements */}
        <div
          style={{
            display: "flex",
            width: "460px",
            height: "188px",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #FFF",
            background: "#FFF",
            position: "relative",
          }}
        >
          {/* Turquoise Background with All Decorative Elements */}
          <div
            style={{
              width: "460px",
              height: "188px",
              flexShrink: 0,
              background: "#DBE3F3",
              position: "absolute",
              left: "0px",
              top: "0px",
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


            {/* Star SVGs */}
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
              <g filter="url(#filter0_d_turq1)">
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
                  id="filter0_d_turq1"
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
                    result="effect1_dropShadow_turq1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_turq1"
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
              <g filter="url(#filter0_d_turq2)">
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
                  id="filter0_d_turq2"
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
                    result="effect1_dropShadow_turq2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_turq2"
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
              <g filter="url(#filter0_d_turq3)">
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
                  id="filter0_d_turq3"
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
                    result="effect1_dropShadow_turq3"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_turq3"
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
              <g filter="url(#filter0_d_turq_yellow1)">
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
                  id="filter0_d_turq_yellow1"
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
                    result="effect1_dropShadow_turq_yellow1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_turq_yellow1"
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
              <g filter="url(#filter0_d_turq_yellow2)">
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
                  id="filter0_d_turq_yellow2"
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
                    result="effect1_dropShadow_turq_yellow2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_turq_yellow2"
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
                    alt="Robot Base"
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
                    alt="Robot Body"
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
                    alt="Robot Details"
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
                  alt="Robot Top"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Left Section - Clean turquoise theme */}
        <div
          style={{
            width: "230px",
            height: "94px",
            background: "#DBE3F3",
            borderRadius: "0 0 0 16px",
            position: "relative",
            overflow: "hidden",
          }}
        >
        </div>

        {/* Bottom Right Section - Clean design */}
        <div
          style={{
            width: "230px",
            height: "94px",
            background: "linear-gradient(135deg, #FFB6B6 0%, #FFA8A8 100%)",
            borderRadius: "0 0 16px 0",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
        </div>
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

  // Yellow Card Component (keeping existing for now)
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
            background: "#FFF",
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Yellow Background */}
          <div
            style={{
              width: "460px",
              height: "188px",
              background: "#FFC547",
              position: "absolute",
              left: "0px",
              top: "0px",
              overflow: "hidden",
            }}
          >
            {/* Similar decorative pattern but with yellow theme */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Cpath d='M20 20 L25 15 L20 10 L15 15 Z'/%3E%3Cpath d='M40 40 L45 35 L40 30 L35 35 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.3,
              }}
            />

            {/* Coins */}
            <div
              style={{
                position: "absolute",
                right: "50px",
                top: "30px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#E96036",
                  border: "3px solid #FFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                ₪
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#E96036",
                  border: "3px solid #FFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                ₪
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#E96036",
                  border: "3px solid #FFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                ₪
              </div>
            </div>

            {/* Stars for yellow theme */}
            <div
              style={{
                position: "absolute",
                left: "30px",
                top: "20px",
                color: "#E96036",
                fontSize: "24px",
              }}
            >
              ✦
            </div>
            <div
              style={{
                position: "absolute",
                right: "80px",
                bottom: "20px",
                color: "#E96036",
                fontSize: "20px",
              }}
            >
              ✦
            </div>
            <div
              style={{
                position: "absolute",
                left: "200px",
                bottom: "30px",
                color: "#E96036",
                fontSize: "18px",
              }}
            >
              ★
            </div>

            {/* Dollar signs */}
            <div
              style={{
                position: "absolute",
                left: "20px",
                bottom: "20px",
                color: "#E96036",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              $
            </div>
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "50px",
                color: "#E96036",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              $
            </div>

            {/* Additional yellow-themed decorations */}
            <div
              style={{
                position: "absolute",
                left: "150px",
                top: "40px",
                color: "#E96036",
                fontSize: "16px",
              }}
            >
              💰
            </div>
            <div
              style={{
                position: "absolute",
                right: "150px",
                bottom: "40px",
                color: "#E96036",
                fontSize: "16px",
              }}
            >
              💎
            </div>
          </div>

          {/* Phone Mockup - Left Section */}
          <div
            style={{
              display: "flex",
              width: "206px",
              height: "148px",
              padding: "1px 0 1.157px 0.385px",
              justifyContent: "center",
              alignItems: "center",
              border: "3px solid #FFF",
              background: "#FFF",
              position: "absolute",
              left: "0",
              top: "20px",
              borderRadius: "16px",
            }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f88b01d8cc722e69ae5f5c928bcd4d9c68ef8eaf?width=411"
              style={{ width: "206px", height: "146px" }}
              alt="iPhone Mockup"
            />
          </div>

          {/* Customization Section - Right */}
          <div
            style={{
              display: "flex",
              width: "256px",
              justifyContent: "center",
              alignItems: "center",
              border: "3px solid #FFF",
              background: "#FFF",
              position: "absolute",
              right: "0",
              top: "0",
              borderRadius: "0 16px 16px 0",
            }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3a1fc7bb1694ebfbf91e2db67437cb4339960ebf?width=750"
              style={{
                display: "flex",
                width: "240px",
                height: "180px",
                justifyContent: "center",
                alignItems: "center",
              }}
              alt="התאמה אישית"
            />
          </div>
        </div>
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
