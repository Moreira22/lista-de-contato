import styled from 'styled-components/native';
import {UserCircle} from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container =  styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREY_600};
    padding: 24px;
`;
export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;
export const Icon = styled(UserCircle).attrs(({ theme}) =>({
    size: 56,
    color: theme.COLORS.PRIMARY_700,
}))`
    align-self: center;
`;


