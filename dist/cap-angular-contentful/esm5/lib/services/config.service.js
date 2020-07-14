var ConfigService = /** @class */ (function () {
    function ConfigService(data) {
        this.data = data;
        this.space_id = '';
        this.environment = '';
        this.delivery_accessToken = '';
        if (this.data) {
            this.space_id = this.data.space_id;
            this.environment = this.data.environment;
            this.delivery_accessToken = this.data.delivery_accessToken;
        }
    }
    return ConfigService;
}());
export { ConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0lBS0UsdUJBQW9CLElBQXFCO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBSnpDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBSWhDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUU1RDtJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ0ludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIHNwYWNlX2lkOiBzdHJpbmcgPSAnJztcbiAgZW52aXJvbm1lbnQ6IHN0cmluZyA9ICcnO1xuICBkZWxpdmVyeV9hY2Nlc3NUb2tlbjogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBDb25maWdJbnRlcmZhY2UpIHtcblxuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMuc3BhY2VfaWQgPSB0aGlzLmRhdGEuc3BhY2VfaWQ7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5kYXRhLmVudmlyb25tZW50O1xuICAgICAgdGhpcy5kZWxpdmVyeV9hY2Nlc3NUb2tlbiA9IHRoaXMuZGF0YS5kZWxpdmVyeV9hY2Nlc3NUb2tlbjtcblxuICAgIH1cbiAgfVxufVxuIl19