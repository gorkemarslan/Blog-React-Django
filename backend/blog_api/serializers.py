from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'tag', 'status', 'published_at', 'slug')
        lookup_field = 'slug'
