
export default function Perfil() {

  return (
    <div>
      <div style={{marginTop: 15, display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center'}}>
        <img
          style={{height: 150, width: 150, borderRadius: 75}}
          src="https://thumbs.dreamstime.com/b/s%C3%ADmbolo-de-perfil-masculino-inteligente-retrato-estilo-desenho-animado-m%C3%ADnimo-166146967.jpg"
          alt="Profile Picture"
        />
        <h2>Nick do User</h2>

        <div style={{marginTop: 15, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div>
            <p style={{fontWeight: 'bold', marginRight: 10, marginLeft: 10}}>Segue</p>
            <p>15</p>
          </div>
          <div>
            <p style={{fontWeight: 'bold', marginRight: 10, marginLeft: 10}}>Aulas</p>
            <p>6</p>
          </div>
        </div>
        <hr style={{marginTop: 15, border: 'solid gray 0.3px', width: 250}} />

      </div>
      
      <p style={{fontWeight: 'bold', color: 'white', marginTop: 20, marginLeft: 10}}>Nome</p>
      <p style={{marginLeft: 10}}>Nome de exemplo usuário</p>

      <p style={{fontWeight: 'bold', color: 'white', marginTop: 20, marginLeft: 10}}>Próxima aula agendada</p>
      <p style={{marginLeft: 10}}>2022-10-10 (Daqui 2 dias)</p>

      <p style={{fontWeight: 'bold', color: 'white', marginTop: 20, marginLeft: 10}}>Conta criada em:</p>
      <p style={{marginLeft: 10}}>2022-09-09</p>

      <div style={{textAlign: 'center', marginTop: 10}}>
        <button style={{border: 'solid white 1px', padding: "5px 10px 5px 10px", borderRadius:6}}>Alterar dados</button>
      </div>
    </div>
  )
}