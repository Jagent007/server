import { Migration } from '@mikro-orm/migrations';

export class Migration20240509043314 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Sales" ("id" varchar(255) not null, "ip" varchar(255) not null, "email" varchar(255) not null, "cpf" varchar(255) not null, "value" varchar(255) not null, "valueType" varchar(255) not null, "name" varchar(255) not null, "type" varchar(255) not null, "cellphone" varchar(255) not null, "createdAt" timestamptz(0) not null default now(), "updatedAt" timestamptz(0) not null default now(), constraint "Sales_pkey" primary key ("id"));');

    this.addSql('create table "User" ("id" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "type" varchar(255) not null, "createdAt" timestamptz(0) not null default now(), "updatedAt" timestamptz(0) not null default now(), constraint "User_pkey" primary key ("id"));');
    this.addSql('alter table "User" add constraint "User_email_unique" unique ("email");');
  }

}
