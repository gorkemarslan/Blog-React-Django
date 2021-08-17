from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Post
from .serializers import PostSerializer, UpdatePostSerializer
from .permissions import IsAuthorOrReadOnly


class PostList(generics.ListAPIView):
    queryset = Post.published.all()
    serializer_class = PostSerializer


class CreatePost(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthorOrReadOnly]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'


class EditPost(generics.UpdateAPIView):
    permission_classes = [IsAuthorOrReadOnly]
    queryset = Post.objects.all()
    serializer_class = UpdatePostSerializer
    lookup_field = 'slug'
