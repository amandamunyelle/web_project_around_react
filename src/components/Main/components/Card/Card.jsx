import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";

export default function Card({ card, handleOpenPopup, removeCardPopup }) {
  const { name, link } = card;

  function handleImageClick() {
    const imageComponent = {
      title: null,
      children: <ImagePopup card={card} />,
    };
    handleOpenPopup(imageComponent);
  }

  return (
    <li className="elements__card">
      <img
        className="elements__image"
        src={link}
        alt={name}
        onClick={handleImageClick}
      />
      <button
        aria-label="Excluir cartão"
        className="elements__delete"
        type="button"
        onClick={() => handleOpenPopup(removeCardPopup)}
      />
      <div className="elements__info">
        <p className="elements__text">{name}</p>
        <button
          aria-label="Curtir cartão"
          type="button"
          className="elements__like"
        />
      </div>
    </li>
  );
}
