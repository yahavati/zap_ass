import React from "react";
import "./ExtractionResultsScreen.css";
import { useNavigate } from "react-router-dom";

const SparklesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.15" />
    <path
      d="M7 12.5L10.2 15.5L17 8.8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 16C8.9 14.5 10.2 13.8 12 13.8C13.8 13.8 15.1 14.5 16 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const TagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M20 13L11 22L3 14V4H13L20 11V13Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="8" cy="8" r="1.4" fill="currentColor" />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 21C12 21 18 15.4 18 10.2C18 6.8 15.3 4 12 4C8.7 4 6 6.8 6 10.2C6 15.4 12 21 12 21Z" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const BulbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M9 18H15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M10 21H14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M8.5 14.5C7.6 13.7 7 12.5 7 11C7 8.2 9.2 6 12 6C14.8 6 17 8.2 17 11C17 12.5 16.4 13.7 15.5 14.5C14.8 15.1 14.4 15.8 14.2 16.5H9.8C9.6 15.8 9.2 15.1 8.5 14.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 20H8L18.5 9.5C19.3 8.7 19.3 7.3 18.5 6.5C17.7 5.7 16.3 5.7 15.5 6.5L5 17V20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M14 8L17 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const AddUserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 19C4.7 16.8 6.4 15.5 9 15.5C11.6 15.5 13.3 16.8 14 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 8V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 11H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function ExtractionResultsScreen() {
  const navigate = useNavigate();
  return (
    <div className="results-page" dir="rtl">
      <main className="results-container">
        <div className="top-badge">
          <span>AI Extraction Complete</span>
          <SparklesIcon />
        </div>

        <section className="hero-header">
          <div className="hero-decoration right">
            <SparklesIcon />
          </div>

          <h1 className="hero-title">שליפת פרטי קשר וקטגוריות מוצרים</h1>
          <p className="hero-subtitle">
            ה-AI ניתח את המידע שאספנו ומציג את התוצאות
          </p>
        </section>

        <section className="success-banner">
          <div className="success-icon">
            <CheckCircleIcon />
          </div>

          <div className="success-text">
            <h2>העיבוד הושלם בהצלחה</h2>
            <p>המידע זוהה וסווג אוטומטית</p>
          </div>
        </section>

        <section className="results-card">
          <h2 className="card-main-title">תוצאות העיבוד</h2>

          <div className="section-header">
            <div className="section-header-icon blue">
              <ContactIcon />
            </div>
            <h3>פרטי קשר</h3>
          </div>

          <div className="info-fields">
            <div className="info-field">
              <span className="field-label">שם העסק</span>
              <span className="field-value">קלימה קריות - טכנאי מזגנים מקצועיים</span>
            </div>

            <div className="info-field">
              <span className="field-label">טלפון</span>
              <span className="field-value phone">052-3847291</span>
            </div>

            <div className="info-field">
              <span className="field-label">אימייל</span>
              <span className="field-value email">info@klima-kriyes.co.il</span>
            </div>

            <div className="info-field">
              <span className="field-label">כתובת</span>
              <span className="field-value">קריות, ישראל</span>
            </div>
          </div>

          <div className="content-block">
            <div className="section-header">
              <div className="section-header-icon green">
                <TagIcon />
              </div>
              <h3>קטגוריות שירות/מוצרים</h3>
            </div>

            <div className="chips">
              <span className="chip blue">תיקון מזגנים</span>
              <span className="chip green">התקנה</span>
              <span className="chip blue">מערכות VRF</span>
              <span className="chip green">מילוי גז</span>
              <span className="chip blue">אחזקה שוטפת</span>
              <span className="chip green">ניקוי פילטרים</span>
            </div>
          </div>

          <div className="content-block">
            <div className="section-header">
              <div className="section-header-icon purple">
                <PinIcon />
              </div>
              <h3>אזורי פעילות</h3>
            </div>

            <div className="chips">
              <span className="chip purple">קריות</span>
              <span className="chip purple">חיפה</span>
              <span className="chip purple">נשר</span>
              <span className="chip purple">טירת כרמל</span>
              <span className="chip purple">עכו</span>
            </div>
          </div>

          <div className="content-block no-margin">
            <div className="section-header">
              <div className="section-header-icon orange">
                <BulbIcon />
              </div>
              <h3>תובנות עסקיות</h3>
            </div>

            <ul className="insights-list">
              <li>זוהה USP: "שירות מהיר תוך 2 שעות"</li>
              <li>זמינות: א'-ו' 08:00-20:00</li>
              <li>מילות מפתח חוזקות: "מקצועי", "אמין", "מהיר"</li>
              <li>ניסיון: 15+ שנה בתחום</li>
            </ul>
          </div>
        </section>

        <section className="confidence-card">
          <div className="confidence-header">
            <h3>רמת ביטחון</h3>
            <span className="confidence-badge">High Confidence</span>
          </div>

          <div className="confidence-bar">
            <div className="confidence-fill" style={{ width: "92%" }}></div>
          </div>

          <div className="confidence-footer">
            <span>92%</span>
          </div>
        </section>

        <section className="actions-row">
          <button className="action-btn secondary" type="button">
            <EditIcon />
            <span>ערוך מידע</span>
          </button>

          <button className="action-btn primary" type="button" onClick={() => navigate("/customer-card")} >
            <AddUserIcon />
            <span>צור כרטיס לקוח</span>
          </button>
        </section>
      </main>
    </div>
  );
}