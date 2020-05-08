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
      space: '<your Contentful Space>',
      accessToken: '<your Contentful Access Token>',
      environment: '<your Contentful Environment>'
    })
  ],
})
export class AppModule { }
```

