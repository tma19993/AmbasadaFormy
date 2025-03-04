import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFLanguageChangerComponent } from "./language-changer.component";

export default {
  title: "Core/Language Changer",
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  component: AFLanguageChangerComponent,
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
} as Meta;

type Story = StoryObj<typeof AFLanguageChangerComponent>

export const Primary: Story = {
  args:{}
}