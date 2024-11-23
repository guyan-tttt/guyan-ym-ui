import { MaybeRef, Ref, App } from 'vue';
import { ConfigProviderContext } from './constants';

export declare function useGlobalConfig<K extends keyof ConfigProviderContext, D extends ConfigProviderContext[K]>(key: K, defaultVal?: D): Ref<Exclude<ConfigProviderContext[K], void>>;
export declare function useGlobalConfig(): Ref<ConfigProviderContext>;
export declare function provideGlobalConfig(config?: MaybeRef<ConfigProviderContext>, app?: App, global?: boolean): import('vue').ComputedRef<Partial<import('packages/core').ConfigProviderProps>> | undefined;
