// app/components/hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/Text";
import Image from "next/image";
// import Button from "@/components/fancybutton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { AbsolutePosition } from "@/components/Absolute";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and workflows to save time and reduce errors.",
    image: "/icons/icon-1.png",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with real-time data visualization and reporting.",
    image: "/icons/icon-2.png",
  },
  {
    title: "Team Collaboration",
    description:
      "Work together seamlessly with integrated communication tools.",
    image: "/icons/icon-3.png",
  },
];

const Hero = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsNavigating(true);

    // Add a delay before navigation
    setTimeout(() => {
      router.push("/swap");
    }, 500); // 500ms delay
  };
  return (
    <div>
      <section className="w-full py-20 md:py-28 overflow-hidden relative">

        <div className="container px-4 md:px-6 relative">
         

          <div className="absolute inset-0 -z-10 h-full w-full   "></div>
          {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <Text
                as="p"
                variant="muted"
                size="md"
                className=" max-w-2xl bg-neutral-100 rounded-full px-3 py-1 flex items-center gap-1 "
              >
                <Text
                  as="p"
                  variant="muted"
                  size="sm"
                  className=" max-w-2xl  flex items-center gap-1 "
                >
                  <span>
                    <img className="w-3 h-3" src="/icons/star.svg" alt="" />
                  </span>
                  A seamless way to move your assets{" "}
                  <div className="hidden md:block">
                    across chains, fast, secure, and gas efficient.
                  </div>
                </Text>
                <span>
                  <img className="w-3 h-3" src="/icons/export.svg" alt="" />
                </span>
              </Text>
            </Badge>

            <Text
              as="h1"
              variant="heading"
              size="4xl" // This will give you the responsive text-4xl md:text-5xl lg:text-6xl
              className="font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            >
              Swap, Bridge, and Scale All in One Flow.
            </Text>

            <Text
              as="p"
              variant="muted"
              size="lg"
              className="mb-8 max-w-2xl mx-auto"
            >
              Empower your DeFi journey, instantly swap assets, bridge between
              chains, and manage holdings seamlessly.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="rounded-full h-12 px-8 text-base">
                Start Free Trial
                <ArrowRight className="ml-2 size-4" />
              </Button> */}
              <div>
                <Link href="/swap">
                  <Button
                    size="lg"
                    onClick={handleClick}
                    className={`bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 ${
                      isNavigating ? "scale-95" : ""
                    }`}
                    disabled={isNavigating}
                  >
                    {isNavigating ? "Navigating..." : "Start Swapping"}
                    <span className="ml-2 inline-flex">
                      {" "}
                      {/* Added inline-flex here */}
                      <img
                        className={`size-4 transition-all duration-300 ${
                          isNavigating
                            ? "rotate-180"
                            : "rotate-0" /* Added explicit rotate-0 */
                        }`}
                        src="/icons/export-dark.svg"
                        alt="arrow icon"
                      />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-4 pb-8"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={item}>
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="size-10 rounded-full  flex items-center  text-primary mb-4">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={50}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <Text as="h3" variant="heading" size="lg" className="mb-2">
                      {feature.title}
                    </Text>
                    <Text variant="muted" size="sm">
                      {feature.description}
                    </Text>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
