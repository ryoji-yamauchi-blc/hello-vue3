import { reactive, onMounted, toRefs } from "vue";
import { client } from "@/repositories";

type Props = {
  url: string;
};

export const useFetch = <ResponseData = any>(props: Props) => {
  const state = reactive<{ data: ResponseData | null }>({
    data: null,
  });

  const gets = async () => {
    const json = await client.exec(props.url);
    state.data = json.users;
  };

  onMounted(gets);

  return { ...toRefs(state), isLoading: true };
};
