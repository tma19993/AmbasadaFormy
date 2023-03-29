import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AFRadiobuttonModule } from './radiobutton.module';
import { RadioButtonComponent } from './radiobutton.component';
import { FormsModule } from '@angular/forms';
import { Categories } from 'src/stories/interfaces/radiobutton.model';


export default {
  title: 'Core/RadioButton',
  decorators: [
    moduleMetadata({
      imports: [AFRadiobuttonModule, BrowserAnimationsModule, FormsModule],
    }),
  ],
  component: RadioButtonComponent,
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
  categories: [
    { name: 'Option 1', key: 'option1' },
    { name: 'Option 2', key: 'option2' },
    { name: 'Option 3', key: 'option3' },
  ],
};
export const Secondary: Story = Template.bind({});
Secondary.args = {
  categories: [
    { name: 'Option 1', key: 'option1' },
    { name: 'Option 2', key: 'option2' },
    { name: 'Option 3', key: 'option3' },
  ],
  disabled: true,
};

export const CustomLabels = Template.bind({});
CustomLabels.args = {
  categories: [
    { name: 'Male', key: 'M' },
    { name: 'Female', key: 'F' },
    { name: 'Other', key: 'O' },
  ],
};
