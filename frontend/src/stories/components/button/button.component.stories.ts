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
  argTypes: {
    label: { control: 'text' },
    iconPos: { control: 'text' },
    iconClassName: { control: 'text' },
    loading: { control: 'boolean' },
    styleClass: { control: 'text' },
    onClick: { action: 'clicked' }
  }
} as Meta;

const Template: Story  = args => ({
  props:{
    ...args
  }
})

export const Primary: Story = Template.bind({});
Primary.args={
  label: "Button",
  iconPos: 'left',
  loading: false,
  styleClass: 'p-button-raised',
}

export const Secondary: Story = Template.bind({});
Secondary.args={
  label: "Button",
  iconClassName: 'pi pi-bookmark',
  iconPos: 'left',
  loading: false,
  styleClass: 'p-button-raised p-button-secondary',
}

export const Tertiary: Story = Template.bind({});
Tertiary.args={
  label: "Button",
  iconClassName: 'pi pi-check',
  iconPos: 'right',
  loading: false,
  styleClass: 'p-button-raised',
}

export const Quetriary: Story = Template.bind({});
Quetriary.args={
  label: "Button",
  iconClassName: 'pi pi-check',
  iconPos: 'left',
  loading: false,
  styleClass: 'p-button-raised',
}

export const Success: Story = Template.bind({});
Success.args={
  label: "Button",
  iconClassName: 'pi pi-search',
  iconPos: 'left',
  loading: false,
  styleClass: 'p-button-raised p-button-success',
}

export const Warning: Story = Template.bind({});
Warning.args={
  label: "Button",
  iconClassName: 'pi pi-bell',
  iconPos: 'left',
  loading: false,
  styleClass: 'p-button-raised p-button-warning',
}

export const Help: Story = Template.bind({});
Help.args={
  label: "Button",
  iconClassName: 'pi pi-heart',
  iconPos: 'left',
  loading: false,
  styleClass: 'p-button-raised p-button-help',
}

export const Danger: Story = Template.bind({});
Danger.args={
  label: "Button",
  iconClassName: 'pi pi-times',
  iconPos: 'left',
  loading: false,
  styleClass: 'p-button-raised p-button-danger',
}

