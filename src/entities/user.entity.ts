import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({name:"user", schema:"dev_dic"})
// @Index(['user_id', 'user_email'])
export class User {
  @PrimaryGeneratedColumn({
      name: "user_id"
  })
  id: number;
  
  @Column("varchar", { name: "user_name", length: 40, unique: false })
  userName: string;

  @Column("varchar", { name: "user_email", length: 100, unique: true })
  userEmail: string;

  @Column("varchar", { name: "user_pwd", length: 200, nullable: false })
  userPwd: string;

  @Column("datetime",{
      name: "last_login_date",
      nullable: true,
      default: null
  })
  lastLoginDate: Date;

  @CreateDateColumn({
      name: "created_at"
  })
  createdDate: Date;

  @UpdateDateColumn({
      name: "updated_at"
  })
  updatedDate: Date;

}

/**
 * create table `user` (
	`user_id` BIGINT(20) not null auto_increment,
	`user_name` varchar(40) not null collate 'utf8mb4_unicode_520_ci',
	`user_email` varchar(100) not null collate 'utf8mb4_unicode_520_ci',
	`user_pwd` varchar(200) not null collate 'utf8mb4_unicode_520_ci',
	`last_login_date` DATETIME NULL DEFAULT NULL,
	`created_at` DATETIME not null default current_timestamp,
	`updated_at` datetime not null default current_timestamp on update current_timestamp,
	primary key (`user_id`)
);
 */