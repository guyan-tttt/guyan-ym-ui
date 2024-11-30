import type { InjectionKey } from "vue";
import type { SelectContext } from "./type";

// 依赖注入的key
export const SELECT_CTX_KEY: InjectionKey<SelectContext> =
  Symbol("selectContext");

  // 下拉菜单的宽度
export const POPPER_OPTIONS: any = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    },
  ],
} as const;
