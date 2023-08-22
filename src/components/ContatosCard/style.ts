import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import {UserCircle} from 'phosphor-react-native';

export const Conteiner = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;
    background-color: ${({ theme }) => theme.COLORS.GREY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 24px;
    margin-bottom: 12px;


`;
export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GREY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    
`;
export const Icon = styled(UserCircle).attrs(({ theme}) =>({
    size: 35,
    color: theme.COLORS.PRIMARY_700,
    weight: 'fill',
}))`
    margin-right: 20px;
`;

