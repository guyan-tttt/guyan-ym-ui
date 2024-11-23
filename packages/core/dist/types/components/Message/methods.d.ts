import { Message, MessageType, MessageFn, MessageProps } from './type';

export declare const messageDefaults: {
    type: string;
    duration: number;
    offset: number;
    transitionName: string;
    showClose: boolean;
};
export declare function getLastBottomOffset(this: MessageProps): any;
export declare const message: MessageFn & Partial<Message>;
export declare function closeAll(type?: MessageType): void;
declare const _default: Message;
export default _default;
