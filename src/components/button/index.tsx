import * as React from 'react'
import * as classes from './style.module.scss'

export interface IButtonProps {
  /**
   * Button content.
   */
  children: React.ReactNode

  /**
   * Click event handler
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * Simple button with blue background
 */
// Notice the named export here, this is required for docgen information
// to be generated correctly.
export class Button extends React.Component<IButtonProps> {
  public render() {
    return (
      <button className={classes.root} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
