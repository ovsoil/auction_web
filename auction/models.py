from __future__ import unicode_literals
from django.db import models
from authentication.models import Account


# Create your models here.
class Item(models.Model):
    post_time = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField(default='')
    image = models.CharField(max_length=100, blank=True, default='')
    start_time = models.DateTimeField(auto_now_add=True)
    stop_time = models.DateTimeField(auto_now_add=True)
    start_price = models.IntegerField()
    bid_range = models.IntegerField()

    # current_bid = models.ForeignKey('auction.Bid', related_name='item')
    bidder_num = models.IntegerField(default=0)

    class Meta:
        ordering = ('post_time',)


class Bid(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    bidder = models.ForeignKey('authentication.Account', related_name='bid')
    # bidder = models.ForeignKey(Account)
    bid_item = models.ForeignKey('auction.Item', related_name='bid')
    # bid_item = models.ForeignKey(Item)
    amount = models.IntegerField()

    class Meta:
        ordering = ('time', )

    def __unicode__(self):
        return '{0}'.format(self.content)
