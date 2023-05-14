export const MovinMad = ({newLocation}) => {
    const mad =
      <h2 style={ {
        position: 'absolute',
        margin: 15,
        padding: 25,
        backgroundColor: 'blue',
        top: Math.floor(Math.random() * 1000),
        left: Math.floor(Math.random() * 1000),} } 
        onMouseEnter={newLocation}>
          MovinMad
      </h2>
      return mad
  }