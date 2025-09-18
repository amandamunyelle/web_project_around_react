export default function Popup({
  onClose,
  title,
  children,
  isOpen,
  type = "form",
}) {
  if (type === "image") {
    return (
      <div className={`popup popup-image ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup-image__container">
          <button
            aria-label="Fechar"
            className="popup-image__close-button"
            type="button"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          aria-label="Fechar"
          className="popup__close"
          type="button"
          onClick={onClose}
        >
          <img
            src="../../images/close-button.png"
            alt="Fechar"
            className="popup__close-icon"
          />
        </button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
