from django.db import models
import uuid # Required for unique book instances

# Create your models here.

class Categoria_Prod(models.Model):
    id_categoria = models.IntegerField(primary_key=True,verbose_name="Código de las categorias")
    nombre = models.CharField(max_length=15, verbose_name="Nombre de categoria")
    def __str__(self):
        return self.categoria

class Producto(models.Model):
    codPlanta= models.CharField(max_length=8,primary_key=True,verbose_name="Código de producto")
    nomPlanta= models.CharField(max_length=30, verbose_name="Nombre descripción de producto")
    categoria = models.ForeignKey(Categoria_Prod, on_delete=models.CASCADE)
    foto= models.ImageField(verbose_name="Foto del producto")
    def __str__(self):
        return self.s

class Cliente(models.Model):
    nom_id =  models.UUIDField(primary_key=True, default=uuid.uuid4, verbose_name="ID de cliente")
    nombre_cliente = models.CharField(max_length= 20, verbose_name="Nombre del clientes")
    numero= models.CharField(max_length=12,verbose_name="Numero de teléfono" )
    direccion=models.CharField(max_length= 40, verbose_name="dirección del clientes")
    correo=models.CharField(max_length= 40, verbose_name="correo del clientes")
    def __str__(self):
        return self.nombre_cliente