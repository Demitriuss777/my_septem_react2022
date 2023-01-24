import {Simpson} from "../../Simpsons/Simpson";
import {Simpsonss} from "./Simpsonss";

const Simps = () => {
    const simpson=
        [{
            id:1,
            name:'Homer',
            surname:'Simpson',
            image:'https://i0.wp.com/tstoaddicts.com/wp-content/uploads/2014/07/homer-ninja-1.png?ssl=1'
        },
            {
                id:2,
            name:'Marge',
                surname:'Simpson',
                image:'https://images.immediate.co.uk/production/volatile/sites/3/2016/03/Simpsons_g2013_R1_marge-04bf0d1.jpg'
            },
            {
                id: 3,
                name: 'Bart',
                surname: 'Simpson',
                image: 'https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png'
            },
            { id:4,
            name:'Lissa',
                surname:'Simpson',
                image:'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'
            },
            {
                id: 5,
                name: 'Maggie',
                surname: 'Simpson', image: 'https://static.wikia.nocookie.net/characters/images/9/9d/Maggie_Simpson.png'
            },
]


 return (
  <div>
   <div>
       {simpson.map(simp=> <Simpsonss
           key={simp.id}
           name={simp.name}
           surname={simp.surname}
           image={simp.image}/>)}
   </div>
  </div>
 );
};

export {Simps};