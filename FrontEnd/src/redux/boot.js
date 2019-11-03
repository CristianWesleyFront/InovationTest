import { store } from "./store";
import { checkAuthorization } from "./auth/action";

export default () =>
  new Promise(() => {
    store.dispatch(checkAuthorization());
  });
