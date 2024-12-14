from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User_Registration
from datetime import datetime
from django.contrib import messages


def index(request):
    return render(request,'index.html')

def express(request):
    return render(request,'express.html')

def passenger(request):
    return render(request,'passenger.html')    

def registration(request):
    return render(request,'registration.html') 

def login(request):
    return render(request,'login.html') 

def register_user(request):
    if request.method == 'POST':
        name = request.POST['name']
        mobile = request.POST['mobile']
        email = request.POST['email']
        User_Registration.objects.create(name=name, mobile=mobile, email=email)
        return redirect('login')  
    return render(request, 'registration_form.html')

def login_user(request):
    if request.method == 'POST':
        email = request.POST['email']
        mobile = request.POST['mobile']
        
        # Check if the user exists with the provided email and mobile
        user = User_Registration.objects.filter(email=email, mobile=mobile).first()
        
        if user:
            # Add a success message and redirect to the dashboard
            messages.success(request, f'Welcome back, {user.name}!')
            return redirect('index')  # Replace 'dashboard' with your desired page
        else:
            # Add an error message and render the login page
            messages.error(request, 'Invalid email or mobile number.')
            return render(request, 'login.html')
    return render(request, 'login.html')
