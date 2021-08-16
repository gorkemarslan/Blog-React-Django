from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.email', read_only=True)
    tag = serializers.CharField(source='tag.name', read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'author', 'tag', 'status', 'published_at', 'slug')
        lookup_field = 'slug'
