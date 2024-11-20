import Head from 'next/head'
import CapacityCalculator from '../components/capacity-calculator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aruba Cloud Capacity Calculator</title>
        <meta name="description" content="Calculate your Aruba Cloud capacity costs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CapacityCalculator />
      </main>
    </>
  )
}