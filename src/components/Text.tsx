import React from 'react';
import {Text as NBText, ITextProps as NBTextProps} from 'native-base';
import {lineHeights} from '@src/theme';
type TextProps = NBTextProps & {variant?: TextVariant};
export class Text extends React.Component<TextProps> {
  render() {
    return <NBText style={lineHeights[this.props.variant ?? 'title3']} {...this.props} />;
  }
}
