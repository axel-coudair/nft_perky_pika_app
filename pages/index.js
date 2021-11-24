import Test from '../components/test/test'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function Home() {
  return (
    <>
      <Test />
      <Link href="/mint">
        <Button variant="contained">Mint</Button>
      </Link>
    </>
  )
}
