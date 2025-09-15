import { useState } from "react";
import Card from "./components/Card/Card.jsx";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard.jsx";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import RemoveCard from "./components/Popup/components/RemoveCard/RemoveCard";
import avatar from "../../images/avatar.png";
import editButton from "../../images/edit_button.png";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Novo local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Atualizar avatar",
    children: <EditAvatar />,
  };
  const removeCardPopup = { title: "Tem certeza?", children: <RemoveCard /> };

  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main>
      <section className="profile page__section">
        <div className="profile__info">
          <div className="profile__avatar-wrapper">
            <img
              src={avatar}
              alt="imagem do perfil"
              className="profile__avatar"
            />
            <button
              className="profile__avatar-edit"
              aria-label="Editar avatar"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            />
          </div>
          <div className="profile__info-text">
            <div className="profile__user">
              <h1 className="profile__user-name">Jacques Cousteau</h1>
              <button
                className="profile__edit-button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              >
                <img
                  src={editButton}
                  alt="icone de edição"
                  className="profile__image-edit-button"
                />
              </button>
            </div>
            <p className="profile__description">Explorer</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          aria-label="Adicionar cartão"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>

      <section className="elements page__section">
        <ul className="elements__cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
              removeCardPopup={removeCardPopup}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
