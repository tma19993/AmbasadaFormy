import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { AFAutocompleteComponent } from "./autocomplete.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { examplePersonalTrainerModel } from "src/app/shared/models/autocomplete.model";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

const exampleData: examplePersonalTrainerModel[] = [
  {
    id: 1,
    name: "Adam",
    age: "23 lata",
    trainerSkills: 1,
    maxClients: 8,
  },
  {
    id: 2,
    name: "Michał",
    age: "28 lata",
    trainerSkills: 2,
    maxClients: 4,
  },
  {
    id: 3,
    name: "Janina",
    age: "31 lata",
    trainerSkills: 3,
    maxClients: 10,
  },
];


const meta: Meta<typeof AFAutocompleteComponent> = {
  title: "Core/Autocompete",
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        AutoCompleteModule,
        FormsModule,
        ReactiveFormsModule, 
        BrowserAnimationsModule],
    }),
  ],
  component: AFAutocompleteComponent,
  parameters: {
    viewport: DEFAULT_VIEWPORT,
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
} as Meta;

export default meta;

type Story = StoryObj<typeof AFAutocompleteComponent>;

export const Primary: Story = {
    render: () => ({
      props:{
        suggestions: exampleData,
        fieldName: "yourFieldName", 
      },
      template:`<af-autocomplete [suggestions]="suggestions" [fieldName]="fieldName"/>`
    }),
};


// export const Primary = {
//   args:{
//     suggestions: exampleData,
//      fieldName: "yourFieldName"
//   }
// }