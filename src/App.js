import {Simpson} from "./componets/Simpsons/Simpson";

const App = () => {
 return (
  <div>
      {/*<div>*/}
      {/*    <div> name Homer</div>*/}
      {/*    <div> surname Simpson</div>*/}
      {/*    <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" alt='Homer'/>*/}
      {/*</div>*/}
      <Simpson name={'Marge'} surname={'Simpson'} image={'https://static.wikia.nocookie.net/simpsons/images/0/0b/Sexy_Santa_Marge.png'}/>
      {/*<div>*/}
      {/*    <div> name Marge</div>*/}
      {/*    <div> surname Simpson</div>*/}
      {/*    <img src='https://static.wikia.nocookie.net/simpsons/images/0/0b/Sexy_Santa_Marge.png' alt='Marge'/>*/}
      {/*</div>*/}
      <Simpson name={'Homer'} surname={'SSimp'} image={"https://static.wikia.nocookie.net/simpsons/images/5/5f/Ninja_Homer_Tapped_Out.png"}/>
  </div>
 );
};

export {App};