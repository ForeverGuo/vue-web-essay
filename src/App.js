import { RouterView } from "vue-router";
import { Spin } from "ant-design-vue";
import { useStore } from "vuex";

const App = () => {
  const {
    state: { spinning }
  } = useStore();

  return (
    <Spin tip="Loading..." size="large" spinning={spinning}>
      <RouterView style={{ textAlign: "center" }} />
    </Spin>
  );
};

export default App;
