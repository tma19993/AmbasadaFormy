import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AfMessagesModule } from "./messages.module";
import { MessagesComponent } from "./messages.component";

const meta: Meta<MessagesComponent> = {
  title: "Core/Messages",
  component: MessagesComponent,
  decorators: [
    moduleMetadata({
      imports: [AfMessagesModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<MessagesComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Success: Story = {
  ...Template,
  args: {
    messages: [
      { severity: "success", summary: "Success", detail: "Success Content" },
    ],
  },
};

export const Info: Story = {
  ...Template,
  args: {
    messages: [{ severity: "info", summary: "Info", detail: "Info Content" }],
  },
};

export const Warm: Story = {
  ...Template,
  args: {
    messages: [{ severity: "warn", summary: "Warning", detail: "Warm Content" }],
  },
};

export const Error: Story = {
  ...Template,
  args: {
    messages: [{ severity: "error", summary: "Error", detail: "Error Content" }],
  },
};
