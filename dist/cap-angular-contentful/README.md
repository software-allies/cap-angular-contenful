# CAP CONTENTFUL [![Generic badge](https://img.shields.io/badge/CAP-Active-<COLOR>.svg)](https://shields.io/)

**CAP CONTENTFUL** is a module for **Angular**

* CapContentfulService


## Installation
```
npm install cap-angular-contentful
```
---

## Implementation into a module

To use this module go to the app module and into the section's import and put the CapContentfulModule.
```
import { CapContentfulModule } from 'cap-angular-contentful'
```
---
configure into the import section
```
@NgModule({
  imports: [
    CapContentfulModule.forRoot({
      space_id: '<your Contentful Space>',
      environment: '<your Contentful Environment>'
      delivery_accessToken: '<your Contentful Access Token>',
    })
  ],
})
export class AppModule { }
```
## Use
Import the CapContentfulService service into your .ts file.
*Example*
```

import { Component } from '@angular/core';
import { CapContentfulService } from 'cap-angular-contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

constructor(private contentful: CapContentfulService) {
  
}
```


## Service
The module export the *CapContentfulService* service that allows you to use the followings methods:

*getItems*
Return the items related with a specific content type
Example:
```
contentful.getItems('person', 3, 2).subscribe( item => {
  console.log('items with specify limit: ', item);
})
```

*getItemById*
Return a specific item by Id
Example:
```
contentful.getItemById('3K9b0esdy0q0yGqgW2g6Ke').subscribe(resp => {
  console.log('getItemById: ', resp);
  this.title = resp.fields.title;
  this.author = resp.fields.author
  this.bodyD = resp.fields.body
  this.description = resp.fields.description
  this.heroImage = resp.fields.heroImage
  this.publishDate = resp.fields.publishDate
  this.slug = resp.fields.slug
  this.tags = resp.fields.tags

})
```
 
*getElementsByContentType*
Return a list of items related with a specific content type
Example:
```
contentful.getElementsByContentType('person', 2, 2).subscribe(resp => {
  console.log('getElementsByContentType: ', resp);
})
```

*getAssets*
Return an item related with a specific assetId
Example:
```
contentful.getAssets('6Od9v3wzLOysiMum0Wkmme').subscribe(resp => {
   console.log('resp: ', resp);
})
```