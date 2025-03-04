import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

const meta: Meta = {
  title: "Core/Tile",
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
};

export default meta;

type Story = StoryObj;

export const LightTile: Story = {
  render: () => ({
    template: `<div style="background-color: blue; height: 80vh; padding: 50px;">
      <af-tile>
        <p style="text-align:center">przykładowe body</p>
      </af-tile>
    </div>`,
  }),
};

export const DarkTile: Story = {
  render: () => ({
    template: `<div style="background-color: blue; height: 80vh; padding: 50px;">
      <af-tile [darkMode]="darkMode">
        <p style="text-align:center; color: #fff">przykładowe body</p>
      </af-tile>
    </div>`,
    props: {
      darkMode: true,
    },
  }),
};
