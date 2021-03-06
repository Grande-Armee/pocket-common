export type MappedEntityTestDataGenerator<Entity> = {
  [Property in keyof Entity as `generate${Capitalize<string & Property>}`]: () => Entity[Property];
};

export type NonNullableEntity<Entity> = {
  [P in keyof Entity]-?: NonNullable<Entity[P]>;
};

export type EntityTestDataGenerator<Entity> = {
  generateEntityData: () => NonNullableEntity<Entity>;
} & MappedEntityTestDataGenerator<Entity>;
