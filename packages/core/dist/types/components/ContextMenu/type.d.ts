export type ContextMenuType = "primary" | "success" | "warning" | "danger" | "info";
export interface ContextMenuOptionsItem {
    label: string;
    handle(item: ContextMenuOptionsItem): void;
}
export interface ContextMenuProps {
    type?: ContextMenuType;
    options?: ContextMenuOptionsItem[];
    title?: string;
    icon?: string;
    customize?: boolean;
}
