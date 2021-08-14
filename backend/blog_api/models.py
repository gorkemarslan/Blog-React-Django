from django.db import models
from django.conf import settings
from .managers import PublishedManager


class Tag(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    title = models.CharField(max_length=255)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='posts')
    body = models.TextField()
    tag = models.ForeignKey(Tag, on_delete=models.PROTECT, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    published_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=127, unique_for_date='published_at')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')

    # Default Manager
    objects = models.Manager()
    # Custom Manager
    published = PublishedManager()

    class Meta:
        ordering = ('-published_at',)

    def __str__(self):
        return self.title
