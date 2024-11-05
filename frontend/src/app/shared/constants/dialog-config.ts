import { DynamicDialogConfig } from "primeng/dynamicdialog";

export const dialogConfig: DynamicDialogConfig = {
    width: '50%',
    contentStyle: { overflow: 'auto' },
    baseZIndex: 10000,
    modal:true,
    breakpoints: {
    '960px': '75vw',
    '640px': '90vw'
},
}
