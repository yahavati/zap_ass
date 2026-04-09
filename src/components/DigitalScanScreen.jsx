import { useState } from "react";
import "./DigitalScanScreen.css";
import { useNavigate } from "react-router-dom";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="7" fill="#22c55e" />
    <path
      d="M3.5 7L5.8 9.5L10.5 4.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SpinnerIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="spinner"
  >
    <circle
      cx="7"
      cy="7"
      r="5.5"
      stroke="#3b82f6"
      strokeWidth="2"
      strokeDasharray="20 14"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="7" fill="#e5e7eb" />
    <path
      d="M4.5 4.5L9.5 9.5M9.5 4.5L4.5 9.5"
      stroke="#6b7280"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="#6b7280" strokeWidth="1.2" />
    <ellipse cx="8" cy="8" rx="3" ry="7" stroke="#6b7280" strokeWidth="1.2" />
    <line x1="1" y1="8" x2="15" y2="8" stroke="#6b7280" strokeWidth="1.2" />
    <line x1="1.5" y1="5" x2="14.5" y2="5" stroke="#6b7280" strokeWidth="1.2" />
    <line
      x1="1.5"
      y1="11"
      x2="14.5"
      y2="11"
      stroke="#6b7280"
      strokeWidth="1.2"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#1877f2" />
    <path
      d="M11.5 9H10v5H8V9H6.5V7H8V5.8C8 4.2 8.9 3.5 10.2 3.5c.6 0 1.3.05 1.8.1V5h-1.1c-.7 0-.9.3-.9.8V7H12l-.5 2z"
      fill="white"
    />
  </svg>
);

const GoogleBusinessIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#f5f5f5" />
    <text
      x="9"
      y="13"
      textAnchor="middle"
      fontSize="10"
      fontWeight="bold"
      fill="#4285f4"
    >
      G
    </text>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="4.5" fill="url(#igGrad)" />
    <rect
      x="4.5"
      y="4.5"
      width="9"
      height="9"
      rx="2.5"
      stroke="white"
      strokeWidth="1.3"
    />
    <circle cx="9" cy="9" r="2.5" stroke="white" strokeWidth="1.3" />
    <circle cx="13" cy="5" r="0.8" fill="white" />
    <defs>
      <linearGradient id="igGrad" x1="0" y1="18" x2="18" y2="0">
        <stop stopColor="#f09433" />
        <stop offset="0.25" stopColor="#e6683c" />
        <stop offset="0.5" stopColor="#dc2743" />
        <stop offset="0.75" stopColor="#cc2366" />
        <stop offset="1" stopColor="#bc1888" />
      </linearGradient>
    </defs>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#25d366" />
    <path
      d="M9 4C6.24 4 4 6.24 4 9c0 .9.24 1.74.64 2.48L4 14l2.6-.62C7.3 13.78 8.12 14 9 14c2.76 0 5-2.24 5-5s-2.24-5-5-5zm2.4 6.82c-.12.32-.68.62-1 .64-.28.02-.52.14-1.74-.36C7.3 10.56 6.4 9.08 6.3 8.94c-.1-.14-.76-.98-.76-1.88s.5-1.36.68-1.54c.18-.18.38-.22.5-.22h.36c.12 0 .28-.04.42.32l.6 1.44c.04.1.02.22-.04.32L7.7 7.8c-.1.1-.1.22-.04.32.3.5.7.94 1.2 1.28.1.08.22.06.3-.04l.26-.32c.08-.12.2-.14.32-.08l1.4.66c.12.06.2.18.18.3v.9z"
      fill="white"
    />
  </svg>
);

