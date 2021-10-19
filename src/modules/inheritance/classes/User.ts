export class User {
  name: string;
  lastName: string;
  username: string;
  password: string;
  lastAccess: Date | undefined;
  createdAt: Date;

  constructor(name: string, lastName: string, login: string, password: string) {
    this.name = name;
    this.lastName = lastName;
    this.username = login;
    this.password = password;
    this.createdAt = new Date();
  }

  changePassword(newPassword: string) {
    this.password = newPassword;
  }

  setLastAccess() {
    this.lastAccess = new Date();
  }

  changeName(newName: string) {
    this.name = newName;
  }
}
