import styled, {css} from 'styled-components';

interface marginsInterface {
    m?: string | number,
    mt?: string | number,
    mr?: string | number,
    mb?: string | number,
    ml?: string | number,
}

interface paddingsInterface {
    p?: string | number,
    pt?: string | number,
    pr?: string | number,
    pb?: string | number,
    pl?: string | number,
}

interface borderInterface {
    borderRadius?: number
}

interface colorInterface {
    color?: string,
    bg?: string,
}

interface flex extends marginsInterface, paddingsInterface, borderInterface, colorInterface {
    gap?: number,
    justifyContent?: string,
    alignitems?: string,
    flexDirection?: string,
}

interface text extends marginsInterface, paddingsInterface, colorInterface {
    fontSize?: number | string,
    color?: string,
    textAlign?: string,
    fontWeight?: string,
    textDecoration?: string
}

const margins = css`
    margin: ${(e: marginsInterface) => e.m && e.m + "px"};
    margin-top: ${(e: marginsInterface) => e.mt && e.mt + "px"};
    margin-right: ${(e: marginsInterface) => e.mr && e.mr + "px"};
    margin-bottom: ${(e: marginsInterface) => e.mb && e.mb + "px"};
    margin-left: ${(e: marginsInterface) => e.ml && e.ml + "px"};
`

const border = css`
    border-radius: ${(e: borderInterface) => e.borderRadius + "px"};
`

const paddings = css`
    padding: ${(e: paddingsInterface) => e.p && e.p + "px"};
    padding-top: ${(e: paddingsInterface) => e.pt && e.pt + "px"};
    padding-right: ${(e: paddingsInterface) => e.pr && e.pr + "px"};
    padding-bottom: ${(e: paddingsInterface) => e.pb && e.pb + "px"};
    padding-left: ${(e: paddingsInterface) => e.pl && e.pl + "px"};
`

const colors = css`
    color: ${(e: colorInterface) => e.color};
    background-color: ${(e: colorInterface) => e.bg};
`

export const Flex = styled.div`
    display: flex;
    gap: ${(e: flex) => (e.gap || 0)}px;
    justify-content: ${(e: flex) => e.justifyContent};
    align-items: ${(e: flex) => e.alignitems};
    flex-direction: ${(e: flex) => e.flexDirection};
    ${border}
    ${margins}
    ${paddings}
    ${colors}
`;

export const Text = styled.div`
    font-size: ${(p: text) => (p.fontSize || 16)}px;
    text-align: ${(p: text) => p.textAlign};
    font-weight: ${(p: text) => p.fontWeight};
    text-decoration: ${(p: text) => p.textDecoration};
    ${colors}
    ${margins}
    ${paddings}
`

const components =  {
    Flex,
    Text
}

export default components