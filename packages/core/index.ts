import { markInstaller } from "@ym-UI/utils";
import components from "./components";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@ym-UI/theme/index.css'

library.add(fas) // 添加图标
const installer = markInstaller(components);

export * from "../components"

export default installer;