import styled, { css}from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${({ theme}) =>  theme.COLORS.GREY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;
    
`;

export const Meio = styled.Text`
    flex: 1;
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GREY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GREY_200,

}))`
    margin-left:  16px;
    margin-right: 4px;

`;