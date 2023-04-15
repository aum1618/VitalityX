import styled from "styled-components/native";

const defaultTextStyles = (theme, fontFamily, color) => `
  font-family: ${theme.fonts[fontFamily] || theme.fonts.fontRegular};
  color: ${theme.colors[color] || theme.colors.black};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;


const heading1 = (theme) => `
    font-size: ${theme.fontSizes.h1};
    line-height: ${1.5 * parseFloat(theme.fontSizes.h1)}px;
`;
const heading2 = (theme) => `
    font-size: ${theme.fontSizes.h2};
    line-height: ${1.5 * parseFloat(theme.fontSizes.h2)}px;

`;
const heading3 = (theme) => `
    font-size: ${theme.fontSizes.h3};
    line-height: ${1.5 * parseFloat(theme.fontSizes.h3)}px;

`;
const title = (theme) => `
font-size: ${theme.fontSizes.title};
line-height: ${1.5 * parseFloat(theme.fontSizes.title)}px;

`;
const subHeading = (theme) => `
font-size: ${theme.fontSizes.subhead};
line-height: ${1.5 * parseFloat(theme.fontSizes.subhead)}px;

`;


const description = (theme) => `
font-size: ${theme.fontSizes.description};
line-height: ${1.5 * parseFloat(theme.fontSizes.description)}px;

`;

const helper = (theme) => `
    font-size: ${theme.fontSizes.helper};
    line-height: ${1.5 * parseFloat(theme.fontSizes.helper)}px;
    
`;
const variants = {
  h1: heading1,
  h2: heading2,
  h3: heading3,
  title: title,
  subtitle: subHeading,
  body: description,
  helper: helper,
};


export const Text = styled.Text`
  ${({ theme, family, color }) => defaultTextStyles(theme, family, color)}
  ${({ variant, theme }) => variants[variant](theme)}
`;
Text.defaultProps = {
  variant: "body",
};
