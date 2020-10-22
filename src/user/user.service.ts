import { Injectable } from '@nestjs/common';
import { UserEntity } from '../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) private readonly repo: Repository<UserEntity>) { }

  public async getAll() {
    return await this.repo.find();
  }

}
