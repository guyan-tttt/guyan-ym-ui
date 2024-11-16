import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import YmUI from "guyan-ym-ui";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import "@vitepress-demo-preview/component/dist/style.css";
import "guyan-ym-ui/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(YmUI);
  },
};
