import {
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "./user.dto";
import { AuthRO, UserRO } from "./ro";

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
  }
  
  async findAllUsers() {
    const users = await this.userRepository.find({ relations: ["ideas"] });
    
    if (!users) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }
    
    return users.map(user => UserRO.fromUser(user));
  }
  
  async findUser(username: string) {
    
    const user = await this.userRepository.findOne({ username }, {relations: ["ideas"]});
    
    if (!user) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }
    
    return UserRO.fromUser(user);
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
    
    return AuthRO.fromUser(user);
  }
  
  async register(data: UserDTO) {
    const { username } = data;
    let user = await this.userRepository.findOne({ username });
    
    if (user) {
      throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
    }
    
    user = await this.userRepository.create(data);
    await this.userRepository.save(user);
    
    return AuthRO.fromUser(user);
  }
}
