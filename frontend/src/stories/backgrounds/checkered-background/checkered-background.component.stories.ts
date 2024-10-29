import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

const meta: Meta = {
  title: "Backgrounds/Checkered",
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

export const Primary: StoryObj = {
  render: () => ({
    template: `
      <section 
        style="
          height: 70vh;  
          background-color: #0e0e0e;  
          background-image: 
            linear-gradient(0deg, #000 5%, transparent 5%, transparent 99%, #000 99%, #000), 
            linear-gradient(90deg, #000 5%, #0e0e0e 5%, #0e0e0e 99%, #000 99%, #000);  
          background-size: 50px 50px;">
      </section>
    `,
  }),
};
