import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AFGymPassCardComponent } from './gym-pass-card.component';
import { AFGymPassCardModule } from './gym-pass-card.module';

export default {
  title: 'Core/Icon Shadow',
  decorators: [
    moduleMetadata({
      imports: [AFGymPassCardModule, BrowserAnimationsModule],
    }),
  ],
  component: AFGymPassCardComponent,
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

export const Primary: Story = Template.bind({});
Primary.args = {
  iconClassName: "pi-search"
};
