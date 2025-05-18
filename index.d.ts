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
    label: string;
    value: string;
}

interface IPropertyType {
    key: string;
    label: string;
    valueType: string;
    editorType?: string;
    defaultValue: any;
    dropdown?: IDropdownOption[];
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
