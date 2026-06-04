import { useState, useEffect } from "react"
import styles from "./Login.module.css"

export default function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [enviar, setEnviar] = useState(false)


 useEffect(() => {

  if (enviar) {
    console.log("Email:", email)
    console.log("Senha:", senha)
    setTimeout(() => setEnviar(false), 0)
  }

}, [enviar])

  return (
    <div className={styles.pagina}>
        <h1 className={styles.logoTipo}>Disney+</h1>
        
        <div className={styles.card}>

        <p className={styles.myDisney}>My<span className={styles.disneySpan}>Disney</span></p>

        <h2 className={styles.titulo}>Entre na sua conta</h2>
        <p className={styles.descricao}>
          Entre no Disney+ com a sua conta MyDisney.
        </p>
        
        <input
          className={styles.input}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        
        <button
          className={styles.botao}
          onClick={() => setEnviar(true)}
        >
          Continuar
        </button>


      </div>
    </div>
  )
} 
  
