import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { AFButtonComponent } from './button.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

const meta: Meta<AFButtonComponent> = {
  title: 'Core/Button',
  component: AFButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule,
        ButtonModule,
        FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj<AFButtonComponent>;

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
