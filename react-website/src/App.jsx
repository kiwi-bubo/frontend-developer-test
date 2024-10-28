import logo from '../public/assets/logo.png'
import './App.css'

export default function App() {
  return (
    <>
      <div className='homepage-container'>
        <header>
          <img src={logo} alt='Logo'/>
          <label>COMNICA</label>
        </header>
        <main>
          <section className='title-section'>
            <h1 className='title'>Comnica Signature</h1>
            <p>Digitális aláíró szolgáltatás a Comnicától</p>
          </section>
          <section className='description-section'>
            <h2 className='sub-title'>Üdvözlöm a<br />Comnica Signature-ben!</h2>
            <p>A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készen áll rá.</p>
          </section>
        </main>
      </div>
    </>
  )
}

