import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { ButtonComponent } from './button.component';
import { AFButtonModule } from './button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

const meta: Meta<ButtonComponent> = {
  title: 'Core/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [AFButtonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const FewButtons: Story = {
  render: () => ({
    template: `
      <af-button [label]="label" [buttonId]="'pierwszy'" [fontSize]="30"></af-button>
      <br />
      <af-button [label]="label" [buttonId]="'drugi'" [fontSize]="10"></af-button>
    `,
    props: {
      label: 'Button',
      fontSize: 30,
    },
  }),
};

export const Primary: Story = {
  ...Template,
  args: {
    label: 'Button',
    iconPos: 'left',
    fontSize: 30,
  },
};

export const WhiteButton: Story = {
  ...Template,
  args: {
    label: 'Button',
    whiteButton: true,
    fontSize: 50,
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    label: 'Button',
    iconPos: 'left',
    fontSize: 30,
    disabled: true,
  },
};

export const TransparentButton: Story = {
  ...Template,
  args: {
    label: 'Button',
    iconPos: 'left',
    fontSize: 30,
    transparentButton: true,
  },
};

export const TransparentButtonWithIconOnTop: Story = {
  ...Template,
  args: {
    label: 'Button',
    iconPos: 'top',
    iconClassName: "pi-undo",
    fontSize: 15,
    iconSize: 30,
    transparentButton: true,
  },
};
