import { Migration } from '@mikro-orm/migrations';

export class Migration20240517074857 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Sales" alter column "name" type varchar(255) using ("name"::varchar(255));');
    this.addSql('alter table "Sales" alter column "name" drop not null;');
    this.addSql('alter table "Sales" alter column "type" type varchar(255) using ("type"::varchar(255));');
    this.addSql('alter table "Sales" alter column "type" drop not null;');
    this.addSql('alter table "Sales" alter column "payment" type varchar(255) using ("payment"::varchar(255));');
    this.addSql('alter table "Sales" alter column "payment" drop not null;');
    this.addSql('alter table "Sales" alter column "cellphone" type varchar(255) using ("cellphone"::varchar(255));');
    this.addSql('alter table "Sales" alter column "cellphone" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "Sales" alter column "name" type varchar(255) using ("name"::varchar(255));');
    this.addSql('alter table "Sales" alter column "name" set not null;');
    this.addSql('alter table "Sales" alter column "type" type varchar(255) using ("type"::varchar(255));');
    this.addSql('alter table "Sales" alter column "type" set not null;');
    this.addSql('alter table "Sales" alter column "payment" type varchar(255) using ("payment"::varchar(255));');
    this.addSql('alter table "Sales" alter column "payment" set not null;');
    this.addSql('alter table "Sales" alter column "cellphone" type varchar(255) using ("cellphone"::varchar(255));');
    this.addSql('alter table "Sales" alter column "cellphone" set not null;');
  }

}
