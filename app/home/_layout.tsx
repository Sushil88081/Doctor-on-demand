import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="../../app/(tabs)/index.tsx"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
