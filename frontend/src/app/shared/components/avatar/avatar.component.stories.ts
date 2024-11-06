import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AvatarComponent } from "./avatar.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";

const meta: Meta<typeof AvatarComponent> = {
  title: "Core/Avatar",
  decorators: [
    moduleMetadata({
      imports: [CommonModule, AvatarModule, FormsModule, BrowserAnimationsModule],
    }),
  ],
  component: AvatarComponent,
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
} as Meta;

export default meta;

type Story = StoryObj<typeof AvatarComponent>;


export const Large: Story = {
  render: ()=>({
    props:{
      login: "abrams206",
      size: "large",
      shape: "circle",
    },
    template:`<af-avatar [login]="login" [size]="size" [shape]="shape"/>`
  })
};


export const Xlarge: Story = {
  render:()=>({
    props:{
      login: "bakus1112",
      size: "xlarge",
      shape: "circle",
    },
    template:`<af-avatar [login]="login" [size]="size" [shape]="shape"/>`
  })
};

export const Small: Story ={
  render:() =>({
    props:{
      login: "bakus1112",
      size: "small",
      shape: "circle",
    },
    template:`<af-avatar [login]="login" [size]="size" [shape]="shape"/>`
  })
};
