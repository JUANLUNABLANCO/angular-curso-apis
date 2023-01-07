# CURSO DE CONSUMO DE API REST CON ANGULAR

https://platzi.com/clases/2495-angular-apis/41403-bienvenida/

# my-store-app-api
## CREATED BY

Juan Manuel Luna Blanco
[Instagram: gotth3way](https://www.instagram.com/gotth3way.apis/)
[Instagram: Kryptonite](https://www.instagram.com/kryptonite.original/)

[Linkedin](https://www.linkedin.com/in/juan-manuel-luna-blanco-180a1570/)

[Youtube: desarrolladorhoy](https://www.youtube.com/channel/UCSEwIRkDJxLkbvKHOAcw_Xw)
[Youtube: Kryptonite](https://www.youtube.com/channel/UCSEwIRkDJxLkbvKHOAcw_Xw)


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
eslint

## Linter para el proyecto

> npm install eslint --save-dev   // lo instala

## ESLINT EXTENSION

The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally do so by running <b>npm install eslint</b> in the workspace folder for a local install or npm install -g eslint for a global install.

On new folders you might also need to create a .eslintrc configuration file. You can do this by either using the VS Code command Create ESLint configuration or by running the eslint command in a terminal. If you have installed ESLint globally (see above) then run

> eslint --init

in a terminal. If you have installed ESLint locally then run

> .\node_modules\.bin\eslint --init

under Windows and ./node_modules/.bin/eslint --init under Linux and Mac.

## Aplicar un Linter (buenas prácticas de angular)

> ng lint // comando para revisar el código, sino hay ningún linter, nos informa de los linters disponibles en angular

Instalaremos este

> ng add @angular-eslint/schematics

Y ahora si podemos ejecutar el comando anterior
> ng lint // ahora analizará el código en busca de errores

al ejecutarlo nos muestra los errores y malas practicas, hay algunos que no se pueden evitar, deberíamos poder deshabilitar el error o el warning de alguna manera

También puedes modificar e implementar tus propias reglas de codificación editando el archivo .eslintrc.json que fue creado en la raíz del proyecto.


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
Product no nos sirve como modelo, puesto que necesitas agregarle un id, que desconocemos hasta que no se cree, un id de categoría y no una categoría, etc, tiene similitudes y varianzas con el modelo, para esto están, los ... 
'Data Transfer Objects' de typescript:

{
  title: 'Un título',
  description: 'Una descripción',
  images: ['url1', 'url2', 'url3'],
  categoryId: 33,
  price: 299
}
RESPONSE API
{
  id: 51,
  title: 'Un título',
  description: 'Una descripción',
  images: ['url1', 'url2', 'url3'],
  category: {
    id: 33, 
    name: 'ropa de deporte'
  }
  price: 299
}




--- product.model.ts ---
export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}
--- ---
--- products.service.ts ---
create(dto: CreateProductDTO ) {
  return this.http.post<Product>(`${this.apiUrl}/products/`, dto);
}
--- ---
--- products.component.ts ---
createNewProduct() {
  const product: CreateProductDTO = {
    title: 'Nuevo producto',
    description: 'una descripcion, bla bla bla',
    images: ['https://placeimg.com/640/480/any', 'https://placeimg.com/640/480/any', 'https://placeimg.com/640/480/any'],
    categoryId: 33,
    price: 299
  }
  this.productsService.create(newProduct).subscribe(createdProduct =>{
    // console.log('Nuevo producto creado: ', createdProduct);
    this.products.unshift(createdProduct);
  });
}
--- ---

Hasta aquí estaríamos creando un producto nuevo, tipo 'CreateProductDto', en la api y esta nos devolvería un producto de tipo 'Product'

## SOLICITUDES PUT y PATCH [vídeo-6]

--- product.service.ts ---
  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, dto);
  }
--- ---
--- product.model.ts ---
  ...

  export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
    categoryId: number;
  }
  <!-- export interface UpdateProductDTO extends {
    title?: string;
    price?: number;
    images?: string[];
    description?: string;
    categoryId?: number;
  } -->
  traducido sería esto otro:

  export interface UpdateProductDTO extends Partial<CreateProductDto> {}
  o más avanzado aún, sin que esté vacío y el linter nos de error

  export interface UpdateProductDTO extends Partial<Omit<Product, 'id' | 'category'>> {
    categoryId?: number;
  }
--- ---
para probar la actualización de un producto, en el botón de seleccionar detalles del producto, podemos en su interfaz añadir un botón de actualización, en vez de hacer un formulario completo, para actualizarlo y otro para crear un producto nuevo.

--- products.component.ts ---
  ...
  updateOneProduct() {
    const changes: UpdateProductDTO = {
      price: 500,
      title: 'Nuevo título para este producto'
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes).subscribe(updatedProduct =>{
      console.log('Producto actualizado: ', updatedProduct);
      this.productChosen = updatedProduct;
      this.products = this.products.map((item)=>{
        if (item.id === updatedProduct.id) {
          return updatedProduct;
        }
        return item;
      });
    });
  }

## SOLICITUDES DELETE [vídeo-7]

--- products.service.ts ---
  ...
  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`);
  }
--- ---
--- products.component.ts ---
  ...
  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id).subscribe(deleted =>{
      console.log('Producto borrado: ', deleted);
      if (deleted) {
        const productIndex = this.products.findIndex( item =>item.id ==this.productChosen.id );
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      } else {
        alert ('producto no borrado');
      }
    });
  }
--- ---
--- products.component.html ---
<button (click)="deleteProduct()">Borrar este producto</button>
--- ---

## Parámetros de URL de nuestra API [vídeo-8]

los parámetros en la urls se utilizan para hacer filtros o paginación:
myapi.com/products&page=1
myapi.com/products&price=100
myapi.com/products&price_min=100?price_max=300

en nuestra API,  acá está la documentación: https://young-sands-07814.herokuapp.com/docs

para hacer paginación se utilizan dos parámetros, el limit (número de artículos a devolver) y el ofset (qué elementos quiero saltar), ejemplo:

ofset=0, limit= 10  --> enviará los primeros 10 artículos
ofset=10, limit= 10  --> enviará los siguientes 10, desde el 11 al 20, puesto que el ofset o salto empieza en 10

sabiendo esto la url quedaría así:

https://young-sands-07814.herokuapp.com/api/products?limit=10&offset=0

numPage = 0;
limit = 10
ofset = 10 * numPage

--- products.service.ts ---
  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}/products/`, {
      params: { limit, offset }
    });
  }
