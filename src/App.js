import {Simpson} from "./componets/Simpsons/Simpson";

const App = () => {
    const simpsonss =[
        {   id: 1,
            name: 'Homer',
            surname:'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
           {id: 2,
            name: 'Marge',
            surname:'Simpson',
            image: 'https://static.wikia.nocookie.net/simpsons/images/0/0b/Sexy_Santa_Marge.png'
    },
        {id: 3,
            name: 'Bart',
            surname:'Simpson',
            image: 'https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png'
        }

    ]
 return (
  <div>
      {/*<div>*/}
      {/*    <div> name Homer</div>*/}
      {/*    <div> surname Simpson</div>*/}
      {/*    <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" alt='Homer'/>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*    <div> name Marge</div>*/}
      {/*    <div> surname Simpson</div>*/}
      {/*    <img src='https://static.wikia.nocookie.net/simpsons/images/0/0b/Sexy_Santa_Marge.png' alt='Marge'/>*/}
      {/*</div>*/}



     {/* <Simpson name={'Homer'} surname={'SSimp'} image={"https://static.wikia.nocookie.net/simpsons/images/5/5f/Ninja_Homer_Tapped_Out.png"}/>
      <Simpson name={'Marge'} surname={'Simpson'} image={'https://static.wikia.nocookie.net/simpsons/images/0/0b/Sexy_Santa_Marge.png'}/>
  */}


      {simpsonss.map(simpson=> <Simpson key={simpson.id} name={simpson.name} surname={simpson.surname}
      image={simpson.image}/>)}

  </div>
 );
};

export {App};