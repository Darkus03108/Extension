from django.shortcuts import render
from django.http import HttpResponse
import requests
import datetime

# Create your views here.

def index(request):
        return render(request, "src/index.html")
    

    
