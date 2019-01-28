import {
  ClassSerializerInterceptor,
  Get,
  HttpException,
  HttpStatus,
  Injectable,
  Post,
  UseInterceptors
} from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "./user.dto";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
  }

  async findAllUsers() {
    const users = await this.userRepository.find();

    if (!users) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return users;
  }

  async me() {
    return;
  }

  async login(data: UserDTO) {
    const { username, password } = data;
    const user = await this.userRepository.findOne({ username });

    if (!user) {
      throw new HttpException("Invalid credentials", HttpStatus.BAD_REQUEST);
    }

    const correctPassword = await user.comparePassword(password);

    if (!correctPassword) {
      throw new HttpException("Invalid credentials", HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async register(data: UserDTO) {
    const { username } = data;
    let user = await this.userRepository.findOne({ username });

    if (user) {
      throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
    }

    user = await this.userRepository.create(data);
    await this.userRepository.save(user);

    return user;
  }
}