--- ---
--- products.component.ts ---
ngOnInit(): void {
    // this.productsService.getAllProducts()
    // .subscribe(data => {
    //   this.products = data;
    // });
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = data;
    });
  }
  pageUp(){
    if (this.limit * (this.page + 1) < this.MAX_PRODUCTS_IN_BD ) {
      this.page += 1;
      this.offset = this.limit * this.page;
      this.productsService.getProductsByPage(this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
      });
    }
  }
  pageDown(){
    if ((this.page - 1) >= 0 ) {
      this.page -= 1;
      this.offset = this.limit * this.page;
      this.productsService.getProductsByPage(this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
      });
    }
  }
--- ---
--- products.component.html ---
<div class="pagination">
    <button (click)="pageDown()">Bajar página</button>
    <span> {{ page + 1 }}</span>
    <button (click)="pageUp()">Subir Página</button>
</div>
--- ---
--- products.component.scss ---
.pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    button {
        border: none;
        border-radius: 0.3em;
        padding: 1em 1.5em;
        cursor: pointer;
        background-color: rgb(200, 245, 198);
    }
    span {
        text-align: center;
        // line-height: 1rem;
        padding: 1rem;
        background-color: rgb(200, 245, 198);
        font-family: 'Courier New', Courier, monospace;
        color: black;
        font-size: 700;
        border-radius: .3em;
    }
}
--- ---

otra forma en el servicio de tener parámetros o no, si los envía o no los envía, sería

getAllProducts(limit?: number, offset?: number) {
  let params = new HttpParams(); // importado arriba import { HttpClient, HttpParams } from '@angular/common/http';
  if ( limit && offset) {
    params = params.set('limit', limit);
    params = params.set('offset', offset);
  }
  return this.http.get<>....
}

es una nueva forms de enviar parámetros dinámicos, con HttpParams


## Observable and Promises [vídeo-9]
const { Observable } = require('rxjs');
const { filter } = require('rxjs/operators');

Promises: (Nativo js)
fetch('my-url-api').then(resp=> resp.json());

