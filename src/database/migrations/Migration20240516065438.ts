import { Migration } from '@mikro-orm/migrations';

export class Migration20240516065438 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Sales" add column "payment" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "Sales" drop column "payment";');
  }

}
