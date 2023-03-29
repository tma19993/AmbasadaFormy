import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AFAvatarModule } from './avatar.module';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Core/Avatar',
  decorators: [
    moduleMetadata({
      imports: [AFAvatarModule, BrowserAnimationsModule],
    }),
  ],
  component: AvatarComponent,
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Large: Story = Template.bind({});
Large.args = {
  login:'abrams206',
  size:'large',
  shape:'circle',
}
;

export const Xlarge: Story = Template.bind({});
Xlarge.args = {
  login:'bakus1112',
  size:'xlarge',
  shape:'circle',
};

export const Small: Story = Template.bind({});
Small.args = {
  login:'bakus1112',
  size:'small',
  shape:'circle',
};
