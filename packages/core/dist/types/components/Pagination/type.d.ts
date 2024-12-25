export interface PaginationProps {
    background?: boolean;
    pageSize?: number;
    total: number;
    pagerCount?: number;
    currentPage: number;
    pageSizes?: number[];
    prevText?: string;
    nextText?: string;
    disabled?: boolean;
    prevIcon?: string;
    nextIcon?: string;
    jumper?: boolean;
    sizeSelector?: boolean;
    totalor?: boolean;
}
export interface PaginationEmits {
    (e: "size-change", val: number): void;
    (e: "current-change", val: number): void;
    (e: "prev-click", val: number): void;
    (e: "next-click", val: number): void;
}
