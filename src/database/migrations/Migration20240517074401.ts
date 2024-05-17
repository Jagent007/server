import { Migration } from '@mikro-orm/migrations';

export class Migration20240517074401 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Sales" alter column "cpf" type varchar(255) using ("cpf"::varchar(255));');
    this.addSql('alter table "Sales" alter column "cpf" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "Sales" alter column "cpf" type varchar(255) using ("cpf"::varchar(255));');
    this.addSql('alter table "Sales" alter column "cpf" set not null;');
  }

}
