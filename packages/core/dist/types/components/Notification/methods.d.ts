import { Notification, NotificationFn, NotificationProps, notificationType } from './type';

export declare const notificationDefault: {
    readonly type: "info";
    readonly duration: 3000;
    readonly offset: 20;
    readonly transitionName: "fade";
    readonly showClose: true;
};
export declare function getLastBottomOffset(this: NotificationProps): any;
export declare const notification: NotificationFn & Partial<Notification>;
export declare function closeAll(type?: notificationType): void;
declare const _default: Notification;
export default _default;
