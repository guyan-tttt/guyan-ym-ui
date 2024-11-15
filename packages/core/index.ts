import { markInstaller } from "@ym-UI/utils";
import components from "./components";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@ym-UI/theme/index.css'
import printLogo from "./printLogo"; 

printLogo()
library.add(fas) // 添加图标
const installer = markInstaller(components);

export * from "@ym-UI/components"

export default installer;