import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserDto } from 'src/dto/user.dto';
import { LoginUserDto } from 'src/dto/user-login.dto';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<UserEntity>);
    findOne(options?: object): Promise<UserDto>;
    findByLogin({ username, password }: LoginUserDto): Promise<UserDto>;
    findByPayload({ username }: any): Promise<UserDto>;
}
