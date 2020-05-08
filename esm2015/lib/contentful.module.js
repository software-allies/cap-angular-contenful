var CapContentfulModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { CapContentfulService } from './services/contentful.service';
import { CommonModule } from "@angular/common";
let CapContentfulModule = CapContentfulModule_1 = class CapContentfulModule {
    static forRoot(config) {
        return {
            ngModule: CapContentfulModule_1,
            providers: [
                {
                    provide: ConfigService,
                    useValue: config
                },
            ]
        };
    }
};
CapContentfulModule = CapContentfulModule_1 = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [
            HttpClientModule,
            CommonModule,
        ],
        exports: [],
        providers: [
            CapContentfulService
        ],
        schemas: []
    })
], CapContentfulModule);
export { CapContentfulModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRmdWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWtCL0MsSUFBYSxtQkFBbUIsMkJBQWhDLE1BQWEsbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBZTtRQUM1QixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBWlksbUJBQW1CO0lBZi9CLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxFQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCO1lBQ2hCLFlBQVk7U0FDYjtRQUNELE9BQU8sRUFBRSxFQUNSO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFLEVBQ1I7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBWS9CO1NBWlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDYXBDb250ZW50ZnVsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29udGVudGZ1bC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDYXBDb250ZW50ZnVsU2VydmljZVxyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcENvbnRlbnRmdWxNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FwQ29udGVudGZ1bE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENhcENvbnRlbnRmdWxNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==