// o con async await
const data = await fetch('url');
const json = await data.json();

Observables: (Rxjs)
Se crean 'stream de datos', con el observable, y nos subscribimos a esos datos que son iterables.

const data$ = new Observable("stuff here");

data$.subscribe(data=>{
    // do something here
})

Ejemplo:

const { Observable } = require('rxjs');

// PROMISE son más sencillas y vienen incorporadasa en el lenguaje, emiten un solo valor
const doSomething = () => {
    return new Promise((resolve) => {
        resolve('valor 1');
    })
}
// ejecucion promise
(async() => {
    const respuesta_prom = await doSomething();
    console.log(respuesta);
})();

// OBSERVABLE es un stream de datos puede emitir multiples valores, es posible estar escuchando continuamente y se pueden cancelar. no necesita async await. Y se pueden filtrar pipe()
const doSomething$ = () => {
    return new Observable(observer => {
        observer.next('valor 1 $');
        observer.next('valor 2 $');
        observer.next('valor 3 $');
        obsever.next(null);
    })
}

// ejecucion observable
(() => {
    const observer$ = doSomething$();
    observer$
    .pipe(
      filter (value => value != null)  // no escucharemos cuando el valor sea nulo
    )
    .subscribe(respuesta$ =>{
      console.log(respuesta$);
    });
})();



Si ejecutamos el codigo anterior, el observable puede mandar data con el next(), y el subscribe estaría pendiente de los cambios que se produzcan en la data.
Las promises, solo se ejecutan una vez


## Reintentar peticiones (Observers) [video-10]

ver retry(3) products.service.ts

## Cross-Origin Resource Sharing [video-11] Patron Proxy

Error del servidor: Access-control-allow-origin 

mydomain.com (frontend) ---> mydomain.com (backend)  No problemo

app.mydomain.com (frontend) ----> api.mydomain.com (backend) dominiod cruzadso, por defecto esto el backend lo rechaza y los navegadores también.

localhost:4200 ---> localhost:3000 no problemo

Hay que habilitar los cors, en desarrollo y en producción, desde el backend
  *                                 todos
  [mydomain.com, app.mydomain.com]  solo estos
  [..., localhost:4200]             se usa en desarrollo

  también se puede crear un proxy en desarrollo, que acepte determinados dominios.

  --- proxy.config.json ---
  {
    "/api/*": {
      "target": "https://yound-sands-....com",
      "secure": true,
      "logLevel": "debug,
      changeOrigin: true
    }
  }
  --- ---

  --- products.service.ts ---
  <!-- private apiUrl = 'https://yound-sands...com/api/products'; //cambiar por esto otro -->
  private apiUrl = '/api/products';
  --- ---
El proxy se encargará de cambiar '/api/products' por 'https://yound-sands...com/api/products', haciendo que la petición se estuviera ejecutando desde el propio dominio de la api, saltándose el problema de los cors.

Esto solo funciona en desarrollo.
y en el package.json usaremos un script:

start:proxy: "ng serve --proxy-config ./proxy.config.json"


## Manejo de Ambientes [vídeo-12]

--- ./environments/environment.ts ---
export const environment = {
  production: false
  API_URL: ''
}
--- ---
--- ./environments/environment.prod.ts ---
export const environment = {
  production: true
  API_URL: 'https://young-sands-07814.herokuapp.com'
}
--- ---
--- products.service.ts ---
import { environment } from '../../../environments/environment';  // siempre este, angular se encargará de coger uno u otro dependiendo si estamos en desarrollo o en producción

private apiUrl= `${environment.API_URL}/api/products`;
--- ---


## Manejo de errores [vídeo-13]

en nuestras url de api tenemos el detalle del producto enviando el id del producto que queremos recibir, ¿Qué pasa si ese id no existe, o es mayor que el máximo?

import { throwError } from 'rxjs';  // permite lanzar un error
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http'; // tipo de error http y codigos de error

como:
HttpStatusCode.NotFound     --> 404 
HttpStatusCode.Conflict     --> 500 error del servidor
HttpStatusCode.Unauthorized --> 401

