# CURSO DE ANGULAR COMPONENTES Y DIRECTIVAS:  

https://platzi.com/clases/2495-angular-apis/41403-bienvenida/

# my-store-app-api


## INSTALACIONES

> node -v                 // v16.17.0
> npm -v                  // 8.15.0
> npm i -g @angular/cli
> ng version              // 16.17.0

## CREAR UN PROYECTO CON EL CLI DE ANGULAR

> ng new my-store-app-api
> cd my-store-app-api
> ng serve

visit (http://localhost:4200)

## SOME THINGS OF THIS CLI

### MyStoreWithAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Arrancar el servidor de desarrollo

> ng serve -o                 // servir el proyecto
> ng serve -o --port=3500     //  en el puerto especificado
> ng version
     _                      _                 ____ _     ___ 
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | | 
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | | 
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 15.0.4
Node: 16.17.0
Package Manager: npm 8.15.0
OS: win32 x64

Angular: 15.0.4
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------       
@angular-devkit/architect       0.1500.4
@angular-devkit/build-angular   15.0.4
@angular-devkit/core            15.0.4
@angular-devkit/schematics      15.0.4
@schematics/angular             15.0.4
rxjs                            7.5.7
typescript                      4.8.4

## Archivos importantes de Configuración

### archivos de configuración de typescript y angular

tsconfig.json
tsconfig.app.json
tsconfig.spec.json


### browser listado de compatibilidades

.browserlistrc


### editor

.editorconfig


### angular

angular.json


### testing

karma.conf.json


### Node version manager

.nvmrc

### Extensiones de VSC

Angular language Service
editor config


## git configurations

> git init
> git config --local user.email "desarrolloaplicacionesweb.jmlb@gmail.com"
> git config --local user.name "JUANLUNABLANCO"
> git branch -M  main

En este punto debes crear un repositorio nuevo en github vac铆o y enlazarlo

<!-- > git remote add origin https://github.com/JUANLUNABLANCO/<tu-repo>.git -->
> git remote add origin https://github.com/JUANLUNABLANCO/angular-curso-apis.git
> git config --list
> git add .
> git commit -m "scaffolding project with webpack"
> git push -u origin main

## Extensiones del navegador

JSON Formatter
Angular dev tools

## Cliente APIS
### apps externas
Insomnia.rest
Postman

### extension de VSC
Thunder client

## Linter para el proyecto

> npm install eslint --save-dev   // lo instala

> npm eslint --init               // lo inicializa creando un archivo de configuración a partir de unas preguntas previas

creará el .eslintrc.json


## npm aditional installations

> npm install date-fns --save
Utility library for dates:
--- example ---
import {compareAsc, format} from 'date-fns';
...
format(new Date(2014, 1, 11), 'yyyy-MM-dd'); // 2014-02-11

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]

## Solicitudes GET [vídeo-2]

--- app.module.ts ---
...
import { HttpClientModule } from '@angular/common/http';  // modulo para peticiones get, post, put, delete
...

@NgModule({
  declarations: [
    AppComponent,
    ...
  ],
  imports: [
    ...
    HttpClientModule, // declararlo aquí
    FormsModule
  ],...
--- ---
--- products.service.ts ---
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // una vez importado el módulo, importaremos el servicio adjunto a HttpClientModule, el HttpClient

import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient    // lo inyectamos en el constructor
  ) { }

  getAllProducts() {  // y lo usamos en un método de la clase
    return this.http.get<Product[]>('https://young-sands-07814.herokuapp.com/api/products/'); // uitilizando esta nueva api, y el modelo <Product> que debemos revisar y cambiar
  }
}
--- ---
--- product.model.ts ---
export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[]; // ahora es un array de imágenes
  description: string;
  category: Category; // esto será un objeto con { id, name }, es decir esto es otro modelo interface Category
  el que está arriba de este fichero
}
--- ---
--- product.component.ts ---
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '', // hemos añadido estos atributos del modelo Category {id, name}
    },
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}
--- ---
--- product.component.html ---
<app-img *ngIf="product.images.length > 0" [img]="product.images[0]"></app-img> // cuidao!!! la imagen inicial es un array vacío y esto dará un error hasta que se cargue, por eso hacemos el *ngIf.
<h2>{{ product.price | currency:'COP' }}</h2>
<p>{{ product.title }}</p>
<button (click)="onAddToCart()">Add cart</button>
--- ---

