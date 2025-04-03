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