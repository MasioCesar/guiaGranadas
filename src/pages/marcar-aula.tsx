import miniCalendar from "../../public/images/mini_calendar.png"

export default function MarcarAula() {
  return (
    <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
      <h1 style={{color: 'white', fontSize: '2em', textAlign: 'center', fontWeight: 'bold'}}>Marcar Aula</h1>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 15}}>
        <img
          src={miniCalendar.src} 
          alt="Calendário"
        />
        <input
          style={{marginTop: 15, marginBottom: 10}} 
          type="time"
        />
      </div>

      <div style={{textAlign: 'center'}}>
        <button style={{border: "solid white 1px", borderRadius: 4, padding: "5px 10px 5px 10px"}}>Marcar</button>
      </div>
      
    </div>
  )
}