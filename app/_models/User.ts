import { ARCHETYPE } from "../_types";

type UserProps = {
  email: string | null,
  id: string | null,
  handle: string | null,
  username: string | null,
  firstName: string | null,
  lastName: string | null,
  archetype: ARCHETYPE | null,
  isAuthenticated: boolean,
  avatar: string | null,
}

export class User {
  id: string | null;
  username: string | null;
  email: string | null;
  avatar: string | null;
  handle: string | null;
  firstName: string | null;
  lastName: string | null;
  archetype: ARCHETYPE | null;
  isAuthenticated: boolean;

  constructor({
    id,
    username,
    handle,
    firstName,
    lastName,
    email,
    avatar,
    archetype,
    isAuthenticated,
  }: UserProps) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.avatar = avatar;
    this.handle = handle;
    this.firstName = firstName;
    this.lastName = lastName;
    this.archetype = archetype;
    this.isAuthenticated = isAuthenticated;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }


}