import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { createId } from "@paralleldrive/cuid2";

@Entity()
export class Sales {
  @PrimaryKey()
  id: string = createId();

  @Property()
  ip!: string;

  @Property({ nullable: true })
  email!: string;

  @Property({ nullable: true })
  cpf!: string;

  @Property()
  value!: string;

  @Property({ nullable: true })
  valueType!: string;

  @Property({ nullable: true })
  name!: string;

  @Property({ nullable: true })
  type!: string;

  @Property({ nullable: true })
  payment!: string;

  @Property({ nullable: true })
  cellphone!: string;

  @Property({ nullable: true })
  network!: string;

  @Property({ defaultRaw: "now()" })
  createdAt!: Date;

  @Property({ defaultRaw: "now()" })
  updatedAt!: Date;
}
