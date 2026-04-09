import React from "react";
import "./OnboardingDashboard.css";
import { useNavigate } from "react-router-dom";
export default function OnboardingDashboard() {
  const navigate = useNavigate();
  return (
    
    <div className="dashboard-page" dir="rtl">
      <header className="topbar">
        <div className="topbar-right">
          <h1 className="page-title">לוח בקרה - אונבורדינג</h1>
          <p className="page-subtitle">ניהול לקוחות חדשים</p>
        </div>

        <div className="topbar-left">
          <div className="notification-wrapper">
            <span className="notification-dot"></span>
            <span className="notification-icon">🔔</span>
          </div>

          <div className="user-box">
            <div className="user-avatar">ש</div>
            <div className="user-details">
              <div className="user-name">שרה כהן</div>
              <div className="user-role">מנהלת אונבורדינג</div>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="case-header">
          <h2 className="case-title">הזמנה חדשה התקבלה — ZAP-28847</h2>
          <p className="case-subtitle">זוהה לקוח חדש ב-Dapei Zahav</p>
        </section>

        <section className="automation-banner">
          <div className="banner-icon">✦</div>
          <div className="banner-text">
            <h3>מוכן לאוטומציה מלאה</h3>
            <p>
              המערכת זיהתה את כל הפרטים הנדרשים ומוכנה ליצור אוטומטית את כל נכסי
              הדיגיטל עבור הלקוח. תהליך זה ייקח כ-3–5 דקות.
            </p>
          </div>
        </section>

        <section className="client-card">
          <h3 className="card-title">פרטי הלקוח והזמנה</h3>

          <div className="info-row">
            <div className="info-icon">👤</div>
            <div className="info-content">
              <div className="info-label">שם לקוח</div>
              <div className="info-value">אורן לוי</div>
              <div className="info-subvalue">טכנאי מיזוג אוויר</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-icon">📦</div>
            <div className="info-content">
              <div className="info-label">חבילה</div>
              <div className="info-value">אתר 5 עמודים + מיניסייט דפי זהב</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-icon">🌐</div>
            <div className="info-content">
              <div className="info-label">כתובת אתר</div>
              <div className="info-link">orenlevy-ac.co.il</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <div className="info-label">אזור</div>
              <div className="info-value">קריות</div>
              <div className="info-subvalue">חיפה והסביבה</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-icon">🕘</div>
            <div className="info-content">
              <div className="info-label">סטטוס</div>
              <div className="status-badge">ממתין לעיבוד</div>
            </div>
          </div>

          <div className="info-row no-border">
            <div className="info-icon">📅</div>
            <div className="info-content">
              <div className="info-label">תאריך</div>
              <div className="info-value">08/04/2025 09:14</div>
              <div className="info-subvalue">לפני 12 דקות</div>
            </div>
          </div>
        </section>

        <section className="bottom-action-card">
          <div className="bottom-action-text">
            <h3>מוכן להתחיל?</h3>
            <p>לחץ על הכפתור להפעלת תהליך האוטומציה המלא</p>
          </div>

         <button
            className="automation-button"
            onClick={() => navigate("/digital-scan")}
          >
            הפעל אוטומציה ✦
          </button>
        </section>
      </main>
    </div>
  );
}