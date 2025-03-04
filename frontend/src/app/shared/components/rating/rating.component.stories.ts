import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { RatingComponent } from "./rating.component";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { PrimengModule } from "../../modules/primeng/primeng.module";

const meta: Meta<RatingComponent> = {
  title: "Core/Rating",
  component: RatingComponent,
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

type Story = StoryObj<RatingComponent>;

const Template: Story = {
  render: (args) => ({
    props: {
      ...args,
    },
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    label: "Button",
  },
};
