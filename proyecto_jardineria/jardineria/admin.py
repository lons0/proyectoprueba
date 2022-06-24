from django.contrib import admin
from .models import Categoria_Prod,Cliente, Producto
# Register your models here.
admin.site.register(Categoria_Prod)
admin.site.register(Producto)
admin.site.register(Cliente)