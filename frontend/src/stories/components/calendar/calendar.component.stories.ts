import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CalendarComponent } from "./calendar.component";
import { AppCalendarModule } from "./calendar.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

const meta: Meta<CalendarComponent> = {
  title: "Core/Calendar",
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [AppCalendarModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<CalendarComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    showIcon: false,
    showButtonBar: false,
    readonlyInput: false,
    showTime: false,
    showSeconds: false,
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    showIcon: true,
    showButtonBar: true,
    readonlyInput: true,
    showTime: true,
    showSeconds: true,
  },
};

export const WithIcon: Story = {
  ...Template,
  args: {
    showIcon: true,
    showButtonBar: false,
    readonlyInput: false,
    showTime: false,
    showSeconds: false,
  },
};

export const WithButtonBar: Story = {
  ...Template,
  args: {
    showIcon: false,
    showButtonBar: true,
    readonlyInput: false,
    showTime: false,
    showSeconds: false,
  },
};

export const WithReadOnlyInput: Story = {
  ...Template,
  args: {
    showIcon: false,
    showButtonBar: false,
    readonlyInput: true,
    showTime: false,
    showSeconds: false,
  },
};

export const WithShowTime: Story = {
  ...Template,
  args: {
    showIcon: false,
    showButtonBar: false,
    readonlyInput: false,
    showTime: true,
    showSeconds: false,
  },
};

export const WithSeconds: Story = {
  ...Template,
  args: {
    showIcon: false,
    showButtonBar: false,
    readonlyInput: false,
    showTime: true,
    showSeconds: true,
  },
};