--- products.service.ts ---
...
import { ..., HttpErrorResponse } from '@angular/common/http';
import { ..., catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
...
getProduct(id: string) {  // contorl de errores aquí
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
    .pipe(catchError((error: HttpErrorResponse)=>{  // se recogen los posibles errores aquí
      if (error.status === 500) { // HttpStatusCode.Conflict
        return throwError(()=> new Error('El servidor falló!'));  // y controlamos el tipo de error
      } if (error.status === 404){ // HttpStatusCode.NotFound
        return throwError(()=> new Error('El producto no existe'));
      }
      return throwError(()=> new Error('Ups algo salió mal'));
    }));
  }
--- ---
--- products.component.ts ---
  ...
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  ...
  onShowDetailProduct(id: string) {
    this.statusDetail = 'loading';
    console.log('id:', id);
    this.productsService.getProduct(id).subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
      this.statusDetail = 'success';
    }), (errorMsg: string) => { // recogemos el posible error del http
      alert(errorMsg);
      this.statusDetail = 'error'; // el statusDetail podrías mostrarlo o no en la interfaz
    };
--- ---


## Transformar peticiones [video-14]

Imaginemos que queremos transformar la petición que nos llega del backend, añadiendo un parámetro más, esto podría tratarse como un 'interceptor', etsas transformaciones deben relaizarse en el servicio no en el componente

