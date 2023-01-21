import { ZodError } from "zod";

export const apiResponseValidation = (schema) => {
  return (response, meta) => {
    try {
      return schema.parse(response);
    } catch (err) {
      if (err instanceof ZodError) {
        console.error(
          "API response validation error! Failed to parse the response"
        );
        console.error(meta?.request.method, meta?.request.url);
      }
      throw err;
    }
  };
};
