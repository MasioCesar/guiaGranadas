
export default function Config() {
  return (
    <div>
      <h1 style={{textAlign: "center", fontWeight: 'bold', fontSize: '2.5em', marginBottom: 25}}>Configurações</h1>
      <div style={{width: 300, border: "solid white 1.5px", borderRadius: 5, padding: "5px 10px 5px 10px", marginBottom: 15, margin: "0 auto"}}>
        <h3 style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Formas de pagamento</h3>
        <hr style={{border: "solid white 0.3px", width: '80%', margin: "0 auto"}} />
        <p style={{color: 'white', fontWeight: 'bold'}}>- Cartão 1</p>
        <p style={{color: 'white', fontWeight: 'bold'}}>- Cartão 2</p>
        <p style={{color: 'green', fontWeight: 'bold'}}>+ Adicionar nova forma</p>
      </div>

      <div style={{width: 300, border: "solid white 1.5px", borderRadius: 5, padding: "5px 10px 5px 10px", marginBottom: 15, margin: "0 auto"}}>
        <h3 style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Contas de email</h3>
        <hr style={{border: "solid white 0.3px", width: '80%', margin: "0 auto"}} />
        <p style={{color: 'white', fontWeight: 'bold'}}>- masio@gmail.com</p>
        <p style={{color: 'white', fontWeight: 'bold'}}>- thalis@gmail.com</p>
        <p style={{color: 'green', fontWeight: 'bold'}}>+ Adicionar novo email</p>
      </div>

      <div style={{width: 300, border: "solid white 1.5px", borderRadius: 5, padding: "5px 10px 5px 10px", marginBottom: 25, margin: "0 auto"}}>
        <h3 style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Preferências</h3>
        <hr style={{border: "solid white 0.3px", width: '80%', margin: "0 auto"}} />

        <input name="1" type="checkbox" />
        <label style={{marginLeft: 3}} htmlFor="1">Visão adaptada</label><br />

        <input name="1" type="checkbox" />
        <label style={{marginLeft: 3}} htmlFor="1">Legendas automáticas</label><br />

        <input name="1" type="checkbox" />
        <label style={{marginLeft: 3}} htmlFor="1">Transmissão a 60FPS</label>
      </div>

      <div style={{textAlign: 'center', marginTop: 25}}>
        <button style={{border: "solid 1px white", borderRadius: 4, padding: "5px 10px 5px 10px"}}>Apagar Conta</button>
      </div>
      
      
    </div>
  )
}