import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TodoWhereInput = {
  completed?: BooleanNullableFilter;
  id?: StringFilter;
  task?: StringNullableFilter;
};
