from rest_framework import permissions


class IsBidderOfBid(permissions.BasePermission):
    def has_object_permission(self, request, view, bid):
        if request.user:
            return bid.bidder == request.user
        return False
