import Layout from "../components/Layout"
import Header from "../components/Header/Header"

export default function Index() {
  return (
    <Layout>
      <Header
        title="Hello there!"
        tagline="Welcome to my portfolio and blog."
      />
      <section>
        <div>Image</div>
        <div>
          <h3>Hello, my name is Jonathan a.k.a. Jonny</h3>
          <h4>I am a passionate freelance web developer</h4>
        </div>
      </section>
    </Layout>
  )
}