export default function DigitalScanScreen() {
  const [activeTab] = useState("scan");
    const navigate = useNavigate();

  return (
    <div className="app-wrapper" dir="rtl">
      <header className="top-nav">
        <div className="nav-right">
        </div>
      </header>

      <main className="main-content">
        <div className="scan-card">
          <div className="card-header">
            <div className="card-title-row">
              <SpinnerIcon />
              <h2 className="card-title">סריקת נכסים דיגיטליים</h2>
            </div>
            <p className="card-subtitle">אורן לוי · ZAP-28847</p>
          </div>

          <div className="steps-section">
            <div className="step-row">
              <CheckIcon />
              <span className="step-label">איסוף מידע</span>
              <span className="step-badge complete">הושלם</span>
            </div>

            <div className="step-row">
              <CheckIcon />
              <span className="step-label">סריקת אתר</span>
              <span className="step-badge complete">הושלם</span>
            </div>

            <div className="step-row">
              <CheckIcon />
              <span className="step-label">שליפת פרטי קשר</span>
              <span className="step-badge complete">הושלם</span>
            </div>

            <div className="step-row">
              <SpinnerIcon />
              <span className="step-label step-label-blue">
                זיהוי שירותים וקטגוריות
              </span>
              <span className="step-badge processing">בתהליך</span>
            </div>

            <div className="step-row step-row-add">
              <CloseIcon />
              <span className="step-label">יצירת כרטיס לקוח</span>
              <span className="secondary-badge">ממתין</span>
            </div>
          </div>

          <hr className="divider" />

          <div className="section">
            <h3 className="section-title">מקורות מידע</h3>

            <div className="sources-grid">
              <div className="source-card border-processing">
                <div className="source-top">
                  <div className="source-right">
                    <div className="source-icon-box">
                      <FacebookIcon />
                    </div>
                    <span className="source-name">Facebook</span>
                  </div>
                  <span className="scanning-badge">
  <SpinnerIcon />
  <span>סורק</span>
</span>
                </div>
              </div>

              <div className="source-card border-success">
                <div className="source-top">
                  <div className="source-right">
                    <div className="source-icon-box">
                      <GoogleBusinessIcon />
                    </div>
                    <span className="source-name">Google Business</span>
                  </div>
                  <div className="source-status-wrap">
                    <span className="badge complete-badge">הושלם</span>
                  </div>
                </div>
              </div>

              <div className="source-card border-success">
                <div className="source-top">
                  <div className="source-right">
                    <div className="source-icon-box">
                      <GlobeIcon />
                    </div>
                    <span className="source-name">אתר אינטרנט</span>
                  </div>
                  <div className="source-status-wrap">
                    <span className="badge complete-badge">הושלם</span>
                  </div>
                </div>
              </div>

              <div className="source-card border-neutral">
                <div className="source-top">
                  <div className="source-right">
                    <div className="source-icon-box">
                      <WhatsAppIcon />
                    </div>
                    <span className="source-name">WhatsApp</span>
                  </div>
                  <div className="source-status-wrap">
                    <span className="secondary-badge">חסר מידע</span>
                  </div>
                </div>
              </div>

              <div className="source-card source-card-wide border-processing">
                <div className="source-top">
                  <div className="source-right">
                    <div className="source-icon-box">
                      <InstagramIcon />
                    </div>
                    <span className="source-name">Instagram</span>
                  </div>
                  <div className="source-status-wrap">
                    <span className="badge processing-badge">סורק</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="section">
            <h3 className="section-title">כתובות אתר</h3>

            <div className="address-card border-success">
              <div className="address-card-inner">
                <div className="address-card-right">
                  <div className="address-icon-box">
                    <GlobeIcon />
                  </div>
                  <span className="address-url">klima-kriyes.co.il</span>
                </div>

                <div className="address-card-left">
                  <span className="verified-badge">נסרק</span>
                </div>
              </div>

              <p className="address-desc">אתר אינטרנט ראשי</p>

              <div className="address-tags">
                <span className="tag tag-count">5 עמודים</span>
                <span className="tag">טלפון נמצא</span>
                <span className="tag">שירותים זוהו</span>
              </div>
            </div>

            <div className="address-card border-processing">
              <div className="address-card-inner">
                <div className="address-card-right">
                  <div className="address-icon-box">
                    <GlobeIcon />
                  </div>
                  <span className="address-url">dafeyzahav.co.il/kriyes</span>
                </div>

                <div className="address-card-left">
                  <span className="scanning-badge">סורק...</span>
                </div>
              </div>

              <p className="address-desc">מיניסייט דפי זהב</p>

              <div className="address-tags">
                <span className="tag tag-count">7 ביקורות</span>
                <span className="tag">קטגוריות</span>
                <span className="tag">שעות פעילות</span>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-label">23 שדות חולצו</span>
              <span className="progress-percent">65%</span>
            </div>

            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: "65%" }}
              ></div>
            </div>

            <div className="progress-footer">
              <span className="progress-more">מעבד מידע...</span>
            </div>
          </div>

          <hr className="divider" />

          <div className="section">
            <h3 className="section-title">פעילות AI</h3>
            <ul className="ai-list">
              <li>• זוהה מספר טלפון</li>
              <li>• זוהו שירותים עיקריים</li>
              <li>• זוהה אזור שירות: קריות</li>
              <li>• נוצר סיכום ראשוני</li>
            </ul>
          </div>

          <div className="cta-section">
            <button className="cta-button" onClick={() => navigate("/extraction-results")}>תוצאות סריקה ובדיקת נתונים </button>
          </div>
        </div>
      </main>
    </div>
  );
}