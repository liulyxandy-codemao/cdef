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


interface IWidgetType {
    type: string;
    icon: string;
    title: string;
    isInvisibleWidget: boolean;
    isGlobalWidget: boolean;
    properties: IPropertyType[];
    methods: IMethodType[];
    events: IEventType[];
    [x: string]: any;
}
