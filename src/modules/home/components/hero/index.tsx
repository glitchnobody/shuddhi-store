import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import HeroImg from "../../../../app/hero.jpg"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <Image
          src={HeroImg}
          fill
          className=" object-cover object-center"
          alt="Hero image"
        />
      </div>
    </div>
  )
}

export default Hero
