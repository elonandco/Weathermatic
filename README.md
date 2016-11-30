# Weathermatic-Test

### Description:
Below are instructions on how to dynamically interact with Highcharts using Ember, Bootstrap and Datepicker.

### Installation:
1.) Download Files  
2.) To view locally, open “index.html” in Firefox, otherwise, host the files on a server and navigate to index.html

### Process:
1.) Load Dependencies  

CSS:

//Bootstrap 
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css”>
```
//Date Picker CSS  
```html
<link rel="stylesheet" type="text/css" href="css/datepicker.css" />
```
//My Custom CSS  
```html
<link rel="stylesheet" href="css/style.css”>
```
*Note: Place this in the <head> of your HTML


JS (Place before body tag):
//JQuery
//Bootstrap
//Moment
//Date Picker
//High Charts
//Main

Note: Place this before the end </body> of your HTML

2.) Create the Javascript

Main.css

Methods:

toggleTemps()
Use: This updates the status (visible or hidden) of the high and low temperatures. 
Parameters: The clicked checkbox

toggleDates()
Use: This updates the date duration. 
Parameters: The date input field

convertDates()
Use: Converts data into Highcharts “series” structure
Parameters: An array that needs converting and the temp property to access from the JSON (“high_temp" or “low_temp") 

updateChart()
Use: Get’s data and is used to initializes chart
Parameters: None

getValues()
Use: Accesses properties in JSON and returns value
Parameters: The data and the property you’re trying to access

Variables:

highJSON - I save the high temperature JSON here in order to access later. This prevents me from having to make multiple JSON calls when I don’t have to.

lowsJSON - I save the low temperature JSON here in order to access later. This prevents me from having to make multiple JSON calls when I don’t have to.

chart - The highchart

date - the currently selected dates

dateOrig - the start and end date of the JSON data. This is how we show all dates

Properties:

input.high - This saves the status of the high temperature checkbox. The value can only be true or false. True meaning high temps checkbox is checked, false meaning that its not.

input.low - This saves the status of the low temperature checkbox. The value can only be true or false. True meaning low temps checkbox is checked, false meaning that its not.

3.) Build the HTML using Bootstrap <http://getbootstrap.com/getting-started/>; quickly and easily.

4.) Build the CSS using Bootstrap <http://getbootstrap.com/css/> plus adding some custom code to styles.css
