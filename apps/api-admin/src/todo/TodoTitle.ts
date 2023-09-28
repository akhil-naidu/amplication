import { Todo as TTodo } from "../api/todo/Todo";

export const TODO_TITLE_FIELD = "task";

export const TodoTitle = (record: TTodo): string => {
  return record.task || String(record.id);
};
