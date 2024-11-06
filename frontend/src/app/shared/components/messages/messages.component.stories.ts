import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFMessagesComponent } from "./messages.component";
import { CommonModule } from "@angular/common";
import { MessagesModule } from "primeng/messages";

const meta: Meta<AFMessagesComponent> = {
  title: "Core/Messages",
  component: AFMessagesComponent,
  decorators: [
    moduleMetadata({
      imports: [  
        CommonModule,
        MessagesModule,
        BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFMessagesComponent>;

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
