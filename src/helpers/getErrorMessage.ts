import { ErrorMessage } from "@/types";

const getErrorMessage = (error: unknown): ErrorMessage => {
  if (error instanceof Error) {
    if (error.message === "Found nothing") return error.message;
  }

  return "Internal error";
};

export default getErrorMessage;
