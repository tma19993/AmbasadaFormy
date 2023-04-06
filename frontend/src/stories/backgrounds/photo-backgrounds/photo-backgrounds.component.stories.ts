import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


export default {
  title: 'Backgorunds/Photos',
  decorators:[
    moduleMetadata({
      imports: [
        BrowserAnimationsModule
      ],
    })
  ],
  parameters:{
    viewport: DEFAULT_VIEWPORT
  },
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
} as Meta;

export const Logo: Story = () => ({
  template: `
  <div style="width: 30%; margin:0 auto">
    <img src="assets/logo/logo.svg" alt="">
</div>
  `,
});

export const LogoColor: Story = () => ({
  template: `
<div style="width: 30%; margin:0 auto">
<img src="assets/logo/logoColor.svg" alt="">
</div>
  `,
});

export const LogoFTText: Story = () => ({
  template: `
  <div style="width: 30%; margin:0 auto">
  <img src="assets/logo/logoFt_text.svg" alt="">
</div>
  `,
});

export const BackgorundGymStructure: Story = () => ({
  template: `
  <div>
    <img src="assets/backgrounds/Gym-structure-1080x675.png" alt="" style="display: blok; max-width: 50%;">
</div>
  `,
});
export const DeadliftBackground: Story = () => ({
  template: `
  <div>
  <img src="assets/backgrounds/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg" alt="" style="display: blok; max-width: 50%;">
</div>
  `,
});

export const SecondDeadliftBackground: Story = () => ({
  template: `
  <div>
  <img src="assets/backgrounds/victor-freitas-WvDYdXDzkhs-unsplash.jpg" alt="" style="display: blok; max-width: 50%;">
</div>
  `,
});

export const BarBackground: Story = () => ({
  template: `
  <div>
  <img src="assets/backgrounds/victor-freitas-Yuv-iwByVRQ-unsplash.jpg" alt="" style="display: blok; max-width: 50%;">
</div>
  `,
});