--- product.model.ts ---
export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
  taxes?: number;   // en este caso este parámetro es añadido a la data que nos llega desde el server
}
--- ---
--- products.service.ts ---
getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}/products/`, {
      params: { limit, offset }
    })
    .pipe(
      retry(3),
      map(products => products.map(item => { // este 1er map es un rxjs operator, el segundo es nativo de js
        return {
          ...item,
          taxes: .21 * item.price
        }
      }) )
    );  // operator de rxjs lo intentará tres veces máximo, esto es útil en conexiones inestables
  }
--- ---
--- product.component.html ---
<p *ngIf="product.taxes">{{ product.taxes | currency: 'EUR'}}</p> // debido a que es un parámetro opcional debes asegurarte que llega o no
--- ---


##  CALLBACK HELL [vídeo-15]

<!-- readAndUpdate(id: string) {
  this.productsService.getProduct(id)
  .subscribe(data=>{
    const product = data
    this.productsService.update(product.id, {title: 'change'}); // estamos actualizando después de leeer el producto
    .subscribe(rsptaUpdate =>{
      console.log(rsptaUpdate);
    })
  })
} --> 

Para evitar anidar demasiado los subscribe, el típico callback hell
usaremos switchMap

import { switchMap } form 'rxjs/operators';

readAndUpdate(id: string) {
  this.productsService.getProduct(id)
  .pipe(
    switchMap((product) =>{
      this.productsService.update(product.id, {title: 'change'});
    }) // haremos tantos switch map como necesitemos, pero sin anidarlos
    switchMap((product) =>{
      this.productsService.update(product.id, {title: 'change'});
    })
    switchMap((product) =>{
      this.productsService.update(product.id, {title: 'change'});
    })
  )
  .subscribe(data=>{
    console.log(data);
  })
}


Para Observables no anidados tenemos zip

import { zip } form 'rxjs'

readAndUpdate(id: string) {
  this.productsService.getProduct(id)
  .pipe(
    switchMap((product) =>{
      this.productsService.update(product.id, {title: 'change'});
    }) // haremos tantos switch map como necesitemos, pero sin anidarlos
    switchMap((product) =>{
      this.productsService.update(product.id, {title: 'change'});
    })
    switchMap((product) =>{
      this.productsService.update(product.id, {title: 'change'});
    })
  )
  .subscribe(data=>{
    console.log(data);
  });

  // peticiones no depndientes una de la otra
  zip(
    // una peticion aquí  A
    // otra peticion aqui B
  )
  .subscribe(response=>{
    // recibimos un array de dos respuestas [a, b]
    const product = response[0];
    const update = response[1];
  })
}

todo esto debe implementarse en la medida de lo posible en el servicio y no en el componente


## Login y manejo de Auth  [vídeo-16]

authencicarse a través del endpoint de /login usando JWT
Luego debes almacenarlo en localStorage
y cuando lo necesites debes recueprarlo y enviarlo al server

si usamos nuestra api y llamamos a:

  https://young-sands-07814.heroku.app.com/api/users

nos devuelve u njson con los siguientes datos

[
  {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name; "John"
  },
  {
    id: 2,
    email: "maria@mail.com",
    password: "12345",
    name; "Maria"
  },
]

si vamos al endpoint:

https://young-sands-07814.heroku.app.com/api/auth/login

y le enviamos un json con lo siguiente: 
{
  email: "maria@mail.com",
    password: "12345"
}

nos devolverá un accesToken de esta manera:

{
  access_token: "dhsadasdgdedg87ddakjkdhkdhhgiaw7dwd7aw7idhi7wid7aiw7di7awdi7waidiwd7yqiy7di7diqiwdiwqidi2ie2hn3dnnoi4fdnoi4noif4oifoioni43fino4fino4onifno34nofno43foi34flwfopw89fwp9f9wp9f9pwerfp9wsfookwfwfw40fw`4wf`k`0kf`00k3420kk430r9042r2r80r8028038r823r8'r8'38'r'r0'823r'293r'9r9'889'2389'r93297r7939712ryyeyqwyfdyuausdasjcjbcbjbcbzxmcmxzm,cvvsfdl"
}

si envio una password incorrecto, el em devuelve lo siguiente:

{
  statusCode: 401,
  message: "Unauthorized"
}

si vamos al endpoint profile 

https://young-sands-07814.heroku.app.com/api/auth/profile

enviandole en la cabecera el token de arriba me mandará datos de ese usuario, incluso podré actualizarlos si la api lo permite

{
    id: 2,
    email: "maria@mail.com",
    password: "12345",
    name; "Maria"
}

y si algo es incorrecto, el token o lo que sea nos devolverá lo mismo de antes

{
  statusCode: 401,
  message: "Unauthorized"
}


Para crear usuarios en la bd de la api, uaremos este endpoint:

https://young-sands-07814.heroku.app.com/api/users POST {email, name, password}

{
  email: "otro@mail.com",
  name: "Otro",
  password: "1234"
}

y nos devuelve 

{
  email: "otro@mail.com",
  name: "Otro",
  password: "1234"
  id: 3
}

y si hacemos login con este nuevo usuario y pasword nos devolverá el token correspondiente a ese usuario
y podremos entra en su profile

Vamos a implementar todo:

> ng g s services/auth   // para la authorización
> ng g s services/users  // para crear actualizar delete, etc usuarios
> ng g s services/token  // guardar y recuperar el token


--- users.service.ts ---
...
import { User, CreateUserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}/users/`);
  }
  create(dto: CreateUserDTO ) {
    return this.http.post<User>(`${this.apiUrl}/users/`, dto);
  }
}
--- ---
--- auth.service.ts ---
...
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/auth/user`, {email, password});
  }

  profile() {
    return this.http.get(`${this.apiUrl}/auth/profile`,);
  }
}
--- ---
--- user.model.ts ---
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreateUserDTO extends Omit<User, 'id'> {}
--- ---
--- auth.model.ts ---
export interface Auth {
  access_token: string
}
--- ---
--- app.component.ts --- esto deberá ir en users.component.ts
createUser() {
    this.usersService.create({
      name: 'Joh Moon',
      email: 'john@mail.com',
      password: '1234'
    })
    .subscribe(respuesta => {
      console.log(respuesta);
    })
  }

  login() {
    this.authService.login('john@mail.com', '1234')
    .subscribe(respuesta => {
      console.log(respuesta.access_token);
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG55ZGVlcEBnbWFpbC5jb20iLCJzdWIiOjI4LCJpYXQiOjE2NzI3NzUyMzMsImV4cCI6MTY3Mjc3ODgzM30.tVQPUIldk7I-knvifyg9F_dVJ74AY_wAUXxIpectVs0
   }
--- ---
--- app.component.ts ---
<button (click)="createUser()">Crear Usuario</button>
<button (click)="login()">Login Usuario</button>
--- ---


## Manejo de headers JWT `Bearer ${token}` [vídeo-17]

--- auth.service.ts ---
login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/api/auth/login`, {email, password});
  }

  profile(token: string) {
    // const headers = new HttpHeaders();
    // headers.set('Authorization', `Berarer ${token}`)  // forma dinámica, si necesitas hacer if o alguna lógica, debes importar el HttpHeaders
    return this.http.get<User>(`${this.apiUrl}/api/auth/profile`, {
      headers:{
        Authorization: `Bearer ${token}`,
        // 'Content-type': 'application/json' // otro tipo de headers
      }
    });
  }
