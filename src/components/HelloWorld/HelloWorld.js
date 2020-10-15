import { reactive, defineComponent, inject } from "vue";

const HelloWorld = defineComponent({
  props: ["a"],
  setup(props, { slots }) {
    const data = reactive({
      msg: "HelloWorld"
    });

    return () => {
      const { a } = props;

      return (
        <div>
          <p>slot(children): {slots.default()}</p>
          <p>reative Data: {data.msg}</p>
          <p>inject Data: {inject("user")}</p>
          <p>props Data: {a}</p>
        </div>
      );
    };
  }
});

export default HelloWorld;
