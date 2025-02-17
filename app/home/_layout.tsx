import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="../(tabs)/_layout.tsx"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
