import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AFInputComponent } from "./input.component";
import { inputIconConfig } from "src/app/shared/models/input.model";
import { EnumIconFloat } from "src/app/shared/enums/input.enum";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from "primeng/inputtext";

const defaultData: inputIconConfig = {
  iconClassName: "pi-search",
  iconFloat: EnumIconFloat.left,
};

const meta: Meta<AFInputComponent> = {
  title: "Core/Input",
  component: AFInputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        FloatLabelModule, 
        BrowserAnimationsModule],
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
