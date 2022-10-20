import { describe, it, expect } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/vue";
import { createPinia } from "pinia";
import "@/utils/initZod";
import router from "@/router";
//import DeadSimple from "@/components/pages/DeadSimple.vue";
import { LoginPage } from "@/components/pages";

// テストコード

// どの層のレイヤーをテストするのか

const store = createPinia();

const renderPage = () => {
  return render(LoginPage, {
    global: {
      plugins: [store, router],
    },
  });
};

//function validateTelNo(v: string) {
//  return /^[0-9]{12}$/.test(v);
//}
//
//describe("電話番号バリデーションチェック", () => {
//  it("成功パターン", () => {
//    expect(validateTelNo("09011112222")).toBe(true);
//  });
//  it("エラーパターン", () => {
//    expect(validateTelNo("a")).toBe(false);
//    expect(validateTelNo("0901111222")).toBe(false);
//  });
//});
//
//describe("CounterComponentのテスト", () => {
//  it("ボタンを押下したらカウンターがインクリメントすること", async () => {
//    const { getByRole, getByTestId } = render(CounterComponent);
//    const counter = getByTestId("counter");
//    // 初期値は0であること
//    expect(counter.textContent).toEqual("0");
//    const button = getByRole("button");
//    // ボタンをクリック
//    await fireEvent.click(button);
//    // 1にカウントアップすること
//    expect(counter.textContent).toEqual("1");
//  });
//});

describe("ログインページのテスト", () => {
  it("何も入力しないでログインボタンを押下するとバリデーションエラーが発生すること", async () => {
    const { getByText, getAllByText } = renderPage();
    const button = getByText("ログイン");
    await fireEvent.click(button);
    await waitFor(() => getAllByText("入力してください。"));
    const errorMessages = getAllByText("入力してください。");
    expect(errorMessages.length).toBe(2);
  });

  it.todo("");
});
