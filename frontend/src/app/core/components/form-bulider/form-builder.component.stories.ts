
import { FormBuliderComponent } from "./form-bulider.component";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { SharedModule } from "src/app/shared/shared.module";
import { AFButtonComponent } from "src/app/shared/components/button/button.component";
import { CalendarComponent } from "src/app/shared/components/calendar/calendar.component";
import { AFCheckboxComponent } from "src/app/shared/components/checkbox/checkbox.component";
import { AFInputComponent } from "src/app/shared/components/input/input.component";
import { AFInputTextareaComponent } from "src/app/shared/components/inputTextarea/inputtextarea.component";
import { AFPasswordComponent } from "src/app/shared/components/password/password.component";
import { AFRadioButtonsComponent } from "src/app/shared/components/radiobutton/radiobutton.component";
import { AFFooterComponent } from "../footer/footer.component";
import { DEFAULT_VIEWPORT, INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const meta: Meta<FormBuliderComponent> = {
    title: "Form/Form Builder",
    component: FormBuliderComponent,
    decorators: [
      moduleMetadata({
        imports: [
         SharedModule,  AFButtonComponent, AFInputComponent, AFInputTextareaComponent, AFPasswordComponent, AFCheckboxComponent, AFRadioButtonsComponent, CalendarComponent
        ],
      }),
    ],
    parameters: {
      viewport:DEFAULT_VIEWPORT,
    },
  };
  
  export default meta;
  
  type Story = StoryObj<FormBuliderComponent>;

  const Template: Story = {
    
    render: (args) => ({
      template:`
        <section style=" height: 100vh;">
        <af-form-bulider [formGroup]="formGroup"/>
        </section>`,
      props: args,
    }),
  };
  
  export const Primary: Story = {
    ...Template,
    args: {
      formGroup:[
        {
          name: "input",
          type: "text",
          label: "Input",
          placeholder: "Enter text",
          value: null,
          required: true,
        },
        {
          name: "textarea",
          type: "textarea",
          label: "Textarea",
          placeholder: "Enter text",
          value: null,
          required: true,
        },
        {
          name: "password",
          type: "password",
          label: "Password",
          placeholder: "Enter password",
          value: null,
          required: true,
        },
        {
          name: "checkbox",
          type: "checkbox",
          label: "Checkbox",
          value: false,
        },
        {
          name: "radioButtons",
          type: "radioButtons",
          label: "Radio Buttons",
          options:[
            {label:'Option 1', value:'Option 1'},
            {label:'Option 2', value:'Option 2'},
            {label:'Option 3', value:'Option 3'}
           ],
           value:null
        },
      ]
    },
  };
  
  export const Login: Story = {
    ...Template,
    args: {
      formGroup:[
        {
          name: "input",
          type: "text",
          label: "Input",
          placeholder: "Enter text",
          value: null,
          required: true,
        },
        {
          name: "password",
          type: "password",
          label: "Password",
          placeholder: "Enter password",
          value: null,
          required: true,
        },
      ]
    },
  };
  