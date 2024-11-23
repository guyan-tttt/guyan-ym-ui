import ConfigProvider from "./ConfigProvider.vue";
import { withInstall } from "@ym-UI/utils";

export const YmConfigProvider = withInstall(ConfigProvider);

export * from "./type"
export * from './hooks'