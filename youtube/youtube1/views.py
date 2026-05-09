from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Student

def sample(request):
    if request.method == 'POST':
        student_name = request.POST.get('student_name')
        if student_name:
            try:
                student = Student.objects.get(name=student_name)
                return render(request, 'first.html', {'student': student})
            except Student.DoesNotExist:
                return render(request, 'first.html', {'error': 'Student not found'})
        else:
            return render(request, 'first.html', {'error': 'Please enter a student name'})
    else:
        return render(request, 'first.html')

