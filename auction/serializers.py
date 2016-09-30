from rest_framework import serializers
from auction.models import Item, Bid
from authentication.models import Account


class ItemSerializer(serializers.ModelSerializer):
    # current_bid = serializers.HyperlinkedRelatedField(
    #     view_name='bid-detail',
    #     read_only=True
    # )

    class Meta:
        model = Item
        fields = ('id', 'name', 'post_time', 'description', 'image', 'start_time', 'stop_time',
                  'start_price', 'bid_range', 'bidder_num',)
        read_only_fields = ('post_time',)


class BidSerializer(serializers.HyperlinkedModelSerializer):
    bidder = serializers.HyperlinkedRelatedField(
        view_name='user-detail',
        read_only=True,
        required=False)
    bid_item = serializers.HyperlinkedRelatedField(
        view_name='item-detail',
        read_only=True)

    class Meta:
        model = Bid
        fields = ('url', 'time', 'amount', 'bidder', 'bid_item')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(BidSerializer, self).get_validation_exclusions()

        return exclusions + ['bidder', 'bid_item']
