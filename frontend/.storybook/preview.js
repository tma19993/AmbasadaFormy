import { setCompodocJson } from "@storybook/addon-docs/angular";
import { TranslateService } from '@ngx-translate/core';

import docJson from "../documentation.json";
setCompodocJson(docJson);

TranslateService.setDefaultLang("en");
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
   parameters: {
    i18n: {
      // Opcje języka domyślnego
      locales: {
        en: require('../src/assets/i18n/en.json'),
        pl: require('../src/assets/i18n/pl.json')
      },
      defaultLocale: 'en',  // Język domyślny
      // Możesz też dodać inne konfiguracje dla i18n
    },
  },
}
