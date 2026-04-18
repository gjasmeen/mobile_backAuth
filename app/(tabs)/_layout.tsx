import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./home";
import Settings from "./settings";
const Tab = createBottomTabNavigator();

export default function TabLayout() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { height: 60 },
				tabBarActiveTintColor: "black",
				tabBarInactiveTintColor: "gray",
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					title: "Home",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
            <Tab.Screen
                name="Settings"
				component={Settings}
				options={{
					
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "settings" : "settings-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        
        </Tab.Navigator>
    );
}
    