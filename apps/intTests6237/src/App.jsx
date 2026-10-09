
import './App.css'

function App() {

// ==========================================
//                filter
// ==========================================

    // const filterArr = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
    //
    // function myFilter(arr){
    //   for (let item of arr) {
    //     if (item.length > 6) {
    //       console.log(item);
    //     }
    //   }
    // }
    // myFilter(filterArr);

    const filterArr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    function myFilter(arr, filter){
        let result = [];

        for(let i = 0; i < arr.length; i++){
            if(filter(arr[i])){
                result.push(arr[i]);
            }
        }
        return result;
    }

    const resultFilter = myFilter(filterArr, (item) => item.length > 6);
    console.log(resultFilter);

// ==========================================
//                map
// ==========================================


    // const map = ['spray', 'limit'];
    //
    // function myMap(arr){
    //   for (let i = 0; i < arr.length; i++) {
    //     const obj = {
    //       id: i,
    //       name: arr[i],
    //     }
    //     console.log(obj);
    //   }
    // }
    // myMap(map);

    const mapArr = ['spray', 'limit'];

    function myMap(arr, map){
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(map(arr[i], i));
        }
        return result;
    }
    const resultMap = myMap(mapArr, (item, index) => ({id: index, name: item}));
    console.log(resultMap);


// ==========================================
//                find
// ==========================================


    // const find = [
    //   {id: 0, name: 'spray'},
    //   {id: 1, name: 'limit'},
    // ];
    // const id = 1;
    //
    // function myFind(arr){
    //   for (let item of arr) {
    //     if (item.id === id) {
    //       console.log(item);
    //     }
    //   }
    // }
    // myFind(find);

    const findObj = [
        {id: 0, name: 'spray'},
        {id: 1, name: 'limit'},
    ];
    const id = 1;

    function myFind(arr, find){
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            if (find(arr[i])) {
                obj = arr[i];
            }
        }
        return obj;
    }
    const findResult = myFind(findObj, (item) => item.id === id);
    console.log(findResult);


// ==========================================
//                concat
// ==========================================


    const concat1 = ['spray', 'limit', 'elite'];
    const concat2 = ['exuberant', 'destruction', 'present'];

    function myConcat(arr1, arr2){

      const finalConcat = [...arr1, ...arr2];

      console.log(finalConcat);
    }
    myConcat(concat1, concat2);


// ==========================================
//                pipe
// ==========================================

  const pipeArr = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];

  function myPipe(arr, ...pipe){

    const result = [];
    for (let i = 0; i < arr.length; i++) {
      // if (arr[i].length > 6) {
      //   const obj = {
      //     id: pipeResult.length,
      //     name: arr[i],
      //   };
        myFilter((item) => item.length > 6);
        result.push(obj);
      }
    }
    console.log(pipeResult);
  }

  myPipe(pipeArr,[
      myFilter((item) => item.length > 6),
      myMap((item, index) => ({id:index, name: item})),
  ]);

// =======================================================
// =======================================================
// =======================================================

// =========================================================
// ============ARMANDO EXAMPLES=============================
// =========================================================


//  const arr = [1,2,3,4,5,6,7,8,9,10];

// const custoMap =(arr,callback)=>{
//   let res =[];

//   for(let i=0;i<arr.length;i++){
//     res.push(callback(arr,arr[i],i,arr[0]));
//   }
//   return res;
// };

// function map(arr,item,index){
//   return arr[index] * arr[index];
// }

// const res = custoMap(arr,(arr,item,index) => arr[index] * arr[index]);

// // console.log(res);


// function sayHello(name){
//   return 'Hello '+name;
// }

// const custumFunc = (name,sayHello)=>{
//   console.log(sayHello(name));
// }

// //custumFunc("Armando",sayHello);



// arr.filter((item)=>item % 2 == 0);

// Array.prototype.customFilter = function(callback){
//    let res =[];

//   for(let i = 0; i < this.length; i++){
//     if(callback(this[i])){
//          res.push(this[i]);
//        }
//   }
//   return res;
// }

// const rez = arr.customFilter((item) => item % 2 == 0)
// console.log(rez);


// ======================================================
// ======================================================
// ======================================================

  return (
    <>
    </>
  )
}

export default App
