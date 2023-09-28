import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  task?: SortOrder;
  updatedAt?: SortOrder;
};
