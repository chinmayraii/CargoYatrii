from django.db import models

class User_Registration(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=1000, blank=True,null=True)
    email = models.CharField(max_length=1000, blank=True,null=True)
    mobile = models.IntegerField(blank=True,default=0)
    created_at = models.DateTimeField(null=True, blank=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    
    
    
    
    
