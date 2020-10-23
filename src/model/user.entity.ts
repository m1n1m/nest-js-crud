import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PostEntity } from './post.entity';
import { ApiProperty } from '@nestjsx/crud/lib/crud';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {

  @ApiProperty()
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @OneToMany(type => PostEntity, post => post.user)
  posts: PostEntity[];
}