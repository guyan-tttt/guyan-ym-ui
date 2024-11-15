export default function () {
    if (PROD) {
      const logo = `
  ______________________________________________________________________________
  
                                                                             .__ 
   ____  __ __ ___.__._____    ____            ___.__. _____            __ __|__|
  / ___\|  |  <   |  |\__  \  /    \   ______ <   |  |/     \   ______ |  |  \  |
 / /_/  >  |  /\___  | / __ \|   |  \ /_____/  \___  |  Y Y  \ /_____/ |  |  /  |
 \___  /|____/ / ____|(____  /___|  /          / ____|__|_|  /         |____/|__|
/_____/        \/          \/     \/           \/          \/                    
                                             
  ______________________________________________________________________________
                                中文名： 云墨UI,
                                作者： guyan_tttt
  `;
  
      const rainbowGradient = `
  background: linear-gradient(135deg, orange 60%, cyan);
  background-clip: text;
  color: transparent;
  font-size: 16px; 
  line-height: 1;
  font-family: monospace;
  font-weight: 600;
  `;
  
      console.info(`%c${logo}`, rainbowGradient);
    } else if (DEV) {
      console.log("[guyan-ym-ui]:dev mode...");
    }
  }
  