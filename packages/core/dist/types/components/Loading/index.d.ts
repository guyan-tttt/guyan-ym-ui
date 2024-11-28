import { vLoading } from './directive.ts';
import { Loading } from './methods';
import { App } from 'vue';

export declare const YmLoading: {
    name: string;
    install(app: App): void;
    directive: import('vue').Directive<import('./directive.ts').ElementLoading, boolean>;
    service: typeof Loading;
};
export default YmLoading;
export { Loading as YmLoadingService, vLoading as YmLoadingDirective, vLoading };
export * from './type.ts';
