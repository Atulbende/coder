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