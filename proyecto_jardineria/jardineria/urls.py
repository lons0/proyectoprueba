from django.urls import path 
from .views import index, compra, Contactanos, indexgaleria, quienessomos,register
urlpatterns = [
    path('',index, name ="index"),
    path('compra/',compra, name ="compra"),
    path('Contactanos/',Contactanos, name ="Contactanos"),
    path('indexgaleria/',indexgaleria, name ="indexgaleria"),
    path('quienessomos/',quienessomos, name ="quienessomos"),
    path('register/',register, name ="register"),
    path('login/', login, name="login"),
    path('',,name="")
 
]