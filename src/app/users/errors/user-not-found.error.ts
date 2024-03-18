import { NotFoundException } from "@nestjs/common";

export class UserNotFoundException extends NotFoundException {
  constructor(message = 'Usuario não encontrado') {
    super(message);
    this.name = UserNotFoundException.name;
  }
}
