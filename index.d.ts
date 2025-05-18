declare class InvisibleWidget {
    __widgetId: string;
    __widgetType: string;

    constructor(props: {
        [x: string]: any;
    })

    emit(event: string, ...args: any[]): void;

    widgetLog(message: any): void;
    widgetLog(...args: any[]): void;

    widgetWarn(message: any): void;
    widgetWarn(...args: any[]): void;

    widgetError(message: any): void;
    widgetError(...args: any[]): void;

    widgetInterrupt(message: any): void;
    widgetInterrupt(...args: any[]): void;
}

declare class VisibleWidget extends InvisibleWidget {
    __width: number;
    __height: number;

    setProps(props: {
        [x: string]: any;
    }): void;

    render(): any;
}

interface IDropdownOption {
    /**
     * 定义属性值下拉选项文本
     */
    label: string;
    /**
     * 定义属性下拉选项值，属性内唯一，标识不同属性值选项
     */
    value: string;
}

type ValidatorType<T> = T | {
    value: Text,
    message: string
}

interface IPropertyType {
    /**
     * 定义属性名称，控件内唯一，标识不同属性（遵循JavaScript命名规范）
     */
    key: string;
    /**
     * 定义属性积木文本。
     * 
     * 参见：[可见控件内置属性](https://codemao.yuque.com/kzbwh0/coco_guide/idofvgf35gkisg9d#CPRor)
     */
    label: string;
    /**
     * 定义属性类型，影响编辑器内积木嵌套和属性面板编辑
     */
    valueType: string;
    /**
     * 定义属性数据类型，影响编辑器内积木嵌套
     */
    checkType?: string | string[];
    /**
     * 定义属性编辑器类型，影响属性面板编辑
     */
    editorType?: string;
    /**
     * 功能	定义属性默认值
     */
    defaultValue: any;
    /**
     * 定义属性编辑器类型，影响属性面板编辑
     */
    hidePropertyEditor?: boolean;
    /**
     * 定义属性是否只读
     */
    readonly?: boolean;
    /**
     * 定义属性 `valueType` 为 `number` 时的单位
     */
    unit?: string;
    /**
     * 定义属性值检查器
     */
    validators?: {
        /**
         * 检查属性 valueType 为 'number' 时是否小于指定值
         */
        lessThan?: ValidatorType<number>;
        /**
         * 检查属性 valueType 为 'number' 时是否大于指定值
         */
        greaterThan?: ValidatorType<number>;
        /**
         * 检查属性 valueType 为 'number' 时是否为整数
         */
        isInteger?: ValidatorType<boolean>;
        /**
         * 检查属性 valueType 为 'string' 时是否不为空
         */
        notEmpty?: ValidatorType<boolean>;
        /**
         * 检查属性 valueType 为 'string' 时是否大于指定长度
         */
        maxLength?: ValidatorType<number>;
        /**
         * 检查属性 valueType 为 'string' 时是否小于指定长
         */
        minLength?: ValidatorType<number>;
        [x: string]: ValidatorType<any>;
    }
    /**
     * 功能	定义属性值下拉列表
     */
    dropdown?: IDropdownOption[];
    /**
     * 定义积木提示，鼠标悬浮在积木上显示
     */
    tooltip?: string;
    blockOptions?: {
        [x: string]: any;
    };
    [x: string]: any;
}

interface IParamType {
    key: string;
    label: string;
    valueType: string;
    defaultValue: any;
}

type IEventParamType = Omit<IParamType, 'defaultValue'>;

interface IMethodType {
    key: string;
    label: string;
    valueType?: string;
    params: IParamType[];
    blockOptions?: {
        [x: string]: any;
    };
    [x: string]: any;
}

interface IEventType {
    key: string;
    label: string;
    params: IEventParamType[];
    blockOptions?: {
        [x: string]: any;
    };
    [x: string]: any;
}

type SupportPlatform = 'web' | 'android' | 'ios'

interface IWidgetType {
    /**
     * 定义控件类型名称，作品唯一，标识不同控件
     */
    type: string;
    /**
     * 定义控件图标，显示在CoCo编辑器中
     */
    icon: string;
    /**
     * 功能	定义控件名称，显示在CoCo编辑器中
     */
    title: string;
    /**
     * 定义控件文档
     */
    docs: {
        /**
         * 定义控件文档链接，点击控件的属性面板底部“如何使用？”将跳转到链接
         */
        url: string;
    };
    /**
     * 定义是否为不可见控件
     */
    isInvisibleWidget: boolean;
    /**
     * 定义是否为全局控件
     * 
     * 当 `isInvisibleWidget` 为 `false` 时，本选项值必须为 `false`
     */
    isGlobalWidget: boolean;
    /**
     * 定义控件的可用平台
     * | 值 | 描述 |
     * | --- | ----------- |
     * |`web`|	网页版（编辑器、h5预览、社区分享）|
     * |`android`|	安卓手机端（打包APP）|
     * |`ios`|	（暂未实现）|
     * 
     * 不包含`web`时，编辑器调试会显示“控件暂不支持网页端运行，请打包后使用”的提示，具体是否可用取决于控件的代码实现，而非该选项
     * 
     * 在编写代码时可以使用 `utils.isNative` 进行判断是否为打包后的APP
     */
    platforms: SupportPlatform | SupportPlatform[];
    /**
     * 定义控件的版本。
     * 
     * 建议遵循semver规范。
     */
    version: string;
    /**
     * 功能	定义控件是否生成任意控件积木
     */
    hasAnyWidget: boolean;
    /**
     * 定义控件属性
     */
    properties: IPropertyType[];
    /**
     * 定义控件方法
     */
    methods: IMethodType[];
    /**
     * 定义控件事件
     */
    events: IEventType[];
    [x: string]: any;
}
