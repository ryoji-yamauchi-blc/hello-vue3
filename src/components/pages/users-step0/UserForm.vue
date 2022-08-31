<script setup lang="ts">
/**
 * 登録ボタンを押下したときフォームのデータを送信する
 */
const handleSubmit = (e: Event) => {
  const target = e.target as HTMLFormElement;
  const formData = new FormData(target);
  const formValues = Object.fromEntries(formData);
  // TODO 送信する
  console.log(formValues);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <label for="id">ユーザーID</label>
      <input name="id" type="text" defaultValue="foo" />
    </div>
    <div class="row">
      <label for="name">名前</label>
      <input name="name" type="text" />
    </div>
    <div>
      <button type="submit">登録</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
}

label {
  width: 150px;
}

.row {
  display: flex;
  gap: 4px;
}

input {
  border: 1px solid black;
}

button {
  padding: 10px;
  border-radius: 4px;
  color: var(--vt-c-white);
  display: flex;
  justify-content: center;
  background-color: var(--vt-c-blue);
}
</style>
