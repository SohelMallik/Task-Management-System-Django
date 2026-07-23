from django import forms
from todolist.models import Task


class TaskForm(forms.ModelForm):
    is_completed = forms.BooleanField(required=False, label="Completed")

    class Meta:
        model = Task
        fields = ['task', 'is_completed']

    # def clean_task(self):
    #     task = self.cleaned_data.get('task')

    #     if not task.strip():
    #         raise forms.ValidationError("You did not write anything!")

    #     return task

#From todolist.html name=task is same as this forms.py task name.