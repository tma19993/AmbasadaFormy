import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFInputComponent } from "./input.component";
import { inputIconConfig } from "src/app/shared/models/input.model";
import { EnumIconFloat } from "src/app/shared/enums/input.enum";
import { SharedModule } from "primeng/api";
import { PrimengModule } from "../../modules/primeng/primeng.module";

const defaultData: inputIconConfig = {
  iconClassName: "pi-search",
  iconFloat: EnumIconFloat.left,
};

const meta: Meta<AFInputComponent> = {
  title: "Core/Input",
  component: AFInputComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule, PrimengModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFInputComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    ...defaultData

  },
};

export const Secondary: Story = {
  ...Template,
  args: {

    iconClassName: "pi-user",
    iconFloat: EnumIconFloat.right,

  },
};
