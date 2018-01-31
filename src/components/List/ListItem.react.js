// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListItem as MuiListItem } from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /**
   * If true, generate a nested-list-indicator icon when nested list items are detected.
   * Note that an indicator will not be created if a rightIcon or rightIconButton has been
   * provided to the element.
   */
  autoGenerateNestedIndicator?: boolean,

  /**
   * Children passed into the ListItem.
   */
  children?: Node,

  /**
   * The element to use as the container for the ListItem. Either a string to use a DOM element
   * or a ReactElement. This is useful for wrapping the ListItem in a custom Link component.
   * If a ReactElement is given, ensure that it passes all of its given props through to the
   * underlying DOM element and renders its children prop for proper integration.
   */
  containerElement?: string | Element,

  /**
   * If true, the element will not be able to be focused by the keyboard.
   */
  disabledKeyboardFocus?: boolean,

  /**
   * If true, the element will not be clickable and will not display hover effects.
   * This is automatically disabled if either leftCheckbox or rightToggle is set.
   */
  disabled?: boolean,

  /**
   * Dash-assigned callback that gets fired when the input changes.
   */
  fireEvent?: () => void,

  /**
   * Override the hover background color.
   */
  hoverColor?: string,

  /**
   * The element's ID.
   */
  id: string,

  /**
   * If true, the nested ListItems are initially displayed.
   */
  initiallyOpen?: boolean,

  /**
   * Override the inline-styles of the inner div element.
   */
  innerDivStyle?: Object,

  /**
   * If true, the children will be indented by 72px. This is useful if there is no left
   * avatar or left icon.
   */
  insetChildren?: boolean,

  /**
   * Use to control if the list item should render as keyboard focused. If undefined (default),
   * this will be automatically managed. If provided, it will change the component's style.
   * Note that this will not change the actual focus - and should only be used when you want to
   * simulate keyboard focus (eg. in a rich text input autocomplete).
   */
  isKeyboardFocused?: boolean,

  /**
   * This is the Avatar element to be displayed on the left side.
   */
  leftAvatar?: Element,

  /**
   * This is the Checkbox element to be displayed on the left side.
   */
  leftCheckbox?: Element,

  /**
   * This is the SvgIcon or FontIcon to be displayed on the left side.
   */
  leftIcon?: Element,

  /**
   * An array of ListItems to nest underneath the current ListItem.
   */
  nestedItems?: Array,

  /**
   * Override the inline-styles of the nested items' NestedList.
   */
  nestedListStyle?: Object,

  /**
   * Control toggle state of nested list.
   */
  open?: boolean,

  /**
   * This is the block element that contains the primary text. If a string is passed in,
   * a div tag will be rendered.
   */
  primaryText: Node,

  /**
   * If true, clicking or tapping the primary text of the ListItem toggles the nested list.
   */
  primaryTogglesNestedList?: boolean,

  /**
   * This is the Avatar element to be displayed on the right side.
   */
  rightAvatar?: Element,

  /**
   * This is the SvgIcon or FontIcon to be displayed on the right side.
   */
  rightIcon?: Element,

  /**
   * This is the IconButton to be displayed on the right side. Hovering over this button will
   * remove the ListItem hover. Also, clicking on this button will not trigger a ripple on the
   * ListItem; the event will be stopped and prevented from bubbling up to cause a ListItem click.
   */
  rightIconButton?: Element,

  /**
   * This is the Toggle element to display on the right side.
   */
  rightToggle?: Element,

  /**
   * This is the block element that contains the secondary text. If a string is passed in,
   * a div tag will be rendered.
   */
  secondaryText?: Node,

  /**
   * Can be 1 or 2. This is the number of secondary text lines before ellipsis will show.
   */
  secondaryTextLines?: 1 | 2,

  /**
   * Dash callback to update props on the server.
   */
  setProps?: () => void,

  /**
   * Override the inline-styles of the root element.
   */
  style?: Object,
};

