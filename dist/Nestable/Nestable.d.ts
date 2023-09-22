/// <reference types="react-addons-update" />
import React, { Component, CSSProperties } from 'react';
import { NestableProps, NestableState, Item, Collapse } from '../types';
declare class Nestable extends Component<NestableProps, NestableState> {
    el: Element | null;
    elCopyStyles: CSSProperties | null;
    mouse: {
        last: {
            x: number;
        };
        shift: {
            x: number;
        };
    };
    constructor(props: NestableProps);
    static defaultProps: Partial<NestableProps>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: NestableProps): void;
    componentWillUnmount(): void;
    collapse: Collapse;
    startTrackMouse: () => void;
    stopTrackMouse: () => void;
    moveItem({ dragItem, pathFrom, pathTo }: {
        dragItem: Item;
        pathFrom: number[];
        pathTo: number[];
    }, extraProps?: Partial<NestableState>): void;
    tryIncreaseDepth(dragItem: Item): void;
    tryDecreaseDepth(dragItem: Item): void;
    dragApply(): void;
    dragRevert(): void;
    getPathById(id: unknown, items?: Item[]): number[];
    getItemByPath(path: number[], items?: Item[]): Item;
    getItemDepth: (item: Item) => number;
    getSplicePath(path: number[], options?: {
        numToRemove?: number;
        itemsToInsert?: Item[];
        childrenProp?: NestableProps['childrenProp'];
    }): React.UpdateSpecPath;
    getRealNextPath(prevPath: number[], nextPath: number[], dragItemSize: number): number[];
    getItemOptions(): {
        dragItem: Item;
        idProp: string;
        childrenProp: string;
        disableCollapse: boolean;
        disableDrag: boolean;
        renderItem: import("../types").RenderItem;
        renderCollapseIcon: import("../types").RenderCollapseIcon;
        handler: React.ReactNode;
        checkIfCollapsed: (item: Item) => boolean;
        onDragStart: (e: MouseEvent, item: Item) => void;
        onMouseEnter: (e: MouseEvent, item: Item) => void;
        onToggleCollapse: (item: Item, isGetter?: true) => {
            collapsedItems: unknown[];
        };
    };
    checkIfCollapsed: (item: Item) => boolean;
    onDragStart: (e: MouseEvent, item: Item) => void;
    onDragEnd: (e: MouseEvent, isCancel?: boolean) => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseEnter: (e: MouseEvent, item: Item) => void;
    onToggleCollapse: (item: Item, isGetter?: true) => {
        collapsedItems: unknown[];
    };
    onKeyDown: (e: KeyboardEvent) => void;
    renderDragLayer(): React.JSX.Element;
    render(): React.JSX.Element;
}
export default Nestable;
