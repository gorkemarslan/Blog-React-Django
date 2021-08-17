from rest_framework import permissions


class IsAuthorOrReadOnly(permissions.BasePermission):
    """
    Only post owners can update and delete posts.
    Other users only read posts.
    """

    message = "Only post owner can edit this post."

    def has_object_permission(self, request, view, obj):
        # If HTTP methods is in ('GET', 'HEAD', 'OPTIONS'),
        # then it is safe to access to the content.
        if request.method in permissions.SAFE_METHODS:
            return True
        # Only post owners have write permissions.
        return obj.author == request.user
