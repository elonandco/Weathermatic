# Weathermatic-Test

Demo:
---
http://elonandcompany.com/Test/Weathermatic-Test/

Description:
---
Below are instructions on how to dynamically interact with Highcharts using JQuery, Bootstrap and Datepicker.

Installation:
---
1.) Download Files  
2.) To view locally, open “index.html” in Firefox, otherwise, host the files on a server and navigate to index.html

Process:
---

### 1.) Load Dependencies  

##### CSS: 
```html
<!-- Boostrap -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
<!-- Date Picker -->
<link rel="stylesheet" type="text/css" href="css/datepicker.css" />
<!-- My CSS -->
<link rel="stylesheet" href="css/style.css”>
```
*Note: Place this in the head of your HTML*

##### Javascript: 
```javascript
//JQuery
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
//Bootstrap
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
//Moment
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>
//Date Picker
<script type="text/javascript" src="js/datepicker.js"></script>
//High Charts
<script src="http://code.highcharts.com/highcharts.js"></script>
//My JavaScript
<script src="js/main.js"></script>
```
*Note: Place this before the end body of your HTML*

### 2.) Create the Main.css

#### Methods:

**Toggle Temps:**  
 
**Use** - This updates the status (visible or hidden) of the high and low temperatures.   
**Parameters** - The clicked checkbox
```javascript
toggleTemps()
```
--

**Convert Data:**   
 
**Use** - Converts data into Highcharts “series” structure  
**Parameters** - An array that needs converting and the temp property to access from the JSON (“high_temp" or “low_temp") 
```javascript
convertData()
```
--

**Update Chart:**   
  
**Use** - Get’s data and is used to initializes chart  
**Parameters** - None
```javascript
updateChart()
```
--

**Draw Chart:**   
  
**Use** - Draws Chart  
**Parameters** - None
```javascript
drawChart()
```

#### Variables:

`highJSON` - I save the high temperature JSON here in order to access later. This prevents me from having to make multiple JSON calls when I don’t have to.  

`lowsJSON` - I save the low temperature JSON here in order to access later. This prevents me from having to make multiple JSON calls when I don’t have to.    

`chart` - The highchart  

`date` - the currently selected dates  

`dateOrig` - the start and end date of the JSON data. This is how we show all dates

#### Properties:

`input.high` - This saves the status of the high temperature checkbox. The value can only be true or false. True meaning high temps checkbox is checked, false meaning that its not.  

`input.low` - This saves the status of the low temperature checkbox. The value can only be true or false. True meaning low temps checkbox is checked, false meaning that its not. 


### 3.) Build the HTML and CSS   
This is done using Bootstrap [HTML](http://getbootstrap.com/getting-started/) and [CSS](http://getbootstrap.com/css/) quickly and easily.
