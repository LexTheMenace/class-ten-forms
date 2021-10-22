# Class 10 - Handling Forms in Angular Apps

## Forms Overview
Forms in your HTML template and how Angular can help you with them.
Forms will not be submitted through HTML, you need to use Angular's HTTP service, which we will cover in a later section. 

Angular offers two approaches to handling forms. With the Template Driven approach, Angular infers the structure of the form object from the DOM.
With the Reactive approach, you define the form structure in TypeScript for more control.

### Template Driven
Make sure you import the `Forms Module` and add it to your NgModule's imports array. When Angular detects a form element, it creates a JavaScript object representation of the form. However, inputs are not automatically detected.

Submitting the Form
- Add `ngModel` attribute to inputs you would like to add as a form control. Add a name attribute to register a control to the JavaScript object representation of our form.

- To access the JavaScript representation of this form, create a local reference set to `ngForm` to the form element. Add `(ngSubmit)` directive to the form element, and call a custom method (created by you in the component), passing the local reference to the form.

Accessing the Form
- Add the submit method you called with ngSubmit to your component.ts file, taking in the form as a parameter.

- Alternatively, you can use `@ViewChild()` and assign the form to a variable in your component.

- Explore properties of the form object by logging to the console. Note where you can access form value and valid/touched attributes. 

- We can utilize the form state with property binding and conditional rendering to disable the sumbit button, or display a message if the form is invalid.

- You can use built in and custom validators. A list of built in validators can be found at: https://angular.io/api/forms/Validators.

- Angular dynamically adds CSS classes based on the state of the form.

- Utilize Two-Way-Binding with ngModel to react to or output a user's input instantly.

- You can use ngModelGroup to group form controls.

- To use radio buttons, create a div with ngFor looping through the options, and render an input with a value set to the option. Use one way binding with ngModel if you want a default option selected.

Form Values
- NgForm's setValue method can be used to prepopulate form inputs. However, it will overwrite data entered by the user.

- To only set parts of the form, use the patchValue method. It is available on the form object that is wrapped by NgForm.

- Extract the form data in your compoenent by accessing the form value, followed by the name you used for that input in the HTML template.

- To reset the form, simply use the reset method on the your form variable.

### Reactive
Make sure you import the `Reactive Forms Module` and add it to the imports array in `app.module.ts`.

Import FormGroup and FormControl from '@angular/forms' into the component TypeScript file where you will create the form. 

Creating the Form
- Create a variable set to a new FormGroup with an object with control names(key) labeled with quotes, and set to a new FormConrtol(). You can initialize with null or data you want to prepopulate the field, as well as validators.

- Sync the form to the HTML by binding formGroup to the variable you created, and add the formControlName attribute to the corresponding input elements with the name you create the form with.

Submitting the Form
- We cannot and don't need to use a local reference to access this form. Call your submit method with ngSubmit, and access the FormGroup variable you created.

Adding Validation 
- When you initialize your FormGroup object, you can add validators to your FormControls by importing the Validators object from '@angular/forms'.

Accessing Controls in the HTML
- Access controls by passing the control name (as a string) to FormGroup's get method. 

- You can access properties and state for conditional rendering.

Grouping Controls
- You can nest FormGroups, but you must structure your HTML page the same way.

- Access grouped controls as a JavaScript object.

- FormArray holds an array of conrols, allowing users to enter mulitple inputs.  

Custom Validation
- We can create our own validators by creating a function to check if our control meets a condition, returning nothing or null if the control is valid.

- If your validator fucntion references `this` You must bind(this) when adding to FormControls, to avoid problems with scope.

Error Codes
- Angular adds error codes (returned by you in custom function) on the individual control. This is beneficial to provide users with detailed error information.

Async Validators
- Asynchronous validators provide a pending state when your app needs to wait for a server response to determine the validity of user input.

- Asynchronous validators return a Promise or an Observable.

- State of control is pending while awaiting a response.

Status and Value Changes
- You can subscribe to the statusChanges and valueChanges observables provided by FormGroup.

Setting, Patching and Resetting Values 

- As with the TD approach, we can access the setValue, patchValue, and reset methods. However, the FormGroup object is not wrapped in this instance, and we can access these methods directly.
