import { getArrayOfObject } from "../helpers";

export const getNotifications = state => {
  return getArrayOfObject(state.notification);
};
