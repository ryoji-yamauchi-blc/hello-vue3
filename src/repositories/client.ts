import { ApiError } from "@/models";

const exec = async (...param: Parameters<typeof fetch>) => {
  const response = await fetch(...param);

  if (!response.ok) {
    throw new ApiError();
  }

  return await response.json();
};

export const client = {
  exec,
};
