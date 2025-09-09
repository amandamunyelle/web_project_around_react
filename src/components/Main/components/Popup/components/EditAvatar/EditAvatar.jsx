export default function EditAvatar() {
  return (
    <form className="popup__form" id="form-edit-avatar" noValidate>
      <input
        type="url"
        name="avatar"
        placeholder="Link da nova imagem"
        className="popup__input"
        required
      />
      <span className="popup__form-error" id="avatar-error"></span>
      <button type="submit" className="popup__submit">
        Salvar
      </button>
    </form>
  );
}
