import { Injectable } from '@nestjs/common';
import { UserEntity } from '../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {

  constructor(@InjectRepository(UserEntity) repo: Repository<UserEntity>) {
    super(repo)
  }

}
