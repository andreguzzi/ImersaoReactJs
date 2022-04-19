import "react";

declare module "react" {
    export type FC<P = {}> = FunctionComponent<P>;
    export interface FunctionComponent<P = {}> {
        (proops: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
        proptypes?: WeakValidationMap<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        deisplayName?: string | undefined;
    }
}