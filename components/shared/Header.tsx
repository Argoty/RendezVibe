import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between py-3 px-4">
        <Link href="/" className="w-46">
          <Image src="/assets/images/logo.svg" width={200} height={88} alt="RendezVibe logo"/>
        </Link>

        <SignedIn>
          <div className="hidden md:flex-between w-full max-w-xs">
            <NavItems/>
          </div>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>

      </div>

    </header>
  )
}

export default Header