import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function FeedbackPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState({ sent: false, error: false });
  const formRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (overlayRef.current && e.target === overlayRef.current) closePopup();
    }
    function handleEscape(e) {
      if (e.key === "Escape") closePopup();
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      const firstInput = formRef.current?.querySelector("input");
      firstInput?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (status.error) {
      const timer = setTimeout(() => setStatus(s => ({ ...s, error: false })), 3000);
      return () => clearTimeout(timer);
    }
  }, [status.error]);

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendFeedback = e => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const email = formData.get("user_email")?.trim();
    const message = formData.get("message")?.trim();

    if (!email || !validateEmail(email) || !message) {
      setStatus({ sent: false, error: true });
      return;
    }

    emailjs
      .sendForm("service_k160kl7", "template_rcytrkr", form, "ajSJMAWyjkJPo_H_5")
      .then(() => {
        setStatus({ sent: true, error: false });
        form.reset();
        setTimeout(closePopup, 3000);
      })
      .catch(() => setStatus({ sent: false, error: true }));
  };

  const closePopup = () => {
    setIsOpen(false);
    setStatus({ sent: false, error: false });
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <button className="feedback-trigger" onClick={() => setIsOpen(true)}>
          💌 Give Feedback
        </button>
      </div>

      {isOpen && (
        <div className="feedback-overlay" ref={overlayRef}>
          <div className="feedback-popup" role="dialog" aria-modal="true">
            <button className="close-btn" onClick={closePopup} aria-label="Close feedback form">
              ×
            </button>
            <h2>Feedback</h2>
            <p>We value your feedback 😊</p>

            <form ref={formRef} onSubmit={sendFeedback} noValidate>
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                autoComplete="email"
              />
              <textarea
                name="message"
                placeholder="Your feedback"
                rows={5}
                className="feedback-textarea"
              />

              {status.error && (
                <div className="status error">Please enter a valid email and message.</div>
              )}
              {status.sent && (
                <div className="status success">Thank you! Your feedback was sent.</div>
              )}

              <button type="submit" className="send-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        /* ======= Base Styles ======= */
        .feedback-trigger {
          background: none;
          border: none;
          color: #1d78e0;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: underline;
          cursor: pointer;
          transition: color 0.2s;
        }
        .feedback-trigger:hover {
          color: #125cab;
        }

        .feedback-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(6px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease;
        }

        .feedback-popup {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 12px 40px rgba(32, 126, 230, 0.25);
          max-width: 520px;
          width: 92%;
          min-height: 360px;
          padding: 35px 34px 28px;
          position: relative;
          transform: scale(0.95);
          animation: popupIn 0.25s ease forwards;
        }

        .feedback-popup h2 {
          font-size: 1.4rem;
          color: #1d78e0;
          margin: 0 0 8px;
          text-align: center;
          font-weight: 800;
        }

        .feedback-popup p {
          font-size: 1.05rem;
          color: #8899b6;
          text-align: center;
          margin-bottom: 22px;
        }

        .feedback-popup input,
        .feedback-popup textarea {
          width: 100%;
          background: #f8fbff;
          border: 1px solid #d8e4f8;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 1.05rem;
          margin-bottom: 12px;
          transition: all 0.15s ease;
          box-sizing: border-box;
        }

        .feedback-popup input:focus,
        .feedback-popup textarea:focus {
          background: #fff;
          border-color: #1d78e0;
          outline: none;
          box-shadow: 0 0 0 3px rgba(29, 120, 224, 0.15);
        }

        .feedback-textarea {
          min-height: 120px;
          max-height: 220px;
          line-height: 1.5;
          resize: none;
        }

        .send-btn {
          width: 100%;
          background: linear-gradient(90deg, #1d78e0, #00c7ff);
          border: none;
          border-radius: 11px;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 12px 0;
          cursor: pointer;
          transition: transform 0.1s ease, background 0.15s ease;
        }

        .send-btn:hover {
          background: linear-gradient(90deg, #00c7ff, #1d78e0);
          transform: scale(1.02);
        }

        .status {
          text-align: center;
          border-radius: 6px;
          padding: 9px 0;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 0.96rem;
        }

        .status.error {
          background: #fff3f4;
          color: #e63c3c;
        }

        .status.success {
          background: #e9fff4;
          color: #1dbf73;
        }

        .close-btn {
          background: none;
          border: none;
          color: #a0b2ce;
          font-size: 28px;
          position: absolute;
          right: 18px;
          top: 16px;
          cursor: pointer;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: #1d78e0;
        }

        /* ======= Animations ======= */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        /* ======= Responsive Design ======= */
        @media (max-width: 600px) {
          .feedback-popup {
            max-width: 80vw;
            width: 90%;
            padding: 24px 24px;
            min-height: 340px;
          }

          .feedback-popup h2 {
            font-size: 1.2rem;
          }

          .feedback-popup p {
            font-size: 0.95rem;
          }

          .feedback-popup input,
          .feedback-popup textarea {
            font-size: 0.95rem;
            padding: 10px 12px;
          }

          .feedback-textarea {
            min-height: 100px;
          }

          .send-btn {
            font-size: 1rem;
            padding: 10px 0;
          }

          .close-btn {
            font-size: 24px;
            top: 12px;
            right: 14px;
          }
        }

        @media (max-width: 400px) {
          .feedback-popup {
            padding: 18px 16px;
            min-height: 320px;
          }
          .feedback-popup h2 {
            font-size: 1.1rem;
          }
          .feedback-popup p {
            font-size: 0.9rem;
          }
          .send-btn {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}
