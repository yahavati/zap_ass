import React from 'react';
import './CrmRecord.css';

const CrmRecord = () => {
  return (
    
    <div className="container" dir="rtl">
      <div className="page-header">
        <h1 className="page-title">רשומת CRM נוצרה אוטומטית</h1>
        <span className="page-subtitle">ZAP-28847</span>
      </div>
      {/* Success Banner */}
      <div className="success-banner">
        <span className="check-icon">✓</span>
        הלקוח נקלט בהצלחה
      </div>

      {/* Main Card */}
      <div className="card main-details">
        <div className="card-header">
          <h2 className="title">פרטי רשומת CRM</h2>
        </div>

        <div className="details-grid">
          {/* Right Column */}
          <div className="column">
            <div className="detail-item">
              <label>מזהה</label>
              <div className="value">ZAP-28847</div>
            </div>
            <div className="detail-item">
              <label>לקוח</label>
              <div className="value">אורן לוי</div>
            </div>
            <div className="detail-item">
              <label>חבילה</label>
              <div className="value">Site + Minisite</div>
            </div>
            <div className="detail-item">
              <label>סטטוס</label>
              <div className="status-badge">onboarding_in_progress</div>
            </div>
          </div>

          {/* Left Column */}
          <div className="column left-align">
            <div className="detail-item">
              <label>AI סרק</label>
              <div className="value green-text">הושלם ✓</div>
            </div>
            <div className="detail-item">
              <label>SMS נשלח</label>
              <div className="value green-text">הושלם ✓</div>
            </div>
            <div className="detail-item">
              <label>מפיק</label>
              <div className="value">יעל כהן</div>
            </div>
            <div className="detail-item">
              <label>פעולה הבאה</label>
              <div className="next-action-badge">שיחת מעקב תוך 48 שעות</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Card */}
      <div className="card timeline-container">
        <h2 className="title">ציר זמן תהליך</h2>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="timeline-steps">
            <div className="step">
              <div className="step-icon">✓</div>
              <div className="step-label">הזמנה</div>
              <div className="step-time">09:14</div>
            </div>
            <div className="step">
              <div className="step-icon">✓</div>
              <div className="step-label">סריקה</div>
              <div className="step-time">09:16</div>
            </div>
            <div className="step">
              <div className="step-icon">✓</div>
              <div className="step-label">כרטיס</div>
              <div className="step-time">09:18</div>
            </div>
            <div className="step">
              <div className="step-icon">✓</div>
              <div className="step-label">SMS</div>
              <div className="step-time">09:22</div>
            </div>
            <div className="step">
              <div className="step-icon">✓</div>
              <div className="step-label">✓ CRM</div>
              <div className="step-time">09:22</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmRecord;