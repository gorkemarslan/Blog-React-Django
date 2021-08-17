from django.urls import path
from .views import PostList, PostDetail, EditPost

urlpatterns = [
    path('<slug:slug>/', PostDetail.as_view(), name='post_detail'),
    path('<slug:slug>/edit/', EditPost.as_view(), name='post_edit'),
    path('', PostList.as_view(), name='post_list'),
]
