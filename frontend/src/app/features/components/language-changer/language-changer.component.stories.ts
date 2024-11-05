import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { LanguageChangerComponent } from "./language-changer.component";
import { LanguageChangerModule } from "./languageChanger.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "src/shared/untils";
import { HttpClient } from "@angular/common/http";

export default {
  title: "Core/Language Changer",
  decorators: [
    moduleMetadata({
      imports: [LanguageChangerModule, 
        
      ],
    }),
  ],
  component: LanguageChangerComponent,
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
} as Meta;

type Story = StoryObj<typeof LanguageChangerComponent>

export const Primary: Story = {
  args:{}
}