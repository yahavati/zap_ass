import "./OnboardingPersonalized.css";
import { useNavigate } from "react-router-dom";

const valuePoints = [
  {
    icon: "✦",
    text: "אתר מקצועי שמותאם למובייל ומנועי חיפוש",
  },
  {
    icon: "◔",
    text: "מיניסייט בדפי זהב עם חשיפה מקומית מיידית",
  },
  {
    icon: "☆",
    text: "ניהול ביקורות ומוניטין דיגיטלי",
  },
];

const questions = [
  "האם אתה נותן שירות חירום 24/7?",
  "האם יש אחריות על התקנה? כמה זמן?",
  "מה שעות הפעילות שלך? האם אתה עובד בסופי שבוע?",
];

function ValueRow({ icon, text }) {
  return (
    <div className="ob-value-row">
      <span className="ob-value-icon">{icon}</span>
      <span className="ob-value-text">{text}</span>
    </div>
  );
}

function QuestionRow({ index, text }) {
  return (
    <div className="ob-question-row">
      <span className="ob-question-index">{index}</span>
      <span className="ob-question-text">{text}</span>
    </div>
  );
}

export default function OnboardingPersonalized() {
    const navigate = useNavigate();
  return (
    <div className="ob-page" dir="rtl">
      <main className="ob-main">
        <div className="ob-top-title">
          <h1 className="ob-page-title">תסריט Onboarding — מותאם אישית</h1>
          <div className="ob-page-id">ZAP-28847</div>
        </div>

        <section className="ob-card ob-card-blue">
          <div className="ob-card-header">
            <div className="ob-card-title-wrap">
              <span className="ob-card-title">1. פתיחה</span>
            </div>
            <div className="ob-card-badge blue">📞</div>
          </div>

          <div className="ob-message-box blue-soft">
            שלום אורן, אני מתקשר/ת מזאפ בנוגע לאתר ומיניסייט בדפי זהב שרכשת.
            מזל טוב על ההתחלה! איך אתה מרגיש עם הרכישה?
          </div>
        </section>

        <section className="ob-card ob-card-blue second">
          <div className="ob-card-header">
            <div className="ob-card-title-wrap">
              <span className="ob-card-title">2. נקודות ערך</span>
            </div>
            <div className="ob-card-badge blue">✧</div>
          </div>

          <div className="ob-values-list">
            {valuePoints.map((item) => (
              <ValueRow key={item.text} icon={item.icon} text={item.text} />
            ))}
          </div>
        </section>

        <section className="ob-card ob-card-dark">
          <div className="ob-card-header">
            <div className="ob-card-title-wrap">
              <span className="ob-card-title dark">3. שאלות מומלצות</span>
            </div>
            <div className="ob-card-badge dark">◔</div>
          </div>

          <div className="ob-questions-list">
            {questions.map((q, i) => (
              <QuestionRow key={q} index={i + 1} text={q} />
            ))}
          </div>
        </section>

        <section className="ob-card ob-card-green">
          <div className="ob-card-header">
            <div className="ob-card-title-wrap">
              <span className="ob-card-title green">4. סגירה</span>
            </div>
            <div className="ob-card-badge green">↻</div>
          </div>

          <div className="ob-message-box green-soft">
            מעולה אורן! נשלח לך טיוטה ראשונית של האתר תוך 48 שעות. אחרי
            שנסתכל, נתאם שיחת משוב קצרה. תודה רבה ובהצלחה!
          </div>
        </section>

        <div className="ob-bottom-actions">
          <button className="ob-send-button" onClick={() => navigate("/crm-record")}>שלח לCRM</button>
        </div>
      </main>
    </div>
  );
}