



//TAB 1 & 2 Starts Here: 

window.onload = SetDefaultValue;

//all the inputs of TAB 1 && 2 will be under this function
function finalCalculationButton(){

//inputs from TAB 1
 B3 = document.getElementById("B3");
 B4 = document.getElementById("B4");
 B5 = document.getElementById("B5");
 B6 = document.getElementById("B6"); //FOR PERCENTAGE



  //inputs from section 1 TAB 2
  // B19 = document.getElementById("B19");
  // B20 = document.getElementById("B20");

  //inputs from section 2 TAB 2
  B24 = document.getElementById("B24");
  C24 = document.getElementById("C24");

  B25 = document.getElementById("B25");
  C25 = document.getElementById("C25");

  B26 = document.getElementById("B26");
  C26 = document.getElementById("C26");

  //inputs from section 3 TAB 2
  B31 = document.getElementById("B31");

  //inputs from section 4 TAB 2
  B35 = document.getElementById("B35");
  B36 = document.getElementById("B36");
  B37 = document.getElementById("B37");

  //inputs from section 5 TAB 2
  B43 = document.getElementById("B43");
  B44 = document.getElementById("B44");


//All TAB 2 calculations will be done from this function
  if(B3.value != "" && B4.value != "" && B5.value != "" &&
    B6.value != "" &&
   
   // B19.value != "" && B20.value != "" &&
   
    B24.value != "" && C24.value != "" 
    && B25.value != "" && C25.value != ""
    && B26.value != "" && C26.value != ""

    && B31.value != "" 

    && B35.value != "" && B36.value != "" && B37.value != "" ){


    //hidden calculations for TAB 1 STEP 1
    var F3 = B3.value * 40;
    console.log("F3 " + F3);
    var F4 = B4.value * 40;
    console.log("F4 " + F4);
    var F5 = B5.value/50/40;
    console.log("F5 " + F5);
    console.log("Percentage " + B6.value); //PERCENTAGE VALUE


    //alert("You have enterd B19 and B20: " + B19.value + " " + B20.value);

    //hidden calculations for section 1 Tab 2
    document.getElementById("B19").value = B5.value;
    document.getElementById("B20").value = Number(B5.value) * 1.5;
    var F19 = B5.value /50/40; 
    console.log("F19 Result from TAB 2: " + F19);
    var F20 = (B5.value * 1.5) /50/40;
    console.log("F20 Result from TAB 2: " + F20);


// alert("You have enterd B24 C24 and B25 C25 B26 C26 : " + B24.value + " " + C24.value
//   + " " + B25.value + " " + C25.value + " " + B26.value + " " + C26.value);

   //hidden calculations for section 2 Tab 2

   //TOTAL HOURS CALCULATION
   var E24 = B24.value * C24.value;
   console.log("E24 " +E24);
   var E25 = B25.value * C25.value;
   console.log("E25 " +E25);
   var E26 = B26.value * C26.value;
   console.log("E26 " +E26);

   //TOTAL COST CALCULATION
   var F24 = E24 * F5;
   console.log("F24 " +   F24);
   var F25 = E25 * F19;
   console.log("F25 " +   F25);
   var F26 = E26 * F20;
   console.log("F26 " +   F26);

   //TOTAL 0F F24 : F26
   var F27 = F24 + F25 + F26;
   console.log("SUM F27 " + F27)


   //hidden calculations for section 3 Tab 2

   var E31 = B31.value * F3;
   console.log("E31 " + E31);
   var F31 = E31 * F19;
   console.log("F31 " + F31); //FOR SECTION 3 F31 IS THE TOTAL ALSO

   //hidden calculations for section 4 Tab 2
   var F36 =Number(((B5.value / 12) * B36.value).toFixed(2)); // also converting it float to integer
   console.log("Float fixed to 2 Numbers after decimal: " + F36);
   var F37 = B37.value * F20;
   console.log("F37 " + F37);

   //TOTAL OF F36 : F37
   var F38 = Number(Number(B35.value) + F36 + F37).toFixed(2);
   console.log("F38 total of B35 F36 F37 " + F38);

   
   //hidden calculations for section 5 Tab 2
   //Total Cost
   var F42 = F4 * F5;
   var F43 = Number(B43.value) * F19;
   var F44 = Number(B44.value) * F20;
   var F45 = F42 + F43 + F44;
   console.log("F45 from Section5: " + F45);


   //final Result 
   var E49 = (F27 + F31 + Number(F38) + F45).toFixed(2); //Total Turnover Cost (RM) for one employee
   console.log("E49 Final1 :" + E49);
   var E50 = ((E49/Number(B5.value))*100).toFixed(0); //Cost as percentage of departing Employee's Salary
   console.log("E50 Final2 " + E50 + " %");
   var E51 = (E49 * Number(B6.value)).toFixed(2); //Estimated Annual Turnover Cost (RM) 
   console.log("E51 Final3 " + E51);

    
    //Output results 
    document.getElementById("endoutput1E49").value = "$"+E49;
    document.getElementById("endoutput2E50").value = E50+ "%";
    document.getElementById("endoutput3E51").value = "$"+E51;



  } else{

 alert("Some required inputs are missing!");
  }

}

//for setting default values
function SetDefaultValue(){

  // //default input values for section 1 TAB 2
  // var defaultB19 = document.getElementById("B19").value = 40000;
  // var defaultB20 = document.getElementById("B20").value = 60000;

  //default input values for section 2 TAB 2
  var defaultB24 = document.getElementById("B24").value = 1;
  var defaultC24 = document.getElementById("C24").value = 16;

  var defaultB25 = document.getElementById("B25").value = 1;
  var defaultC25 = document.getElementById("C25").value = 16;

  var defaultB26 = document.getElementById("B26").value = 1;
  var defaultC26 = document.getElementById("C26").value = 4;

  //default input values for section 3 TAB 2
  var defaultB31 = document.getElementById("B31").value = 0.5;

  //default input values for section 4 TAB 2
  var defaultB35 = document.getElementById("B35").value = 1000;
  var defaultB36 = document.getElementById("B36").value = 1;
  var defaultB37 = document.getElementById("B37").value = 20;

  //default input values for section 5 TAB 2
  var defaultB43 = document.getElementById("B43").value = 60;
  var defaultB44 = document.getElementById("B44").value = 30;



}
