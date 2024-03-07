export class EmailAlreadyRegisteredException extends Error {
  constructor(message = 'Esse endereço de email já foi cadastrado') {
    super(message);
    this.name = EmailAlreadyRegisteredException.name;
  }
}
