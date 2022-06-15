//Build a tip calculator. You should have a form where a user is able to input the cost of the meal. The form should also let the user 
//choose the percentage tip they want to give. When they submit the form, show them the total with tip added.
//Display the total tip amount as well so they know how much they're tipping.

/*
1. Pulled image section and div into the DOM. The div has the image inside it and added an event handler to the section so that the div's position changes
permanently on mouseover, as there is no way to do it permanently through css

2. Create an event handler to deal with what should happen on form submission, including preventing the default event. Define two variables 
that represent the values of the two inputs, one called "tipPercent" and other "mealCost". Also use parseInt() method on each to change them both to
integers

3. Initialise a function expression to the variable "findTotalAndDisplay" which will take two parameters one for "tipPercent" and "mealCost". Initialise
the two <p> tags that will display the total and tip. The function will then take those two values and find the tip and total after tip added
to meal

4. Re-assign "tipPercent" to the equation of the tip divided by 100, giving me the decimal amount of the percentage. In the next lines append 
innerText to each <p> tag which are both assigned template literals that give the tip and totals.

5. Call the function "findTotalAndDisplay" inside of the event handler so that when the form is submitted the values from each input are passed to the function
as an argument and return the resulting values frommthe code of the function.  

6. For final touch added a class to the <p> tags that will allow a smooth transition on to the page. Added an onload event to the window which emptys the value in the inputs on refresh of the page and also unchecks the top checkbox.

7. Add an event listener that changes the opacity of the whole page below the checkbox, once the checkbox is "changed". If being checked === "true" the rest of the page is shown and vice versa.
*/

window.onload = () => {
  document.querySelector(".num-input1").value = '';
  document.querySelector(".num-input2").value = '';
  document.getElementById("checkboxNoLabel").checked = false;
};


document.querySelector(".section2").addEventListener("mouseover", e => {
	const bigImageHolder = document.querySelector(".img-div");

	if (window.innerWidth > 576) {
		bigImageHolder.setAttribute("style", "	background-size: 110%; align-self: center; transition: 2s ease-out;")
	}

});




document.getElementById("checkboxNoLabel").addEventListener("change", e => {
	const sectionBelowCheckbox = document.getElementsByClassName("display-onclick")[0];

	if (document.getElementById("checkboxNoLabel").checked === true) {
		sectionBelowCheckbox.setAttribute("style", "opacity: 1; transition: 2s ease-out;");	
	} else if (document.getElementById("checkboxNoLabel").checked === false) {
			sectionBelowCheckbox.setAttribute("style", "opacity: 0; transition: 2s ease-out;");
	};

});



const findTotalsAndDisplay = (tipPercent, mealCost) => {
	const tipDisplay = document.querySelector(".tip");
	const totalDisplay = document.querySelector(".total");

	tipPercent = tipPercent / 100;

	tipDisplay.innerText = `You will tip $${(mealCost * tipPercent).toFixed(2)}`;
	totalDisplay.innerText = `Total payment is $${(mealCost + (mealCost * tipPercent)).toFixed(2)}`;

	tipDisplay.classList.add("tag-shown1");
	totalDisplay.classList.add("tag-shown2");
};



document.getElementsByTagName("form")[0].addEventListener("submit", e => {
	e.preventDefault();

	const mealCost = parseInt(document.querySelector(".num-input1").value);
	const tipPercent =	parseInt(document.querySelector(".num-input2").value);

	findTotalsAndDisplay(tipPercent, mealCost);
});

