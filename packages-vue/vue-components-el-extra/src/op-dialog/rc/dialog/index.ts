import {
  createApp,
  h,
  unref
} from "vue";
import {
  ElDialog
} from "element-plus";
import {
  isObject
} from "micro-util-ts";

import {
  IPropsDialog
} from "../../type";

export default function dialog({
  content,
  title,
  modelValue,
  footer,
  ...rest
}: IPropsDialog): void {

  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({
    render() {
      return h(ElDialog, {
        modelValue: unref(modelValue),
        ...rest
      }, {
        header: isObject(title) ? h(title) : title,
        default: isObject(content) ? h(content) : content,
        footer
      });
    }
  });

  app.mount(div);
}
