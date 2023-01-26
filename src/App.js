import MiApi from "./components/MiApi";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Bienvenido</h1>
        <h1>al Digimundo</h1>    
      </div>
      <div className="description">
        <div>
        <h2>¿Qué son los Digimon?</h2>
        <p>
        Son formas de vida artificial creadas a partir de bits y piezas perdidas de datos de ordenadores, que habitan 
        dentro de los aparatos electrónicos que posean memorias no volátiles. Los Digimon son criados por humanos llamados 
        "Tamers" (niños elegidos en Digimon Adventure y en su secuela Digimon 02) para combatir a los villanos que amenazan 
        con destruir el equilibrio del Mundo Digital.
        </p>
        <img src="https://images.fanart.tv/fanart/digimon-digital-monsters-59a9b7f4cf333.png" alt="digivice" />
        </div>
        <div>
        <h2>Características de los Digimon</h2>
        <p>
          Los Digimon son las manifestaciones físicas de los datos que actúan como criaturas vivas, y están formados por datos 
          fragmentados procedentes de la red de ordenadores del mundo real después de que un virus lanzado por un hacker empezase 
          a absorber información, evolucionando y cambiando. Los Digimon nacen de un Digitama (Digi-Huevo), y eventualmente crecen 
          durante un proceso conocido como Digievolución, en el cual sufren una serie de cambios físicos, y en el mayor de los casos, 
          un incremento en sus poderes. Algunos Digimon actúan de forma bestial, guiados por sus instintos salvajes, mientras que otros 
          poseen inteligencia, sentimientos y personalidad humana. </p>
        </div>
      </div>
      <div className="api-section">
        <h3>Estimado niño elegido:</h3>
        <p>Acabas de ser escogido para salvar al mundo digital. En esta sección podrás buscar al digimon que te acompañará en tu camino</p>
        <MiApi />
      </div>
      <div className="footer">
        <img src="https://vignette.wikia.nocookie.net/digimon/images/a/a0/Agumon_DSLE.gif/revision/latest/top-crop/width/300/height/300?cb=20171223095241" alt="digisaludo" />
        <p>Gracias por visitar esta página!</p>
      </div>
    </div>
  );
}

export default App;