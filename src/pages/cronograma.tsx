
import miniCalendar from "../../public/images/mini_calendar.png"

export default function Cronograma() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{flex: 1, textAlign: 'center', marginTop: 30}}>
        <h1 style={{fontSize: '2em', fontWeight: "bold", marginBottom: 25}}>Datas</h1>
        <img
          style={{margin: '0 auto'}}
          src={miniCalendar.src} 
          alt="Calendário"
        />
      </div>

      <div style={{flex: 1, marginTop: 30}}>
        <h1 style={{fontWeight: 'bold', fontSize: '2em', textAlign: 'center'}}>Escolher Live</h1>
        <h2 style={{fontWeight: 'bold', color:'gray', cursor: 'pointer'}}>- Como usar granada</h2>
        <h2 style={{fontWeight: 'bold', color:'gray', cursor: 'pointer'}}>- Como camperar</h2>
        <h2 style={{fontWeight: 'bold', color:'white', cursor: 'pointer'}}>- Dicas para usar a faca</h2>
        <h2 style={{fontWeight: 'bold', color:'gray', cursor: 'pointer'}}>- Estratégias de jogo</h2>

        <div style={{marginTop: 20, textAlign: 'center'}}>
          <button style={{border: "solid white 1px", borderRadius: 4, padding: "5px 10px 5px 10px"}}>Entrar</button>
        </div>
      </div>
    </div>
  )
}