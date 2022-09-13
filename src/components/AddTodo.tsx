import { FormEvent, ChangeEvent } from "react";
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";

export type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange,
}: AddTodoProps) => (
  <form
    className="flex justify-between w-100%"
    onSubmit={handleSubmitTodo}
    autoComplete="off"
  >
    <input
      type="text"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2 mb-2"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add todo">
      <PlusIcon />
    </button>
  </form>
);
