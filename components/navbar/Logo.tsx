import Link from 'next/link'
import { Button } from '../ui/button'
import { SiGunicorn } from 'react-icons/si'

const Logo = () => {
  return (
    <Button variant="ghost" size="default" asChild>
      <Link href="/">
        <SiGunicorn className="w-10 h-10" />
      </Link>
    </Button>
  )
}
export default Logo