--- ---
--- app.component.ts ---
login() {
    this.authService.login('johnydeep@gmail.com', '12345678')
    .subscribe(respuesta => {
      console.log(respuesta.access_token); 
      this.token = respuesta.access_token; // you must to save on localstorage
    });
  }
  getProfile() {
    this.authService.profile(this.token)
    .subscribe(profile => {
      console.log(profile);
    });
  }
--- ---
--- app.component.html ---
<button (click)="login()">Login Usuario</button>
<button (click)="getProfile()">Obtener perfil</button>
--- ---


todo esto lo trasladas al navbar que es donde se debe mostrar el usuario logueado y el botón de login
así que mira como quedan los archivos:

--- nav.component.html ---
<div class="info">
  <button *ngIf="!token; else elseBlock" (click)="login()">Login</button>
  <ng-template #elseBlock>{{ profile?.email }}</ng-template>
--- ---
--- app.component.html ---
<app-nav></app-nav>
<!-- <button (click)="createUser()">Crear Usuario</button>
<button (click)="login()">Login Usuario</button>
<button (click)="getProfile()">Obtener perfil</button> -->
<app-products></app-products>
--- ---
--- nav.component.ts ---
  token='';
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private usersService: UsersService
  ) { }
  ...
  createUser() {
    this.usersService.create({
      name: 'Joh Moon',
      email: 'johnydeep@gmail.com',
      password: '12345678'
    })
    .subscribe(respuesta => {
      console.log(respuesta);
    })
  }
  ...
  login() {
    this.authService.login('johnydeep@gmail.com', '12345678')
    .subscribe(respuesta => {
      console.log(respuesta.access_token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG55ZGVlcEBnbWFpbC5jb20iLCJzdWIiOjI4LCJpYXQiOjE2NzI3NzUyMzMsImV4cCI6MTY3Mjc3ODgzM30.tVQPUIldk7I-knvifyg9F_dVJ74AY_wAUXxIpectVs0
      this.token = respuesta.access_token; // save to localstorage
      this.getProfile(); // con switchMap puedes mejorarlo dese el servicio authService crea un método llamado loginAndGetProfile()
    });
  }
  getProfile() {
    this.authService.profile(this.token)
    .subscribe(user => {
      console.log(user);
      this.profile = user;
    });
  }
--- ---

Así que cada cosa en su sitio. 
El componente nav contiene al usuario, que es una variable dentro del nav, no necesita un componente a parte, para susistir, si tuviera una pantall de profile donde puede cambiar su nombre o coreeo o cntraseña si tendría sentido crear un componente profile y quizás para comunicarle al nav el email, crearía un BeaviorSubject

Pero este no es el caso

Otra cosa, mira que en login hacemos un subscribe y después un this.getProfile, esto es una mala práctica debes mejorarlo en el authService y crear un método loginAndGetProfile() que suma las dos acciones pero usando switchMap() para que no estén anidados recuerda el vídeo de CALLBACK HELL [vídeo-15]


## USO DE INTERCEPTORES EN ANGULAR [vídeo-18]

Mi Primer Interceptor
Un interceptor, como su nombre indica, interceptará las solicitudes HTTP antes de que se envíen al servidor, para agregar información a las request, manipular datos, entre otras utilidades.

1. Crea el interceptor
Con el CLI de Angular, puedes crear un interceptor con el comando ng generate interceptor <interceptro_name>. En este ejemplo, generaremos un interceptor para manipular los errores HTTP en toda tu aplicación.

> ng g interceptor interceptors/timeHttp --flat

--- ./interceptors/time-htpp.interceptor.ts ---
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TimeHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
--- ---
nosotros añadiremos un tap() para levantar un proceso sin necesidad de modificar la respuesta

--- ./interceptors/time-htpp.interceptor.ts ---
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TimeHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = performance.now();

    return next
      .handle(request)
      .pipe(
        tap(() => { // tap corre un proceso sin modificar la respuesta del observable
          const time = (performance.now() - start) + 'ms';
          console.log(request.url, time);
        })
      );
  }
}
--- ---
--- app.module.ts ---
  ...
  import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
  ...
  import { TimeHttpInterceptor } from './interceptors/time-http.interceptor';
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeHttpInterceptor,
      multi: true  // ???
    }
  ],
