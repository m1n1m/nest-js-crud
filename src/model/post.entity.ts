import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TopicEntity } from './topic.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'post' })
export class PostEntity extends BaseEntity {

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'varchar', length: 500 })
  text: string;

  @ManyToOne(type => TopicEntity, topic => topic.posts)
  topic: TopicEntity;

  @ManyToOne(type => UserEntity, user => user.posts)
  user: UserEntity;
}