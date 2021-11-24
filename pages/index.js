import Link from 'next/link'
import { Button } from '@mui/material'

export default function Home() {
  return (
    <>
      <Link href="/mint">
        <Button variant="contained">Mint</Button>
      </Link>
    </>
  )
}
