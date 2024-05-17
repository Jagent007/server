import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { createId } from "@paralleldrive/cuid2";

@Entity()
export class User {
  @PrimaryKey()
  id: string = createId();

  @Property({ unique: true })
  email!: string;

  @Property()
  password!: string;

  @Property()
  type!: string;

  @Property({ defaultRaw: "now()" })
  createdAt!: Date;

  @Property({ defaultRaw: "now()" })
  updatedAt!: Date;
}
