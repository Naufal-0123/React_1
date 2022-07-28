import React from 'react';
import "./styles/styles.css"
import Identitas from "./module/identitas"
import Nilai from "./module/nilai"
function App () {
  let [data, setData] = React.useState([10,20,30,40,50])
  return(
    <React.Fragment>
      <h1>Latihan Props</h1>
     <section className='section'>
   <div>
   <Identitas nama={'Dzakwan'} kelas={'XI Rpl'} nilai={10} />
    <Identitas nama={'Zaidan'} kelas={'XI Rpl'} nilai={10} />
    <Identitas nama={'Iqbal'} kelas={'XI Rpl'} nilai={10} />
    <Identitas nama={'Fathan'} kelas={'XI Rpl'} nilai={10} />
    <Identitas/>
   </div>
    <Nilai nama={'Dzakwan'} data={data}/>
     </section>
    </React.Fragment>
  );
}

export default App