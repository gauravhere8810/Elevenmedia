import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Sun, Moon } from 'lucide-react';

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Eleven Media completely changed the game for my fitness brand. We went from posting randomly with zero traction to getting qualified local inquiries every single week. No vanity bots, just real clients walking through our door.",
    image: "https://cdn.21st.dev/assets/mirror/11/11134d472e245bb9dcef8595979c5c375a8ad40d3adf72e03cf67b959415ea6f.jpg",
    name: "Yuvraj Singh",
    role: "Regional Fitness Coach",
  },
  {
    text: "Most digital agencies sell empty promises and vanity reach. Eleven Media gives us transparent weekly reporting, tells us honestly what works and what doesn't, and our student enrollments have scaled consistently.",
    image: "https://cdn.21st.dev/assets/mirror/e0/e037bf69983d4b3792507a980afa576f7c76798a2b360f56d43a190a382e8acd.jpg",
    name: "Shivam Sharma",
    role: "Kota Education Academy",
  },
  {
    text: "We needed a custom catalog and a straightforward digital presence for our wholesale tire supply. Eleven Media built exactly what we needed quickly, without stretched templates or bloated pages. Reliable, fast, and professional.",
    image: "https://cdn.21st.dev/assets/mirror/2c/2cfa4aba4bfefc920aa635f1bde5dab467c583463be9b13d93df6e18db5262f8.jpg",
    name: "GFT Tires",
    role: "Commercial & Wholesale Supply",
  },
  {
    text: "Transparent weekly reporting and zero fluff. They don't dress up slow weeks—they analyze what works and pivot fast. Our student admissions from targeted social campaigns speak for themselves.",
    image: "https://cdn.21st.dev/assets/mirror/e0/e037bf69983d4b3792507a980afa576f7c76798a2b360f56d43a190a382e8acd.jpg",
    name: "Shivam Sharma",
    role: "Kota Education Academy",
  },
  {
    text: "Outstanding web development and branding. They built a custom product catalog for our wholesale operations that makes dealer inquiries fast and simple. Fast turnaround and zero headaches.",
    image: "https://cdn.21st.dev/assets/mirror/2c/2cfa4aba4bfefc920aa635f1bde5dab467c583463be9b13d93df6e18db5262f8.jpg",
    name: "GFT Tires",
    role: "Commercial & Wholesale Supply",
  },
  {
    text: "Working with Eleven Media has been effortless. Their reels and short-form content strategy brought real client bookings, not just likes. The growth has been steady, organic, and measurable.",
    image: "https://cdn.21st.dev/assets/mirror/11/11134d472e245bb9dcef8595979c5c375a8ad40d3adf72e03cf67b959415ea6f.jpg",
    name: "Yuvraj Singh",
    role: "Regional Fitness Coach",
  },
  {
    text: "Fast, clean custom website that just works for our wholesale buyers. Straightforward communication, no unnecessary delays, and they delivered exactly what was promised on schedule.",
    image: "https://cdn.21st.dev/assets/mirror/2c/2cfa4aba4bfefc920aa635f1bde5dab467c583463be9b13d93df6e18db5262f8.jpg",
    name: "GFT Tires",
    role: "Commercial & Wholesale Supply",
  },
  {
    text: "Their team understands 3-second retention and hooks like no one else. Our profile bio teardown and reel formats drove immediate inquiries. Best marketing decision we made this year.",
    image: "https://cdn.21st.dev/assets/mirror/11/11134d472e245bb9dcef8595979c5c375a8ad40d3adf72e03cf67b959415ea6f.jpg",
    name: "Yuvraj Singh",
    role: "Regional Fitness Coach",
  },
  {
    text: "Genuine dedication from a team based right here in Kota. They understand our regional audience thoroughly and deliver inquiries that actually convert into enrolled students.",
    image: "https://cdn.21st.dev/assets/mirror/e0/e037bf69983d4b3792507a980afa576f7c76798a2b360f56d43a190a382e8acd.jpg",
    name: "Shivam Sharma",
    role: "Kota Education Academy",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-black/5 max-w-xs w-full bg-white dark:bg-neutral-900 transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-800 group-hover:ring-primary/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 dark:text-white transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-neutral-500 dark:text-neutral-500 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
              Testimonials
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900 dark:text-white transition-colors">
            What our users say
          </h2>
          <p className="text-center mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-sm transition-colors">
            Discover how thousands of teams streamline their operations with our platform.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
};

// --- Main App Component ---
export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col justify-center relative selection:bg-primary selection:text-white">
      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <TestimonialsSection />
    </div>
  );
}
