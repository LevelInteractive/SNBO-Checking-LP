/* This script and many more are available free online at
The JavaScript Source :: http://www.javascriptsource.com
Created by: Jeremy Zongker :: http://www.destroydebt.com/ */

function ddCalc(showAmort) {
    if (document.getElementById(‘ddInitialDeposit’).value==”) {alert(‘Please enter an initial deposit amount.’); return;}
if (document.getElementById(‘ddContribution.value’)==”) {alert(‘Please enter a monthly contribution amount.’); return;}
if (document.getElementById(‘ddRate.value’)==”) {alert(‘Please enter an assumed rate of return.’); return;}
if (document.getElementById(‘ddYears.value’)==”) {alert(‘Please enter either the number of years.’); return;}

var mRate=(document.getElementById(‘ddRate’).value/100)/12;
var maxMonths=999999;
var maxAmount=99999999999;

if (document.getElementById(‘ddYears’).value!=”) maxMonths=document.getElementById(‘ddYears’).value*12;

var amort='<table width=100% cellpadding=2 cellspacing=0 border=1 style=”text-align:right;”><tr><th>Month</th><th>Contributions</th><th>Interest</th><th>Total</th></tr>’;

//Get a decimal
var currentAmount=0.1-0.1;
var currentContributions=0.1-0.1;
var currentInterest=0.1-0.1;

currentAmount+=document.getElementById(‘ddInitialDeposit’).value
currentContributions+=document.getElementById(‘ddInitialDeposit’).value;
var monthlyAmount=Number(document.getElementById(‘ddContribution’).value);

var currentMonth=0;

while (currentMonth<maxMonths && currentAmount<maxAmount) {
    currentMonth++;
    var interest=Number(currentAmount)*Number(mRate);
    currentInterest=Number(currentInterest) + Number(interest);
    currentContributions=Number(currentContributions) + monthlyAmount;
    currentAmount=Number(currentAmount)+Number(interest)+monthlyAmount;
    amort+='<tr><td>’ + currentMonth + ‘</td><td>$’ + Number(currentContributions).toFixed(2) + ‘</td><td>$’ + Number(currentInterest).toFixed(2) + ‘</td><td>$’ + Number(currentAmount).toFixed(2) + ‘</td></tr>’;
}

document.getElementById(‘ddResult’).innerHTML=”With an initial deposit of $” + Number(document.getElementById(‘ddInitialDeposit’).value).toFixed(2) + “, monthly contributions of $” + monthlyAmount.toFixed(2) + ” and an assumed annual interest rate of ” + document.getElementById(‘ddRate’).value + “% for ” + Number(currentMonth)/12 + ” years, you will earn a total of $” + Number(currentAmount).toFixed(2) + “.”;
if (showAmort) {
    document.getElementById(‘ddResult’).innerHTML+='<BR><BR><B>Amortization Schedule</B><BR><div style=”overflow: scroll;height: 200px;”>’ + amort + ‘</table></div>’;
} else {
    document.getElementById(‘ddResult’).innerHTML+=’ <p align=”center”><a href=”javascript:ddCalc(true);”>Show Amortization</a></p>’;
}
}



<!– Paste this code into the HEAD section of your HTML document.
     You may need to change the path of the file.  –>

<script type=”text/javascript” src=”calcAmort.js”></script>



<!– Paste this code into the BODY section of your HTML document  –>

<table class=”ddCalc” border=0 cellpadding=0 cellspacing=0 width=400 align=”center”>
  <tr><th>Compounding Interest Calculator</th></tr>
  <tr><td align=center>
    <table cellpadding=2 cellspacing=0>
      <tr><td align=”right”>Initial Deposit Amount: $</td><td><input size=6 type=text id=”ddInitialDeposit”></td></tr>
      <tr><td align=”right”>Monthly Contribution: $</td><td><input size=6 type=text id=”ddContribution”></td></tr>
      <tr><td align=”right”>Assumed Annual Return: </td><td><input size=6 type=text id=”ddRate”>%</td></tr>
      <tr><td align=”right”>Number of years: </td><td><input size=6 type=text id=”ddYears”></td></tr>
      <tr><td colspan=2 align=”center”><input type=button value=”Calculate” onclick=”ddCalc(false);”></td></tr>
      <tr><td colspan=2 align=”center” id=”ddResult”></td></tr>
    </table>
  </td></tr>
  <tr><td align=right valign=top style=”font-weight:bold;font-size:8pt;”>Powered by:<a href=”http://www.destroydebt.com/” target=”_blank”><img src=”http://www.destroydebt.com/images/logosmall.png” border=”0″ alt=”debt help”></a></td></tr>
</table>
<p><div align=”center”>
<font face=”arial, helvetica” size”-2″>Free JavaScripts provided<br>
by <a href=”https://javascriptsource.com”>The JavaScript Source</a></font>
</div><p>


