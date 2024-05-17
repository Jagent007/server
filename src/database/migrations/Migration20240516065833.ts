import { Migration } from '@mikro-orm/migrations';

export class Migration20240516065833 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Sales" add column "network" varchar(255) null;');
    this.addSql('alter table "Sales" alter column "email" type varchar(255) using ("email"::varchar(255));');
    this.addSql('alter table "Sales" alter column "email" drop not null;');
    this.addSql('alter table "Sales" alter column "valueType" type varchar(255) using ("valueType"::varchar(255));');
    this.addSql('alter table "Sales" alter column "valueType" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "Sales" alter column "email" type varchar(255) using ("email"::varchar(255));');
    this.addSql('alter table "Sales" alter column "email" set not null;');
    this.addSql('alter table "Sales" alter column "valueType" type varchar(255) using ("valueType"::varchar(255));');
    this.addSql('alter table "Sales" alter column "valueType" set not null;');
    this.addSql('alter table "Sales" drop column "network";');
  }

}
