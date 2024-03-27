const chai = "chai"
const spies ="chai-spies";



function receivesAFunction(mySpy){
mySpy();
    
}
 
function returnsANamedFunction(){
  return function mySpy(){
  console.log("")
   }}


 function returnsAnAnonymousFunction(){
   return function(){
      console.log('function')
   }
 }
 