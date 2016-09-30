from django.shortcuts import render

from rest_framework import viewsets
from rest_framework import permissions

from auction.models import Item, Bid
from auction.serializers import ItemSerializer, BidSerializer
from auction.permissions import IsBidderOfBid
# from authentication.serializers import AccountSerializer

# Create your views here.
class ItemViewSet(viewsets.ModelViewSet):
    """
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)



class BidViewSet(viewsets.ModelViewSet):
    """
    """
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,
    #                       IsOwnerOrReadOnly,)
    # @detail_route(renderer_classes=(renderers.StaticHTMLRenderer,))
    # def perform_create(self, serializer):
    #     serializer.save(bidder=self.request.user)

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsBidderOfBid(),)

    def perform_create(self, serializer):
        instance = serializer.save(bidder=self.request.user,
                                   bid_item=self.request.item)

        return super(BidViewSet, self).perform_create(serializer)
