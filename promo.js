/* =========================================================
   OMNIBUS AFRICA SERVICE PROMOTION POPUP
   ========================================================= */

(function () {
  if (window.oaPromoInitialized) return;
  window.oaPromoInitialized = true;

  const slidesData = [
    // CREATIVE ENGAGEMENT
    ["ghkGawwK8M0Vo3pMV6wyFdC4KYo1BvhWgaWjvKDa.jpg", "CREATIVE ENGAGEMENT"],
    ["CwQFXDKhR6Sr4c9i61YcG7meucSO3GGRMtztWkWR.jpg", "CREATIVE ENGAGEMENT"],
    ["8qYNyjt4VZRIS1UPMT1sg1JXaSjqGFfcefGXO0ee.jpg", "CREATIVE ENGAGEMENT"],
    ["o13X0IOIr9PcTl3r2ymM0fcOGA6mFp9zBohZ4J1u.jpg", "CREATIVE ENGAGEMENT"],
    ["RH4SpXTJsEDCnUMbxsLKNlVaRgh3J6ptUEgDg0lE.jpg", "CREATIVE ENGAGEMENT"],
    ["kJp7oloyjm630A77rQmqfbAsx7QjpyAHZxSOlcFF.jpg", "CREATIVE ENGAGEMENT"],
    ["mmgoaKtXbQ0fzyiLHXLlwDSmPdsBdQsRoH0x5Wvu.jpg", "CREATIVE ENGAGEMENT"],

    // BUSINESS DOCUMENTATION
    ["dNUgY7yAwg7oymZ6iThkao6zkdqE064WkLuSb4Ky.jpg", "BUSINESS DOCUMENTATION"],
    ["tBdAY6Jq3PtVpxkDurQxSzalfY6iLjEqKJxmJcWc.jpg", "BUSINESS DOCUMENTATION"],
    ["QoqENqyUD2mSdciHrxGAf0L3ugjOVjpVa15kc7dG.jpg", "BUSINESS DOCUMENTATION"],
    ["1r8fO1c6KJy5NsgzKwM36Ja3T5wzip6b7r3Y3yd9.jpg", "BUSINESS DOCUMENTATION"],
    ["s7MGnL0BURB5clKPdjJZGqOwihJqLITvXl1DjspD.jpg", "BUSINESS DOCUMENTATION"],
    ["Q6YTowa8CkebC0Nl3j3KeED9bMIWd4DkqNIJlKxR.jpg", "BUSINESS DOCUMENTATION"],

    // DIGITAL SETUP
    ["ru2UJd9H42RQmASTQmPlaN7Kq3WOSCmv4aByzO1K.jpg", "DIGITAL SETUP"],
    ["oilfM6MFvQL4aio2HnfYGl31PoABwmvqAmzV00Iz.jpg", "DIGITAL SETUP"],
    ["4hJYGvy6UeSb7QWsRJjSilQUtGXAo9H6LdkG3ujG.jpg", "DIGITAL SETUP"],
    ["OwrsdBvYbY3MZbkuJvEe3nVqGFlTJCgDhO56x80J.jpg", "DIGITAL SETUP"],
    ["bwiK76Hst1VctXpSPUXjZd1qYnz6ij4526LUQwhM.jpg", "DIGITAL SETUP"],

    // OUTDOOR MARKETING PRINTS
    ["lzHSiRcW0WybOA0WLE8ywrUD4aUBXtl79Sthjp7r.jpg", "OUTDOOR MARKETING PRINTS"],
    ["1Sl9ooFUly1UQf8N2d2A42KoRu0jYGQdMkyDElJ0.jpg", "OUTDOOR MARKETING PRINTS"],
    ["DYJ1mE2UifCUUQIYp9bV2lyE6O8exPUVXkDYrWoZ.jpg", "OUTDOOR MARKETING PRINTS"],
    ["WXrLSN66IvmqRVXnyETvpyT4EfZl27umbUSkyElK.jpg", "OUTDOOR MARKETING PRINTS"],
    ["lLsYRuXuiriB79jVG1GWAkNGCmG6dj3AbxE2Qxkj.jpg", "OUTDOOR MARKETING PRINTS"],
    ["ploKqsjNwbwZ2KCEeSg8OZLdbEx1xpnxZTClR7NK.jpg", "OUTDOOR MARKETING PRINTS"],
    ["lMn3GiFjVDnYXzrB6Oiff28jqO0m2dm2aqYtfeJJ.jpg", "OUTDOOR MARKETING PRINTS"]
  ];

  const imageBase = "https://storage.mlcdn.com/account_image/2758158/";
  const destination = "https://omnibusafrica.mailerpage.io/get-started";

  const popup = document.createElement("div");
  popup.id = "oa-promo-popup";
  popup.setAttribute("aria-hidden", "true");

  popup.innerHTML = `
    <div class="oa-promo-backdrop"></div>

    <div class="oa-promo-window" role="dialog" aria-modal="true" aria-label="Omnibus Africa services">

      <button class="oa-promo-close" type="button" aria-label="Close promotion">&times;</button>

      <div class="oa-promo-content">

        <div class="oa-promo-heading">
          <h2>LET'S SAVE YOU SOME TIME</h2>
          <p>Click the service you need, and let's get started.</p>
        </div>

        <div class="oa-promo-carousel">
          <div class="oa-promo-slides" id="oa-promo-slides">
            ${slidesData.map(function (item) {
              return `
                <a class="oa-promo-slide" href="${destination}" aria-label="Explore ${item[1]} services">
                  <img src="${imageBase + item[0]}" alt="${item[1]}" loading="eager">
                  <span class="oa-promo-category">${item[1]}</span>
                </a>
              `;
            }).join("")}
          </div>
        </div>

        <div class="oa-promo-trust">
          <div class="oa-promo-rating">
            <span class="oa-promo-stars" aria-label="4.5 out of 5 stars">
              <span class="oa-promo-full-stars">★★★★</span><span class="oa-promo-half-star">★</span>
            </span>
            <span class="oa-promo-rating-value">4.5</span>
          </div>
          <p>Loved by our clients across <strong>10+ countries, 5 continents.</strong></p>
        </div>

        <div class="oa-promo-footer">
          <span class="oa-promo-counter" id="oa-promo-counter">01 / 25</span>
          <div class="oa-promo-progress">
            <span id="oa-promo-progress"></span>
          </div>
          <span class="oa-promo-hint">SELECT AN IMAGE TO GET STARTED</span>
        </div>

      </div>
    </div>
  `;

  const style = document.createElement("style");

  style.textContent = `
    #oa-promo-popup {
      position: fixed;
      inset: 0;
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 22px;
      opacity: 0;
      visibility: hidden;
      transition: opacity .5s ease, visibility .5s ease;
      font-family: 'Montserrat', sans-serif;
    }

    #oa-promo-popup.oa-promo-visible {
      opacity: 1;
      visibility: visible;
    }

    #oa-promo-popup .oa-promo-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,.82);
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
    }

    #oa-promo-popup .oa-promo-window {
      position: relative;
      z-index: 2;
      width: min(100%, 850px);
      max-height: 92vh;
      overflow: auto;
      background: #111;
      color: #fff;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 9px;
      transform: translateY(18px);
      transition: transform .5s ease;
    }

    #oa-promo-popup.oa-promo-visible .oa-promo-window {
      transform: translateY(0);
    }

    #oa-promo-popup .oa-promo-close {
      position: absolute;
      top: 13px;
      right: 15px;
      z-index: 10;
      width: 39px;
      height: 39px;
      border: 1px solid rgba(255,255,255,.45);
      border-radius: 50%;
      background: rgba(0,0,0,.65);
      color: #fff;
      font-size: 27px;
      line-height: 1;
      cursor: pointer;
    }

    #oa-promo-popup .oa-promo-heading {
      padding: 30px 60px 22px 30px;
      text-align: center;
    }

    #oa-promo-popup .oa-promo-heading h2 {
      color: #fff;
      font-size: clamp(22px, 4vw, 34px);
      line-height: 1.2;
      font-weight: 800;
      margin: 0 0 9px;
    }

    #oa-promo-popup .oa-promo-heading p {
      color: #ccc;
      font-size: 17px;
      line-height: 1.6;
      margin: 0;
    }

    #oa-promo-popup .oa-promo-trust {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px 12px;
      padding: 15px 20px 5px;
      text-align: center;
    }

    #oa-promo-popup .oa-promo-rating {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    #oa-promo-popup .oa-promo-stars {
      display: inline-flex;
      align-items: center;
      font-size: 19px;
      letter-spacing: 1px;
      line-height: 1;
    }

    #oa-promo-popup .oa-promo-full-stars {
      color: #f5b400;
    }

    #oa-promo-popup .oa-promo-half-star {
      background: linear-gradient(to right, #f5b400 50%, #777 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #oa-promo-popup .oa-promo-rating-value {
      color: #fff;
      font-size: 14px;
      font-weight: 800;
    }

    #oa-promo-popup .oa-promo-trust p {
      color: #ccc;
      font-size: 12px;
      line-height: 1.5;
      margin: 0;
    }

    #oa-promo-popup .oa-promo-trust strong {
      color: #fff;
      font-weight: 700;
    }

    #oa-promo-popup .oa-promo-carousel {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      background: #202020;
    }

    #oa-promo-popup .oa-promo-slide {
      position: absolute;
      inset: 0;
      display: block;
      opacity: 0;
      visibility: hidden;
      transition: opacity 1s ease, visibility 1s ease;
      cursor: pointer;
    }

    #oa-promo-popup .oa-promo-slide.oa-active {
      opacity: 1;
      visibility: visible;
      z-index: 2;
    }

    #oa-promo-popup .oa-promo-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    #oa-promo-popup .oa-promo-category {
      position: absolute;
      left: 18px;
      top: 17px;
      bottom: auto;
      padding: 9px 13px;
      background: #fff;
      border-left: 3px solid #d71920;
      color: #111;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1.5px;
    }

    #oa-promo-popup .oa-promo-footer {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 17px 25px 20px;
    }

    #oa-promo-popup .oa-promo-counter {
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      white-space: nowrap;
    }

    #oa-promo-popup .oa-promo-progress {
      flex: 1;
      height: 3px;
      background: rgba(255,255,255,.2);
      overflow: hidden;
    }

    #oa-promo-popup .oa-promo-progress span {
      display: block;
      width: 0;
      height: 100%;
      background: #d71920;
    }

    #oa-promo-popup .oa-promo-hint {
      color: #aaa;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 1px;
      text-align: right;
    }

    @media (max-width: 600px) {
      #oa-promo-popup {
        padding: 12px;
      }

      #oa-promo-popup .oa-promo-window {
        width: 100%;
        max-height: 90vh;
      }

      #oa-promo-popup .oa-promo-heading {
        padding: 29px 45px 18px 18px;
      }

      #oa-promo-popup .oa-promo-heading h2 {
        font-size: 22px;
      }

      #oa-promo-popup .oa-promo-heading p {
        font-size: 15px;
      }

      #oa-promo-popup .oa-promo-trust {
        gap: 6px;
        padding: 12px 13px 3px;
      }

      #oa-promo-popup .oa-promo-stars {
        font-size: 17px;
      }

      #oa-promo-popup .oa-promo-rating-value {
        font-size: 13px;
      }

      #oa-promo-popup .oa-promo-trust p {
        font-size: 11px;
      }

      #oa-promo-popup .oa-promo-carousel {
        aspect-ratio: 4 / 5;
      }

      #oa-promo-popup .oa-promo-category {
        left: 10px;
        top: 10px;
        bottom: auto;
        font-size: 9px;
        padding: 8px 10px;
      }

      #oa-promo-popup .oa-promo-footer {
        padding: 14px 13px 17px;
        gap: 9px;
      }

      #oa-promo-popup .oa-promo-hint {
        font-size: 8px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #oa-promo-popup,
      #oa-promo-popup *,
      #oa-promo-popup *::before,
      #oa-promo-popup *::after {
        transition-duration: .01ms !important;
      }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(popup);

  const slides = Array.from(popup.querySelectorAll(".oa-promo-slide"));
  const counter = popup.querySelector("#oa-promo-counter");
  const progress = popup.querySelector("#oa-promo-progress");
  const closeButton = popup.querySelector(".oa-promo-close");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const sessionKey = "oa_promo_dismissed";
  const delay = 30000;
  const interval = 5000;

  let current = 0;
  let timer = null;
  let progressTimer = null;
  let startTime = 0;
  let remaining = interval;
  let visible = false;

  // ANALYTICS TRACKING
  function trackPromoEvent(eventName, parameters = {}) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_category: "Promotional Popup",
        ...parameters
      });
    }

    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, parameters);
    }
  }

  function updateSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle("oa-active", i === index);
    });

    current = index;

    counter.textContent =
      String(current + 1).padStart(2, "0") + " / " +
      String(slides.length).padStart(2, "0");

    progress.style.transition = "none";
    progress.style.width = "0%";

    if (!reducedMotion.matches && !document.hidden && visible) {
      requestAnimationFrame(function () {
        progress.style.transition = "width " + interval + "ms linear";
        progress.style.width = "100%";
      });
    }
  }

  function stopCarousel() {
    if (timer) clearTimeout(timer);
    if (progressTimer) clearTimeout(progressTimer);

    timer = null;
    progressTimer = null;
  }

  function startCarousel() {
    stopCarousel();

    if (!visible || document.hidden || reducedMotion.matches) return;

    startTime = Date.now();

    progress.style.transition = "none";
    progress.style.width = "0%";

    requestAnimationFrame(function () {
      progress.style.transition = "width " + remaining + "ms linear";
      progress.style.width = "100%";
    });

    timer = setTimeout(function () {
      current = (current + 1) % slides.length;
      updateSlide(current);
      remaining = interval;
      startCarousel();
    }, remaining);
  }

  function openPopup() {
    if (sessionStorage.getItem(sessionKey) === "1") return;

    visible = true;
    popup.classList.add("oa-promo-visible");
    popup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    trackPromoEvent("promo_popup_view", {
      popup_name: "Omnibus Africa Service Promotion",
      total_slides: slides.length
    });

    remaining = interval;
    updateSlide(0);

    closeButton.focus();
    startCarousel();
  }

  function closePopup() {
    if (!visible) return;

    visible = false;
    stopCarousel();

    trackPromoEvent("promo_popup_close", {
      popup_name: "Omnibus Africa Service Promotion",
      slide_number: current + 1
    });

    popup.classList.remove("oa-promo-visible");
    popup.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    sessionStorage.setItem(sessionKey, "1");
  }

  closeButton.addEventListener("click", closePopup);

  popup.querySelector(".oa-promo-backdrop").addEventListener("click", closePopup);

  // TRACK PROMOTIONAL IMAGE CLICKS
  slides.forEach(function (slide, index) {
    slide.addEventListener("click", function () {
      const category = slide.querySelector(".oa-promo-category");

      trackPromoEvent("promo_popup_click", {
        popup_name: "Omnibus Africa Service Promotion",
        slide_number: index + 1,
        service_category: category ? category.textContent.trim() : "Unknown",
        destination: "Get Started"
      });
    });
  });

  popup.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup();
    }
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (timer) {
        remaining = Math.max(0, remaining - (Date.now() - startTime));
      }
      stopCarousel();
    } else if (visible) {
      startCarousel();
    }
  });

  setTimeout(openPopup, delay);

})();
