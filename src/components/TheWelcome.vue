<script setup lang="ts">
import { reactive } from "vue";

//function reactive(obj: Record<string | symbol, any>): Record<any, any> {
//  return new Proxy(obj, {
//    get(target, key) {
//      console.log("getter");
//      const res = target[key];
//      if (typeof res === "object") {
//        return reactive(res);
//      }
//      return res;
//    },
//    set(target, key, value) {
//      console.log("setter");
//      target[key] = value;
//      return true;
//    },
//  });
//}

//function reactive2(obj: Record<string | symbol, any>) {
//  return new Proxy(obj, {
//    get(target, key, r) {
//      if (key === "foo") {
//        return "bar";
//      }
//      return target[key];
//    },
//  });
//}

//const person = {
//  age: 10,
//  attr: {
//    name: "foo",
//  },
//};
//
//const reactivePerson = reactive(person);
////console.log(reactivePerson);
////console.log(reactivePerson.age);
////console.log(reactivePerson.age);
//
//const { attr } = reactivePerson;
//console.log(attr);
//
//attr.name = "bar";

const state = reactive({
  foo: "bar",
  obj: {
    name: "bbb",
  },
});

const { obj } = state;

const handleClick = () => {
  obj.name = "aaa";
};
</script>

<template>
  {{ obj.name }}
  <button type="button" @click="handleClick">push</button>
</template>
