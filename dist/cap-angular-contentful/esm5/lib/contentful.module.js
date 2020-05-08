import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { CapContentfulService } from './services/contentful.service';
import { CommonModule } from "@angular/common";
var CapContentfulModule = /** @class */ (function () {
    function CapContentfulModule() {
    }
    CapContentfulModule_1 = CapContentfulModule;
    CapContentfulModule.forRoot = function (config) {
        return {
            ngModule: CapContentfulModule_1,
            providers: [
                {
                    provide: ConfigService,
                    useValue: config
                },
            ]
        };
    };
    var CapContentfulModule_1;
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
    return CapContentfulModule;
}());
export { CapContentfulModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRmdWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBa0IvQztJQUFBO0lBWUEsQ0FBQzs0QkFaWSxtQkFBbUI7SUFDdkIsMkJBQU8sR0FBZCxVQUFlLE1BQWU7UUFDNUIsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQVhVLG1CQUFtQjtRQWYvQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsRUFDYjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLFlBQVk7YUFDYjtZQUNELE9BQU8sRUFBRSxFQUNSO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQjthQUNyQjtZQUNELE9BQU8sRUFBRSxFQUNSO1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQVkvQjtJQUFELDBCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDYXBDb250ZW50ZnVsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29udGVudGZ1bC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDYXBDb250ZW50ZnVsU2VydmljZVxyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcENvbnRlbnRmdWxNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FwQ29udGVudGZ1bE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENhcENvbnRlbnRmdWxNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==