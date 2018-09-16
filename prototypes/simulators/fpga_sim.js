/////////////////////////////
//Credits:
//autor: igor giuseppe cunha cavour pereira de almeida de oliveira (Elmapul)
//pseudo FPGA Simulator
/////////////////////////////
//Notes
//i dont know how to FPGAs works, this simulation isnt accurate to how an processor works or how an FPGA works.
//this simulation is just an proof of concept based on an vague notion of what an FPGA is.
//the name of functions and variables is provisory.
//runtime = the program to run, with the format instruction(param1, param2);
/////////////////////////////


//code to use in the future
//var myArray = new Int8Array(80);
//myArray[0]=0b1111; 

/////////////////////////////
//custom setup
/////////////////////////////


//board profile
var instrucSet=[add,mul,div,sub];

//compiler reference
var soma=0, subtrai=1, multiplica=2, divide=3;
//not reall profiles, just testing/simulation purpose
x86profile=[soma,subtrai,multiplica,divide];
armProfile=[soma,multiplica,subtrai,divide];
mipsProfile=[soma,subtrai];
prof=x86profile;

//initialize variable to prevent performance penalties
var executa=executa |0;

//sample code to run
//structure: intruction, param 1, param 2
var runtime=[
[0,3,2],[0,3,7],[1,3,2],[1,5,7],
[0,30,20],[0,30,70],[1,30,20],[1,50,70]
];
//other aproeach, separate instructions from data (not used)
//var intrucList=[0,0,1,1]
//var valueList=[[3,2],[3,3],[3,2],[5,7]]

/////////////////////////////
//essential
/////////////////////////////
//list of instructions
function add(a,b){return a+b;}
function sub(a,b){return a-b;}
function mul(a,b){return a*b;}
function div(a,b){return a/b;}
function mod(a,b){return a%b;}
//function inc(a){return a++}
//function dec(a){return a--}



function execAll(){
	for (i=0; i<runtime.length; i++){
		//var executa= instrucSet[i](3,2); //just testing
		//runtime[0][1],runtime[0][2
		var aux=runtime[i][0];
		var n1=runtime[i][1];
		var n2=runtime[i][2];
		var executa= instrucSet[prof[aux]](n1,n2);
		console.log(""+executa);
	}
}
function exec(id){
		var aux=runtime[id][0];
		var n1=runtime[id][1];
		var n2=runtime[id][2];
var result=instrucSet[prof[aux]](n1,n2);
console.log(result);
}

//execAll();


function clock(indice, instrunctionsPerClock){
	ipc=instrunctionsPerClock;
	for (x=0; x<ipc; x++){
		exec(indice);
		indice++;
	}
  return indice;
}




function testProcessor(){
test=0;
clockCycles=0;
do{
test=clock(test,4);
clockCycles++;
}while (test<runtime.length);
console.log("clockCycles:" + clockCycles );
}


/////////////////////////////
//debug
/////////////////////////////
//var steps=0;
//steps=clock(0,4);
//console.log("last step: "+steps);
//console.log(runtime.length);

testProcessor();
