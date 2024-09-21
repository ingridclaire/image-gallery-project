const ARTforTestingImageImport = [
  {
    id: 0,
    name: "Title",
    imageUrl: require("./1.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art1",
    amtstars: "none",
  },

  {
    id: 1,
    name: "Title",
    //ICC: incorrect file path for image, i modified
    imageUrl: require("./3.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art1",
    amtstars: "none",
  },
];

// ICC: you should remove commented "graveyard" code before showcasing it
/*{
        id: 2,
        name: "Title",
        imageUrl: require ("../../assets/4.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art1",
        amtstars: "none"
       
        
      }, {
        id: 3,
        name: "Title",
        imageUrl: require ("../../assets/5.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art1",
        amtstars: "none"
       
        
      }, {
        id: 4,
        name: "Title",
        imageUrl: require ("../../assets/6.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art1",
        amtstars: "none"
       
        
      }, {
        id: 5,
        name: "Title",
        imageUrl: require ("../../assets/7.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art2",
        amtstars: "none"
       
        
      }, {
        id: 6,
        name: "Title",
        imageUrl: require ("../../assets/8.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art2",
        amtstars: "none"
       
        
      }, 
      
      
      {
        id: 7,
        name: "Title",
        imageUrl: require ("../../assets/9.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art2",
        amtstars: "none"
       
        
      }, {
        id: 8,
        name: "Title",
        imageUrl: require ("../../assets/10.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art2",
        amtstars: "none"
       
        
      }, {
        id: 9,
        name: "Title",
        imageUrl: require ("../../assets/11.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art2",
        amtstars: "none"
       
        
      }, {
        id: 10,
        name: "Title",
        imageUrl: require ("../../assets/12.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art3",
        amtstars: "none"
       
        
      }, {
        id: 11,
        name: "Title",
        imageUrl: require ("../../assets/13.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art3",
        amtstars: "none"
       
        
      }, {
        id: 12,
        name: "Title",
        imageUrl: require ("../../assets/14.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art3",
        amtstars: "none"
       
        
      }, {
        id: 13,
        name: "Title",
        imageUrl: require ("../../assets/15.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art3",
        amtstars: "none"
       
        
      }, {
        id: 14,
        name: "Title",
        imageUrl: require ("../../assets/16.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art3",
        amtstars: "none"
       
        
      }, {
        id: 15,
        name: "Title",
        imageUrl: require ("../../assets/17.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art3",
        amtstars: "none"
       
        
      }, {
        id: 16,
        name: "Title",
        imageUrl: require ("../../assets/18.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art4",
        amtstars: "none"
       
        
      }, {
        id: 17,
        name: "Title",
        imageUrl: require ("../../assets/19.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art4",
        amtstars: "none"
       
        
      }, {
        id: 18,
        name: "Title",
        imageUrl: require ("../../assets/20.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art4",
        amtstars: "none"
       
        
      }, {
        id: 19,
        name: "Title",
        imageUrl: require ("../../assets/21.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art5",
        amtstars: "none"
       
        
      }, {
        id: 20,
        name: "Title",
        imageUrl: require ("../../assets/22.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art5",
        amtstars: "none"
       
        
      }, {
        id: 21,
        name: "Title",
        imageUrl: require ("../../assets/23.png"),
        price:10,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art5",
        amtstars: "none"
       
        
      }
    

];

*/
// ICC: when you export things in {} DO NOT use default, i modified this
export { ARTforTestingImageImport };
