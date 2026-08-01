from django.contrib import admin
from todolist.models import Task

admin.site.register(Task) 

#For Contact Model in Admin Panel
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "email",
        "issue",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
    )

    list_filter = (
        "issue",
    )

    ordering = ("-created_at",)