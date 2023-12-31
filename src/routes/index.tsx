import { NavigationContainer } from "@react-navigation/native"
import { StackRoutes } from "./stack.routes";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export function Routes() {
    const { COLORS }  = useTheme();
    return (
        <View style={{  flex: 1, backgroundColor: COLORS.GREY_600 }}>
            <NavigationContainer>
                <StackRoutes />
            </NavigationContainer>
        </View>
 
 
    );
}