podrás ver la petición realizada en el navegador en la parte de: 
herramientas para desarrolladores/Network/Headers
herramientas para desarrolladores/Network/Preview
herramientas para desarrolladores/Network/Response


## Detalle del producto [vídeo-3]

--- product.component.ts ---
  ...
  showProductDetail = false;
  ...
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }
}
--- ---
--- product.component.html ---
...
<div class="product-detail" [class.active]="showProductDetail"> // con esta directiva de clase activaremos en base a showProductDetail == true o desactivaremos en base a showProductDetaill == false, para ellos hemos habilitado un método llamado toggleProductDetail en nuestra logica
...
--- ---
--- product.component.scss ---
.product-detail {
    position: fixed;
    top: 0;
    left: 50%;
    bottom: 0;
    right: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: all ease-out .5s;
    transform: translateX(100%);
    &.active {
        transform: translateX(0);
    }
}
--- ---
el &.active hará la magia de este componente, visible o no debido a su posición inicial, y cuando está activo su posición cambia a 0 en el eje x.

añadimos un boton en...
--- product.component.html ---
...
// este botón para activar el detalle de ese producto
<button (click)="onShowDetail()">Detail</button>
--- ---
y en su controlador le comunicaremos al padre (products.component.ts) con un @Output que ha sucedido dicho evento para que haga, lo que tenga que hacer
--- product.component.ts ---
...
@Output() showDetailProduct = new EventEmitter<string>(); // en vez del producto le enviaremos el id de ese producto
...
onShowDetail() { // este es el evento que se disparará desde el html cuando haga click en el botón 'show Detail'
  this.showDetailProduct.emit(this.product.id) // aquí está el id
}
--- ---
--- products.component.ts ---
  onShowDetailProduct(id: string) {
    console.log('id:', id); // aquí implementaremos la petición de un producto, debemos crear un método en el servicio para requerir un solo producto a partir de su id
  }
--- ---
--- products.service.ts ---
  ...
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
--- ---
--- products.component.ts ---
  onShowDetailProduct(id: string) {
    this.productsService.getProduct(id).subscribe(data => {
      console.log(data);
    }); // con esto estamos trayendo la data de ese producto dinámicamente
  }
--- ---

## Implementando slides [vídeo-4]

swiper libreria de slides, tiene soporte para mobile touch y está disponible en agnular

> npm i --save swiper

--- app.module.ts ---
import { SwiperModule } from 'swiper/angular';
...
imports: [
  SwiperModule,
]...
--- ---
--- styles.scss ---
@import 'swiper/scss';
--- ---
--- products.component.ts ---
  productChosen: Product = {
      id: '',
      price: 0,
      images: [],
      title: '',
      category: {
        id: '',
        name: '',
      },
      description: ''
    };
  ...
  onShowDetailProduct(id: string) {
    // console.log('id:', id);
    this.productsService.getProduct(id).subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data; // recibe esa data del producto
    });
  }
--- ---
--- products.component.html ---
<div class="product-detail" [class.active]="showProductDetail">
    <div *ngIf="productChosen">
        <button (click)="toggleProductDetail()">Close</button>
        <h1>{{ productChosen.title }}</h1>
        <!-- swipe slides effects here -->
        <swiper [slidesPerView]="1">
            <ng-template swiperSlide *ngFor="let img of productChosen.images">
                <img [src]="img" [alt]="productChosen.title">
            </ng-template>
        </swiper>
        <!-- swipe slides effects here -->
        <p>{{ productChosen.description }}</p>
    </div>
</div>
--- ---

Deberías optimizar las peticiones para que se queden en caché, o para no volverlas a hacer cuando ya están solicitadas

## Solicitudes Post  [vídeo-5]

