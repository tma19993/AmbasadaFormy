import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { ButtonComponent } from './button.component';
import { AppButtonModule } from './button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

export default {
  title: 'Core/Button',
  decorators:[
    moduleMetadata({
      imports: [
        AppButtonModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: ButtonComponent,
  parameters:{
    viewport: DEFAULT_VIEWPORT
  },
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
} as Meta;

const Template: Story  = args => ({
  props:{
    ...args
  }
})

export const Primary: Story = Template.bind({});
Primary.args={
  label: "Button",
  iconConfig: {
    iconClassName: '',
    iconPos: '',
  },
}

export const Secondary: Story = Template.bind({});
Secondary.args={
  label: "Button",
  iconConfig: {
    iconClassName: 'pi-check',
    iconPos: 'right',
  },
}

export const Tertiary: Story = Template.bind({});
Tertiary.args={
  label: "Button",
  iconConfig: {
    iconClassName: 'pi-check',
    iconPos: 'left',
  },
}

export const Quaternary: Story = Template.bind({});
Quaternary.args={
  label: "Button",
  iconConfig: {
    iconClassName: '',
    iconPos: '',
  },
  loading: false,
}

export const Success: Story = Template.bind({});
Success.args={
  label: "Button",
  iconConfig: {
    iconClassName: '',
    iconPos: '',
  },
  styleClass: 'p-button-success'
}

export const Warning: Story = Template.bind({});
Warning.args={
  label: "Button",
  iconConfig: {
    iconClassName: '',
    iconPos: '',
  },
  styleClass: 'p-button-warning'
}

export const Help: Story = Template.bind({});
Help.args={
  label: "Button",
  iconConfig: {
    iconClassName: '',
    iconPos: '',
  },
  styleClass: 'p-button-help'
}

export const Danger: Story = Template.bind({});
Danger.args={
  label: "Button",
  iconConfig: {
    iconClassName: '',
    iconPos: '',
  },
  styleClass: 'p-button-danger'
}

