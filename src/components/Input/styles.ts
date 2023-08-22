import styled, {css} from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GREY_700};
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    padding: 16px;
`;