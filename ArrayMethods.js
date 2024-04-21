

// const prgm_lang= ['c', 'cpp', 'java', 'pyhton', 'Javascript']

  
  // -----------------------------array of object--------------------------------


const mycoding= [
    {
      lang_name: "java",
      file_name: ".java"
    },
    {
      lang_name: "c",
      file_name: ".c"
    },
    {
      lang_name: "cpp",
      file_name: ".cpp"
    },
    {
      lang_name: "JavaScript",
      file_name: ".js"
    },
    {
      lang_name: "python",
      file_name: ".py"
    },
]

// mycoding.forEach( item => console.log(item.lang_name))   //accessing array's object's values 


// ----------------------------------------------filter ---------------------------------------------------

//same as for-each but if returns the value that satisfy the condtion given in filter 

const arr =[1,2,3,4,5,6,7,8,9,10];

//  const a= arr.filter( val => val%2==0 )

// console.log(a);



const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let book =  books.filter( bk => bk.publish>=1945 &&  bk.genre === 'Fiction' ) 

// console.log(book);



// -----------------------------------------------Method chaining ----------------------------------------------------

const newval = arr
                .map( val => val*3 )   // it return an arr = [3,6,9,12,15,18,21,24,27,30] ---> this arr will input arr for next method(filter)
                .filter(val => val%2==0)  // it return a new arr of values that true for the condition(val%2==0)  = [6,12,18,24,30]  ---> this arr will input arr for next method(map)
                .map( num => num*10);   // it return a new arr after performin the operation on each ele of input arr = [60, 120, 180,240, 300]  ---> this arr will be the finally returned arr to newval

// console.log(newval);



// ------------------------------------------Reduce method-----------------------------------------------------

const arr1 =[ 1,2,3,4,5]
// const result  = arr1.reduce(function(acc,currv){ return acc+currv}, 0 ) // fun parameters-> accumalator(previous result) , current arr ele/val    , for the first iteration acc get 0; (fun(){},0)


const result = arr1.reduce( (preval,curval)=> preval*curval  , 1);

// console.log(result);





const shoppingcart =[

        { itemName: 'JS course',
          price: 999 
        },
        { itemName: 'Anroid devlopement',
          price: 12999 
        },
        { itemName: 'Web Devlopment',
          price: 10999 
        },
        { itemName: 'Data Anlyst',
          price: 15999 
        },
        { itemName: 'AI Developer',
          price: 12999 
        }

]


const  total_price = shoppingcart.reduce( (acc, item)=>  acc+item.price ,0)

console.log(total_price);