export declare const YmConfigProvider: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        locale: {
            type: import('vue').PropType<import('packages/locale').Language>;
        };
        extendsI18nMsg: {
            type: import('vue').PropType<import('packages/locale').TranslatePair>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        locale: {
            type: import('vue').PropType<import('packages/locale').Language>;
        };
        extendsI18nMsg: {
            type: import('vue').PropType<import('packages/locale').TranslatePair>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    locale: {
        type: import('vue').PropType<import('packages/locale').Language>;
    };
    extendsI18nMsg: {
        type: import('vue').PropType<import('packages/locale').TranslatePair>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            config: Partial<import('packages/core').ConfigProviderProps> | undefined;
        }): any;
    };
}) & import('vue').Plugin;
export * from './type';
export * from './hooks';