--- ---

Ahora cada vez que hagas una petición http, nos mostrará el tiempo que tardó en ms,
en realidad son dos unpa para las options y otra la propia peticion GET | POST | PUT | DELETE


## ENVIAR TOKEN CON UN ITERCEPTOR A NUESTRAS URLS [vídeo-19]

¿Dónde se pueden guardar cosas con js?

  1. In memory storage (nuestro token se está grabando aquí)
  2. LocalStorage (mantendrá hasta cerrar session) && SessionStorage (se pierde al cerrar la app)
  3. Cookie Storage

En nuestro caso lo haremos con localStorage

--- app.component.html --- // conservaremos esto porque el localstorage se borra cada cierto tiempo
<button (click)="createUser()">Crear Usuario</button> 
--- ---
--- app.component.ts ---
createUser() {
    this.usersService.create({
      name: 'Jonhy Deep',
      email: 'johnydeep@gmail.com',
      password: '12345678'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }
--- ---
--- auth.service.ts ---  // algunas modificaciones 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { switchMap, tap } from 'rxjs/operators'; // switchMap nos permite hacer subscribe no anidados

import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }
  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/api/auth/login`, {email, password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    );
  }
  getProfile() { // el interceptor se encarga de añadir el token
    return this.http.get<User>(`${this.apiUrl}/api/auth/profile`);
  }
  loginAndGetProfile(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.getProfile())
    )
  }
}
--- ---
--- nav.component.html ---  // botón de login y profile.name
<button *ngIf="!profile; else elseBlock" (click)="login()">Login</button>
<ng-template #elseBlock>{{ profile?.name }}</ng-template>
--- ---
--- nav.component.ts --- // el login directamente nos hace un get profile desde el servicio
  ...
  createUser() {
    this.usersService.create({
      name: 'Joh Moon',
      email: 'johnydeep@gmail.com',
      password: '12345678'
    })
    .subscribe(respuesta => {
      console.log(respuesta);  // directamente podríamos hacer un login tras la creción de un usuario
    })
  }

  login() {
    this.authService.loginAndGetProfile('johnydeep@gmail.com', '12345678')
    .subscribe(user => {
      console.log(user);
      this.profile = user;
    });
  }
}
--- ---

El token service grabará el token o lo recuperará del local storage

--- token.service.ts ---
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
--- ---

Por último el interceptor para que añada a las cabeceras el headers

--- add-token.interceptor.ts ---
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../services/token.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request);  // antes de retornarlo lo mandamos a esta función privada de la clase
    return next.handle(request);
  }

  // la función comprueba si existe el token, osea se ha logueado. Si es así, lo mete en las cabeceras y sinó devuelve la respuesta tal cual 
  private addToken(request: HttpRequest<unknown>) {
    const token = this.tokenService.getToken();
    if(token) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      return authRequest;
    }
    return request;
  }
}
--- ---

hay que añadir el interceptor al app.module

--- app.module.ts ---
  ...
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

  ...

import { TimeHttpInterceptor } from './interceptors/time-http.interceptor';
import { AddTokenInterceptor } from './interceptors/add-token.interceptor';



@NgModule({
  declarations: [
      ...
  ],
  imports: [
    ...
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
--- ---


## Creando un contexto a interceptor [vídeo-20]

--- time-http.interceptor.ts ---
import { Injectable } from '@angular/core';
import {
  
  ... // importamos estos dos de common http
  HttpContext,
  HttpContextToken

} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// creamos el contexto con valor false por defecto
const CHECK_TIME = new HttpContextToken<boolean>(()=> false);

// creamos una funcion exportable, para usar fuera
export function checkTime() {
  return new HttpContext().set(CHECK_TIME, true);
}

@Injectable()
export class TimeHttpInterceptor implements HttpInterceptor {

  // constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // hacemos un if, para comprobar el contexto en cada petición que sea interceptada, si tiene el contexto CHECK_TIME == true ejecutará este interceptor sino no.

    if(request.context.get(CHECK_TIME)) {
      const start = performance.now();

      return next
        .handle(request)
        .pipe(
          tap(() => { // tap corre un proceso sin modificar la respuesta del observable
            const time = (performance.now() - start) + 'ms';
            console.log(request.url, time);
          })
        );
    }
    return next.handle(request);
  }
}
--- ---

En los servicios que queramos activar el contexto, debemos hacer lo siguiente

--- products.service.ts ---
...
import { checkTime } form '../interceptors/time-http.interceptor.ts'

export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api';
  constructor(
    private http: HttpClient
  ) { }


  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {context: checkTime()});
  }
  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: { limit, offset }, context: checkTime()  // este es el contexto para el check time creado en el interceptor
    })
    .pipe(
      retry(3),
      map(products => products.map(item => {
        return {
          ...item,
          taxes: .21 * item.price // impuestos
        }
      }) )
    );
  }
  getProduct(id: string) {  // contorl de errores aquí
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`, {context: checkTime()})  // contexto
    .pipe(catchError( (error: HttpErrorResponse)=>{
      if (error.status === 500) { // HttpStatusCode.Conflict
        return throwError(()=> new Error('El servidor falló!'));
      } if (error.status === 404){ // HttpStatusCode.NotFound
        return throwError(()=> new Error('El producto no existe'));
      }
      return throwError(()=> new Error('Ups algo salió mal'));
    }));
  }
  create(dto: CreateProductDTO ) {
    return this.http.post<Product>(`${this.apiUrl}/products`, dto); // contexto
  }
  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, dto);
  }
  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`);
  }
}
--- ---
{context: checkTime()}); 

Este contexto lo añades a cada petición que quieras que tenga el contexto check time. 

También podrías hacerlo alrevés habilitado en todos (true) y llamarlo en aquellas peticiones en las que no lo quieras para ponerlo a (false)


## Descarga de archivos con Http [vídeo-21]

Una forma simple de descargar archivos es conocer su ruta, y colocar un enlace en el html que haga referencia a esa ruta y un atributo del HTML llamado download, de esta manera.

<a href="./assets/files/texto.txt" download>Descarga </a>

Para hacerlo desde la lógica necesitamos de un servicio que se encargue de subir y de descargar ficheros

> ng g s servies/files

> npm i file-saver
> npm i --save-dev @types/file-saver


--- files.service.ts ---
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient
  ) { }

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap( content => {
        const blob = new Blob([content], {type});
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }
}
--- ---
--- app.component.ts ---
import { Component } from '@angular/core';

import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ...

  constructor(
    private usersService: UsersService,
    private filesService: FilesService
  ){}

  ...

  downloadPDF() {
    this.filesService.getFile(
      'Angular 2 y el futuro de la web',
      '/assets/downloads/Angular 2 y el futuro de las arquitecturas web.pdf',
      'application/pdf'
      )
    .subscribe()
  }
}
--- ---
--- app.component.html ---
<button (click)="downloadPDF()">Descargar PDF</button>
--- ---

## Subida de archvios con http [vídeo-22]


endpoint de la api para subida de ficheros binarios:

https://young-sands-07814.herokuapp.com/api/files/upload

debes darle un tipo llamado 'file', el archivo a subir y te devolverá un json con la siguiente data:

{
  "origianlname": "elnombredelfichero.ext",
  "filename": "nombrequelaapilecoloco",
  "location": "el/path/donde/se/encuentra/nombre.ext"
}

--- file.service.ts ---
  import { File } from '../models/file.model.ts'
  ...
  uploadFile(file: Blob){
    const dto = new FormData();
    dto.append('file', file)
    return this.http.post<File>(`${this.apiUrl}/files/upload`, dto, {
      <!-- headers: {
        'Content-type': "multipart/form-data"
      } --> // algunos backends tienen esta forma de enviarlo, en nuestra api no es necesario
    })
  }
--- ---
--- app-component.ts ---
  imgFile = ''
  ...
  onUploadFile(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFile(file)
      .subscribe(response => {
        this.imgFile = response.location;
      });
    }
  }
--- ---
--- app-component.html ---
<p>
  <input type="file" (change)="onUploadFile($event)">
  <img *ngIf="imgFile" [src]="imgFile" >
</p>
--- ---
--- file.model.ts ---
export interface File {
  originalname: string;
  filename: string;
  location: string;
}
--- ---
--- app.component.scss ---
.imgUploaded {
  max-width: 150px;
}
--- ---
