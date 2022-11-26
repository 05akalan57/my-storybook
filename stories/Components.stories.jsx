import { Sidebar as SidebarComponent } from "./Sidebar";

export default {
  title: "Components",
  parameters: {
    actions: {
      handles: ["click"],
    },
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
    },
  },
};

export const Sidebar = (args) => <SidebarComponent {...args} />;
Sidebar.args = {
  open: true,
};
