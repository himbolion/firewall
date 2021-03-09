import Link from 'next/link'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="Home">
    <h1 className="child">
      <Link href="https://github.com/hokkqi/firewall">
        <a >Firewall</a>
      </Link>
      {" "}
      by
      {" "}
      <Link href="https://werewolf.computer">
        <a >Lio</a>
      </Link>
    </h1>
  </Layout>
)

export default IndexPage
