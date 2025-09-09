export default function EditProfile() {
  return (
    <form className="popup__form" id="popup-form" noValidate>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        className="popup__input"
        id="popup-name-input"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__form-error" id="name-error"></span>

      <input
        type="text"
        name="description"
        placeholder="Sobre mim"
        className="popup__input"
        id="popup-description-input"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__form-error" id="description-error"></span>

      <button type="submit" className="popup__submit">
        Salvar
      </button>
    </form>
  );
}
