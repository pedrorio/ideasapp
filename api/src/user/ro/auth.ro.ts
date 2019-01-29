import { UserEntity } from "../user.entity";

export class AuthRO {
  id: string;
  username: string;
  created: Date;
  token: string;

  static fromUser(userEntity: UserEntity) {
    const { id, created, username, token } = userEntity;

    const authRO: AuthRO = {
      id,
      created,
      username,
      token
    };

    return authRO;
  }
}
