const Simpsonss = (props) => {
    const{id,name, surname, image}=props
 return (
  <div>
      <div>
          <div> id:{id}</div>
          <div> name:{name}</div>
          <div>surname:{surname}</div>
          <img src={image} alt={name}/>
      </div>

  </div>
 );
};

export {Simpsonss};