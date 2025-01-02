console.log('docs.build');
import fs from 'fs-extra'
import { dirname , resolve} from 'path'
import { fileURLToPath  } from 'url'
// const docsPath = 

const __dirname = dirname(fileURLToPath(import.meta.url))


const docsPath = resolve(__dirname, "../packages/docs/.vitepress/dist/")
const newDocsPath = resolve(__dirname, "../docs")
console.log(docsPath);
console.log(newDocsPath);

// 移动文件夹
fs.move(docsPath, newDocsPath, { overwrite: true })
  .then(() => console.log('文件夹移动成功'))
  .catch(err => {
    console.error('移动文件夹时出错:', err);
    if (err.code === 'EACCES') {
      console.error('权限不足，尝试以管理员身份运行脚本。');
    } else if (err.code === 'EPERM') {
      console.error('操作不被允许，检查操作系统的安全策略。');
    } else {
      console.error('未知错误:', err);
    }
  });

