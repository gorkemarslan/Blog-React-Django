from django.contrib import admin
from .models import Post, Tag


class TagAdmin(admin.ModelAdmin):
    list_display = ['name']


class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'tag', 'published_at', 'status']
    search_fields = ['title']
    ordering = ['published_at']
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Post, PostAdmin)
admin.site.register(Tag, TagAdmin)
