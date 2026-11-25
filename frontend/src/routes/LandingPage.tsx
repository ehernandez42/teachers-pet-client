export function LandingPage() {
  return (
    <main className="landing-page">
      <header className="hero">
        <h1>Teachers-Pet.ai</h1>
        <p>Your AI teaching assistant: match any writing style, translate for your classroom.</p>
      </header>
      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>Translate English text to Spanish for multilingual classrooms</li>
          <li>Create named writing styles from your reference documents</li>
          <li>Generate new text that matches your style</li>
          <li>Export results as PDF or DOCX</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us!</p>
        <a href="mailto:eleazartheedtechengineer@gmail.com">
          eleazartheedtechengineer@gmail.com
        </a>
      </section>
    </main>
  )
}
