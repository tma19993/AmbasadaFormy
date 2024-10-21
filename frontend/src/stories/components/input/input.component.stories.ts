import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { InputComponent } from './input.component';
import { InputModule } from './input.module';
import { inputIconConfig } from 'src/stories/interfaces/input.model';
import { EnumIconFloat } from 'src/stories/enums/input.enum';

const defaultData: inputIconConfig = {
  iconClassName: 'pi-search',
  iconFloat: EnumIconFloat.left,
};

export default {
  title: 'Core/Input',
  decorators: [
    moduleMetadata({
      imports: [InputModule, BrowserAnimationsModule],
    }),
  ],
  component: InputComponent,
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
  iconConfig: defaultData,
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  iconConfig: {
    iconClassName: 'pi-user',
    iconFloat: EnumIconFloat.right,
  },
};
