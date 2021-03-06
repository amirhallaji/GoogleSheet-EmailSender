## Email Sender

In order to send automated emails to people and also where there is a need of reading data from google sheets, you can use Apps script which is a built-in extension in google sheets. You can send your emails in your favorite ```HTML``` templates and use ```gs``` to use variables inside your ```HTML``` template.

To do this, follow this instruction.

1. First, go to google sheets and choose ```Apps Script``` from ```Extensions``` navigation menu.

<img src='icons/apps_script.png'/>

2. Copy and Paste the ```script.gs``` file from this repository to ```Code.gs``` in Apps script.

I have explaned some parts of the code.



```js
const headers = ws.getRange('A2:H49').getDisplayValues()//get table headers name;
```
The ```getRange``` function gets the range of your cells name. For instance, if you want to read data from the cells selected in the image, you should enter ```C2:G16``` as the parameters in this function.

<img src='icons/range.png' />


3. Add your HTML file using the ➕ button at the left side of the page beside the ```Files``` item.


<img src='icons/plus.png'/>

4. Copy and paste the ```Template.html``` code inside this repository to a new ```HTML``` file you've created.

5. Whenever you want to use your google sheet data in yout ```HTML``` file, use the tag below.

```html
<?=  variable_name  ?>
```

- Example
For instance, I want to read HW1 from google sheets. I have assigned ```HW1``` to ```ex1``` variable uing this:

```js
const ex1 = headers[data][3];
```

Working with cells is exactly same as working with 2d arrays.

And then, I use this tag in order to use the value of ```ex1``` in my html file.

```html
<li>تمرین اول: <?= ex1 ?></li>
```

6. After all these, click on the ```Run``` button to run this script.

<img src='icons/run.png' />

### Other Points

- There is an example in the ```src``` directory in which you can see the templates of ```gs``` and ```html``` templates.
- If you want to send automated emails, you should first allow google sheets to access your emails and your google drive.