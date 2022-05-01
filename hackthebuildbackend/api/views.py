from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests
from datetime import date
from api.ML import detection

# Create your views here.

def Home(request):
    today = date.today()
    x,y = detection.live_cam()
    data = {
        'date': today,
        'drowsy': x,
        'total': y
    }
    return JsonResponse(data)