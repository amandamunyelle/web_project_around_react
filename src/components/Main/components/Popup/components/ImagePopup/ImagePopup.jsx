export default function ImagePopup({ card }) {
  const { name, link } = card || {};

  return (
    <div className="popup-image__container">
      <img
        src={link}
        alt={name || "Imagem ampliada"}
        className="popup-image__img"
      />
      <p className="popup__caption">{name || "Sem título"}</p>
    </div>
  );
}
