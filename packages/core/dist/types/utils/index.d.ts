export declare const typeIconMap: Map<string, string>;
export declare const RenderVnode: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    vNode: {
        type: (ObjectConstructor | StringConstructor | FunctionConstructor)[];
        required: true;
    };
}>, () => any, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    vNode: {
        type: (ObjectConstructor | StringConstructor | FunctionConstructor)[];
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export declare const rAF: () => Promise<unknown>;
export * from './install';
export * from './error';
export * from './style';
export * from './fetchAPI';
