const arr=[2,3,4,6,7,8,9,66,5,4,3,223,4,5,6];
function DuplicateCount(arr=[]){
    let obj={};
        for(let i=0;i<=arr.length-1;i++){
                if(!obj[arr[i]]){
                    obj[arr[i]]=1;
                }else{
                    obj[arr[i]]+=1;
                }
        }
        return obj;
}
const arrr=DuplicateCount(arr);
console.log(arrr)
// ============================
// flat Array
const arr=[1,2,[3,4,5,[6],[7,8,[9]],10,[11],[12]],[13],14,[15]];
// method solution 
// console.log(arr.flat(6))
function flatArray(_arr=[]){
    let flatArr=[];
    function flat(_arr){
    for(let i=0;i<=_arr.length-1;i++){
            if(Array.isArray(_arr[i])){
                flat(_arr[i])   
            }else{
               flatArr.push(_arr[i]); 
            }
    }
    }
    flat(_arr)
    return flatArr;
}
console.log(flatArray(arr))
// flat Array

const arr=[1,2,[3,4,5,[6],[7,8,[9]],10,[11],[12]],[13],14,[15]];
// method solution 
// console.log(arr.flat(6))
function flatArray(_arr=[]){
    return _arr.reduce((acc,itt)=>{
        return acc.concat(Array.isArray(itt)?flatArray(itt):itt)
    },[])
}
console.log(flatArray(arr))
// ==================================
const arr=[
    1,  2,2,  3,  4,  5,  6,
    7,7,  8,  9, 10, 11, 12,
   13, 7,14,9, 15,1
 ]
 function removeDuplicate(_a=[]){
     if(!Array.isArray(_a) || _a.length==0)return 'Invalid Error';
     let _array=[];
     let lookup={};
     for(let i=0;i<=_a.length-1;i++){
         if(!lookup[_a[i]]){
             _array.push(_a[i]);
             lookup[_a[i]]=true;
         }
     }
     return _array
     
 }
 console.log(removeDuplicate(arr))
const arr=[
    1,  2,2,  3,  4,  5,  6,
    7,7,  8,  9, 10, 11, 12,
   13, 7,14,9, 15,1
 ]
 function removeDuplicate(_a=[]){
     if(!Array.isArray(_a) || _a.length==0)return 'Invalid Error';
     const result=_a.filter((val,i)=>_a.indexOf(val)==i);
     return result
 }
 console.log(removeDuplicate(arr))
 //  ===========================================
//  /find not repeated values
 let arr = [1,2,2,3,4,5,6,4];
 //output : [ 1, 3, 5, 6 ]
 let arr = [1, 2, 2, 3, 4, 5, 6, 4];
let nonRepeatedValues = arr.filter((value) => arr.indexOf(value) === arr.lastIndexOf(value));
console.log(nonRepeatedValues); // Output: [ 1, 3, 5, 6 ]
 //  ===========================================

