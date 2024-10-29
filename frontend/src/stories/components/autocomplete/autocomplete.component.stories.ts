// import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
// import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import { AutocompleteComponent } from "./autocomplete.component";
// import { AutocompeteModule } from "./autocomplete.module";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { examplePersonalTrainerModel } from "src/stories/interfaces/autocomplete.model";

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

// const meta: Meta<typeof AutocompleteComponent> = {
//   title: "Core/Autocompete",
//   decorators: [
//     moduleMetadata({
//       imports: [AutocompeteModule, BrowserAnimationsModule],
//     }),
//   ],
//   component: AutocompleteComponent,
//   parameters: {
//     viewport: DEFAULT_VIEWPORT,
//   },
// } as Meta;

// export default meta;

// type Story = StoryObj<typeof AutocompleteComponent>;

// export const Primary: Story = {
//     render: () => ({
//       props:{
//         suggestions: exampleData,
//         fieldName: "yourFieldName", 
//       },
//       template:`<af-autocomplete [suggestions]="suggestions" [fieldName]="fieldName"/>`
//     }),
// };

export default {
  title: "Core/Autocompete",
  component: AutocompleteComponent
};

export const Primary = {
  args:{
    suggestions: exampleData,
     fieldName: "yourFieldName"
  }
}