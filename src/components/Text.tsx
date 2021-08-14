import React from 'react';
import {Text as NBText, ITextProps as NBTextProps} from 'native-base';
type TextProps = NBTextProps | (NBTextProps & {variant: TextVariant});
export class Text extends React.Component<TextProps> {
  render() {
    return <NBText {...this.props} />;
  }
}
