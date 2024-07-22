from django.shortcuts import render
from django.http import HttpResponse
from django import forms
# Create your views here.

class searchForm(forms.Form):
    query = forms.CharField(label="Enter your query here!")



def index(request):
    return render(request, "src/index.html")