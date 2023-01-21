import {Simpson} from "./componets/Simpsons/Simpson";

const App = () => {
    return (
        <div>
            <Simpson name={'Homer'} surname={'Simpson'}
                     image={'https://i0.wp.com/tstoaddicts.com/wp-content/uploads/2014/07/homer-ninja-1.png?ssl=1'}/>
            <Simpson name={'Marge'} surname={'SImpson'} image={'https://images.immediate.co.uk/production/volatile/sites/3/2016/03/Simpsons_g2013_R1_marge-04bf0d1.jpg'}/>
            <Simpson name={'Bart'} surname={'Simpson'} image={'https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png'}/>
            <Simpson name={'Lissa'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}/>
            <Simpson name={'Maggie'} surname={'Simpson'} image={'https://static.wikia.nocookie.net/characters/images/9/9d/Maggie_Simpson.png'}/>


        </div>
    );
};

export {App};