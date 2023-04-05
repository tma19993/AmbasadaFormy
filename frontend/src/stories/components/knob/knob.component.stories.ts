import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AFKnobModule } from './knob.module';
import { KnobComponent } from './knob.component';

export default {
  title: 'Core/Konb',
  decorators: [
    moduleMetadata({
      imports: [AFKnobModule, BrowserAnimationsModule],
    }),
  ],
  component: KnobComponent,
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

export const ExapmleValues: Story = Template.bind({});
ExapmleValues.args = {
  value: 20,
  minValue: 0,
  maxValue: 100,
  size: 100,
};

export const Readonly: Story = Template.bind({});
Readonly.args = {
  value: 20,
  minValue: 0,
  maxValue: 100,
  size: 100,
  readonly: true,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  value: 20,
  minValue: 0,
  maxValue: 100,
  size: 100,
  disabled: true,
};
