import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

const meta: Meta = {
  title: "Backgrounds/Photos",
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

export const Logo: StoryObj = {
  render: () => ({
    template: `
      <div style="width: 30%; margin: 0 auto;">
        <img src="assets/logo/logo.svg" alt="Logo">
      </div>
    `,
  }),
};

export const LogoColor: StoryObj = {
  render: () => ({
    template: `
      <div style="width: 30%; margin: 0 auto;">
        <img src="assets/logo/logoColor.svg" alt="Logo Color">
      </div>
    `,
  }),
};

export const LogoFTText: StoryObj = {
  render: () => ({
    template: `
      <div style="width: 30%; margin: 0 auto;">
        <img src="assets/logo/logoFt_text.svg" alt="Logo with Text">
      </div>
    `,
  }),
};

export const BackgroundGymStructure: StoryObj = {
  render: () => ({
    template: `
      <div>
        <img src="assets/backgrounds/Gym-structure-1080x675.png" alt="Gym Structure" style="display: block; max-width: 50%;">
      </div>
    `,
  }),
};

export const DeadliftBackground: StoryObj = {
  render: () => ({
    template: `
      <div>
        <img src="assets/backgrounds/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg" alt="Deadlift Background" style="display: block; max-width: 50%;">
      </div>
    `,
  }),
};

export const SecondDeadliftBackground: StoryObj = {
  render: () => ({
    template: `
      <div>
        <img src="assets/backgrounds/victor-freitas-WvDYdXDzkhs-unsplash.jpg" alt="Second Deadlift Background" style="display: block; max-width: 50%;">
      </div>
    `,
  }),
};

export const BarBackground: StoryObj = {
  render: () => ({
    template: `
      <div>
        <img src="assets/backgrounds/victor-freitas-Yuv-iwByVRQ-unsplash.jpg" alt="Bar Background" style="display: block; max-width: 50%;">
      </div>
    `,
  }),
};
