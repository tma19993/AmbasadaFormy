import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AFTileModule } from './tile.module'; 

export default {
  title: 'Core/Tile',
  decorators: [
    moduleMetadata({
      imports: [AFTileModule, BrowserAnimationsModule],
    }),
  ],
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
} as Meta;

export const LightTile: Story = () => ({
    template:`<div style="background-color: blue; height: 80vh;padding: 50px">
    <af-tile>
    <p style="text-align:center">przykładowe body</p>
    </af-tile>
    </div>`,
  props: {
    
  },
});
export const DarkTile: Story = () => ({
    template:`<div style=" blue; height: 80vh;padding: 50px">
    <af-tile [darkMode]="darkMode">
    <p style="text-align:center; color: #fff">przykładowe body</p>
    </af-tile>
    </div>`,
  props: {
    darkMode:true
  },
});



