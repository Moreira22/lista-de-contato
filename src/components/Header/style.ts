import styled from "styled-components/native";
import {CaretLeft, UserSquare} from 'phosphor-react-native'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `;


export const Icon = styled(CaretLeft).attrs(({ theme}) =>({
    size: 32,
    color: theme.COLORS.WHITE
}))``;

export const Button = styled.TouchableOpacity`
    flex: 1;
`;

export const IconUser = styled(UserSquare).attrs(({ theme}) =>({
    size: 45,
    color: theme.COLORS.PRIMARY_500
}))``;