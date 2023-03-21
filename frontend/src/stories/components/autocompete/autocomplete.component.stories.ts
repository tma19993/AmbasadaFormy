import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompeteModule } from './autocomplete.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { examplePersonalTrainerModel } from './autocomplete.model';

const exampleData: examplePersonalTrainerModel[] = [
  {
    id:1,
    name: 'Adam',
    age: '23 lata',
    trainerSkills: 1,
    maxClients: 8,
  },
  {
    id:2,
    name: 'Michał',
    age: '28 lata',
    trainerSkills: 2,
    maxClients: 4,
  },
  {
    id:3,
    name: 'Janina',
    age: '31 lata',
    trainerSkills: 3,
    maxClients: 10,
  },
];


export default {
  title: 'Core/Autocompete',
  decorators:[
    moduleMetadata({
      imports: [
        AutocompeteModule,
        BrowserAnimationsModule,
      ],
    })
  ],
  component: AutocompleteComponent,
  parameters:{
    viewport: DEFAULT_VIEWPORT
  },
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
} as Meta;

const Template: Story  = args => ({
  props:{
    ...args
  }
})

export const Primary: Story = Template.bind({});
Primary.args={
    suggestions: exampleData,
    filedName: "name"
}


