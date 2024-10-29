import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { InputComponent } from "./input.component";
import { InputModule } from "./input.module";
import { inputIconConfig } from "src/stories/interfaces/input.model";
import { EnumIconFloat } from "src/stories/enums/input.enum";

const defaultData: inputIconConfig = {
  iconClassName: "pi-search",
  iconFloat: EnumIconFloat.left,
};

const meta: Meta<InputComponent> = {
  title: "Core/Input",
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [InputModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    iconConfig: defaultData,
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    iconConfig: {
      iconClassName: "pi-user",
      iconFloat: EnumIconFloat.right,
    },
  },
};
