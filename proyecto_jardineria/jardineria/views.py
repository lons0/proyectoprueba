from django.shortcuts import render
from django.http import HttpRequest
# Create your views here.
TEMPLATE_DIRS=('os.path.join(BASE_DIR,"templates"),')

def compra(request):
	return render(request, "compra.html")

def Contactanos(request):
	return render(request, "Contactanos.html")

def index(request):
	return render(request, "index.html")

def indexgaleria(request):
	return render(request, "indexgaleria.html")

def quienessomos(request):
	return render(request, "quienessomos.html")

def register(request):
	return render(request, "register.html")
	
def login(request):
	return render(request,'login.html')