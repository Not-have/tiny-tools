import type {
    IButtonType
} from './button';

export interface IButtonOpsType {
    items: (IButtonType | '|')[];
    type: IButtonType['type'];
    size: IButtonType['size'];
    disabled: IButtonType['disabled'];
    /**
     * 最多可见个数，其余的收起
     */
    maxVisible: number;
    /**
     * 额外的组件，放在按钮列表末尾
     */
    extra: Object
}

