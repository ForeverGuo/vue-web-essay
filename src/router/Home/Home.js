import { reactive, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Button, Input } from "ant-design-vue";
import cs from "classnames";
import HelloWorld from "components/HelloWorld";
import Link from "components/Link";
import styles from "./Home.module.scss";

const Home = defineComponent({
  provide: {
    user: "jw"
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      aaa: 111,
      vvv: 22221,
      input: ""
    });

    const state = reactive({ count: 0 });

    const handleClick = () => {
      console.info(router);
      // eslint-disable-next-line no-plusplus
      state.count++;
      data.vvv = 22222222222;
    };

    return () => (
      <div>
        <Button type="danger" class={styles.home} onClick={handleClick}>
          <div>
            {state.count % 2 === 0 ? (
              <p>
                count: {state.count} {data.aaa}
              </p>
            ) : null}
          </div>
        </Button>

        {data.input}

        <Input
          v-show={data.aaa === 111}
          v-model={data.input}
          prefix="￥"
          suffix="RMB"
        ></Input>
        <HelloWorld a={data.vvv}>1122</HelloWorld>
        <Link to="/sssasas" class={cs(styles.testLink, styles.testLink111)}>
          Links
        </Link>
      </div>
    );
  }
});

export default Home;
