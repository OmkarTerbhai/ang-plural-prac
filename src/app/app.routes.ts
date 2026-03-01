import { Routes } from '@angular/router';
import { Gun } from './gun/gun';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { SignIn } from './sign-in/sign-in';
import { TemplateFormControls } from './template-form-controls/template-form-controls';

export const routes: Routes = [
    {path: "home", component: Gun, title: "Gun component"},
    {path: "catalog", component: Catalog, title: "Catalog component"},
    {path: "cart", component: Cart, title: "Gun component"},
    {path: "sign-in", component: SignIn, title: 'Sign IN Comp'},
    {path: "form-controls", component: TemplateFormControls, title: 'Sign IN Comp'}
];
