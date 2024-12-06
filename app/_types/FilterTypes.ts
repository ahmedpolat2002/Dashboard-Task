export interface Filters {
  column: "id" | "firstName" | "lastName" | "age" | "fullName" | undefined;
  operator: "equals" | "contains";
  value: string;
}
