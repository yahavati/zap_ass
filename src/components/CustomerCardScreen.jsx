import "./CustomerCardScreen.css";
import { useNavigate } from "react-router-dom";

const services = [
  "התקנת מזגנים",
  "תיקון מזגנים",
  "ניקוי מזגנים",
  "מילוי גז",
];

const marketingEmphases = [
  "שירות מהיר",
  "זמינות גבוהה",
  "ניסיון מקצועי",
];

const siteRecommendations = [
  "דף בית",
  "אודות",
  "התקנת מזגנים",
  "תיקון מזגנים",
  "יצירת קשר",
];

function InfoRow({ icon, label, value, isLink = false }) {
  return (
    <div className="info-row">
      <div className="info-icon">{icon}</div>
      <div className="info-text">
        <div className="info-label">{label}</div>
        {isLink ? (
          <a href="#" className="info-value info-link">
            {value}
          </a>
        ) : (
          <div className="info-value">{value}</div>
        )}
      </div>
    </div>
  );
}

function MetricItem({ icon, label, value, valueClass = "" }) {
  return (
    <div className="metric-item">
      <div className="metric-top">
        <span className="metric-label">{label}</span>
        <span className="metric-icon">{icon}</span>
      </div>
      <div className={`metric-value ${valueClass}`}>{value}</div>
    </div>
  );
}

function BulletList({ items, bulletClassName = "" }) {
  return (
    <ul className={`bullet-list ${bulletClassName}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function CustomerCardScreen() {
  const navigate = useNavigate();
  
  return (
    <div className="customer-page" dir="rtl">
      <div className="customer-card">
        
        {/* החלק העליון - כותרת וכפתור - כעת בתוך הקופסה הלבנה */}
        <div className="card-inner-topbar">
          <div className="page-title-wrap">
            <h1 className="page-title">כרטיס לקוח מוכן</h1>
            <div className="page-sub-id">ZAP-28847</div>
          </div>

          <button className="crm-button" onClick={() => navigate("/onboarding-script")}>
            <span className="crm-icon">✈</span>
           צור תסריט Onboarding
          </button>
        </div>

        <div className="divider" />

        <div className="card-header">
          <button className="site-button">אתר + דפי זהב</button>

          <div className="header-main">
            <div className="header-texts">
              <h2 className="business-title">שירות מזגנים</h2>
              <p className="business-subtitle">אורן לוי | טכנאי מזגנים עצמאי</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="card-top-content">
          <div className="right-column">
            <InfoRow icon="📞" label="טלפון" value="052-3847291" />
            <InfoRow
              icon="✉"
              label="אימייל"
              value="info@klima-kriyes.co.il"
              isLink
            />
            <InfoRow icon="📍" label="אזור" value="קריות, חיפה, נשר" />


            <div className="section-block">
              <div className="section-title">שירותים:</div>
              <BulletList items={services} bulletClassName="blue-bullets" />
            </div>
          </div>

          <div className="left-column">
            <MetricItem icon="📦" label="נכסים" value="2" />
            <MetricItem icon="☆" label="ביקורות" value="7" />
            <MetricItem
              icon="🔎"
              label="SEO"
              value="חסר תוכן"
              valueClass="danger-pill"
            />
          </div>
        </div>

        <div className="divider section-divider" />

        <div className="content-section">
          <div className="section-title">דגשים שיווקיים:</div>
          <BulletList
            items={marketingEmphases}
            bulletClassName="green-bullets"
          />
        </div>

        <div className="divider section-divider" />

        <div className="content-section">
          <div className="section-title">המלצה למבנה האתר:</div>
          <BulletList
            items={siteRecommendations}
            bulletClassName="purple-bullets"
          />
        </div>

        <div className="ai-note">
          <div className="ai-note-title">הערת AI:</div>
          <div className="ai-note-text">
            חסר תוכן SEO בעמוד שירותים — הזדמנות לשיפור
          </div>
          <div className="ai-sparkle">✧</div>
        </div>
      </div>
    </div>
  );
}