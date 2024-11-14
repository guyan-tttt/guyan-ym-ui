import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import { withInstall  } from  "@ym-UI/utils"

export const YmCollapse = withInstall(Collapse);
export const YmCollapseItem = withInstall(CollapseItem);

export * from './type.ts'