const propTypes = {
  /**
   * If true, generate a nested-list-indicator icon when nested list items are detected.
   * Note that an indicator will not be created if a rightIcon or rightIconButton has been
   * provided to the element.
   */
  autoGenerateNestedIndicator: PropTypes.bool,

  /**
   * Children passed into the ListItem.
   */
  children: PropTypes.node,

  /**
   * The element to use as the container for the ListItem. Either a string to use a DOM element
   * or a ReactElement. This is useful for wrapping the ListItem in a custom Link component.
   * If a ReactElement is given, ensure that it passes all of its given props through to the
   * underlying DOM element and renders its children prop for proper integration.
   */
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * If true, the element will not be able to be focused by the keyboard.
   */
  disabledKeyboardFocus: PropTypes.bool,

  /**
   * If true, the element will not be clickable and will not display hover effects.
   * This is automatically disabled if either leftCheckbox or rightToggle is set.
   */
  disabled: PropTypes.bool,

  /**
   * Dash-assigned callback that gets fired when the input changes.
   */
  fireEvent: PropTypes.func,

  /**
   * Override the hover background color.
   */
  hoverColor: PropTypes.string,

  /**
   * The element's ID.
   */
  id: PropTypes.string.isRequired,

  /**
   * If true, the nested ListItems are initially displayed.
   */
  initiallyOpen: PropTypes.bool,

  /**
   * Override the inline-styles of the inner div element.
   */
  innerDivStyle: PropTypes.object,

  /**
   * If true, the children will be indented by 72px. This is useful if there is no left
   * avatar or left icon.
   */
  insetChildren: PropTypes.bool,

  /**
   * Use to control if the list item should render as keyboard focused. If undefined (default),
   * this will be automatically managed. If provided, it will change the component's style.
   * Note that this will not change the actual focus - and should only be used when you want to
   * simulate keyboard focus (eg. in a rich text input autocomplete).
   */
  isKeyboardFocused: PropTypes.bool,

  /**
   * This is the Avatar element to be displayed on the left side.
   */
  leftAvatar: PropTypes.element,

  /**
   * This is the Checkbox element to be displayed on the left side.
   */
  leftCheckbox: PropTypes.element,

  /**
   * This is the SvgIcon or FontIcon to be displayed on the left side.
   */
  leftIcon: PropTypes.element,

  /**
   * An array of ListItems to nest underneath the current ListItem.
   */
  nestedItems: PropTypes.array,

  /**
   * Override the inline-styles of the nested items' NestedList.
   */
  nestedListStyle: PropTypes.object,

  /**
   * Control toggle state of nested list.
   */
  open: PropTypes.bool,

  /**
   * This is the block element that contains the primary text. If a string is passed in,
   * a div tag will be rendered.
   */
  primaryText: PropTypes.node.isRequired,

  /**
   * If true, clicking or tapping the primary text of the ListItem toggles the nested list.
   */
  primaryTogglesNestedList: PropTypes.bool,

  /**
   * This is the Avatar element to be displayed on the right side.
   */
  rightAvatar: PropTypes.element,

  /**
   * This is the SvgIcon or FontIcon to be displayed on the right side.
   */
  rightIcon: PropTypes.element,

  /**
   * This is the IconButton to be displayed on the right side. Hovering over this button will
   * remove the ListItem hover. Also, clicking on this button will not trigger a ripple on the
   * ListItem; the event will be stopped and prevented from bubbling up to cause a ListItem click.
   */
  rightIconButton: PropTypes.element,

  /**
   * This is the Toggle element to display on the right side.
   */
  rightToggle: PropTypes.element,

  /**
   * This is the block element that contains the secondary text. If a string is passed in,
   * a div tag will be rendered.
   */
  secondaryText: PropTypes.node,

  /**
   * Can be 1 or 2. This is the number of secondary text lines before ellipsis will show.
   */
  secondaryTextLines: PropTypes.oneOf([1, 2]),

  /**
   * Dash callback to update props on the server.
   */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

type State = {
  open: boolean,
};

const defaultProps = {
  autoGenerateNestedIndicator: true,
  children: null,
  containerElement: 'span',
  disabledKeyboardFocus: false,
  disabled: false,
  fireEvent: () => {},
  hoverColor: '', // remove default?
  initiallyOpen: false,
  innerDivStyle: {},
  insetChildren: false,
  isKeyboardFocused: null,
  leftAvatar: null,
  leftCheckbox: null,
  leftIcon: null,
  nestedItems: [],
  nestedListStyle: {},
  open: false,
  primaryTogglesNestedList: false,
  rightAvatar: null,
  rightIcon: null,
  rightIconButton: null,
  rightToggle: null,
  secondaryText: [],
  secondaryTextLines: 1,
  setProps: () => {},
  style: {},
};

export default class ListItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: this.props.open};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== null && nextProps.open !== this.props.open) {
      this.handleChange(nextProps.open);
    }
  }

  handleChange = (open: boolean) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({open});

    this.setState({open});
  };

  handleClick = () => {
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
    this.handleChange(!this.props.open);
  };

  render() {
    const {
      autoGenerateNestedIndicator, containerElement, disabledKeyboardFocus, disabled,
      hoverColor, id, initiallyOpen, innerDivStyle, insetChildren, isKeyboardFocused, leftAvatar,
      leftCheckbox, leftIcon, nestedItems, nestedListStyle, primaryText, primaryTogglesNestedList,
      rightAvatar, rightIcon, rightIconButton, rightToggle, secondaryText, secondaryTextLines,
      style } = this.props;
    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiListItem
            autoGenerateNestedIndicator={autoGenerateNestedIndicator}
            containerElement={containerElement}
            disabledKeyboardFocus={disabledKeyboardFocus}
            disabled={disabled}
            hoverColor={hoverColor}
            initiallyOpen={initiallyOpen}
            innerDivStyle={innerDivStyle}
            insetChildren={insetChildren}
            isKeyboardFocused={isKeyboardFocused}
            leftAvatar={leftAvatar}
            leftCheckbox={leftCheckbox}
            leftIcon={leftIcon}
            nestedItems={nestedItems}
            nestedListStyle={nestedListStyle}
            onClick={this.handleClick}
            open={this.state.open}
            primaryText={primaryText}
            primaryTogglesNestedList={primaryTogglesNestedList}
            rightAvatar={rightAvatar}
            rightIcon={rightIcon}
            rightIconButton={rightIconButton}
            rightToggle={rightToggle}
            secondaryText={secondaryText}
            secondaryTextLines={secondaryTextLines}
            style={style}
          >
            {this.props.children}
          </MuiListItem>
        </MuiThemeProvider>
      </div>
    );
  }
}

ListItem.defaultProps = defaultProps;