import { DateTime } from "luxon";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dateTime: DateTime,
    },
  };
});
