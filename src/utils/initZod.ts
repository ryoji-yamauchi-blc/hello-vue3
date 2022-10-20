import * as zod from "zod";

const customErrorMap: zod.ZodErrorMap = (issue, ctx) => {
  // 期待する型と異なる場合
  if (issue.code === zod.ZodIssueCode.invalid_type) {
    return { message: "入力してください" };
  }
  // minで定義した値未満
  if (issue.code === zod.ZodIssueCode.too_small) {
    return {
      message:
        issue.minimum === 1
          ? "入力してください。"
          : `${issue.minimum}文字以上で入力してください。`,
    };
  }
  // maxで定義した値を超える
  if (issue.code === zod.ZodIssueCode.too_big) {
    return { message: `${issue.maximum}文字以内で入力してください。` };
  }
  // 未定義のものは、デフォルト値を設定
  return { message: ctx.defaultError };
};

zod.setErrorMap(customErrorMap);
