import * as React from 'react';
export interface IButtonProps {
    /**
     * Button content.
     */
    children: React.ReactNode;
    /**
     * Click event handler
     */
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
/**
 * Simple button with blue background
 */
export declare class Button extends React.Component<IButtonProps> {
    render(): JSX.Element;
}
export default Button;
