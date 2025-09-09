export default function NewCard() {
  return (
    <form
      className="popup__form"
      name="addCardForm"
      id="form-add-card"
      noValidate
    >
      <input
        type="text"
        name="name"
        placeholder="Título"
        className="popup__input popup__input_type_name"
        required
        minLength="1"
        maxLength="30"
      />
      <span className="popup__form-error" id="title-error"></span>

      <input
        type="url"
        name="link"
        placeholder="Link da imagem"
        className="popup__input popup__input_type_link"
        required
      />
      <span className="popup__form-error" id="link-error"></span>

      <button type="submit" className="popup__submit">
        Criar
      </button>
    </form>
  );
}
