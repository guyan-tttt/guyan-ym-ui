import { Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;
export declare function markInstaller(components: Plugin[]): Plugin;
export declare function withInstall<T>(component: T): SFCWithInstall<T>;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCWithInstall<T>;
export {};
