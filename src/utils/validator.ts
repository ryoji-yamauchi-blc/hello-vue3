const id = (value: unknown) => {
  const errorMessage = "有効なユーザーIDを入力してください";
  if (typeof value !== "string") {
    return errorMessage;
  }
  if (!/^[a-zA-z]$/.test(value)) {
    return errorMessage;
  }
  return true;
};

export const validator = {
  id,
};
