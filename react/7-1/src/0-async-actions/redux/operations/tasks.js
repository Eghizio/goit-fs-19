import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "../slices/tasks";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getAllTasks = async () => {
  await sleep(2_500);
  if (Math.random() < 0.5) throw new Error("Ooopsie");

  const response = await fetch(`${import.meta.env["VITE_API_URL"]}/tasks`);
  const data = await response.json();

  return data;
};

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());

    const data = await getAllTasks();

    dispatch(fetchingSuccess(data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
