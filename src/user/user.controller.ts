import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { UserService } from './user.service';
import { UserEntity } from '../model/user.entity';

@Crud({
  model: {
    type: UserEntity,
  },
})
@Controller('user')
export class UserController implements CrudController<UserEntity> {

  constructor(public service: UserService) { }
}
