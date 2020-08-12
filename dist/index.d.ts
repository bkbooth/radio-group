import * as React from 'react';
export interface RadioGroupCtx<V, Siblings = V[]> {
    value: V;
    otherRadioValues: Siblings;
    setChecked: (value: any) => void;
    autoFocus: boolean;
}
export interface RadioProps<V> {
    value: V;
    children: any;
    onFocus?: (e: React.FocusEvent<any>) => void;
    onBlur?: (e: any) => void;
}
export interface RadioGroupProps<V> {
    labelledBy: string;
    children: React.ComponentType<RadioProps<V>>[];
    value: V;
    onChange: (value: V) => void;
    autoFocus?: boolean;
}
export declare function RadioGroup<V>({ labelledBy, children, value, autoFocus, ...props }: RadioGroupProps<V>): JSX.Element;
export declare const Radio: React.ForwardRefExoticComponent<RadioProps<any> & React.RefAttributes<HTMLDivElement | null>>;
